import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useSelector,useDispatch} from 'react-redux';
import {showBadgeList} from '../../redux/slices/badgeListSlice';

export default function BasicButtons() {
  const {badgeList} = useSelector((state) => state.batchReducer);
  const dispatch = useDispatch();
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={()=>dispatch(showBadgeList())} variant="outlined" sx={{ color: 'black', borderColor:'black'}}>Show More</Button>
    </Stack>
  );
}