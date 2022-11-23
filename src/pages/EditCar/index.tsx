import { useState } from 'react';
import { useEditCar } from '../../hook/editCar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { iconCar } from '../../assets/img/iconCar';
import { MenuBar } from '../../components/MenuBar/MenuBar';
import { Loading } from '../../components/Loading/Loading';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme();

export function EditCar() {
  const { variables, hookFunctions, setVariables } = useEditCar();

  return (
    <ThemeProvider theme={theme}>
      <Loading isLoading={variables.isLoading} />
      <MenuBar />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Editar Carro
          </Typography>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px 0px 5px',
              position: 'relative',
            }}
          >
            <Avatar
              src={variables.avatar ? variables.avatar : iconCar}
              sx={{ width: 120, height: 120, marginTop: 3, marginBottom: 3, borderRadius: '50%' }}
            />
            <IconButton
              color="info"
              aria-label="upload picture"
              component="label"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                position: 'absolute',
                bottom: '0',
                width: '10px',
                height: '30px',
              }}
            >
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={hookFunctions.handleChangeAvatar}
              />
              <PhotoCamera />
            </IconButton>
          </div>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled
                  fullWidth
                  id="idCar"
                  label="ID"
                  type="text"
                  name="idCar"
                  value={variables.car.id}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled
                  fullWidth
                  id="versionCar"
                  label="Versão"
                  type="text"
                  name="versionCar"
                  value={String(variables.car.version)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nome"
                  type="text"
                  autoFocus
                  value={variables.car.name}
                  onChange={(event) => {
                    setVariables.setCar({
                      ...variables.car,
                      name: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="licensePlate"
                  label="Placa do veículo"
                  name="licensePlate"
                  type="text"
                  value={variables.car.licensePlate}
                  onChange={(event) => {
                    setVariables.setCar({
                      ...variables.car,
                      licensePlate: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="manufactureDate"
                  label="Data de Fabricação"
                  type="date"
                  name="manufactureDate"
                  value={variables.car.manufactureDate}
                  InputLabelProps={{ shrink: true }}
                  onChange={(event) => {
                    setVariables.setCar({
                      ...variables.car,
                      manufactureDate: event.target.value,
                    });
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: 1 }}
            >
              <Grid item xs={3}>
                <Button
                  type="submit"
                  fullWidth
                  color="info"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={(event) => {
                    event.preventDefault();
                    try {
                      hookFunctions.handleUpdateCar();
                      toast.success('Editado com sucesso!');
                    } catch (err) {
                      console.log(err);
                      toast.error('Erro inesperado!');
                    }
                  }}
                >
                  Editar
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  type="submit"
                  fullWidth
                  color="error"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={(event) => {
                    event.preventDefault();
                    try {
                      hookFunctions.handleDeleteCar();
                      toast.success('Deletado com sucesso!');
                    } catch (err) {
                      console.log(err);
                      toast.error('Erro inesperado!');
                    }
                  }}
                >
                  Deletar
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  fullWidth
                  color="info"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={(event) => {
                    event.preventDefault();
                    hookFunctions.navigate(-1);
                  }}
                >
                  Voltar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
