import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from './layout/AppLayout/AppLayout';

import WorkoutPage from './pages/WorkoutPage/WorkoutPage';
import ExercisesView from './views/WorkoutPageViews/ExercisesView/ExercisesView';
import OverviewView from './views/WorkoutPageViews/OverviewView/OverviewView';

import HomePage from './pages/HomePage/HomePage';
import StatsView from './views/HomePageViews/StatsView/StatsView';
import MusclesView from './views/HomePageViews/MusclesView/MusclesView';

import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <div className='App' style={{ backgroundColor: '#f7f8fa' }}>
      <Router>
        <Routes>
          <Route path='/*' element={<AppLayout />}>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
