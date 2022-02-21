import React from 'react'

const ContactCard = () => {
  return (
    <article className='card'>
      <ul>
        <li>
            <span className='label'>name</span>
            <span>   value</span>
        </li>
        <li>
            <span className='label'>surname</span>
            <span>   value</span>
        </li>
        <li>
            <span className='label'>number</span>
            <span>   value</span>
        </li>
        <li>
            <span className='label'>city</span>
            <span>   value</span>
        </li>
        
      </ul>
    </article>
  )
}

export default ContactCard
