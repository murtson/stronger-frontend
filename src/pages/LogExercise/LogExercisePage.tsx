import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useTheme } from '@mui/material';
import { Divider, Box, Typography, IconButton, Button } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import LogExerciseHeader from './LogExerciseHeader/LogExerciseHeader';
import LogController from './LogController/LogController';
import LoggedSetsTable from './LoggedSetsTable/LoggedSetsTable';

import { Set } from '../../interfaces/Set';
import { EditData } from '../../interfaces/EditData';

const styles = {
  controllerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: { xs: 1, md: 2 },
    mb: { xs: 1, md: 2 },
    ml: { xs: 2, md: 0 },
    mr: { xs: 1, md: 0 },
  },
  setsAndButtonContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  loggedSetsContainer: {
    flex: 1,
    borderRadius: { xs: 0, md: 2 },
    mb: { xs: 0, md: 3 },
    position: 'relative',
    pb: '75px',
    backgroundColor: 'white',
  },
  finishButtonContainer: {
    position: 'absolute',
    left: '50%',
    bottom: 0,
    width: '100%',
    transform: 'translateX(-50%)',
    boxSizing: 'border-box',
    padding: 2,
    textAlign: 'center',
  },
};

const initialEditDataState: EditData = { selectedSetIndex: null, weight: null, reps: null };

const LogExercisePage: React.FC = () => {
  const theme = useTheme();
  let navigate = useNavigate();
  const [loggedSets, setLoggedSets] = useState<Set[]>([]);
  const [editData, setEditData] = useState<EditData>(initialEditDataState);

  const handleSaveButton = (set: Set) => {
    setLoggedSets([...loggedSets, set]);
  };

  const handleUpdateButton = (selectedSetIndex: number, updatedSet: Set) => {
    const newLoggedSets = [...loggedSets];
    newLoggedSets[selectedSetIndex] = updatedSet;
    setLoggedSets(newLoggedSets);
    setEditData(initialEditDataState);
  };

  const handleDeleteButton = (selectedSetIndex: number) => {
    const newLoggedSets = [...loggedSets];
    newLoggedSets.splice(selectedSetIndex, 1);
    setLoggedSets(newLoggedSets);
    setEditData(initialEditDataState);
  };

  const handleSelectSet = (selectedSetIndex: number) => {
    if (selectedSetIndex === editData.selectedSetIndex) return setEditData(initialEditDataState);
    else {
      const { weight, reps } = loggedSets[selectedSetIndex];
      setEditData({ selectedSetIndex, weight, reps });
    }
  };

  const handleFinishExercise = () => {
    navigate('/workout/exercises');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      {/* <Snackbar open={snackbarOpen} snackbarType={snackbarType} onClose={handleSnackbarClose}>
        {snackbarText}
      </Snackbar> */}
      <LogExerciseHeader />
      <Box sx={styles.controllerContainer}>
        <Typography variant='subtitle1'>Barbell Bench Press</Typography>
        <IconButton>
          <InfoOutlinedIcon sx={{ color: 'text.primary' }} />
        </IconButton>
      </Box>
      <LogController
        editData={editData}
        handleSaveButton={handleSaveButton}
        handleUpdateButton={handleUpdateButton}
        handleDeleteButton={handleDeleteButton}
      />
      <Divider sx={{ border: { md: 0 } }} />
      <Box sx={styles.setsAndButtonContainer}>
        <Box
          sx={{
            ...styles.loggedSetsContainer,
            border: { xs: 0, md: `1px solid ${theme.palette.neutral.main}` },
          }}
        >
          {loggedSets.length > 0 ? (
            <LoggedSetsTable
              loggedSets={loggedSets}
              selectedSetIndex={editData.selectedSetIndex}
              handleSelectedIndex={handleSelectSet}
            />
          ) : null}
          <Box
            sx={{
              ...styles.finishButtonContainer,
              borderTop: `1px solid ${theme.palette.neutral.main}`,
            }}
          >
            <Button variant='contained' sx={{ width: 300 }} onClick={handleFinishExercise}>
              Finish Exercise
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LogExercisePage;
