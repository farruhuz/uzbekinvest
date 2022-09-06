import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./Pagination.css";
import { useNavigate } from 'react-router-dom';

const PaginationControlled = ({plitka, id}) => {
  const navigate = useNavigate();
  const handleChange = (event, value) => {
    plitka(value)
    navigate(`/news/?page=${value}`)
  };
  useEffect(()=>{
    return (
        navigate(`/news/?page=${1}`)
    )
  },[])
  return (
    <Stack spacing={2} className="paginations">
      <Pagination count={30} page={id} onChange={handleChange} className='paginationCount'/>
    </Stack>
  );
}

export default PaginationControlled
