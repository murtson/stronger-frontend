// general
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// layouts
import AppLayout from './layout/AppLayout/AppLayout';
import LogLayout from './layout/LogLayout/LogLayout';
// pages
import WorkoutPage from './pages/WorkoutPage/WorkoutPage';
import HomePage from './pages/HomePage/HomePage';
import SelectCategoryPage from './pages/SelectCategoryPage/SelectCategoryPage';
import SelectExercisesPage from './pages/SelectExercisePage/SelectExercisesPage';
import LogExercisePage from './pages/LogExercisePage/LogExercisePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
// views
import StatsView from './pages/HomePage/views/StatsView/StatsView';
import MusclesView from './pages/HomePage/views/MusclesView/MusclesView';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ExercisesView from './pages/WorkoutPage/views/ExercisesView/ExercisesView';
import OverviewView from './pages/WorkoutPage/views/OverviewView/OverviewView';
// redux
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

export const AppRoutes = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute isAllowed={!isAuth} redirectPath='/' />}>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute isAllowed={isAuth} redirectPath='/login' />}>
          <Route path='/' element={<AppLayout />}>
            <Route path='' element={<Navigate replace to='workout' />} />
            <Route path='home' element={<HomePage />}>
              <Route path='' element={<Navigate replace to='stats' />} />
              <Route path='stats' element={<StatsView />} />
              <Route path='muscles' element={<MusclesView />} />
            </Route>
            <Route path='workout' element={<WorkoutPage />}>
              <Route path='' element={<Navigate replace to='exercises' />} />
              <Route path='exercises' element={<ExercisesView />} />
              <Route path='overview' element={<OverviewView />} />
            </Route>
            <Route path='profile' element={<ProfilePage />} />
          </Route>
          <Route path='log' element={<LogLayout />}>
            <Route path='category' element={<SelectCategoryPage />} />
            <Route path='category/:id' element={<SelectExercisesPage />} />
            <Route path=':id' element={<LogExercisePage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
