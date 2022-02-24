import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from '../layout/AppLayout/AppLayout';

import WorkoutPage from '../pages/WorkoutPage/WorkoutPage';
import ExercisesView from '../views/WorkoutPageViews/ExercisesView/ExercisesView';
import OverviewView from '../views/WorkoutPageViews/OverviewView/OverviewView';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/*' element={<AppLayout />}>
            <Route path='' element={<Navigate replace to='home' />} />
            <Route path='home' element={<p>Home page</p>} />
            <Route path='workout' element={<WorkoutPage />}>
              <Route path='' element={<Navigate replace to='exercises' />} />
              <Route path='exercises' element={<ExercisesView />} />
              <Route path='overview' element={<OverviewView />} />
            </Route>
            <Route path='home' element={<p>Profile page</p>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
