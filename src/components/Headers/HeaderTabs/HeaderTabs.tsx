import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    height: '3px',

    [theme.breakpoints.up('md')]: {
      height: '3px',
    },
  },
}));

const StyledTab = styled((props: { label: string; value: string }) => <Tab {...props} />)(
  ({ theme }) => ({
    fontSize: 16,
    fontWeight: 500,
    textTransform: 'none',
    // color: theme.palette.neutral.contrastText,
    opacity: 0.6,
    '&.Mui-selected': {
      opacity: 1,
    },
  })
);

interface Props {
  tabs: { label: string; value: string }[];
  colorTheme?: 'success' | 'primary' | 'neutral';
}

const HeaderTabs: React.FC<Props> = ({ tabs, colorTheme = 'neutral' }) => {
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
    <StyledTabs
      value={value}
      onChange={handleChange}
      centered
      variant='fullWidth'
      sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: colorTheme === 'neutral' ? 'primary.main' : `${colorTheme}.contrastText`,
        },
      }}
    >
      {tabs.map((tab, index) => (
        <StyledTab
          key={index}
          label={tab.label}
          value={tab.value}
          sx={{
            color: `${colorTheme}.contrastText`,
            '&.Mui-selected': {
              color: colorTheme === 'neutral' ? 'primary.main' : `${colorTheme}.contrastText`,
            },
          }}
        />
      ))}
    </StyledTabs>
  );
};

export default HeaderTabs;
