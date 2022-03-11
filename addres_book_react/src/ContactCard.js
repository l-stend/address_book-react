import React, { useState } from 'react'
import { useGlobalContext } from './context'

const ContactCard = ({id, firstName, lastName, number, city}) => {
  const {list, setList, searchResults, setSearchResults} = useGlobalContext();
  const [isCardOpen, setIsCardOpen] = useState(false);

  //remove contact
  const removeContact = (id) => {
    const newList = list.filter((card) => card.id !== id);
    setList(newList);
    const newResults = searchResults.filter((card) => card.id !== id);
    setSearchResults(newResults);
  }  
  return (
    <article className='card'>
          <div className='text-right float-right'>
              <button type='button' className='btn btn-sm btn-primary float-right' 
              onClick={() => setIsCardOpen(!isCardOpen)}>{isCardOpen ? 'close' : 'open'}</button>
          </div>
      <ul className='list-unstyled'>
        <li>
          <div className='text-center'>
            <span className='label'>name: </span>
            <span>   {firstName}</span>
          </div>
        </li>
        {isCardOpen && 
        <div className='text-center'>
          <li>
            <span className='label'>surname: </span>
            <span>   {lastName}</span>
          </li>
          <li>
            <span className='label'>number: </span>
            <span>   {number}</span>
          </li>
          <li>
            <span className='label'>city: </span>
            <span>   {city}</span>
          <div className='text-center'>
            <button className='btn btn-sm btn-danger' type='button' onClick={() => removeContact(id)}>Remove</button>
          </div>
          </li>
        </div>}
      </ul>
    </article>
  )
}

export default ContactCard
