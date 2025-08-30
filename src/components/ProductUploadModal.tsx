import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Image as ImageIcon, Loader2 } from 'lucide-react';
import { addProduct } from '../services/products';
import { uploadImage, validateImageFile } from '../services/images';
import { Product } from '../services/products';

interface ProductUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProductAdded: (product: Product) => void;
}

export const ProductUploadModal = ({ isOpen, onClose, onProductAdded }: ProductUploadModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    features: '',
    link: ''
  });
  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validation = validateImageFile(file);
      if (!validation.valid) {
        alert(validation.error);
        return;
      }
      
      setImageFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!imageFile) {
      alert('Please select an image for the product');
      return;
    }
    
    setIsUploading(true);
    setUploadProgress(0);
    
    try {
      // Upload image to Cloudinary
      const uploadResult = await uploadImage(imageFile, 'products');
      
      if (!uploadResult.success || !uploadResult.url) {
        throw new Error(uploadResult.error || 'Image upload failed');
      }
      
      setUploadProgress(50);
      
      // Create product object
      const newProduct: Omit<Product, 'id' | 'createdAt' | 'updatedAt'> = {
        name: formData.name,
        category: formData.category,
        description: formData.description,
        image: uploadResult.url,
        link: formData.link,
        price: formData.price,
        rating: 0,
        features: formData.features.split(',').map(f => f.trim()),
        downloads: '0',
        revenue: '$0'
      };
      
      setUploadProgress(75);
      
      // Add product to Firebase
      const productId = await addProduct(newProduct);
      
      if (!productId) {
        throw new Error('Failed to add product to database');
      }
      
      setUploadProgress(100);
      
      // Create complete product object with ID
      const completeProduct: Product = {
        id: productId,
        ...newProduct
      };
      
      // Call callback
      onProductAdded(completeProduct);
      
      // Reset form
      setFormData({
        name: '',
        category: '',
        description: '',
        price: '',
        features: '',
        link: ''
      });
      setImageFile(null);
      setImagePreview('');
      
      // Close modal
      onClose();
      
    } catch (error) {
      console.error('Error adding product:', error);
      alert(`Error adding product: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-slate-800 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-poppins font-bold text-white">Add New Product</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              disabled={isUploading}
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload Section */}
            <div>
              <label className="block text-white font-inter mb-2">Product Image</label>
              <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                {imagePreview ? (
                  <div className="space-y-4">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="w-32 h-32 object-cover rounded-lg mx-auto"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImageFile(null);
                        setImagePreview('');
                      }}
                      className="text-red-400 hover:text-red-300 text-sm"
                      disabled={isUploading}
                    >
                      Remove Image
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <ImageIcon className="w-12 h-12 text-slate-400 mx-auto" />
                    <div>
                      <p className="text-slate-400 font-inter">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-slate-500 text-sm">
                        PNG, JPG, WebP up to 5MB
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="image-upload"
                      disabled={isUploading}
                    />
                    <label
                      htmlFor="image-upload"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-inter font-medium rounded-lg cursor-pointer transition-colors"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Choose Image
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* Product Name */}
            <div>
              <label className="block text-white font-inter mb-2">Product Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter product name"
                required
                disabled={isUploading}
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-white font-inter mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                required
                disabled={isUploading}
              >
                <option value="">Select category</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Banking App">Banking App</option>
                <option value="Restaurant App">Restaurant App</option>
                <option value="Finance Platform">Finance Platform</option>
                <option value="Auction Platform">Auction Platform</option>
                <option value="Banking System">Banking System</option>
                <option value="Web Application">Web Application</option>
                <option value="Desktop Software">Desktop Software</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-white font-inter mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter product description"
                rows={3}
                required
                disabled={isUploading}
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-white font-inter mb-2">Price</label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="e.g., Free, $99/month, Enterprise"
                required
                disabled={isUploading}
              />
            </div>

            {/* Features */}
            <div>
              <label className="block text-white font-inter mb-2">Features (comma-separated)</label>
              <input
                type="text"
                value={formData.features}
                onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Feature 1, Feature 2, Feature 3"
                required
                disabled={isUploading}
              />
            </div>

            {/* Product Link */}
            <div>
              <label className="block text-white font-inter mb-2">Product Link</label>
              <input
                type="url"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="https://example.com/product"
                required
                disabled={isUploading}
              />
            </div>

            {/* Upload Progress */}
            {isUploading && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-inter font-semibold rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  'Add Product'
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white font-inter font-semibold rounded-xl transition-colors disabled:opacity-50"
                disabled={isUploading}
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
