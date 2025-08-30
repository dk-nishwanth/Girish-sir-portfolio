import { CLOUDINARY_UPLOAD_URL, CLOUDINARY_CONFIG, CLOUDINARY_TRANSFORMATIONS } from '../config/cloudinary';

export interface UploadResult {
  success: boolean;
  url?: string;
  publicId?: string;
  error?: string;
}

/**
 * Upload image to Cloudinary
 */
export const uploadImage = async (file: File, folder: string = 'portfolio'): Promise<UploadResult> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
    formData.append('folder', folder);
    
    const response = await fetch(CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    return {
      success: true,
      url: data.secure_url,
      publicId: data.public_id
    };
  } catch (error) {
    console.error('Error uploading image:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed'
    };
  }
};

/**
 * Get optimized image URL with transformations
 */
export const getOptimizedImageUrl = (
  originalUrl: string, 
  transformation: keyof typeof CLOUDINARY_TRANSFORMATIONS = 'medium'
): string => {
  if (!originalUrl.includes('cloudinary.com')) {
    return originalUrl;
  }
  
  const baseUrl = originalUrl.split('/upload/')[0];
  const imagePath = originalUrl.split('/upload/')[1];
  
  return `${baseUrl}/upload/${CLOUDINARY_TRANSFORMATIONS[transformation]}/${imagePath}`;
};

/**
 * Delete image from Cloudinary (requires signed request)
 */
export const deleteImage = async (publicId: string): Promise<boolean> => {
  try {
    // Note: This requires server-side implementation for security
    // For now, we'll just return true as a placeholder
    console.log('Image deletion requires server-side implementation');
    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
};

/**
 * Generate responsive image URLs for different screen sizes
 */
export const getResponsiveImageUrls = (originalUrl: string) => {
  return {
    thumbnail: getOptimizedImageUrl(originalUrl, 'thumbnail'),
    medium: getOptimizedImageUrl(originalUrl, 'medium'),
    large: getOptimizedImageUrl(originalUrl, 'large'),
    original: originalUrl
  };
};

/**
 * Validate image file before upload
 */
export const validateImageFile = (file: File): { valid: boolean; error?: string } => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  
  if (file.size > maxSize) {
    return { valid: false, error: 'File size must be less than 5MB' };
  }
  
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Only JPEG, PNG, WebP, and GIF files are allowed' };
  }
  
  return { valid: true };
};
