import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import  GetAllCategories  from '../queries/GetAllCategories';
import { Category } from '../types';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

type Props = {
    setCategory: (category: Category) => void;
    category: Category;
};
export default function DropDown({ setCategory, category }: Props) {
const q = useQuery(GetAllCategories);
if (q.loading) return <p>Loading ...</p>;
else if (q.error) return <p>Error: {q.error.message}</p>;

const handleChange = (event: SelectChangeEvent<string>) => {
    const chosen = q.data.categories.find((cat:Category)=>cat.id===event.target.value);
    setCategory(chosen);
};
return (
    <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category.id}
          label="Category"
          onChange={
            handleChange
          }
        >
          {q.data.categories.map((cat:Category)=><MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
)
}
