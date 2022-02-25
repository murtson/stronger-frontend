import { Box, Typography } from '@mui/material';

function ExercisesView() {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.secondary' }}>
        Workout log emtpy
      </Typography>
    </Box>
  );
}

export default ExercisesView;
