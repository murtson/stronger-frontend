import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import HeaderTabs from '../HeaderTabs/HeaderTabs';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const tabsArray = [
  { value: 'stats', label: 'Stats' },
  { value: 'muscles', label: 'Muscles' },
];

const HomeHeader: React.FC = () => {
  return (
    <Box
      sx={{
        height: { xs: 100, md: 125 },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      <Grid
        container
        sx={{ flex: 1, paddingLeft: { xs: 2, md: 0 }, paddingRight: { xs: 1, md: 0 } }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant='h6' sx={{ lineHeight: 1.25, paddingTop: { xs: 1, sm: 2 } }}>
            Home
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            paddingTop: { xs: 0, sm: 1 },
          }}
        >
          <IconButton>
            <MoreVertIcon sx={{ color: 'text.primary' }} />
          </IconButton>
        </Grid>
      </Grid>
      <HeaderTabs tabs={tabsArray} />
    </Box>
  );
};

export default HomeHeader;
