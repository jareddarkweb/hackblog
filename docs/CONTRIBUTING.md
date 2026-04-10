# Contributing to hackblog

Thank you for your interest in contributing to hackblog! This document outlines guidelines to help make the contribution process smooth and effective.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue using the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md) and include:
- A clear description of the problem
- Steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots if applicable

### Suggesting Features

Feature requests are welcome! Open an issue using the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) with:
- A clear description of the feature
- The problem it solves
- Any alternatives you considered

### Submitting Pull Requests

1. Fork the repository and create your branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following the code style guidelines below.

3. Test your changes by opening `src/index.html` (or the relevant page) in a browser.

4. Commit your changes with a clear message:
   ```bash
   git commit -m "feat: add new security resource links"
   ```

5. Push to your fork and open a pull request against `main`.

## Code Style Guidelines

- **HTML**: Use semantic HTML5 elements; keep indentation at 4 spaces.
- **CSS**: Follow existing naming conventions; keep styles co-located with their pages where practical, or in `src/css/style.css` for shared styles.
- **JavaScript**: Keep scripts minimal and performant; avoid third-party dependencies unless necessary.
- **Images**: Place new images in `src/assets/images/` using lowercase, hyphen-separated filenames.
- **File naming**: Use lowercase, hyphen-separated names for all files.

## Project Structure

See [README.md](../README.md) for the full project structure.

## Code of Conduct

By participating in this project, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md).
