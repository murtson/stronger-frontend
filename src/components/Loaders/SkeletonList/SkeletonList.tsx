import React, { Fragment } from 'react';
import { Skeleton, Stack, Box, Divider } from '@mui/material';

interface Props {
  numberOfLoaders: number;
}

const SkeletonList: React.FC<Props> = ({ numberOfLoaders }) => {
  return (
    <Stack sx={{ paddingBottom: { xs: 2, md: 0 } }}>
      {[...Array(numberOfLoaders)].map((_el, index) => (
        <Fragment key={index}>
          <Box
            sx={{
              display: 'flex',
              height: 50,
              paddingLeft: 2,
              paddingRight: 2,
              alignItems: 'center',
            }}
          >
            <Skeleton variant='circular' sx={{ width: 30, height: 30 }} />
            <Skeleton
              sx={{
                flex: 1,
                height: 20,
                backgroundColor: 'grey.300',
                marginLeft: 2,
                borderRadius: 1,
              }}
              variant='rectangular'
            />
          </Box>
          <Divider sx={{ '&:last-of-type': { borderBottomWidth: { xs: 1, md: 0 } } }} />
        </Fragment>
      ))}
    </Stack>
  );
};

export default SkeletonList;
