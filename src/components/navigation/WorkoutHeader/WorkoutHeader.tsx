import { useState } from 'react';
import { Box, Tab, Tabs, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
    height: 2,
  },
});

const AntTab = styled((props: { label: string }) => <Tab {...props} />)(({ theme }) => ({
  textTransform: 'none',

  paddingBottom: theme.spacing(0.5),
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.secondary,
  '&.Mui-selected': {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

function WorkoutHeader() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ paddingTop: 1 }}>
      <Grid container>
        <Grid item xs={6} sx={{ paddingLeft: 2 }}>
          <Typography variant='h6' sx={{ fontWeight: 600, paddingBottom: { xs: 0, sm: 2 } }}>
            Workout
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      <AntTabs value={value} onChange={handleChange} centered variant='fullWidth'>
        <AntTab label='Stats' />
        <AntTab label='Muscles' />
      </AntTabs>
    </Box>
  );
}

export default WorkoutHeader;
