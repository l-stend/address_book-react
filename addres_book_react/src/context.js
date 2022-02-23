import React, { useContext, useState, useEffect } from "react";

//creating context
const AppContext = React.createContext();

//connection to local storage
const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  }
  else {
    return []
  }
}

const AppProvider = ({children}) => {
  // forms toggling
  const [showAdd, setShowAdd] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  //contact
  const [list, setList] = useState(getLocalStorage());
  const [card, setCard] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('')
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  //search
  const [searchResults, setSearchResults] = useState([])
  const [searchValue, setSearchValue] = useState('');

  //forms toggling funcs asdasd
  const openAddForm = () => {
    setSearchValue('')
    setShowSearch(false)
    setShowAdd(true)
  }

  const openSearchForm = () => {
    setShowAdd(false)
    setShowSearch(true)
  }

  const showList = () => {
    setSearchValue('')
    setShowAdd(false)
    setShowSearch(false)
  }

  //forms message timer
  useEffect(() => {
      const timeout = setTimeout(() => {
        setMessage('')
      }, 2000);
      return () => clearTimeout(timeout)
    }, [message])

  //list update on local storage
  useEffect(() => {
    alphaSort(list);
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  // list alphabetical order
  const alphaSort = (arr) => {
  arr.sort(function(a, b){
    if (a.firstName.toLowerCase() != b.firstName.toLowerCase()) {
      if(a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
        return -1;
      }
      if(a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
        return 1;
      }
      return 0;
  }  //this structure is taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?retiredLocale=it
    else {
      if(a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
        return -1;
      }
      if(a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
        return 1;
      }
      return 0;
    }
  });
  return arr;
}

    return (<AppContext.Provider value={{showAdd,
    openAddForm,
    showSearch,
    openSearchForm,
    showList,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    number,
    setNumber,
    city,
    setCity,
    card,
    setCard,
    list,
    setList,
    message, 
    setMessage, 
    searchResults, 
    setSearchResults,
    searchValue, 
    setSearchValue,
    }}>
        {children}
    </AppContext.Provider>)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}