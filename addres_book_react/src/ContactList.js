import React from 'react'
import ContactCard from './ContactCard'
import { useGlobalContext } from './context'

const ContactList = () => {
  const {list, searchValue, searchResults} = useGlobalContext();
  return (
    <section className='contact-list'>
      <div>
        <h4>Contact List</h4>
      </div>
      {searchValue && (searchResults.map((card) => {
        const { id } = card
        return (
          <div key={id} className='card'>
            <ContactCard {...card}/>
          </div>
        )
      })) || list && (list.map((card) => {
        const { id } = card
        return (
          <div key={id} className='card'>
            <ContactCard {...card}/>
          </div>
        )
      }))}
    </section>
  )
}

export default ContactList


//list && list.map... non dava errore
//sistema gli stati nel context e prova a renderizzare la lista filtrata(quando presente) invece della completa
//forse è meglio usare il terimine di ricerca come trigger per render lista filtrata