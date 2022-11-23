import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { GET_CARS } from '../pages/ListCar/index';

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

const CreateCarContext = createContext(context);

type Props = {
  children: ReactNode;
};

type CarInput = {
  name: string;
  licensePlate: string;
  manufactureDate: string;
};

const CREATE_CAR = gql`
  mutation ($car: CarInput) {
    createCar(car: $car) {
      id
      name
      licensePlate
      manufactureDate
      version
    }
  }
`;

const form: CarInput = {
  name: '',
  licensePlate: '',
  manufactureDate: '',
};

function CreateCarProvider({ children }: Props) {
  const navigate = useNavigate();
  const [car, setCar] = useState(form);
  const [createCar, { data, loading, error }] = useMutation(CREATE_CAR, {
    refetchQueries: [GET_CARS],
  });

  async function createNewCar() {
    await createCar({
      variables: {
        car,
      },
    });
  }

  const variables = {
    car,
    loading
  };
  const setVariables = {
    setCar,
  };

  const hookFunctions = {
    createNewCar,
    navigate,
  };

  return (
    <CreateCarContext.Provider
      value={{
        variables,
        hookFunctions,
        setVariables,
      }}
    >
      {children}
    </CreateCarContext.Provider>
  );
}

function useCreateCar() {
  const context = useContext(CreateCarContext);

  return context;
}

export { CreateCarProvider, useCreateCar, CreateCarContext };
