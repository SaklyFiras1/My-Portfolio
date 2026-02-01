# 📁 COMPLETE FOLDER STRUCTURE

```
portfolio-website/
│
├── 📂 app/                          # Next.js App Router directory
│   ├── layout.tsx                   # Root layout (fonts, metadata)
│   ├── page.tsx                     # Home page (combines all sections)
│   ├── globals.css                  # Global styles, animations, utilities
│   └── favicon.ico                  # (add your favicon here)
│
├── 📂 components/                   # React components
│   ├── Navbar.tsx                   # Navigation bar with mobile menu
│   ├── Hero.tsx                     # Hero section with name & CTA
│   ├── About.tsx                    # About section with bio
│   ├── Skills.tsx                   # Skills with progress bars
│   ├── Services.tsx                 # Services offered (5 cards)
│   ├── Projects.tsx                 # Projects with image slider
│   ├── CV.tsx                       # Resume/CV section
│   ├── Contact.tsx                  # Contact form & info
│   └── Footer.tsx                   # Footer with links
│
├── 📂 public/                       # Static files (add your assets here)
│   ├── images/                      # Your images folder
│   │   ├── profile.jpg              # (add your profile photo)
│   │   ├── project1.jpg             # (add project screenshots)
│   │   ├── project2.jpg
│   │   └── project3.jpg
│   └── cv.pdf                       # (add your CV/Resume PDF)
│
├── 📂 node_modules/                 # Dependencies (auto-generated)
│
├── 📂 .next/                        # Build output (auto-generated)
│
├── 📄 package.json                  # Project dependencies & scripts
├── 📄 package-lock.json             # Locked dependency versions
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 tailwind.config.js            # Tailwind CSS configuration
├── 📄 postcss.config.js             # PostCSS configuration
├── 📄 next.config.js                # Next.js configuration
├── 📄 .eslintrc.json                # ESLint configuration
├── 📄 .gitignore                    # Git ignore rules
├── 📄 README.md                     # Project documentation
├── 📄 DEPLOYMENT.md                 # Deployment guide
└── 📄 FOLDER_STRUCTURE.md           # This file

```

---

## 📝 FILE DESCRIPTIONS

### Core Configuration Files

| File | Purpose | Edit? |
|------|---------|-------|
| `package.json` | Lists all project dependencies | Only if adding new packages |
| `tsconfig.json` | TypeScript settings | ❌ No need to edit |
| `tailwind.config.js` | Customize colors, fonts, animations | ✅ Edit to change theme |
| `next.config.js` | Next.js settings, image domains | ✅ Edit if adding external images |
| `.eslintrc.json` | Code linting rules | ❌ No need to edit |
| `.gitignore` | Files to exclude from Git | ❌ No need to edit |

### App Directory

| File | Purpose | Edit? |
|------|---------|-------|
| `app/layout.tsx` | Root layout, fonts, metadata | ✅ Edit metadata (title, description) |
| `app/page.tsx` | Main page combining all sections | ❌ Already combines all components |
| `app/globals.css` | Global styles, custom utilities | ✅ Edit for custom styling |

### Components (All editable! ✅)

| Component | What It Contains | Lines to Edit |
|-----------|------------------|---------------|
| `Navbar.tsx` | Navigation menu | Links, logo |
| `Hero.tsx` | Your name, title, tagline, CTA buttons | Name (line 26), Title (line 30), Tagline (line 35) |
| `About.tsx` | Biography, stats | Biography text, stats (years, projects, clients) |
| `Skills.tsx` | Frontend/Backend/Tools skills | Skill names and percentages |
| `Services.tsx` | 5 services you offer | Service titles, descriptions, features |
| `Projects.tsx` | 3 featured projects | Project details, images, links |
| `CV.tsx` | Experience, education, tech stack | Work history, education, technologies |
| `Contact.tsx` | Contact form, email, social links | Email, LinkedIn, GitHub, WhatsApp |
| `Footer.tsx` | Footer links, social media | Links, copyright info |

---

## 🎯 WHERE TO ADD YOUR CONTENT

### 1. Your Photos/Images
**Location**: `public/images/`

**What to add:**
- `profile.jpg` - Your professional photo
- `project1.jpg` - Screenshot of first project
- `project2.jpg` - Screenshot of second project
- `project3.jpg` - Screenshot of third project

**How to use in code:**
```tsx
<img src="/images/profile.jpg" alt="Your name" />
```

### 2. Your CV/Resume PDF
**Location**: `public/cv.pdf`

**Update download link in:**
- `components/Hero.tsx` (line 14)
- `components/CV.tsx` (line 83)

```tsx
// Change this:
alert('CV download would start here')

// To this:
window.open('/cv.pdf', '_blank')
```

### 3. Replace Placeholder Images

Current placeholder images use Unsplash. Replace with your own:

**In `components/About.tsx` (line 33):**
```tsx
// Replace this URL:
src="https://images.unsplash.com/..."

// With your image:
src="/images/profile.jpg"
```

**In `components/Projects.tsx` (lines 16, 30, 44):**
```tsx
// Replace project images
image: '/images/project1.jpg',
screenshots: [
  '/images/project1-1.jpg',
  '/images/project1-2.jpg',
  '/images/project1-3.jpg',
]
```

---

## 🔧 CUSTOMIZATION PRIORITY

### High Priority (Must Change)
1. ✅ **Name** - `components/Hero.tsx` line 26
2. ✅ **Contact Info** - `components/Contact.tsx`
3. ✅ **Projects** - `components/Projects.tsx`
4. ✅ **About Text** - `components/About.tsx`

### Medium Priority (Should Change)
5. ✅ **Skills** - `components/Skills.tsx`
6. ✅ **Work Experience** - `components/CV.tsx`
7. ✅ **Services** - `components/Services.tsx`

### Low Priority (Optional)
8. ⚪ **Colors** - `tailwind.config.js`
9. ⚪ **Fonts** - `app/layout.tsx`
10. ⚪ **Animations** - `app/globals.css`

---

## 📦 Dependencies Explained

### Production Dependencies
- `next` - React framework
- `react` - UI library
- `react-dom` - React DOM renderer
- `swiper` - Image slider for projects
- `lucide-react` - Beautiful icons

### Development Dependencies
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixes
- `eslint` - Code quality

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

---

## 💡 Tips

1. **Don't edit** files in `.next/` or `node_modules/` - they're auto-generated
2. **Do edit** files in `components/` - that's your content
3. **Images** go in `public/` directory
4. **Always test locally** before deploying (run `npm run dev`)
5. **Commit often** to Git - small changes are easier to track

---

## 📚 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

---

This structure is designed for easy customization and maintenance. Happy coding! 🎉
