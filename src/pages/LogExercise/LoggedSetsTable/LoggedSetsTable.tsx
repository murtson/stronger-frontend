import { Box, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import React from 'react';
import { Set } from '../../../interfaces/Set';

interface Props {
  loggedSets: Set[];
}

const LoggedSetsTable: React.FC<Props> = ({ loggedSets }) => {
  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Set</TableCell>
            <TableCell align='center'>Weight</TableCell>
            <TableCell align='center'></TableCell>
            <TableCell align='center'>Reps</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loggedSets.map((row, index) => (
            <TableRow
              className='TableRow'
              key={index}
              sx={{
                '& td, & th': {
                  border: 0,
                },
              }}
            >
              <TableCell align='center'>
                <Typography variant='subtitle1'>{index + 1}</Typography>
              </TableCell>
              <TableCell align='center'>
                <Typography variant='subtitle1' sx={{ display: 'inline-block' }}>
                  {row.weight}
                </Typography>{' '}
                <Typography
                  variant='subtitle2'
                  sx={{ display: 'inline-block', color: 'text.secondary' }}
                >
                  kgs
                </Typography>
              </TableCell>
              <TableCell align='center'>
                <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                  x
                </Typography>
              </TableCell>
              <TableCell align='center'>
                <Typography variant='subtitle1' sx={{ display: 'inline-block' }}>
                  {row.reps}
                </Typography>{' '}
                <Typography
                  variant='subtitle2'
                  sx={{ display: 'inline-block', color: 'text.secondary' }}
                >
                  reps
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default LoggedSetsTable;
