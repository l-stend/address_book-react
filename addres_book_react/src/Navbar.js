import React, { useState, useContext } from 'react'
import SearchForm from './SearchForm'
import AddForm from './AddForm'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {showAdd, showSearch, openAddForm, openSearchForm, showList} = useGlobalContext();

  return (
    <div className='navbar navbar-dark bg-light'>
      <div className='text-left' style={{paddingLeft: '10px'}}>
        <button className='btn primary' onClick={() => openAddForm()}>Add</button>
      </div>
      <div className='text-center'>
        <button className='btn' onClick={() => showList()}>Show</button>
      </div>
      <div className='text-right' style={{paddingRight: '10px'}}>
        <button className='btn' onClick={() => openSearchForm()}>Search</button>
      </div> 
    </div>
  )
}

export default Navbar
