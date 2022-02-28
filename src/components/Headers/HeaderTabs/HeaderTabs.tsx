import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,

  color: 'white',
  [theme.breakpoints.up('md')]: {
    borderBottom: 'none',
  },
  '& .MuiTabs-indicator': {
    backgroundColor: 'primary.main',
    height: '2px',
    [theme.breakpoints.up('md')]: {
      height: '2px',
    },
  },
}));

const StyledTab = styled((props: { label: string; value: string }) => <Tab {...props} />)(
  ({ theme }) => ({
    fontSize: 18,
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
    fontWeight: 600,
    color: theme.palette.text.secondary,
    '&.Mui-selected': {
      // color: theme.palette.text.primary,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  })
);

interface Props {
  tabs: { label: string; value: string }[];
}

const HeaderTabs: React.FC<Props> = ({ tabs }) => {
  const [value, setValue] = useState(tabs[0].value);
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    // Perhaps do something with Typescript?
    const pathname = location.pathname.split('/');
    const validPathsArray = tabs.map((tab) => tab.value);
    const isValidPathName = validPathsArray.includes(pathname[2]);
    if (!pathname[2] || !isValidPathName) return;
    setValue(pathname[2]);
  }, [location, tabs]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <StyledTabs value={value} onChange={handleChange} centered variant='fullWidth'>
      {tabs.map((tab, index) => (
        <StyledTab key={index} label={tab.label} value={tab.value} />
      ))}
    </StyledTabs>
  );
};

export default HeaderTabs;
