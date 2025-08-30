# 🚀 API Integration Setup Guide

This guide will help you set up all the APIs integrated into your portfolio application.

## 📋 **Prerequisites**

- Node.js and npm installed
- Firebase account
- Cloudinary account
- GitHub account (optional, for GitHub API)

---

## 🔥 **Phase 1: Firebase Setup**

### **Step 1: Create Firebase Project**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name (e.g., "girish-portfolio")
4. Enable Google Analytics (optional)
5. Click "Create project"

### **Step 2: Enable Services**

1. **Firestore Database**
   - Click "Firestore Database" in left sidebar
   - Click "Create database"
   - Choose "Start in test mode" (for development)
   - Select location closest to your users
   - Click "Done"

2. **Authentication**
   - Click "Authentication" in left sidebar
   - Click "Get started"
   - Click "Sign-in method"
   - Enable "Email/Password" provider
   - Click "Save"

3. **Storage**
   - Click "Storage" in left sidebar
   - Click "Get started"
   - Choose "Start in test mode"
   - Select location
   - Click "Done"

### **Step 3: Get Firebase Config**

1. Click the gear icon ⚙️ next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register app with a nickname
6. Copy the config object

### **Step 4: Update Configuration**

Open `src/config/firebase.ts` and replace the placeholder values:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id"
};
```

---

## ☁️ **Phase 2: Cloudinary Setup**

### **Step 1: Create Cloudinary Account**

1. Go to [Cloudinary](https://cloudinary.com/)
2. Click "Sign Up For Free"
3. Complete registration

### **Step 2: Get Credentials**

1. Go to Dashboard
2. Copy your **Cloud Name**
3. Copy your **API Key**
4. Copy your **API Secret**

### **Step 3: Create Upload Preset**

1. Go to "Settings" → "Upload"
2. Scroll to "Upload presets"
3. Click "Add upload preset"
4. Set "Signing Mode" to "Unsigned"
5. Give it a name (e.g., "portfolio_uploads")
6. Click "Save"

### **Step 4: Update Configuration**

Open `src/config/cloudinary.ts` and replace the placeholder values:

```typescript
export const CLOUDINARY_CONFIG = {
  cloudName: 'your-actual-cloud-name',
  apiKey: 'your-actual-api-key',
  apiSecret: 'your-actual-api-secret',
  uploadPreset: 'your-upload-preset-name'
};
```

---

## 🐙 **Phase 3: GitHub API Setup (Optional)**

### **Step 1: Get GitHub Username**

1. Note your GitHub username
2. Make sure you have public repositories

### **Step 2: Update GitHub Username**

Open `src/components/GitHubProjectsSection.tsx` and replace:

```typescript
const GITHUB_USERNAME = 'your-actual-github-username';
```

### **Step 3: Rate Limiting (Optional)**

For production use, consider creating a GitHub token:

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token
3. Add to your environment variables

---

## 🔧 **Phase 4: Environment Variables (Recommended)**

### **Step 1: Create Environment File**

Create `.env.local` in your project root:

```env
# Firebase
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id

# Cloudinary
VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
VITE_CLOUDINARY_API_KEY=your-api-key
VITE_CLOUDINARY_UPLOAD_PRESET=your-upload-preset

# GitHub
VITE_GITHUB_USERNAME=your-github-username
```

### **Step 2: Update Config Files**

Update the config files to use environment variables:

**`src/config/firebase.ts`:**
```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

**`src/config/cloudinary.ts`:**
```typescript
export const CLOUDINARY_CONFIG = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
};
```

**`src/components/GitHubProjectsSection.tsx`:**
```typescript
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'your-github-username';
```

---

## 🚀 **Phase 5: Testing the Integration**

### **Step 1: Start Development Server**

```bash
npm run dev
```

### **Step 2: Test Features**

1. **Product Upload**: Go to "THE DART" section, login as owner, try adding a product
2. **GitHub Projects**: Check if the GitHub section loads (if configured)
3. **Image Upload**: Verify images upload to Cloudinary

### **Step 3: Check Console**

Look for any error messages in the browser console and fix them.

---

## 🔒 **Security Considerations**

### **Firebase Security Rules**

Update your Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all products
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth != null; // Only authenticated users
    }
  }
}
```

### **Cloudinary Security**

- Use unsigned uploads for public images
- Consider implementing server-side upload for sensitive content
- Set up proper folder structure

---

## 🆘 **Troubleshooting**

### **Common Issues**

1. **Firebase Connection Error**
   - Check your config values
   - Ensure services are enabled
   - Check browser console for errors

2. **Image Upload Fails**
   - Verify Cloudinary credentials
   - Check upload preset name
   - Ensure file size < 5MB

3. **GitHub API Rate Limit**
   - Wait for rate limit to reset
   - Consider using a GitHub token
   - Check username spelling

4. **Build Errors**
   - Ensure all dependencies are installed
   - Check TypeScript types
   - Verify import paths

### **Debug Mode**

Enable debug logging in your services by adding console.log statements.

---

## 📚 **Next Steps**

### **Phase 2: E-commerce Integration**
- Amazon Associates API
- Flipkart Affiliate API
- eBay Finding API

### **Phase 3: Analytics & Performance**
- Google Analytics API
- Vercel Analytics API

### **Advanced Features**
- Real-time updates with Firebase
- Image optimization with Cloudinary
- Advanced GitHub integration

---

## 🎯 **Support**

If you encounter issues:

1. Check the browser console for errors
2. Verify all configuration values
3. Ensure services are properly enabled
4. Check API rate limits
5. Review Firebase/Cloudinary documentation

---

**Your portfolio is now powered by real APIs! 🎉**
