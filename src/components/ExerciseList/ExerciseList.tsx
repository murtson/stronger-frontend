import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useQuery } from '@apollo/client';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SkeletonList from '../Loaders/SkeletonList/SkeletonList';
import { GET_CATEGORY_EXERCISES } from '../../graphql/queries';

import Exercise from '../../interfaces/Exercise';

const ExerciseList: React.FC = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const { data, error, loading } = useQuery(GET_CATEGORY_EXERCISES, {
    variables: {
      id: Number(id),
    },
  });

  const handleClick = (id: string) => {
    navigate(`${id}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        flex: { xs: 1, md: 0 },
        borderRadius: { xs: 0, md: 2 },
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'divider',
      }}
    >
      {data ? (
        loading ? (
          <SkeletonList numberOfLoaders={9} />
        ) : (
          <List sx={{ padding: { xs: 0 } }}>
            {data.categoryExercises.map((exercise: Exercise) => {
              return (
                <ListItemButton
                  onClick={() => handleClick(exercise.id)}
                  key={exercise.id}
                  divider
                  sx={{ '&:last-of-type': { borderBottomWidth: { xs: 1, md: 0 } } }}
                >
                  <ListItemAvatar>
                    <Box
                      sx={{
                        backgroundColor: 'divider',
                        width: 30,
                        height: 30,
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
              );
            })}
          </List>
        )
      ) : null}
    </Box>
  );
};

export default ExerciseList;
