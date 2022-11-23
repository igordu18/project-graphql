import { Link, useNavigate, useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { MenuBar } from '../../components/MenuBar/MenuBar';
import { apiUri } from '../../services/api';

import { redirect } from 'react-router-dom'

const tiers = [
  {
    title: 'Ivan',
    buttonText: 'Acesse aqui',
    buttonVariant: 'contained',
    link: 'list',
  },
  {
    title: 'Juan',
    buttonText: 'Acesse aqui',
    buttonVariant: 'contained',
    link: 'list',
  },
  {
    title: 'Larissa',
    buttonText: 'Acesse aqui',
    buttonVariant: 'contained',
    link: 'list',
  },
  {
    title: 'Leticia',
    buttonText: 'Acesse aqui',
    buttonVariant: 'contained',
    link: 'list',
  },
  {
    title: 'Salatiel',
    buttonText: 'Acesse aqui',
    buttonVariant: 'contained',
    link: 'list',
  },
];

export const Home = () => {
  const obj = useParams();
  const navigate = useNavigate()

  console.log(obj);
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
                    // display: 'flex',
                    alignItems: 'center',
                    justifyItems: 'right',
                    margin: '5px 10px',
                  }}
                >
                  <Link
                    to={`/${tier.link}`}
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
                          navigate(0)
                        }, 0)
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
