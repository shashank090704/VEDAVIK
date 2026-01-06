# Veda / VEDAVIK 🌾

**A Next.js marketplace connecting Buyers and Farmers for agricultural products — with seamless registration, order management, real-time chat, and secure Razorpay payments.**

---

## What is Veda?

Veda is a digital marketplace that bridges the gap between **Buyers** (businesses, retailers, or individuals purchasing agricultural products) and **Farmers** (producers selling their crops directly). The platform eliminates middlemen, enabling:

- **Direct communication** between buyers and farmers
- **Transparent pricing** through negotiation and chat
- **Secure payments** via Razorpay integration
- **Order tracking** from creation to fulfillment

Built with modern web technologies, Veda provides an intuitive interface for both user types while maintaining robust backend security and data management.

---

## For Farmers 🚜

Farmers can register, view incoming orders, negotiate with buyers, and manage their sales pipeline.

### Farmer Journey

| Step | Page | Description | Screenshot |
|------|------|-------------|------------|
| **1. Sign Up** | `/Farmersignup` | Create a new farmer account with farm details, location, and contact information | `screenshots/signup.png` |
| **2. Login** | `/Farmerlogin` | Access your account securely with email and password | `screenshots/login.png` |
| **3. Dashboard** | `/Farmerdashboard` | Overview of pending orders, accepted orders, and account statistics | `screenshots/farmerdash.png` |
| **4. View Orders** | `/Farmerorderlist` | Browse all incoming order requests from buyers with product details and quantities | `screenshots/farmerdash.png` |
| **5. Negotiate & Chat** | `/Chating` | Chat with buyers to discuss pricing, quality, delivery terms, and finalize deals | `screenshots/chat.png` |

**How it works for Farmers:**
1. Sign up and complete your farm profile
2. Receive notifications when buyers create orders
3. Review order details (crop type, quantity, expected price)
4. Accept order or negotiate terms via chat
5. Confirm final agreement
6. Fulfill order after buyer completes payment

---

## For Buyers 🛒

Buyers can register, create orders for agricultural products, communicate with farmers, and make secure payments.

### Buyer Journey

| Step | Page | Description | Screenshot |
|------|------|-------------|------------|
| **1. Sign Up** | `/Buyersignup` | Register as a buyer with business/personal details and delivery address | `screenshots/signup.png` |
| **2. Login** | `/Buyerlogin` | Securely access your buyer account | `screenshots/login.png` |
| **3. Dashboard** | `/Buyerdashboard` | View your order history, pending requests, and account overview | `screenshots/buyerdash.png` |
| **4. Create Order** | `/Createorder` | Submit new order requests specifying crop type, quantity, quality, and budget | `screenshots/createorder.png` |
| **5. View Orders** | `/Buyerorderlist` | Track all your orders (pending, accepted, completed) in one place | `screenshots/buyerdash.png` |
| **6. Negotiate & Chat** | `/Chating` | Communicate with farmers to finalize details and negotiate pricing | `screenshots/chat.png` |


**How it works for Buyers:**
1. Sign up and add your delivery details
2. Create an order specifying what you need
3. Farmers receive your order request
4. Negotiate terms via chat if needed
5. Confirm order with selected farmer
6. Make payment through Razorpay
7. Track order fulfillment and delivery

---

## Technical Stack & Setup 💻

### Tech Stack
- **Frontend & Backend:** Next.js 14 (App Router)
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT tokens (HTTP-only cookies)
- **Password Security:** Bcrypt hashing
- **Payment Gateway:** Razorpay with server-side signature verification
- **Real-time Chat:** Message system for buyer-farmer communication

### Quick Start

```bash
# Clone the repository
git clone <repo-url>
cd VEDAVIK

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Required
MONGODB_URI=your_mongo_connection_string
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
TOKEN_SECRET=your_jwt_secret

# Optional
NEXT_PUBLIC_APP_ENV=development
```

### Key API Endpoints

**Buyer APIs:**
- `POST /api/buyer/buyersignup` - Register new buyer
- `POST /api/buyer/buyerlogin` - Buyer authentication
- `POST /api/buyer/createorder` - Create new order
- `POST /api/buyer/getlistoforder` - Fetch buyer's orders
- `POST /api/buyer/getbuyerdata` - Get buyer profile

**Farmer APIs:**
- `POST /api/farmer/farmersignup` - Register new farmer
- `POST /api/farmer/farmerlogin` - Farmer authentication
- `POST /api/farmer/getlistoforder` - Fetch orders for farmer
- `POST /api/farmer/getfarmerdata` - Get farmer profile

**Payment & Messaging:**
- `POST /api/razorpay` - Create Razorpay order
- `POST /api/verifySignature` - Verify payment signature
- `POST /api/initialmessages` - Initialize chat thread

### Project Structure

```
VEDAVIK/
├── src/
│   ├── app/
│   │   ├── api/           # API route handlers
│   │   ├── Buyerlogin/    # Buyer pages
│   │   ├── Farmerlogin/   # Farmer pages
│   │   └── ...
│   └── lib/
│       └── dbconnect.js   # MongoDB connection
├── public/
│   └── screenshots/       # UI screenshots
└── .env.local            # Environment variables
```

### Security Notes
- JWT tokens stored as HTTP-only cookies
- Passwords hashed with bcrypt
- Razorpay signature verification on server
- Use HTTPS in production
- Never commit `.env.local` to version control

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

For UI changes, please include screenshots in your PR.

---

## License

[Add your license here, e.g., MIT License]

---

## Contact & Support

For questions or support, please contact [your-email@example.com]

---

**Built with ❤️ to support farmers and promote direct agricultural trade**