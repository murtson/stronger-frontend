import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from './layout/AppLayout/AppLayout';
import WorkoutPage from './pages/WorkoutPage/WorkoutPage';
import ExercisesView from './pages/WorkoutPage/views/ExercisesView/ExercisesView';
import OverviewView from './pages/WorkoutPage/views/OverviewView/OverviewView';
import HomePage from './pages/HomePage/HomePage';
import StatsView from './views/HomePageViews/StatsView/StatsView';
import MusclesView from './views/HomePageViews/MusclesView/MusclesView';
import ProfilePage from './pages/ProfilePage/ProfilePage';

import LogLayout from './layout/LogLayout/LogLayout';
import SelectCategoryPage from './pages/SelectCategoryPage/SelectCategoryPage';
import SelectExercisesPage from './pages/SelectExercisePage/SelectExercisesPage';
import LogExercisePage from './pages/LogExercisePage/LogExercisePage';

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
