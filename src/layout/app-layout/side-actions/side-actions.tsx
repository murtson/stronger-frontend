// general
import React from 'react';
import { useLocation } from 'react-router-dom';
// components
import WorkoutSideActions from './WorkoutSideActions/WorkoutSideActions';
// constants
import { MainRoutePaths } from '../../../ts/enums/route-paths';

const SideActions: React.FC = () => {
  let location = useLocation();

  const pathname = location.pathname.split('/');
  switch (pathname[1]) {
    case MainRoutePaths.HOME:
      return null;
    case MainRoutePaths.WORKOUT:
      return <WorkoutSideActions />;
    case MainRoutePaths.PROFILE:
      return null;
    default:
      return null;
  }
};

export default SideActions;