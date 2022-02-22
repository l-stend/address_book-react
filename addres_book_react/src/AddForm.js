import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './context'
import uniqid from 'uniqid'

const AddForm = () => {
  const {firstName, 
    lastName, 
    number, 
    city, 
    list, 
    card, 
    setFirstName, 
    setLastName, 
    setNumber, 
    setCity, 
    setList, 
    setCard,
    message,
    setMessage} = useGlobalContext();

  //add contact form
  const handleSubmit = (e) =>{
      e.preventDefault();
      if (firstName && lastName && number && city) {
        const newCard = {id: uniqid(), firstName, lastName, number, city};
        console.log(newCard);
        setList([...list, newCard]);
        clearForm();
        setMessage('contact added')
      }
      else {
        setMessage('try again')
      }
    }

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setNumber('')
        setCity('');
    }

  return (
    <article>
      <form className='add-form' onSubmit={handleSubmit}>
        <div className='form-item'>
          <label htmlFor='firstName'>Name :</label>
          <input type='text'
          id='firstName'
          name='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}></input>
        </div>
        <div className='form-item'>
          <label htmlFor='lastName'>Surname :</label>
          <input type='text'
          id='lastName'
          name='lastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}></input>
        </div>
        <div className='form-item'>
          <label htmlFor='number'>Number :</label>
          <input type='text'
          id='number'
          name='number'
          value={number}
          onChange={(e) => setNumber(e.target.value)}></input>
        </div>
        <div className='form-item'>
          <label htmlFor='city'>City :</label>
          <input type='text'
          id='city'
          name='city'
          value={city}
          onChange={(e) => setCity(e.target.value)}></input>
        </div>
        <button type='submit'>Add Contact</button>
      </form>
      <h4 className='message'>{message}</h4>
    </article>
  )
}

export default AddForm
