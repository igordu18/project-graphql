import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

type ObjectBoolean = {
  isLoading: true | false
}

export function Loading({ isLoading }: ObjectBoolean) {
  if (!isLoading) return <></>;
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <CircularProgress sx={{ zIndex: '2' }} />
    </Box>
  );
}