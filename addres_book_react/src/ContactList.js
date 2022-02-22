import React from 'react'
import ContactCard from './ContactCard'
import { useGlobalContext } from './context'

const ContactList = () => {
  const {list} = useGlobalContext();
  return (
    <section className='contact-list'>
      <div>
        <h4>Contact List</h4>
      </div>
      {list.map((card) => {
        const { id } = card
        return (
          <div key={id}>
            <ContactCard />
          </div>
        )
      })}
    </section>
  )
}

export default ContactList
