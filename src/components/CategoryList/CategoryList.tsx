import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_EXERCISE_CATEGORIES } from '../../graphql/queries';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import ExerciseCategory from '../../interfaces/ExerciseCategory';

const CategoryList: React.FC = () => {
  const { error, loading, data } = useQuery(GET_EXERCISE_CATEGORIES);
  const theme = useTheme();
  const isMediumAndUpScreen = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    console.log('in use effect');
  }, [data]);

  const handleClick = (id: string) => {
    console.log(id);
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
        <List dense={isMediumAndUpScreen ? false : true} sx={{ padding: { xs: 0 } }}>
          {data.exerciseCategories.map((category: ExerciseCategory) => {
            return (
              <ListItemButton
                onClick={() => handleClick(category.id)}
                key={category.id}
                divider
                sx={{ '&:last-of-type': { borderBottomWidth: { xs: 1, md: 0 } } }}
              >
                <ListItemAvatar>
                  <Box
                    sx={{ backgroundColor: 'divider', width: 30, height: 30, borderRadius: '50%' }}
                  ></Box>
                </ListItemAvatar>
                <ListItemText primary={category.type} secondary={'5 exercises'}></ListItemText>
                <ListItemIcon sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <NavigateNextIcon />
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      ) : null}
    </Box>
  );
};

export default CategoryList;
