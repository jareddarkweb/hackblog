# Project Plan

This document consolidates project goals, progress, and tasks from the original TODO files.

## Completed Tasks

### Blog RSS Feed Fix
- [x] Updated `blog.html` with RSS2JSON fetch logic, error handling, and dynamic post cards
- [x] Added meta tags to `posts/crypto-blog.html` for local fallback compatibility

### Security Page Revision
- [x] Updated sidebar to 2 sections (Philosophy, About Me)
- [x] Merged content sections into full-width layout with avatar left, "About Me" text right

### Repository Organization
- [x] Created standard folder structure (`src/`, `src/css/`, `src/js/`, `src/assets/images/`, `public/`, `docs/`, `.github/`)
- [x] Moved HTML files to `src/` with lowercase names
- [x] Moved CSS to `src/css/style.css`
- [x] Moved JavaScript to `src/js/script.js`
- [x] Moved images to `src/assets/images/` with normalized filenames
- [x] Moved `robots.txt` to `public/`
- [x] Added `.gitignore`, `LICENSE`, expanded `README.md`
- [x] Created `docs/CONTRIBUTING.md` and `docs/CODE_OF_CONDUCT.md`
- [x] Created GitHub issue templates

## Upcoming Tasks

- [ ] Add a proper contact form to `src/contact.html`
- [ ] Build out `src/resources.html` with curated security links
- [ ] Build out `src/company.html` with company/project details
- [ ] Add print stylesheet for `src/resume.html`
- [ ] Implement a local post system or CMS for the blog
- [ ] Add accessibility improvements (ARIA labels, color contrast)
- [ ] Add meta tags (Open Graph, Twitter Card) to all pages
- [ ] Set up a CI/CD pipeline for automatic deployment
