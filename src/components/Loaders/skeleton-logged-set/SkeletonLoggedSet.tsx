import React, { Fragment } from 'react';
import { Skeleton, Stack, Box, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
interface Props {
  numberOfLoaders: number;
}

const SkeletonLoggedSet: React.FC<Props> = ({ numberOfLoaders }) => {
  const theme = useTheme();
  return (
    <Stack sx={{ paddingBottom: { xs: 2, md: 0 } }} data-testid='skeleton-list-loader'>
      {[...Array(numberOfLoaders)].map((_el, index) => (
        <Box key={index} sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3,
            }}
          >
            <Skeleton
              variant='circular'
              animation='wave'
              sx={{ width: 40, height: 40, backgroundColor: 'grey.400', mr: 2 }}
            />
            <Box>
              <Skeleton
                sx={{
                  width: 125,
                  height: 15,
                  backgroundColor: 'grey.400',
                  borderRadius: 1,
                  mb: 1,
                }}
                variant='rectangular'
                animation='wave'
              />
              <Skeleton
                sx={{
                  width: 175,
                  height: 10,
                  backgroundColor: 'grey.200',
                  borderRadius: 1,
                }}
                variant='rectangular'
                animation='wave'
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              ml: '40px',
            }}
          >
            <Skeleton
              sx={{
                width: '85%',
                height: 10,
                backgroundColor: 'grey.300',
                marginLeft: 2,
                borderRadius: 1,
                mb: 1.5,
              }}
              variant='rectangular'
              animation='wave'
            />
            <Skeleton
              sx={{
                width: '75%',
                height: 10,
                backgroundColor: 'grey.300',
                marginLeft: 2,
                borderRadius: 1,
                mb: 1.5,
              }}
              variant='rectangular'
              animation='wave'
            />
            <Skeleton
              sx={{
                width: '65%',
                height: 10,
                backgroundColor: 'grey.300',
                marginLeft: 2,
                borderRadius: 1,
                mb: 1.5,
              }}
              variant='rectangular'
              animation='wave'
            />
            <Skeleton
              sx={{
                width: '85%',
                height: 10,
                backgroundColor: 'grey.300',
                marginLeft: 2,
                borderRadius: 1,
              }}
              variant='rectangular'
              animation='wave'
            />
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default SkeletonLoggedSet;
