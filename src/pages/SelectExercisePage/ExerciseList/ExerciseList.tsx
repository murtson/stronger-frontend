import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Typography,
  Button,
  ListItem,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SkeletonList from '../../../components/Loaders/SkeletonList/SkeletonList';

import { Exercise } from '../../../ts/interfaces/Exercise';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: 1,
    px: { xs: 2, md: 0 },
  },
  body: {
    backgroundColor: 'white',
    flex: { xs: 1, md: 'initial' },
    borderRadius: { xs: 0, md: 2 },
    borderStyle: 'solid',
    borderWidth: { xs: 1, md: 0 },
    borderColor: 'divider',
    mb: { xs: 0, md: 2 },
    boxShadow: { xs: 0, md: 1 },
    overflow: 'hidden',
  },
};

interface Props {
  categoryExercises: Exercise[];
  isLoading: boolean;
  category: string | undefined;
}

const ExerciseList: React.FC<Props> = ({ categoryExercises, isLoading, category }) => {
  let navigate = useNavigate();

  const handleClick = (id: string | number) => {
    navigate(`/log/${id}`);
  };

  return (
    <React.Fragment>
      <Box sx={styles.header}>
        <Typography variant='subtitle1' sx={{ color: 'text.secondary' }}>
          {category} exercises
        </Typography>
        <Button>+ ADD EXERCISE</Button>
      </Box>
      <Box sx={styles.body}>
        {isLoading ? (
          <SkeletonList numberOfLoaders={9} />
        ) : (
          <List sx={{ padding: { xs: 0 } }}>
            {categoryExercises.map((exercise: Exercise) => {
              return (
                <ListItem
                  key={exercise.id}
                  sx={{ padding: 0, '&:last-of-type': { borderBottomWidth: { xs: 1, md: 0 } } }}
                  divider
                >
                  <ListItemButton onClick={() => handleClick(exercise.id)}>
                    <ListItemAvatar>
                      <Box
                        sx={{
                          backgroundColor: exercise.color,
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={exercise.name}
                      // secondary={`${category._count?.exercises} exercises`}
                    ></ListItemText>
                    <ListItemIcon sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <NavigateNextIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        )}
      </Box>
    </React.Fragment>
  );
};

export default ExerciseList;
