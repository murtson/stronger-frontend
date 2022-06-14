import React, { useEffect, useState } from 'react';
import { List } from '@mui/material';
import SidebarNavigationListItem from './sidebar-navigation-list-item/sidebar-navigation-list-item';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarNavigationList: React.FC = () => {
  const [routeValue, setRouteValue] = useState('');
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.split('/');
    setRouteValue(pathname[1]);
  }, [location]);

  return (
    <List id='sidebar-navigation-list'>
      <SidebarNavigationListItem icon={<AccountCircleOutlinedIcon />}>Profile</SidebarNavigationListItem>
      <SidebarNavigationListItem icon={<EventNoteOutlinedIcon />}>Calendar</SidebarNavigationListItem>
      <SidebarNavigationListItem icon={<HistoryOutlinedIcon />}>Workout History</SidebarNavigationListItem>
      <SidebarNavigationListItem icon={<SettingsOutlinedIcon />}>Settings</SidebarNavigationListItem>
      <SidebarNavigationListItem icon={<HelpOutlineOutlinedIcon />}>Help Center</SidebarNavigationListItem>
    </List>
  );
};

export default SidebarNavigationList;
