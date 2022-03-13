import { Box, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Set } from '../../../interfaces/Set';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    cursor: 'pointer',
  },
  '& td, & th': {
    border: 0,
  },
  '&.MuiTableRow-root.Mui-selected': {
    backgroundColor: theme.palette.info.light,
    '&:hover': {
      backgroundColor: theme.palette.info.light,
    },
  },
}));

interface Props {
  loggedSets: Set[];
  selectedSetIndex?: number | null;
  handleSelectedIndex: (index: number) => void;
}

const LoggedSetsTable: React.FC<Props> = ({
  loggedSets,
  selectedSetIndex,
  handleSelectedIndex,
}) => {
  if (loggedSets.length === 0) return null;
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
            <StyledTableRow
              selected={selectedSetIndex === index ? true : false}
              onClick={() => handleSelectedIndex(index)}
              key={index}
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default LoggedSetsTable;
