# Owner Access Instructions

## 🔐 **How to Access Owner Mode**

### 1. **Navigate to "THE DART" Section**
- Scroll down to the "THE DART" section on your portfolio website
- Look for the "Owner Access" button (it has a lock icon)

### 2. **Click "Owner Access"**
- Click the "Owner Access" button to open the authentication modal
- Enter your password: **`Girish2024!`**
- Click "Login"

### 3. **Access Granted**
- You'll see a success message: "Access Granted! Welcome back, Owner."
- The button will change to show "Owner Mode" with a green shield icon
- An "Add Product" button will appear next to it

## 🚀 **Adding New Products**

### 1. **Click "Add Product"**
- Once in owner mode, click the "Add Product" button
- A comprehensive form will open

### 2. **Fill Out the Form**
- **Product Name**: Enter the name of your product
- **Category**: Select from dropdown (Mobile App, Banking App, etc.)
- **Description**: Write a detailed description
- **Price**: Enter pricing (e.g., "Free", "$99/month", "Enterprise")
- **Features**: Enter features separated by commas
- **Product Link**: Add the URL to your product

### 3. **Submit**
- Click "Add Product" to save
- The new product will immediately appear in your portfolio

## 🔗 **Quick Links Section**

The "THE DART" section now includes a **Quick Links** area with direct access to popular e-commerce websites:
- **Amazon** - Global online marketplace
- **Flipkart** - Indian e-commerce platform
- **Myntra** - Fashion and lifestyle shopping
- **eBay** - Online auction and shopping
- **Meesho** - Social commerce platform
- **Ajio** - Fashion and lifestyle brand

These links provide visitors with quick access to major e-commerce platforms while maintaining the professional look of your portfolio.

## 🔒 **Security Features**

### **Password Protection**
- Only you know the password: **`Girish2024!`**
- No one else can access owner features without this password

### **Session Management**
- Your session expires after 24 hours
- You'll need to log in again after the session expires
- Click "Logout" to manually end your session

### **Automatic Logout**
- Sessions automatically expire for security
- If you're inactive, you'll be logged out automatically

## 🛠️ **Managing Products**

### **Edit Products**
- When hovering over product cards in owner mode, edit buttons appear
- Click the edit icon to modify existing products

### **Real-time Updates**
- All changes are applied immediately
- New products appear instantly in the portfolio
- No page refresh needed

## 📝 **Changing Your Password**

To change the password:
1. Open `src/config/owner.ts`
2. Change the `PASSWORD` value in `OWNER_CONFIG`
3. Save the file
4. Restart your development server

## 🚨 **Important Security Notes**

- **Never share your password** with anyone
- **Logout** when you're done making changes
- **Close your browser** when finished to clear the session
- The password is stored in the code - in production, use proper server-side authentication

## 🆘 **Troubleshooting**

### **Can't Access Owner Mode?**
- Make sure you're using the correct password: **`Girish2024!`**
- Check if your session has expired
- Try refreshing the page and logging in again

### **Add Product Button Not Showing?**
- Ensure you're successfully logged in as owner
- Look for the green "Owner Mode" indicator
- If not visible, try logging out and logging back in

### **Session Expired?**
- Simply click "Owner Access" again
- Enter your password to re-authenticate
- Your session will be renewed for another 24 hours

---

**Your portfolio is now secure and only you can add/edit products!** 🎉
