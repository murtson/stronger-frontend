import React, { useState } from 'react';
import {
  Grid,
  Box,
  Button,
  Typography,
  styled,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  width: '100%',
  gap: theme.spacing(1.5),

  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(0.5),
  },
  '& .MuiToggleButtonGroup-grouped': {
    border: 0,
    backgroundColor: 'white',
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('md')]: {
      boxShadow: '0 2px 1px 0 rgb(0 0 0 / 10%)',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(0.5),
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
    '&.Mui-selected': {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      boxShadow: 'none',
      '&:hover': {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        boxShadow: 'none',
        opacity: 1,
      },
    },
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      boxShadow: 'none',
      opacity: 0.5,
    },
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  flex: 1,
  textTransform: 'none',
}));

const DateIntervalSelector: React.FC = () => {
  const [dateInterval, setDateInterval] = useState('1M');

  const handleDateInterval = (event: React.SyntheticEvent, newdateInterval: string) => {
    setDateInterval(newdateInterval);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: { md: '25px' },
        height: {
          xs: '40px',
          md: '46px',
        },
        borderRadius: { xs: 0, md: 2 },
      }}
    >
      <StyledToggleButtonGroup
        color='primary'
        size='small'
        value={dateInterval}
        exclusive
        onChange={handleDateInterval}
        aria-label='text dateInterval'
      >
        <StyledToggleButton value='1M'>
          <Typography variant='subtitle1'>1 M</Typography>
        </StyledToggleButton>
        <StyledToggleButton value='3M'>
          <Typography variant='subtitle1'>3 M</Typography>
        </StyledToggleButton>
        <StyledToggleButton value='6M'>
          <Typography variant='subtitle1'>6 M</Typography>
        </StyledToggleButton>
        <StyledToggleButton value='1Y'>
          <Typography variant='subtitle1'>1 Y</Typography>
        </StyledToggleButton>
        <StyledToggleButton value='ALL'>
          <Typography variant='subtitle1'>ALL</Typography>
        </StyledToggleButton>
      </StyledToggleButtonGroup>
    </Box>
  );
};

export default DateIntervalSelector;
