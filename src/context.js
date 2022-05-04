import React, {useState, useContext} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    fetchData()
  }

  return (
    <AppContext.Provider value={{user, repos, searchQuery, isLoading, setSearchQuery, handleSubmit}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}