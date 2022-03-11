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
      <form className='container text-center text-white' onSubmit={handleSubmit} 
      style={{padding: '3em 5em 1em 5em'}}>
        <div className='mb-6'>
          <label htmlFor='firstName' className='form-label'>Name</label>
          <input type='text'
          className='form-control'
          id='firstName'
          name='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}></input>
        </div>
        <div className='mb-6'>
          <label htmlFor='lastName' className='form-label'>Surname</label>
          <input type='text'
          className='form-control'
          id='lastName'
          name='lastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}></input>
        </div>
        <div className='mb-6'>
          <label htmlFor='number' className='form-label'>Number</label>
          <input type='text'
          className='form-control'
          id='number'
          name='number'
          value={number}
          onChange={(e) => setNumber(e.target.value)}></input>
        </div>
        <div className='mb-6'>
          <label htmlFor='city' className='form-label'>City</label>
          <input type='text'
          className='form-control'
          id='city'
          name='city'
          value={city}
          onChange={(e) => setCity(e.target.value)}></input>
        </div>
        <button type='submit' className='btn btn-primary' style={{marginTop: '2em'}}>Add Contact</button>
      </form>
      <h4 className='message'>{message}</h4>
    </article>
  )
}

export default AddForm
