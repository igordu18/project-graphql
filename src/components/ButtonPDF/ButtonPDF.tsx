import { gql, useLazyQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';

export function ButtonPDF({ idCar, nameCar }: any) {
  const GET_PDF = gql`
    query {
      generatePdfABase64(id: ${idCar})
    }
  `;

  const [getPDF, { data }] = useLazyQuery(GET_PDF);

  useEffect(() => {
    function findPDF(name: string | undefined) {
      const a = document.createElement('a');
      a.href = `data:application/pdf;base64,${data.generatePdfABase64}`;
      a.download = `${nameCar}.pdf`;
      a.click();
    }
    if (data === undefined) return;
    findPDF(nameCar);
  }, [data]);

  return (
    <Button
      fullWidth
      variant="contained"
      color="info"
      sx={{ mt: 2, mb: 2 }}
      style={{ width: '100px' }}
      onClick={() => {
        getPDF();
      }}
    >
      Visualizar
    </Button>
  );
}
