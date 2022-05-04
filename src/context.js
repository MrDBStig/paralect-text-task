import React, {useState, useContext} from "react";
import {Octokit} from '@octokit/core';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Setting up Octokit default parameters
  const octokit = new Octokit({
    auth: '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',
    accept: 'application/vnd.github.v3+json'
  });

  // Function for fetching users
  const fetchUser = async () => {
    setIsLoading(true);

    const {data} = await octokit.request('GET /users/{username}', {
      username: searchQuery,
    });
    const {followers, following, login, avatar_url:avatarUrl, name, html_url:htmlUrl} = data;

    setIsLoading(false);
    return {followers, following, login, avatarUrl, name, htmlUrl}
  }

  // Function for fetching user repos
  const fetchRepos = async () => {
    setIsLoading(true);

    const {data} = await octokit.request('GET /users/{username}/repos', {
      username: searchQuery,
    });

    setIsLoading(false);
    return data;
  }

  // Function for control form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = await fetchUser();
    const newRepos = await fetchRepos();
    setUser(newUser);
    setRepos(newRepos);
  }

  return (
    <AppContext.Provider value={{user, repos, searchQuery, isLoading, setSearchQuery, handleSubmit}}>
      {children}
    </AppContext.Provider>
  )
}

// Setting up our custom hook for Context API
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}