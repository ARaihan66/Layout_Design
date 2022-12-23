import React, { useState } from 'react'
import { students } from '../Data'

const Search = () => {
    const [searchItem, setSearchItem] = useState('');

    const handleChange = (e) => {
        const val = e.target.value.toLowerCase();
        setSearchItem(val);
    }
    const filterSearch = students.filter(item => {
        if (searchItem === '') {
            //return item;
            return '';
        } else {
            return item.name.toLowerCase().includes(searchItem);
        }
    })


    return (
        <div>
            <h1>React Searching Technique</h1>
            <input type='text' placeholder='Search...' style={{ padding: '10px', width: '200px' }} onChange={handleChange} />
            {filterSearch && filterSearch.map(item => {
                return <a href='/info' style={{ textDecoration: 'none' }}><h4>{item.name}</h4></a>
            })}
        </div>
    )
}

export default Search
