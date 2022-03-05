import React, { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Box, Grid, Typography, IconButton, Divider } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircle';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircle';
import LogInput from './LogInput/LogInput';

const weightIncrement = 2.5;
const repsIncrement = 1;

interface Props {
  handleSaveButton: (set: { weight: number; reps: number }) => void;
}

const LogController: React.FC<Props> = ({ handleSaveButton }) => {
  const [weight, setWeight] = useState<number | null>(null);
  const [reps, setReps] = useState<number | null>(null);

  const handleDecreaseWeight = () => {
    if (!weight) return;
    setWeight(weight - weightIncrement);
  };

  const handleIncreaseWeight = () => {
    if (!weight) setWeight(weightIncrement);
    else setWeight(weight + weightIncrement);
  };

  const handleIncreaseReps = () => {
    if (!reps) setReps(repsIncrement);
    else setReps(reps + repsIncrement);
  };

  const handleDecreaseReps = () => {
    if (!reps) return;
    setReps(reps - repsIncrement);
  };

  const handleClearButton = () => {
    setWeight(null);
    setReps(null);
  };

  const handleChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const isNotANumber = isNaN(Number(value));
    const isNegativeNumber = Number(value) < 0;
    const isNotTooLarge = Number(value) > 10000;
    if (isNotANumber || isNegativeNumber || isNotTooLarge) return;
    setWeight(Number(value));
  };

  const handleChangeReps = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const isNotANumber = isNaN(Number(value));
    const isNegativeNumber = Number(value) < 0;
    const isNotTooLarge = Number(value) > 100;
    if (isNotANumber || isNegativeNumber || isNotTooLarge) return;
    setReps(Number(value));
  };

  const onSaveButtonClick = () => {
    handleSaveButton({ weight: weight ? weight : 0, reps: reps ? reps : 0 });
  };

  return (
    <Box sx={{ my: 2, px: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant='subtitle1' align='center'>
            Weight (Kgs)
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex' }}>
          <IconButton
            sx={{ marginLeft: 'auto' }}
            onClick={handleDecreaseWeight}
            disabled={weight ? false : true}
          >
            <RemoveCircleRoundedIcon fontSize='large' />
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LogInput placeholder='0' onChange={handleChangeWeight} value={weight} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex' }}>
          <IconButton sx={{ marginRight: 'auto' }} onClick={handleIncreaseWeight}>
            <AddCircleRoundedIcon fontSize='large' />
          </IconButton>
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <Typography variant='subtitle1' align='center'>
            Reps
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex' }}>
          <IconButton
            sx={{ marginLeft: 'auto' }}
            onClick={handleDecreaseReps}
            disabled={reps ? false : true}
          >
            <RemoveCircleRoundedIcon fontSize='large' />
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LogInput placeholder='0' onChange={handleChangeReps} value={reps} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex' }}>
          <IconButton sx={{ marginRight: 'auto' }} onClick={handleIncreaseReps}>
            <AddCircleRoundedIcon fontSize='large' />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: { xs: 2, md: 3 }, mb: { xs: 0, md: 2 } }}>
        <Grid item xs={6}>
          <LoadingButton
            fullWidth
            variant='contained'
            color='secondary'
            onClick={handleClearButton}
          >
            Clear
          </LoadingButton>
        </Grid>
        <Grid item xs={6}>
          <LoadingButton fullWidth variant='contained' color='success' onClick={onSaveButtonClick}>
            Save
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogController;
