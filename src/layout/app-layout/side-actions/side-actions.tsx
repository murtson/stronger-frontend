// general
import React from 'react';
import { useLocation } from 'react-router-dom';
// components
import WorkoutSideActions from '../../../pages/workout-page/workout-side-actions/workout-side-actions';
// constants
import { MainRoutePaths } from '../../../ts/enums/route-paths';

const SideActions: React.FC = () => {
  let location = useLocation();

  const pathname = location.pathname.split('/');
  switch (pathname[1]) {
    case MainRoutePaths.HOME:
      return null;
    case MainRoutePaths.WORKOUT:
      return null;
    case MainRoutePaths.PROFILE:
      return null;
    default:
      return null;
  }
};

export default SideActions;
