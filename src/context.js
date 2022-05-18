import React, { useState, useContext, useEffect } from "react";
import { Octokit } from "@octokit/core";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // State values
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isError, setIsError] = useState(false);

  // State and variables for pagination
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [repoOffset, setRepoOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(0);
  const REPOS_PER_PAGE = 4;

  // Setting up Octokit default parameters
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_API_KEY,
    accept: "application/vnd.github.v3+json",
  });

  // Function for fetching users
  const fetchData = async (route, options) => {
    setIsLoading(true);
    try {
      const response = await octokit.request(route, options);
      if (response.status === 200) {
        setIsLoading(false);
        return response.data;
      }
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
      return null;
    }
  };

  // Function for control form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);

    const newUser = await fetchData("GET /users/{username}", {
      username: searchQuery,
    });

    if (newUser) {
      const {
        followers,
        following,
        login,
        avatar_url: avatarUrl,
        name,
        html_url: htmlUrl,
        public_repos: publicRepos,
      } = newUser;
      setUser({
        followers,
        following,
        login,
        avatarUrl,
        name,
        htmlUrl,
        publicRepos,
      });
      setPage(0);
    }
  };

  // Function for fetch and set repos
  const fetchRepos = async () => {
    if (!user) return;

    if (page > pageCount) {
      setPage(0);
    }

    const newRepos = await fetchData("GET /users/{username}/repos", {
      username: searchQuery,
      per_page: REPOS_PER_PAGE,
      page: page + 1,
    });
    if (newRepos) setRepos(newRepos);

    const pages = Math.floor(user.publicRepos / REPOS_PER_PAGE);
    setPageCount(pages);
  };

  // Fetch repos when user or page changes
  useEffect(() => {
    if (!user) return;
    fetchRepos();
  }, [page, user]);

  // Set repoOffset and endOffset
  useEffect(() => {
    setRepoOffset(page * REPOS_PER_PAGE + 1);
    setEndOffset(repoOffset + REPOS_PER_PAGE - 1);
  }, [REPOS_PER_PAGE, page, repoOffset, repos]);

  // Create breakpoints for pagination
  const getPageRange = (currentPage, pageCount) => {
    let pageRange = [];

    if (currentPage === 0) {
      pageRange.length = 0;
      pageRange.push(currentPage);
      pageRange.push(currentPage + 1);
      pageRange.push(currentPage + 2);
      return pageRange;
    }
    if (currentPage > 0 && currentPage !== pageCount) {
      pageRange.length = 0;
      pageRange.push(currentPage - 1);
      pageRange.push(currentPage);
      pageRange.push(currentPage + 1);
      return pageRange;
    }
    if (currentPage === pageCount) {
      pageRange.length = 0;
      pageRange.push(currentPage - 2);
      pageRange.push(currentPage - 1);
      pageRange.push(currentPage);
      return pageRange;
    }
  };

  // Utility function for formatting numbers greater than 1000
  const formatThousand = (num) => {
    if (num > 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    } else {
      return num;
    }
  };

  // Context Provider
  return (
    <AppContext.Provider
      value={{
        user,
        repos,
        page,
        searchQuery,
        isLoading,
        isError,
        setSearchQuery,
        pageCount,
        repoOffset,
        endOffset,
        REPOS_PER_PAGE,
        formatThousand,
        handleSubmit,
        getPageRange,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Setting up our custom hook for Context API
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
