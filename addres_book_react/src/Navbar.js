import React from 'react'
import SearchForm from './SearchForm'
import AddForm from './AddForm'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h3>Navbar</h3>
      <SearchForm />
      <AddForm />
    </div>
  )
}

export default Navbar
