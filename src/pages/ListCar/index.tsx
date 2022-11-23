import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import EditIcon from '@mui/icons-material/Edit';

import { ButtonPDF } from '../../components/ButtonPDF/ButtonPDF';
import { Loading } from '../../components/Loading/Loading';
import { MenuBar } from '../../components/MenuBar/MenuBar';

type Car = {
  id: string;
  name: string;
  licensePlate: string;
  manufactureDate: string;
  version: number;
};

export const GET_CARS = gql`
  query {
    findAllCar {
      id
      name
      licensePlate
      manufactureDate
      version
    }
  }
`;

export function ListCar() {
  const { data, loading } = useQuery<{ findAllCar: Car[] }>(GET_CARS);
  const [loadingHome, setLoadingHome] = useState(true);
  setTimeout(() => {
    setLoadingHome(false);
  }, 100);

  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <Loading isLoading={loading || loadingHome} />
      <MenuBar />
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      ></Container>
      <Container maxWidth="lg" component="main">
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Listagem API
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">Código do Carro</TableCell>
                <TableCell align="center">Nome</TableCell>
                <TableCell align="center">Placa</TableCell>
                <TableCell align="center">Data de Fabricação</TableCell>
                <TableCell align="center">Versão</TableCell>
                <TableCell align="center">Documento em PDF</TableCell>
                <TableCell align="center">Editar</TableCell>
              </TableRow>
            </TableHead>
            {
              <TableBody>
                {data?.findAllCar.map((car: Car) => (
                  <TableRow key={String(car.id)}>
                    <TableCell align="center">{car.id}</TableCell>

                    <TableCell align="center">{car.name}</TableCell>

                    <TableCell align="center">{car.licensePlate}</TableCell>

                    <TableCell align="center">
                      {car.manufactureDate.split('-').reverse().join('/')}
                    </TableCell>

                    <TableCell align="center">{car.version}</TableCell>
                    <TableCell align="center">
                      <ButtonPDF idCar={car.id} nameCar={car.name} />
                    </TableCell>
                    <TableCell align="center">
                      <Link
                        to={`/edit/${car.id}`}
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        <Button
                          fullWidth
                          variant="contained"
                          color="info"
                          sx={{ mt: 2, mb: 2 }}
                          style={{ width: '50px' }}
                        >
                          <EditIcon />
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            }
          </Table>
        </Paper>
      </Container>
    </>
  );
}
