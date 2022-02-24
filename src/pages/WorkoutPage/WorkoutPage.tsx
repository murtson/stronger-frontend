import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import WorkoutHeader from '../../components/navigation/WorkoutHeader/WorkoutHeader';
import DatePicker from '../../components/Datepicker/DatePicker';

function WorkoutPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,

        paddingBottom: { xs: '56px', md: 0 },
      }}
    >
      <WorkoutHeader />
      <DatePicker />
      <Outlet />
    </Box>
  );
}

export default WorkoutPage;
