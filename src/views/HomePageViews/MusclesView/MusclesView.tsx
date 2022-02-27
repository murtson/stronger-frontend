import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const MusclesView: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: { xs: 0, md: '24px 0' },
        border: { xs: `1px solid ${theme.palette.neutral.main}` },
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
