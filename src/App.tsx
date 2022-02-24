import WorkoutPage from './pages/WorkoutPage/WorkoutPage';
import { Container, Grid } from '@mui/material';
import BottomNavbar from './components/navigation/BottomNavbar/BottomNavbar';
import SideNavigation from './components/navigation/SideNavigation/SideNavigation';

function App() {
  return (
    <div className='App'>
      <Grid
        container
        maxWidth='lg'
        sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          margin: 'auto',
        }}
      >
        <Grid item sm={2} md={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <SideNavigation />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          sx={{
            borderLeftWidth: { xs: 0, sm: '1px' },
            borderLeftStyle: 'solid',
            borderLeftColor: 'divider',
            borderRightWidth: { xs: 0, sm: '1px' },
            borderRightStyle: 'solid',
            borderRightColor: 'divider',
          }}
        >
          <WorkoutPage />
          <BottomNavbar />
        </Grid>
        <Grid item lg={2} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
      </Grid>
    </div>
  );
}

export default App;
