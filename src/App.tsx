import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from './layout/AppLayout/AppLayout';
import WorkoutPage from './pages/workout/WorkoutPage';
import ExercisesView from './pages/workout/views/exercises/ExercisesView';
import OverviewView from './pages/workout/views/overview/OverviewView';
import HomePage from './pages/home/HomePage';
import StatsView from './views/HomePageViews/StatsView/StatsView';
import MusclesView from './views/HomePageViews/MusclesView/MusclesView';
import ProfilePage from './pages/profile/ProfilePage';

import LogLayout from './layout/LogLayout/LogLayout';
import SelectCategoryPage from './pages/select-category/SelectCategoryPage';
import SelectExercisesPage from './pages/select-exercise/SelectExercisesPage';
import LogExercisePage from './pages/log-exercise/LogExercisePage';

function App() {
  return (
    <div className='App' style={{ backgroundColor: '#f5f5f5' }}>
      <Router>
        <Routes>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
