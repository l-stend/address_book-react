import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  // forms toggling
  const [showAdd, setShowAdd] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  //forms toggling funcs asdasd
  const openAddForm = () => {
    setShowSearch(false)
    setShowAdd(true)
  }

  const openSearchForm = () => {
    setShowAdd(false)
    setShowSearch(true)
  }

    return (<AppContext.Provider value={{showAdd,
    openAddForm,
    showSearch,
    openSearchForm}}>
        {children}
    </AppContext.Provider>)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}