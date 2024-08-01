import React from 'react';
import { Button, Typography } from '@mui/material';

function Summary({ nextStep, prevStep }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Summary</Typography>
      {/* Display a summary of the entered details */}
      <div style={{ marginTop: '20px' }}>
        <Button variant="contained" onClick={prevStep} style={{ marginRight: '10px' }}>Back</Button>
        <Button variant="contained" color="primary" onClick={nextStep}>Next</Button>
      </div>
    </div>
  );
}

export default Summary;
