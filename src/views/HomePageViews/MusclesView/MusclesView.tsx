import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const MusclesView: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: { xs: 0, md: '25px' },
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'divider',
        borderRadius: { xs: 0, md: 2 },
      }}
    >
      <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.secondary' }}>
        Muscles coming soon...
      </Typography>
    </Box>
  );
};

export default MusclesView;
