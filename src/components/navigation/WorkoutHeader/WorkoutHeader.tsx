import React, { useState } from 'react';
import { Box, Tab, Tabs, Grid, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',

  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
    height: 2,
  },
});

const AntTab = styled((props: { label: string }) => <Tab {...props} />)(({ theme }) => ({
  fontSize: 18,
  textTransform: 'none',
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
  fontWeight: 600,
  color: theme.palette.text.secondary,
  '&.Mui-selected': {
    color: theme.palette.text.primary,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const WorkoutHeader: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ height: { xs: 100, sm: 125, md: 150 }, display: 'flex', flexDirection: 'column' }}>
      <Grid container sx={{ flex: 1 }}>
        <Grid
          item
          xs={6}
          sx={{
            paddingLeft: 2,
            display: 'flex',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant='h6'
            sx={{ fontWeight: 600, lineHeight: 1.25, paddingTop: { xs: 1, sm: 2 } }}
          >
            Workout
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            paddingTop: { sm: 1 },
            paddingRight: 1,
          }}
        >
          <IconButton sx={{ color: 'primary.main' }}>
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
          <IconButton sx={{ color: 'text.primary' }}>
            <HistoryOutlinedIcon />
          </IconButton>
          <IconButton sx={{ color: 'text.primary' }}>
            <DateRangeOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
      <AntTabs value={value} onChange={handleChange} centered variant='fullWidth'>
        <AntTab label='Exercises' />
        <AntTab label='Overview' />
      </AntTabs>
    </Box>
  );
};

export default WorkoutHeader;
