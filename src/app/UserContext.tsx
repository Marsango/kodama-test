import { createContext, useContext, useState } from 'react'

const AppContext = createContext({});

export function AppProvider({ children } : any) {
  const [myGlobalProp, setMyGlobalProp] = useState('valor inicial')
  return (
    <AppContext.Provider value={{ myGlobalProp, setMyGlobalProp }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}