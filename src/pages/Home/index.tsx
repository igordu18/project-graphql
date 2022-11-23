import { Link, useNavigate } from 'react-router-dom';
import { apiUri } from '../../services/api';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const tiers = [
  {
    title: 'Ivan',
    buttonText: 'Acesse aqui',
    buttonVariant: 'contained',
  },
  {
    title: 'Juan',
    buttonText: 'Acesse aqui',
    buttonVariant: 'contained',
  },
  {
    title: 'Larissa',
    buttonText: 'Acesse aqui',
    buttonVariant: 'contained',
  },
  {
    title: 'Leticia',
    buttonText: 'Acesse aqui',
    buttonVariant: 'contained',
  },
  {
    title: 'Salatiel',
    buttonText: 'Acesse aqui',
    buttonVariant: 'contained',
  },
];

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          GraphQL API
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Escolha a API que deseja consumir abaixo!
        </Typography>
      </Container>
      <Container maxWidth="lg" component="main">
        <Grid container spacing={6} wrap="nowrap">
          {tiers.map((tier) => (
            <Grid item key={tier.title} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mb: 5,
                      marginTop: '20px',
                    }}
                  >
                    <Avatar src="" sx={{ width: 56, height: 56 }} />
                  </Box>
                </CardContent>
                <CardActions
                  sx={{
                    alignItems: 'center',
                    justifyItems: 'right',
                    margin: '5px 10px',
                  }}
                >
                  <Link
                    to={'/list'}
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    <Button
                      fullWidth
                      variant={'contained'}
                      color="info"
                      sx={{ width: '100%' }}
                      onClick={() => {
                        apiUri(tier.title);
                        setTimeout(() => {
                          navigate(0);
                        }, 0);
                      }}
                    >
                      <ArrowRightAltIcon /> {tier.buttonText}
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
