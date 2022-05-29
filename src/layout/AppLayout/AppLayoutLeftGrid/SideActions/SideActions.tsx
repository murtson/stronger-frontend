import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import WorkoutSideActions from './WorkoutSideActions/WorkoutSideActions';
// constants
import { MainRoutePaths } from '../../../../ts/enums/routePaths';

const styles = {
  root: {
    width: '100%',
  },
  buttonContainer: {
    mt: 2,
  },
  button: {
    borderRadius: 2,
    mb: 2,
  },
};

const SideActions = () => {
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
