import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import HeaderTabs from '../../../components/Headers/HeaderTabs/HeaderTabs';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// constants
import { contentBorderStyle } from '../../../constants/styles';

const tabsArray = [
  { value: 'stats', label: 'Stats' },
  { value: 'muscles', label: 'Muscles' },
];

const HomeHeader: React.FC = () => {
  return (
    <Box
      sx={{
        ...contentBorderStyle,
        height: { xs: 150, md: 150 },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',

        overflow: 'hidden',
      }}
    >
      <Grid container sx={{ flex: 1, paddingLeft: { xs: 2, md: 0 }, paddingRight: { xs: 1, md: 0 } }}>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant='subtitle1'
            sx={{ lineHeight: 1.25, paddingTop: { xs: 1, sm: 2 } }}
          ></Typography>
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
