// general
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
// layouts
import AppLayout from '../../layout/app-layout/app-layout';
import LogLayout from '../../layout/log-layout/log-layout';
// pages
import WorkoutPage from '../../pages/workout-page/workout-page';
import HomePage from '../../pages/home-page/home-page';
import SelectCategoryPage from '../../pages/select-category-page/select-category-page';
import SelectExercisesPage from '../../pages/select-exercise-page/select-exercise-page';
import LogExercisePage from '../../pages/log-exercise-page/log-exercise-page';
import RegisterPage from '../../pages/register-page/register-page';
import LoginPage from '../../pages/login-page/login-page';
// views
import StatsView from '../../pages/home-page/views/stats-view/stats-view';
import MusclesView from '../../pages/home-page/views/muscle-view/muscle-view';
import ProfilePage from '../../pages/profile-page/profile-page';
import ExercisesView from '../../pages/workout-page/views/exercises-view/exercises-view';
import OverviewView from '../../pages/workout-page/views/overview-view/overview-view';
import UserView from '../../pages/profile-page/views/user-view/user-view';
import UserFeedView from '../../pages/profile-page/views/user-feed-view/user-feed-view';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
// constants
import { MainRoutePaths, WorkoutSubRoutes, HomeSubRoutes, LogSubRoutes } from '../../ts/enums/route-paths';

const AppRoutes = () => {
  const { isAuth, loading } = useSelector((state: RootState) => state.auth);

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
            <Route path={MainRoutePaths.PROFILE} element={<ProfilePage />}>
              <Route path='' element={<Navigate replace to={'you'} />} />
              <Route path={'you'} element={<UserView />} />
            </Route>
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

export default AppRoutes;
