import React, { createContext, useState } from "react";

export const AppContext = createContext() // create context

const Provider = ({children}) => {
  const [ isEng, setIsEng ] = useState(false);

  const toggleIsEng = () => setIsEng(prevValue => !prevValue)

  return (
    <AppContext.Provider value={{isEng, toggleIsEng}}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider