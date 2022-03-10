import React from 'react';
import ContactCard from './ContactCard';
import { useGlobalContext } from './context';

const ContactList = () => {
  const { list, searchValue, searchResults } = useGlobalContext();
  return (
    <section>
      <div className='text-center text-white'>
        <h4>Contact List</h4>
      </div>
      {(searchValue &&
        searchResults.map((card) => {
          const { id } = card;
          return (
            <div key={id} className='card'>
              <ContactCard {...card} />
            </div>
          );
        })) ||
        (list &&
          list.map((card) => {
            const { id } = card;
            return (
              <div key={id} className='card'>
                <ContactCard {...card} />
              </div>
            );
          }))}
    </section>
  );
};

export default ContactList;
