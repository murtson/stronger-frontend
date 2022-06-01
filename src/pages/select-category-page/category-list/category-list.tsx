// overall
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
// mui & components
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
import SkeletonList from '../../../components/loaders/skeleton-list/skeleton-list';
// constants
import { ExerciseCategory } from '../../../ts/interfaces/ExerciseCategory';
import { contentBorderStyle } from '../../../constants/styles';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: 1,
    px: { xs: 2, md: 0 },
  },
  body: {
    ...contentBorderStyle,
    backgroundColor: 'white',
    flex: { xs: 1, md: 'initial' },
    overflow: 'hidden',
  },
};

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
    <Fragment>
      <Box sx={styles.header}>
        <Typography variant='subtitle1' sx={{ color: 'text.secondary' }}>
          Exercise categories
        </Typography>
        <Button>+ ADD EXERCISE</Button>
      </Box>
      <Box sx={styles.body}>
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
    </Fragment>
  );
};

export default CategoryList;
