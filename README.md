# hackblog

A personal cybersecurity blog and portfolio site by [Jared Douville](https://medium.com/@jareddouville) — featuring blog posts, tools, a resume, and security research.

## Project Structure

```
hackblog/
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
├── docs/
│   ├── CONTRIBUTING.md
│   ├── CODE_OF_CONDUCT.md
│   └── PROJECT_PLAN.md
├── src/
│   ├── index.html
│   ├── blog.html
│   ├── tools.html
│   ├── resume.html
│   ├── company.html
│   ├── contact.html
│   ├── resources.html
│   ├── security.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── assets/
│   │   └── images/
│   │       ├── avatar.jpg
│   │       ├── jared-douville.png
│   │       ├── iphish.png
│   │       ├── jaredpcs.png
│   │       └── paragraph-text.png
│   └── posts/
│       └── crypto-blog.html
├── public/
│   └── robots.txt
├── .gitignore
├── LICENSE
└── README.md
```

## Pages

- **Home** (`src/index.html`) — Landing page with profile and social links
- **Blog** (`src/blog.html`) — Archive of posts fetched live from Medium
- **Tools** (`src/tools.html`) — Cybersecurity tools showcase
- **Resume** (`src/resume.html`) — Professional resume / personnel file
- **Security** (`src/security.html`) — Security philosophy and disclosure policy
- **Resources** (`src/resources.html`) — Curated security resources
- **Contact** (`src/contact.html`) — Contact information
- **Company** (`src/company.html`) — Company / organization info

## Getting Started

This is a static HTML/CSS/JS website. To run it locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/jareddarkweb/hackblog.git
   cd hackblog
   ```

2. Open `src/index.html` in your browser, or serve with any static file server:
   ```bash
   npx serve src
   ```

## Contributing

Contributions are welcome! Please read [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) before submitting a pull request.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](docs/CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.
