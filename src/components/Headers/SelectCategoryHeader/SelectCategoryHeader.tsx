import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Tab, Tabs, Grid, Typography, IconButton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const SelectCategoryHeader: React.FC = () => {
  const [value, setValue] = useState('stats');
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    // Perhaps do something with Typescript?
    const pathname = location.pathname.split('/');
    const isInvalidPathNames = pathname[2] !== 'stats' && pathname[2] !== 'muscles';
    if (!pathname[2] || isInvalidPathNames) return;
    setValue(pathname[2]);
  }, [location]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  return (
    <Box
      sx={{
        height: { xs: 100, md: 125 },
        borderBottom: '1px solid #e8e8e8',
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      <Grid
        container
        sx={{
          flex: 1,
          paddingLeft: { xs: 1, md: 2 },
          paddingRight: { xs: 1, md: 2 },
          paddingTop: { xs: 1, md: 2 },
        }}
      >
        <Grid item xs={10} sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ color: 'text.primary' }}>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <Typography variant='h6' sx={{ fontWeight: 600, paddingLeft: 2 }}>
            Category
          </Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton sx={{ color: 'text.primary' }}>
            <CloseOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SelectCategoryHeader;
