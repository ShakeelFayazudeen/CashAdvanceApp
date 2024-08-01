import React, { useState } from 'react';
import { Button, FormControl, InputLabel, OutlinedInput, Typography, TextField, Box, Grid, FormHelperText } from '@mui/material';

function Setup({ prevStep }) {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [amountError, setAmountError] = useState(false);
  const [rateError, setRateError] = useState(false);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setAmountError(value < 2000 || value > 125000);
  };

  const handleRateChange = (e) => {
    const value = e.target.value;
    setRate(value);
    setRateError(value < 10 || value > 30);
  };

  const handleRecalculate = () => {
    // Logic for recalculating repayments can be added here
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>Natwest Merchant lending facility details.</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined" margin="normal" error={amountError}>
            <TextField
              label="How much would you like?"
              value={amount}
              onChange={handleAmountChange}
              variant="outlined"
              type="number"
              helperText={amountError ? "The amount needs to be between £2000 to £125000" : "You can request between £2000 - £125000"}
              error={amountError}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined" margin="normal" error={rateError}>
            <TextField
              label="Percentage of repayment rate from daily takings?"
              value={rate}
              onChange={handleRateChange}
              variant="outlined"
              type="number"
              helperText={rateError ? "The percentage needs to be between 10% to 30%" : "You can request between 10% - 30%"}
              error={rateError}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleRecalculate}
        style={{ marginTop: '20px', marginBottom: '20px' }}
      >
        Re-calculate
      </Button>
      <Typography variant="h6" gutterBottom>Your indicative repayments</Typography>
      <Box mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Typography>Estimated daily repayment</Typography>
            <Typography variant="h5">£487.06</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography>Loan amount & fee</Typography>
            <Typography variant="h5">£74,810.67</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography>Total estimated term (months)</Typography>
            <Typography variant="h5">4</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography>Fee</Typography>
            <Typography variant="h5">£3,700</Typography>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h6" gutterBottom>Natwest Merchant Lending fee structure</Typography>
      <Typography>Find out more about Natwest simple fee structure for this loan <a href="https://link.to/fee-structure" target="_blank" rel="noopener noreferrer">here</a></Typography>
      <div style={{ marginTop: '20px' }}>
        <Button variant="contained" onClick={prevStep} style={{ marginRight: '10px' }}>Back</Button>
        <Button variant="contained" color="primary">Finish</Button>
      </div>
    </div>
  );
}

export default Setup;
