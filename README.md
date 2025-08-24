# Medium Clone - A Modern Blogging Platform

A feature-rich Medium clone built with modern web technologies, providing a seamless reading and writing experience for bloggers and readers alike.

## 🌟 Features

- **User Authentication**: Secure signup and signin functionality
- **Blog Management**: Create, publish, and manage blog posts
- **Rich Text Editor**: Write and format blog posts with ease
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean, minimalist design inspired by Medium
- **Real-time Updates**: Dynamic content loading and updates
- **SEO Friendly**: Optimized for search engines

## 🚀 Technology Stack

### Frontend
- **React 18.3.1** - Modern UI library with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing for SPA navigation
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Smooth animations and transitions
- **Axios** - HTTP client for API communication

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and autoprefixing
- **TypeScript Compiler** - Type checking and compilation

### Backend Integration
- **Cloudflare Workers** - Serverless backend API
- **Custom NPM Package** - `@rajukumarsingh12003/medium-blog` for blog functionality

### Deployment
- **Vercel** - Frontend deployment and hosting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AppBar.tsx      # Navigation header
│   ├── Auth.tsx        # Authentication forms
│   ├── BlogCard.tsx    # Blog post preview cards
│   ├── BlogSkeleton.tsx # Loading skeletons
│   └── ui/             # UI utility components
├── pages/              # Route components
│   ├── LandingPage.tsx # Home page
│   ├── Signin.tsx      # Login page
│   ├── Signup.tsx      # Registration page
│   ├── Blogs.tsx       # Blog listing page
│   ├── Blog.tsx        # Individual blog page
│   └── Publish.tsx     # Blog creation page
├── hooks/              # Custom React hooks
│   └── index.tsx       # Blog data fetching hooks
├── lib/                # Utility functions
├── assets/             # Static assets
├── config.ts           # API configuration
└── main.tsx           # Application entry point
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajukumar2003/MEDIUM.git
   cd MEDIUM
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   - The backend URL is configured in `src/config.ts`
   - Update the `BACKEND_URL` if you have your own backend instance

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Usage

### For Readers
1. Visit the landing page to explore the platform
2. Browse published blog posts without authentication
3. Sign up to access premium features

### For Writers
1. Create an account or sign in
2. Navigate to the publish page
3. Write your blog post using the rich text editor
4. Publish and share your content

### Authentication Flow
- **Sign Up**: Create a new account with name, email, and password
- **Sign In**: Access existing account with email and password
- **Protected Routes**: Certain features require authentication

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Consistent code formatting
- Component-based architecture

## 🌐 API Integration

The frontend communicates with a Cloudflare Workers backend:
- **Base URL**: `https://backend.dev-rajukumarsingh.workers.dev`
- **Authentication**: JWT tokens stored in localStorage
- **Endpoints**: User management, blog CRUD operations

### API Endpoints Used
- `POST /api/v1/user/signup` - User registration
- `POST /api/v1/user/signin` - User authentication
- `GET /api/v1/blog/bulk` - Fetch all blogs
- `GET /api/v1/blog/:id` - Fetch specific blog
- `POST /api/v1/blog` - Create new blog post

## 🚀 Deployment

The application is configured for deployment on Vercel:
- `vercel.json` handles SPA routing
- Automatic deployments from main branch
- Environment variables for API configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Raju Kumar Singh**
- GitHub: [@rajukumar2003](https://github.com/rajukumar2003)
- Email: rajuk@gmail.com

## 🙏 Acknowledgments

- Inspired by Medium's clean and minimalist design
- Built with modern React and TypeScript best practices
- Utilizes the power of Tailwind CSS for rapid development
