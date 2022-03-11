import React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import { useNavigate } from 'react-router';

type Actions = {
  icon: React.ReactElement<any>;
  title: string;
  path: string;
}[];

const actions: Actions = [
  { icon: <FitnessCenterIcon />, title: 'New Workout', path: 'log/category' },
  { icon: <FileCopyIcon />, title: 'Copy Workout', path: 'calendar' },
];

const AppSpeedDial: React.FC = () => {
  let navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, path: string) => {
    navigate(`../../${path}`);
  };

  return (
    <SpeedDial
      ariaLabel='SpeedDial Main'
      sx={{ position: 'fixed', bottom: 72, right: 16 }}
      icon={<SpeedDialIcon openIcon={<WhatshotOutlinedIcon />} />}
    >
      {actions.map((action, index) => (
        <SpeedDialAction
          onClick={(event) => {
            handleClick(event, action.path);
          }}
          key={index}
          icon={action.icon}
          tooltipTitle={action.title}
        />
      ))}
    </SpeedDial>
  );
};

export default AppSpeedDial;
