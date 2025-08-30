// GitHub API Service
// Note: GitHub API has rate limits for unauthenticated requests
// For production use, consider using a GitHub token

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  url: string;
  homepage: string | null;
  topics: string[];
  updated_at: string;
  image?: string;
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

/**
 * Fetch user's GitHub repositories
 */
export const fetchGitHubRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repos = await response.json();
    
    return repos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
      homepage: repo.homepage,
      topics: repo.topics || [],
      updated_at: repo.updated_at,
      image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

/**
 * Fetch user's GitHub profile
 */
export const fetchGitHubProfile = async (username: string): Promise<GitHubUser | null> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const user = await response.json();
    
    return {
      login: user.login,
      name: user.name,
      bio: user.bio,
      avatar_url: user.avatar_url,
      public_repos: user.public_repos,
      followers: user.followers,
      following: user.following,
      html_url: user.html_url
    };
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
};

/**
 * Fetch trending repositories (alternative to user repos)
 */
export const fetchTrendingRepos = async (): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch('https://api.github.com/search/repositories?q=stars:>1000&sort=stars&order=desc&per_page=6');
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.items.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
      homepage: repo.homepage,
      topics: repo.topics || [],
      updated_at: repo.updated_at,
      image: `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`
    }));
  } catch (error) {
    console.error('Error fetching trending repos:', error);
    return [];
  }
};
