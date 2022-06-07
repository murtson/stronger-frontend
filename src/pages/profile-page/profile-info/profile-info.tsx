// general
import React from 'react';
// mui & components
import { Box, Typography, Avatar, Button, Grid, useTheme } from '@mui/material';
import HeaderTabs from '../../../components/headers/header-tabs/header-tabs';
import FaceIcon from '@mui/icons-material/Face';
// constants
import { CONTENT_BORDER_STYLE } from '../../../constants/styles-constants';

const AVATAR_SIZE_SM = 75;
const AVATAR_SIZE_MD = 120;

const styles = {
  root: {
    ...CONTENT_BORDER_STYLE,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    mb: { xs: 0, md: 2 },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: { xs: 275, md: 400 },
  },
  header: {
    flex: '1 1 50%',
    background: 'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)',
  },
  gridContainer: {
    flex: '1 1 50%',
    position: 'relative',
    padding: { xs: 2, md: 3 },
    borderRadius: { xs: 0, md: '0 0 8px 8px' },
  },
  avatar: {
    bgcolor: 'neutral.main',
    color: 'neutral.dark',
    position: 'absolute',
    transform: 'translateY(-50%)',
    top: 0,
    height: { xs: AVATAR_SIZE_SM, md: AVATAR_SIZE_MD },
    width: { xs: AVATAR_SIZE_SM, md: AVATAR_SIZE_MD },
    border: '4px solid #ffffff',
  },
  faceIcon: {
    fontSize: { xs: '48px', md: '64px' },
  },
  editProfileButton: { flex: 0, borderRadius: 20, px: 2, minWidth: { md: '200px' } },
};

const tabs = [
  { label: 'You', value: 'you' },
  { label: 'Your feed', value: 'your-feed' },
];

const ProfileInfo: React.FC = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.contentContainer}>
        <Box sx={styles.header} />
        <Grid container sx={styles.gridContainer}>
          <Avatar sx={styles.avatar}>
            <FaceIcon sx={styles.faceIcon} />
          </Avatar>
          <Grid item xs={6} sx={{ pt: { xs: `${AVATAR_SIZE_SM / 2.2}px`, md: `${AVATAR_SIZE_MD / 2.2}px` } }}>
            <Typography variant='h6' sx={{ fontWeight: 600 }}>
              Username
            </Typography>
            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
              username@mail.com
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <Button variant='contained' size='small' sx={styles.editProfileButton}>
              Edit your profile
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', pt: 2 }}>
            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
              <Box component='span'>Workouts: </Box>
              <Box component='span' sx={{ color: 'text.primary', fontWeight: 500, marginRight: 3 }}>
                12
              </Box>
              <Box component='span'>Joined: </Box>
              <Box component='span' sx={{ color: 'text.primary', fontWeight: 500 }}>
                3 months ago
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <HeaderTabs tabs={tabs} />
    </Box>
  );
};

export default ProfileInfo;
