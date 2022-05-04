// general
import React, { useState, useEffect } from 'react';
// mui & components
import { LoadingButton } from '@mui/lab';
import { Box, Grid, Typography, IconButton, Divider } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircle';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircle';
import LogInput from './LogInput/LogInput';
// interfaces
import { Set } from '../../../ts/interfaces/Set';
import { LogExercisePageEditData } from '../../../ts/interfaces/LogExercisePageEditData';

const toFixedWeight = (number: number) => {
  return Number(number.toFixed(2));
};

const toFixedReps = (number: number) => {
  return Number(number.toFixed(0));
};

const weightIncrement = 2.5;
const repsIncrement = 1;
interface Props {
  handleSaveButton: (set: Set) => void;
  handleUpdateButton: (selectedSetIndex: number, updatedSet: Set) => void;
  handleDeleteButton: (selectedSetIndex: number) => void;
  editData: LogExercisePageEditData;
  loading: boolean;
}

const LogController: React.FC<Props> = ({
  editData,
  handleSaveButton,
  handleUpdateButton,
  handleDeleteButton,
  loading,
}) => {
  const [weight, setWeight] = useState<number | null>(null);
  const [reps, setReps] = useState<number | null>(null);
  const { selectedSetIndex } = editData;

  useEffect(() => {
    if (selectedSetIndex === null) return;
    setWeight(editData.weight);
    setReps(editData.reps);
  }, [editData]);

  const handleIncreaseWeight = () => {
    if (!weight) return setWeight(weightIncrement);
    const newWeight = weight + weightIncrement;
    if (newWeight > 9999) return setWeight(9999);
    setWeight(toFixedWeight(newWeight));
  };

  const handleDecreaseWeight = () => {
    if (!weight) return;
    const newWeight = weight - weightIncrement;
    if (newWeight < 0) return setWeight(0);
    setWeight(toFixedWeight(newWeight));
  };

  const handleIncreaseReps = () => {
    if (!reps) return setReps(repsIncrement);
    const newReps = reps + repsIncrement;
    if (newReps > 99) return setReps(99);
    else setReps(toFixedReps(newReps));
  };

  const handleDecreaseReps = () => {
    if (!reps) return;
    const newReps = reps - repsIncrement;
    if (newReps < 0) return setReps(0);
    setReps(toFixedReps(newReps));
  };

  const handleClearButton = () => {
    setWeight(null);
    setReps(null);
  };

  const handleChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const isNotANumber = isNaN(Number(value));
    const isNegativeNumber = Number(value) < 0;
    const isNotTooLarge = Number(value) > 9999;
    if (isNotANumber || isNegativeNumber || isNotTooLarge) return;
    setWeight(toFixedWeight(Number(value)));
  };

  const handleChangeReps = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const isNotANumber = isNaN(Number(value));
    const isNegativeNumber = Number(value) < 0;
    const isNotTooLarge = Number(value) > 99;
    if (isNotANumber || isNegativeNumber || isNotTooLarge) return;
    setReps(toFixedReps(Number(value)));
  };

  const onDeleteButtonClick = () => {
    handleDeleteButton(selectedSetIndex as number);
  };

  const onSaveButtonClick = () => {
    handleSaveButton({ weight: weight ? weight : 0, reps: reps ? reps : 0 });
  };

  const onUpdateButtonClick = () => {
    handleUpdateButton(selectedSetIndex as number, {
      weight: weight ? weight : 0,
      reps: reps ? reps : 0,
    });
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
            data-testid='decrease-weight'
          >
            <RemoveCircleRoundedIcon fontSize='large' />
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LogInput
            placeholder='0'
            ariaLabel='weight'
            onChange={handleChangeWeight}
            value={weight}
          />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex' }}>
          <IconButton
            sx={{ marginRight: 'auto' }}
            onClick={handleIncreaseWeight}
            data-testid='increase-weight'
            disabled={weight && weight >= 9999 ? true : false}
          >
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
            data-testid='decrease-reps'
          >
            <RemoveCircleRoundedIcon fontSize='large' />
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LogInput placeholder='0' ariaLabel='reps' onChange={handleChangeReps} value={reps} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex' }}>
          <IconButton
            sx={{ marginRight: 'auto' }}
            onClick={handleIncreaseReps}
            data-testid='increase-reps'
            disabled={reps && reps >= 99 ? true : false}
          >
            <AddCircleRoundedIcon fontSize='large' />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: { xs: 2, md: 3 }, mb: { xs: 0, md: 2 } }}>
        <Grid item xs={6}>
          {selectedSetIndex === null ? (
            <LoadingButton
              fullWidth
              variant='contained'
              color='secondary'
              onClick={handleClearButton}
              loading={loading}
            >
              Clear
            </LoadingButton>
          ) : (
            <LoadingButton
              fullWidth
              variant='contained'
              color='error'
              onClick={onDeleteButtonClick}
              loading={loading}
            >
              Delete
            </LoadingButton>
          )}
        </Grid>
        <Grid item xs={6}>
          {selectedSetIndex === null ? (
            <LoadingButton
              fullWidth
              variant='contained'
              color='success'
              onClick={onSaveButtonClick}
              loading={loading}
            >
              Save
            </LoadingButton>
          ) : (
            <LoadingButton
              fullWidth
              variant='contained'
              color='info'
              onClick={onUpdateButtonClick}
              loading={loading}
            >
              Update
            </LoadingButton>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogController;
