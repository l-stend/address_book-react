import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './context';


const SearchForm = () => {
  const {list, searchResults, setSearchResults, searchValue, setSearchValue} = useGlobalContext();
  const [searchBy, setSearchBy] = useState('check1');
  
  useEffect(() => {
    if (searchBy === 'check1') {
      const searchedContacts = list.filter((item) => 
      item.firstName.toLowerCase().includes(searchValue.toLowerCase()))
      setSearchResults(searchedContacts);
    }
    if (searchBy === 'check2') {
      const searchedContacts = list.filter((item) => 
      item.lastName.toLowerCase().includes(searchValue.toLowerCase()))
      setSearchResults(searchedContacts);
    }
    if (searchBy === 'check3') {
      const searchedContacts = list.filter((item) => 
      item.city.toLowerCase().includes(searchValue.toLowerCase()))
      setSearchResults(searchedContacts);
    }
  }, 
  [searchValue])

  //  const handleSearch = (e) => {
  //    e.preventDefault()
  //    const searchedContacts = list.map((item) => item.firstName.includes(searchValue))
  //    console.log(searchContacts);
  //    console.log('blanalala');
  //  }

  return (
    <article>
      <h3> Search Contact</h3>
      <form className='search-form' >    
        <div className='form-item'>
          <label htmlFor='search'>Search</label>
          <input type='text' value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}></input>
        </div>
        <div className='form-item'>
          <span>
              <input type="radio" 
              checked={searchBy === 'check1'} 
              value="check1" 
              onChange={(e) => setSearchBy(e.target.value)}></input>
              <label htmlFor="check1">Name</label>
            </span>
            <span>
              <input type="radio" 
              checked={searchBy === 'check2'} 
              value="check2" 
              onChange={(e) => setSearchBy(e.target.value)}></input>
              <label htmlFor="check2">Surname</label>
            </span>
            <span>
              <input type="radio" 
              checked={searchBy === 'check3'} 
              value="check3" 
              onChange={(e) => setSearchBy(e.target.value)}></input>
              <label htmlFor="check3">City</label>
            </span>
        </div> 
      </form>
    </article>
  )
}

export default SearchForm
