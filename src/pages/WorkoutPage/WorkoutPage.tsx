import { Box } from '@mui/material';
import WorkoutHeader from '../../components/navigation/WorkoutHeader/WorkoutHeader';

function WorkoutPage() {
  return (
    <Box sx={{ flex: 1, paddingBottom: '56px' }}>
      <WorkoutHeader />
    </Box>
  );
}

export default WorkoutPage;
