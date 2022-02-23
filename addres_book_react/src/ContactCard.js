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
      <ul>
        <li>
            <span className='label'>name: </span>
            <span>   {firstName}</span>
            <span>
              <button type='button' onClick={() => setIsCardOpen(!isCardOpen)}>open</button>
            </span>
        </li>
        {isCardOpen && 
        <div>
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
          <div>
            <button type='button' onClick={() => removeContact(id)}>Remove</button>
          </div>
          </li>
        </div>}
      </ul>
    </article>
  )
}

export default ContactCard
