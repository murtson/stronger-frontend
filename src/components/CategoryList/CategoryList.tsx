import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_EXERCISE_CATEGORIES } from '../../graphql/queries';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  ListSubheader,
  Typography,
  Button,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExerciseCategory from '../../interfaces/ExerciseCategory';
import SkeletonList from '../Loaders/SkeletonList/SkeletonList';
import { CategoryColors } from '../../enums/colors';

const CategoryList: React.FC = () => {
  const { error, loading, data } = useQuery(GET_EXERCISE_CATEGORIES);
  let navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`${id}`);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 1,
          paddingBottom: 1,
          paddingLeft: { xs: 2, md: 0 },
          paddingRight: { xs: 2, md: 0 },
        }}
      >
        <Typography variant='subtitle1' sx={{ color: 'text.secondary' }}>
          Exercise categories
        </Typography>
        <Button>+ ADD EXERCISE</Button>
      </Box>
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
              {data.exerciseCategories.map((category: ExerciseCategory) => {
                return (
                  <ListItemButton
                    onClick={() => handleClick(category.id)}
                    key={category.id}
                    divider
                    sx={{
                      '&:last-of-type': { borderBottomWidth: { xs: 1, md: 0 } },
                    }}
                  >
                    <ListItemAvatar>
                      <Box
                        sx={{
                          backgroundColor: category.color,
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText primary={category.type}></ListItemText>
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
    </React.Fragment>
  );
};

export default CategoryList;
