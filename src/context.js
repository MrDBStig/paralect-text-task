import React, {useState, useContext} from "react";
import {Octokit} from '@octokit/core';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  // State values
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isError, setIsError] = useState(false);

  // Setting up Octokit default parameters
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_API_KEY,
    accept: 'application/vnd.github.v3+json'
  });

  // Function for fetching users and repos
  const fetchRepos = async (route, options) => {
    setIsLoading(true)
    try {
      const response = await octokit.request(route, options);
      // console.log(response)
      if (response.status === 200) {
        setIsLoading(false)
        return response.data;
      }
    } catch (e) {
      setIsLoading(false)
      setIsError(true)
      return null;
    }
  }

  // Function for control form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsError(false)

    const newUser = await fetchRepos('GET /users/{username}', {username: searchQuery});
    const newRepos = await fetchRepos('GET /users/{username}/repos', {username: searchQuery});

    if (newUser) {
      const {
        followers,
        following,
        login,
        avatar_url: avatarUrl,
        name,
        html_url: htmlUrl,
        public_repos: publicRepos
      } = newUser;
      setUser({followers, following, login, avatarUrl, name, htmlUrl, publicRepos});
    }

    if (newRepos) setRepos(newRepos);
  }

  // Utility function for formatting numbers greater than 1000
  const formatThousand = (num) => {
    if (num > 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    } else {
      return num;
    }
  }

  // Context Provider
  return (
    <AppContext.Provider
      value={{user, repos, page, searchQuery, isLoading, isError, setSearchQuery, formatThousand, handleSubmit}}>
      {children}
    </AppContext.Provider>
  )
}

// Setting up our custom hook for Context API
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}