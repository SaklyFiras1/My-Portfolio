# Developer Portfolio Website

A modern, responsive full-stack developer portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, dark UI with smooth animations and gradients
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Performance Optimized**: Built with Next.js App Router for optimal performance
- **Type-Safe**: Written in TypeScript for better developer experience
- **Component-Based**: Modular, reusable React components
- **Image Slider**: Interactive project gallery with Swiper.js
- **SEO Ready**: Proper meta tags and semantic HTML

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Main page combining all sections
│   └── globals.css        # Global styles and utilities
├── components/
│   ├── Navbar.tsx         # Navigation with mobile menu
│   ├── Hero.tsx           # Hero section with CTA
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills with progress bars
│   ├── Services.tsx       # Services offered
│   ├── Projects.tsx       # Projects with image slider
│   ├── CV.tsx             # Resume/CV section
│   ├── Contact.tsx        # Contact form and info
│   └── Footer.tsx         # Footer with links
├── public/                # Static assets (add images here)
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── README.md             # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Slider**: Swiper.js
- **Fonts**: Google Fonts (Inter, Orbitron)

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

### Step 2: Run Development Server

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Step 3: Build for Production

```bash
npm run build
npm run start
```

## 🎨 Customization

### Update Personal Information

1. **Name & Title**: Edit `components/Hero.tsx`
2. **About Text**: Edit `components/About.tsx`
3. **Skills**: Modify the skills arrays in `components/Skills.tsx`
4. **Projects**: Update project data in `components/Projects.tsx`
5. **CV Details**: Edit experience and education in `components/CV.tsx`
6. **Contact Info**: Update contact methods in `components/Contact.tsx`

### Change Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  accent: {
    500: '#00d9ff', // Change this to your preferred color
    600: '#00b8d9',
    700: '#0097b3',
  },
}
```

### Add Your Images

Replace placeholder images in components with your own:
- Add images to `/public/images/` folder
- Update image paths in components

### Connect Contact Form

In `components/Contact.tsx`, replace the `handleSubmit` function to connect to your backend or email service (e.g., EmailJS, SendGrid, Formspree).

## 🚀 Deployment on Vercel (FREE)

### Method 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Done! Your site is live

### Method 2: Deploy with Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Login to your Vercel account
   - Answer setup questions
   - Your site will be deployed

### Custom Domain (Optional)

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS settings as instructed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Key Sections Included

1. ✅ **Hero Section** - Name, title, tagline, CTA buttons
2. ✅ **About Section** - Professional bio and stats
3. ✅ **Skills Section** - Frontend, Backend, Tools with progress bars
4. ✅ **Services Section** - 5 services you offer
5. ✅ **Projects Section** - 3 featured projects with image sliders
6. ✅ **CV Section** - Experience, education, technologies
7. ✅ **Contact Section** - Form and contact methods
8. ✅ **Footer** - Links and social media

## 🔧 Troubleshooting

### Port 3000 is already in use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or run on different port
npm run dev -- -p 3001
```

### Images not loading

- Make sure image URLs are correct
- Check if external domains are added to `next.config.js`

### Build errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

## 📝 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Alex Morgan**
- Email: alex.morgan@example.com
- LinkedIn: [linkedin.com/in/alexmorgan](https://linkedin.com)
- GitHub: [github.com/alexmorgan](https://github.com)

---

Built with ❤️ using Next.js and Tailwind CSS
