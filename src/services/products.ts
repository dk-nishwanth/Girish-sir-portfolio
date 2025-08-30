import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../config/firebase';

export interface Product {
  id?: string;
  name: string;
  category: string;
  description: string;
  image: string;
  link: string;
  price: string;
  rating: number;
  features: string[];
  downloads: string;
  revenue: string;
  createdAt?: any;
  updatedAt?: any;
}

/**
 * Fetch all products from Firebase
 */
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const productsRef = collection(db, 'products');
    const q = query(productsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Product[];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

/**
 * Fetch a single product by ID
 */
export const fetchProductById = async (id: string): Promise<Product | null> => {
  try {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Product;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

/**
 * Add a new product to Firebase
 */
export const addProduct = async (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<string | null> => {
  try {
    const docRef = await addDoc(collection(db, 'products'), {
      ...product,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    return docRef.id;
  } catch (error) {
    console.error('Error adding product:', error);
    return null;
  }
};

/**
 * Update an existing product
 */
export const updateProduct = async (id: string, updates: Partial<Product>): Promise<boolean> => {
  try {
    const docRef = doc(db, 'products', id);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
    
    return true;
  } catch (error) {
    console.error('Error updating product:', error);
    return false;
  }
};

/**
 * Delete a product
 */
export const deleteProduct = async (id: string): Promise<boolean> => {
  try {
    const docRef = doc(db, 'products', id);
    await deleteDoc(docRef);
    
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    return false;
  }
};

/**
 * Fetch products by category
 */
export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const productsRef = collection(db, 'products');
    const q = query(
      productsRef, 
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }) as Product)
      .filter(product => product.category === category);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
};

/**
 * Fetch latest products (limited count)
 */
export const fetchLatestProducts = async (limitCount: number = 6): Promise<Product[]> => {
  try {
    const productsRef = collection(db, 'products');
    const q = query(productsRef, orderBy('createdAt', 'desc'), limit(limitCount));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Product[];
  } catch (error) {
    console.error('Error fetching latest products:', error);
    return [];
  }
};
