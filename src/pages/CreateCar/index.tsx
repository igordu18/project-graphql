import { ToastContainer, toast } from 'react-toastify';

import { useCreateCar } from '../../hook/createCar';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import DesignServicesIcon from '@mui/icons-material/DesignServices';

import { Loading } from '../../components/Loading/Loading';
import { MenuBar } from '../../components/MenuBar/MenuBar';

const theme = createTheme();

export function CreateCar() {
  const { variables, hookFunctions, setVariables } = useCreateCar();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      hookFunctions.createNewCar();
      toast.success('Criado com sucesso!');
    } catch (err) {
      toast.error('Erro inesperado!');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Loading isLoading={variables.loading} />
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <MenuBar />
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
          <Avatar sx={{ m: 1, bgcolor: 'grey' }}>
            <DesignServicesIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Criar Carros
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nome"
                  autoFocus
                  type="text"
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
                  InputLabelProps={{ shrink: true }}
                  onChange={(event) => {
                    setVariables.setCar({
                      ...variables.car,
                      manufactureDate: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: 1 }}
            >
              <Grid item xs={5}>
                <Button
                  type="submit"
                  fullWidth
                  color="info"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {
                    setTimeout(() => {
                      hookFunctions.navigate(-1);
                    }, 2100);
                  }}
                >
                  Criar
                </Button>
              </Grid>
              <Grid item xs={5}>
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
