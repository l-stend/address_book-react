import React, { useState, useContext } from 'react'
import SearchForm from './SearchForm'
import AddForm from './AddForm'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {showAdd, showSearch, openAddForm, openSearchForm} = useGlobalContext();

  return (
    <div className='navbar'>
      <h3>Navbar</h3>
      <div className='btn-container'>
        <button className='btn' onClick={() => openAddForm()}>Add</button>
        <button className='btn'>Show</button>
        <button className='btn' onClick={() => openSearchForm()}>Search</button>
      </div>
      {showSearch && <SearchForm />}
      {showAdd && <AddForm />}
    </div>
  )
}

export default Navbar
