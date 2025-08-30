// Owner Configuration
// Change this password to secure your owner access
export const OWNER_CONFIG = {
  PASSWORD: 'Girish2024!', // Change this to your desired password
  SESSION_KEY: 'ownerAuthenticated',
  SESSION_DURATION: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
};

// Security note: In production, this should be stored securely on the server
// and authentication should be handled through proper API endpoints
