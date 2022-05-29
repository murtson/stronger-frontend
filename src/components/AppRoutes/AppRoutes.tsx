// general
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
// layouts
import AppLayout from '../../layout/AppLayout/AppLayout';
import LogLayout from '../../layout/LogLayout/LogLayout';
// pages
import WorkoutPage from '../../pages/WorkoutPage/WorkoutPage';
import HomePage from '../../pages/HomePage/HomePage';
import SelectCategoryPage from '../../pages/SelectCategoryPage/SelectCategoryPage';
import SelectExercisesPage from '../../pages/SelectExercisePage/SelectExercisesPage';
import LogExercisePage from '../../pages/LogExercisePage/LogExercisePage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
// views
import StatsView from '../../pages/HomePage/views/StatsView/StatsView';
import MusclesView from '../../pages/HomePage/views/MusclesView/MusclesView';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import ExercisesView from '../../pages/WorkoutPage/views/ExercisesView/ExercisesView';
import OverviewView from '../../pages/WorkoutPage/views/OverviewView/OverviewView';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
// constants
import { MainRoutePaths, WorkoutSubRoutes, HomeSubRoutes, LogSubRoutes } from '../../ts/enums/routePaths';

export const AppRoutes = () => {
  const { isAuth, loading } = useSelector((state: RootState) => state.auth);

  if (loading) return <div>loading...</div>;

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute isAllowed={!isAuth} redirectPath='/' />}>
          <Route path={MainRoutePaths.REGISTER} element={<RegisterPage />} />
          <Route path={MainRoutePaths.LOGIN} element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute isAllowed={isAuth} redirectPath={MainRoutePaths.LOGIN} />}>
          <Route path='/' element={<AppLayout />}>
            <Route path='' element={<Navigate replace to={MainRoutePaths.WORKOUT} />} />
            <Route path={MainRoutePaths.HOME} element={<HomePage />}>
              <Route path='' element={<Navigate replace to={HomeSubRoutes.STATS} />} />
              <Route path={HomeSubRoutes.STATS} element={<StatsView />} />
              <Route path={HomeSubRoutes.MUSCLES} element={<MusclesView />} />
            </Route>
            <Route path={MainRoutePaths.WORKOUT} element={<WorkoutPage />}>
              <Route path='' element={<Navigate replace to={WorkoutSubRoutes.EXERCISES} />} />
              <Route path={WorkoutSubRoutes.EXERCISES} element={<ExercisesView />} />
              <Route path={WorkoutSubRoutes.OVERVIEW} element={<OverviewView />} />
            </Route>
            <Route path={MainRoutePaths.PROFILE} element={<ProfilePage />} />
          </Route>
          <Route path={MainRoutePaths.LOG} element={<LogLayout />}>
            <Route path={LogSubRoutes.SELECT_CATEGORY} element={<SelectCategoryPage />} />
            <Route path={LogSubRoutes.SELCECT_EXERCISE} element={<SelectExercisesPage />} />
            <Route path={LogSubRoutes.LOG_EXERCISE} element={<LogExercisePage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
