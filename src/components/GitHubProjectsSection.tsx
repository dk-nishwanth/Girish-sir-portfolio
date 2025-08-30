import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, GitBranch, Calendar, Code, Loader2 } from 'lucide-react';
import { fetchGitHubRepos, fetchGitHubProfile, GitHubRepo, GitHubUser } from '../services/github';

export const GitHubProjectsSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [profile, setProfile] = useState<GitHubUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Replace with your actual GitHub username
  const GITHUB_USERNAME = 'your-github-username';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Fetch both profile and repositories
        const [profileData, reposData] = await Promise.all([
          fetchGitHubProfile(GITHUB_USERNAME),
          fetchGitHubRepos(GITHUB_USERNAME)
        ]);
        
        setProfile(profileData);
        setRepos(reposData);
        
      } catch (err) {
        setError('Failed to fetch GitHub data. Please check your username or try again later.');
        console.error('Error fetching GitHub data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'bg-yellow-400',
      'TypeScript': 'bg-blue-600',
      'Python': 'bg-blue-500',
      'Java': 'bg-orange-500',
      'C++': 'bg-pink-600',
      'C#': 'bg-purple-600',
      'Go': 'bg-cyan-500',
      'Rust': 'bg-orange-600',
      'PHP': 'bg-purple-500',
      'Ruby': 'bg-red-500',
      'Swift': 'bg-orange-400',
      'Kotlin': 'bg-purple-400',
      'Dart': 'bg-blue-400',
      'HTML': 'bg-orange-600',
      'CSS': 'bg-blue-500',
      'SCSS': 'bg-pink-500'
    };
    
    return colors[language || ''] || 'bg-gray-500';
  };

  if (isLoading) {
    return (
      <section className="min-h-screen py-20 relative overflow-hidden bg-gradient-hero">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
              <p className="text-gray-300 font-inter">Loading GitHub projects...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen py-20 relative overflow-hidden bg-gradient-hero">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center">
            <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-poppins font-bold text-red-400 mb-4">
                Unable to Load Projects
              </h3>
              <p className="text-gray-300 font-inter mb-4">{error}</p>
              <p className="text-sm text-gray-400">
                Please check your GitHub username in the configuration or try again later.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">
            GitHub Projects
          </h2>
          <p className="text-xl text-gray-300 font-inter max-w-4xl mx-auto leading-relaxed mb-8">
            Real-time projects and contributions from my GitHub profile
          </p>
          
          {/* GitHub Profile Card */}
          {profile && (
            <motion.div
              className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <img 
                  src={profile.avatar_url} 
                  alt={profile.name || profile.login}
                  className="w-16 h-16 rounded-full border-2 border-blue-500/30"
                />
                <div className="text-left">
                  <h3 className="text-xl font-poppins font-bold text-white">
                    {profile.name || profile.login}
                  </h3>
                  {profile.bio && (
                    <p className="text-gray-300 font-inter text-sm mb-2">
                      {profile.bio}
                    </p>
                  )}
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Code className="w-4 h-4" />
                      <span>{profile.public_repos} repos</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <GitBranch className="w-4 h-4" />
                      <span>{profile.followers} followers</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{profile.following} following</span>
                    </span>
                  </div>
                </div>
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-inter font-medium rounded-lg transition-colors flex items-center space-x-2"
                >
                  <span>View Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Repository Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
                {repo.image ? (
                  <img 
                    src={repo.image} 
                    alt={repo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-30">📁</div>
                  </div>
                )}
                
                {/* Language Badge */}
                {repo.language && (
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 ${getLanguageColor(repo.language)} text-white text-sm font-inter rounded-full border border-white/30 backdrop-blur-sm flex items-center space-x-2`}>
                      <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                      {repo.language}
                    </span>
                  </div>
                )}

                {/* Stats */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-white/80">
                  <span className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    {repo.stars}
                  </span>
                  <span className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <GitBranch className="w-3 h-3 text-blue-400" />
                    {repo.forks}
                  </span>
                </div>
              </div>

              {/* Repository Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-poppins font-bold text-white group-hover:text-blue-400 transition-colors">
                  {repo.name}
                </h3>

                {repo.description && (
                  <p className="text-gray-300 font-inter text-sm leading-relaxed line-clamp-3">
                    {repo.description}
                  </p>
                )}

                {/* Topics */}
                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.slice(0, 3).map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 text-xs text-gray-300 font-inter rounded-lg backdrop-blur-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* Updated Date */}
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Calendar className="w-3 h-3" />
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <motion.a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-inter font-medium rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg w-full justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-poppins font-bold text-white mb-4">
              Want to see more projects?
            </h3>
            <p className="text-xl text-gray-300 font-inter mb-8 max-w-2xl mx-auto">
              Check out my complete GitHub profile for more repositories, contributions, and open source work.
            </p>
            <motion.a
              href={profile?.html_url || 'https://github.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-poppins font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
