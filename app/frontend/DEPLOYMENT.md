# 🚀 Deploying to GitHub Pages

This document explains how to deploy your Subedar Automobiles website to GitHub Pages.

## 📋 Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Your code pushed to a GitHub repository

## 🔧 Setup Instructions

### Step 1: Update the Homepage URL

Open `package.json` and update the `homepage` field with your actual GitHub username and repository name:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME"
```

**Example:**
```json
"homepage": "https://johndoe.github.io/ashokleyland_website"
```

### Step 2: Push Your Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Subedar Automobiles website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. That's it! The deployment will start automatically

## ⚡ Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

1. **Build** your React app whenever you push to `main`
2. **Optimize** the production bundle
3. **Deploy** to GitHub Pages
4. Make it live at your homepage URL

## 🌐 Accessing Your Website

After the first deployment completes (usually 2-5 minutes), your website will be live at:

```
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME
```

## 🔄 Making Updates

To update your website:

```bash
# Make your changes to the code

# Commit the changes
git add .
git commit -m "Describe your changes"

# Push to GitHub
git push

# GitHub Actions will automatically rebuild and redeploy
```

## 📊 Monitoring Deployments

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You'll see all deployment runs
4. Click on any run to see detailed logs

## ✅ What's Deployed

Only the optimized production build is deployed (~500KB-2MB):
- ✅ Minified JavaScript
- ✅ Optimized CSS
- ✅ Compressed images
- ✅ All necessary assets

**NOT deployed:**
- ❌ `node_modules` (257MB)
- ❌ Source code
- ❌ Development files

## 🎯 Features

- ✅ **Automatic deployment** on every push to main
- ✅ **SSL certificate** (HTTPS) provided free by GitHub
- ✅ **Fast CDN** for global access
- ✅ **Zero cost** hosting

## 🐛 Troubleshooting

**Deployment fails:**
- Check the Actions tab for error logs
- Ensure `homepage` in package.json matches your repo

**404 on page refresh:**
- Already handled! The app uses `basename` for proper routing

**Assets not loading:**
- Verify the `homepage` URL is correct in package.json

## 📝 Notes

- First deployment takes 2-5 minutes
- Subsequent deployments take 1-3 minutes
- Changes may take a few minutes to appear due to caching
- GitHub Pages supports custom domains if needed

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
