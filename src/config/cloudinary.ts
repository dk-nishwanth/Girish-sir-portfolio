// Cloudinary Configuration
// Replace these with your actual Cloudinary credentials
export const CLOUDINARY_CONFIG = {
  cloudName: 'your-cloud-name',
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  uploadPreset: 'your-upload-preset' // Optional: for unsigned uploads
};

// Cloudinary upload URL
export const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`;

// Default image transformations
export const CLOUDINARY_TRANSFORMATIONS = {
  thumbnail: 'w_300,h_300,c_fill,g_auto',
  medium: 'w_600,h_400,c_fill,g_auto',
  large: 'w_800,h_600,c_fill,g_auto'
};
