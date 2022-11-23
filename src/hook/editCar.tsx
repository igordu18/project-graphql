import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';

import { GET_CARS } from '../pages/ListCar/index';

type Props = {
  children: ReactNode;
};

interface customHook {
  variables: any;
  setVariables: any;
  hookFunctions: any;
}

const context: customHook = {
  variables: {},
  setVariables: {},
  hookFunctions: {},
};

const EditCarContext = createContext(context);

type CarInput = {
  id: string;
  name: string;
  licensePlate: string;
  manufactureDate: string;
  version: number;
};

const form: CarInput = {
  id: '',
  name: '',
  licensePlate: '',
  manufactureDate: '',
  version: 0,
};

type Car = {
  id: string;
  name: string;
  licensePlate: string;
  manufactureDate: string;
  version: number;
};

function EditCarProvider({ children }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState('');

  const GET_CAR = gql`
  query {
    findCarById(id: ${id}) {
      id
      name
      licensePlate
      manufactureDate
      version
    }
  }
`;

  const UPDATE_CAR = gql`
    mutation ($car: CarInput) {
      updateCar(car: $car) {
        id
        name
        licensePlate
        manufactureDate
        version
      }
    }
  `;

  const DELETE_CAR = gql`
    mutation {
      deleteCar(id: ${id})
    }
  `;

  const { data, loading } = useQuery<{ findCarById: Car }>(GET_CAR);
  const [updateCar, optionsUpdate] = useMutation(UPDATE_CAR);
  const [deleteCar, optionsDelete] = useMutation(DELETE_CAR);
  const [car, setCar] = useState(form);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateCar = () => {
    async function updateCarFunction() {
      await updateCar({
        variables: {
          car,
        },
        refetchQueries: [GET_CARS],
      });
    }
    updateCarFunction();
  };

  async function handleChangeAvatar(event: any) {
    const file = event.target.files[0];

    let base64: any;
    base64 = await convertToBase64(file);

    setAvatar(base64);
  }

  const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleDeleteCar = () => {
    async function deleteCarFunction() {
      await deleteCar({
        refetchQueries: [GET_CARS],
      });
    }
    deleteCarFunction();

    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };

  useEffect(() => {
    if (data) {
      setCar({
        id: data.findCarById.id,
        name: data.findCarById.name,
        licensePlate: data.findCarById.licensePlate,
        manufactureDate: data.findCarById.manufactureDate,
        version: data.findCarById.version,
      });
    }
    setIsLoading(loading);
    setIsLoading(optionsUpdate.loading);
    setIsLoading(optionsDelete.loading);
  }, [data]);

  const variables = {
    car,
    isLoading,
    avatar,
  };

  const setVariables = {
    setCar,
  };

  const hookFunctions = {
    handleUpdateCar,
    handleDeleteCar,
    navigate,
    handleChangeAvatar,
  };

  return (
    <EditCarContext.Provider
      value={{
        variables,
        hookFunctions,
        setVariables,
      }}
    >
      {children}
    </EditCarContext.Provider>
  );
}

function useEditCar() {
  const context = useContext(EditCarContext);

  return context;
}

export { EditCarProvider, useEditCar, EditCarContext };
