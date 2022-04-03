import React, { useEffect } from 'react';
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

import { ExerciseCategory } from '../../../ts/interfaces/ExerciseCategory';

interface Props {
  categories: ExerciseCategory[];
  isLoading: boolean;
}

const CategoryList: React.FC<Props> = ({ categories, isLoading }) => {
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
        {isLoading ? (
          <SkeletonList numberOfLoaders={9} />
        ) : (
          <List sx={{ padding: { xs: 0 } }}>
            {categories.map((category: ExerciseCategory) => {
              return (
                <ListItem
                  key={category.id}
                  sx={{ padding: 0, '&:last-of-type': { borderBottomWidth: { xs: 1, md: 0 } } }}
                  divider
                >
                  <ListItemButton onClick={() => handleClick(category.id)} sx={{}}>
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
                    <ListItemText primary={category.name}></ListItemText>
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

export default CategoryList;
