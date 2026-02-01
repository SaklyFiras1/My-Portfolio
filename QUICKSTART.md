# ⚡ QUICK START GUIDE

## 🎯 Get Your Portfolio Running in 5 Minutes!

### Step 1: Install Dependencies (2-3 minutes)
```bash
cd portfolio-website
npm install
```

### Step 2: Start Development Server (30 seconds)
```bash
npm run dev
```

### Step 3: Open in Browser
Go to: **http://localhost:3000**

🎉 **That's it!** Your portfolio is running locally.

---

## ✏️ Personalize in 3 Steps

### 1. Change Your Name (1 minute)
**File**: `components/Hero.tsx`
**Line 26**: Replace `Alex Morgan` with your name

### 2. Update Contact Info (2 minutes)
**File**: `components/Contact.tsx`
- **Line 28**: Your email
- **Line 33**: Your LinkedIn
- **Line 38**: Your GitHub
- **Line 43**: Your WhatsApp

### 3. Add Your Projects (5 minutes)
**File**: `components/Projects.tsx`
- **Lines 10-48**: Update 3 project details
- Change titles, descriptions, tech stacks, and links

---

## 🚀 Deploy to Internet (FREE)

### Fastest Way: Vercel

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com/signup)
   - Sign up with GitHub

2. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "My portfolio"
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

3. **Import to Vercel**
   - Click "Import Project" on Vercel
   - Select your repository
   - Click "Deploy"
   - Wait 2-3 minutes
   - ✅ **Your site is LIVE!**

**You'll get a URL like**: `your-portfolio.vercel.app`

---

## 🎨 Most Common Edits

| What to Change | File | Approx. Line |
|----------------|------|--------------|
| Name | `Hero.tsx` | 26 |
| Title/Tagline | `Hero.tsx` | 30, 35 |
| About Bio | `About.tsx` | 45-55 |
| Skills | `Skills.tsx` | 9-35 |
| Projects | `Projects.tsx` | 10-48 |
| Work Experience | `CV.tsx` | 9-28 |
| Contact Email | `Contact.tsx` | 28 |
| Social Links | `Contact.tsx` | 28-48 |

---

## 🐛 Having Issues?

### "npm install" fails
```bash
# Try this:
npm cache clean --force
npm install
```

### Port 3000 already in use
```bash
# Use different port:
npm run dev -- -p 3001
```

### Need help?
- Check `README.md` for detailed docs
- Check `DEPLOYMENT.md` for deployment help
- Check `FOLDER_STRUCTURE.md` to understand files

---

## 📝 Before Deploying Checklist

- [ ] Changed name in Hero section
- [ ] Updated About text
- [ ] Modified at least 3 projects
- [ ] Updated contact information
- [ ] Tested locally (`npm run dev`)
- [ ] Checked mobile responsiveness
- [ ] Fixed any TypeScript errors

---

## 🎉 You're Ready!

Your portfolio has:
✅ Modern dark design
✅ Smooth animations
✅ Mobile responsive
✅ SEO optimized
✅ Fast performance
✅ Professional sections

**Now go deploy and share it with the world!** 🚀

---

**Next Steps After Deployment:**
1. Share on LinkedIn
2. Add to your resume
3. Send to recruiters
4. Update regularly with new projects

Good luck! 💪
