<h1 align="center">🌿 Olive Branch Web</h1>

<p align="center">
  Frontend for <strong>Olive Branch – Palestine Humanitarian Hub</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML-Frontend-orange" />
  <img src="https://img.shields.io/badge/CSS-Styling-blue" />
  <img src="https://img.shields.io/badge/JavaScript-Frontend-yellow" />
  <img src="https://img.shields.io/badge/Playwright-E2E-brightgreen" />
  <img src="https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-blue" />
  <img src="https://img.shields.io/badge/Render-Deploy-black" />
</p>



<p align="center">
  <a href="https://github.com/xeffie/olive-branch-web">Frontend Repository</a>
  •
  <a href="https://github.com/xeffie/olive-branch-api">Backend Repository</a>
</p>

---

<p align="center">
<img width="600" height="350" alt="image" src="https://github.com/user-attachments/assets/de006df4-1511-4ef4-9cae-ff4cc3e1959a" />
</p>

## About the Project

**Olive Branch – Palestine Humanitarian Hub** is a web application designed as a directory for humanitarian aid organizations.

The project was created as part of a CI/CD course assignment with the goal of building a complete development workflow, from feature development and automated testing to separate DEV and PROD deployments.

The application consists of two independently deployed parts:

- **Olive Branch Web** – HTML, CSS and JavaScript frontend
- **Olive Branch API** – Java and Spring Boot REST API

The two applications communicate through HTTP requests and are maintained in separate GitHub repositories with independent CI/CD pipelines.

---

## Project Repositories

This project is split into two repositories:

**Frontend**  
🌿 [olive-branch-web](https://github.com/xeffie/olive-branch-web)

**Backend API**  
⚙️ [olive-branch-api](https://github.com/xeffie/olive-branch-api)

---

## Architecture

```text
User
  ↓
Olive Branch Web
HTML / CSS / JavaScript
  ↓
REST API / JSON
  ↓
Olive Branch API
Java / Spring Boot
```
## Development Workflow

The project follows a branch-based development workflow:

```text
Feature / Fix Branch
        ↓
   Pull Request
        ↓
 Automated Tests
        ↓
       DEV
        ↓
   Pull Request
        ↓
       MAIN
        ↓
 Production Deploy
```

Pull requests are used before merging changes, allowing automated tests to verify the code before it moves further through the pipeline.

### CI/CD Design

A few key decisions were made when designing the pipeline:

- Frontend and backend are kept in separate repositories and have independent pipelines.
- DEV and PROD are deployed as separate environments.
- E2E tests run on pull requests to detect issues before merge.
- Production E2E smoke tests run after deployment to verify the deployed application.
- Playwright uses an environment-based `BASE_URL`, allowing the same tests to run against different environments.

---

## Live Environments

### DEV WEB

```text
https://olive-branch-web-dev.onrender.com
```
### PROD WEB

```text
https://olive-branch-web-prod.onrender.com
```
---
## End-to-End Testing

Playwright is used to test the application from the user's perspective and to verify that the frontend behaves correctly together with the backend.

The main E2E workflow runs on pull requests targeting the `dev` branch. In this workflow, the current frontend code from the pull request is started locally in GitHub Actions and tested against the deployed DEV backend. The purpose of these tests is to detect problems before the code is merged into `dev`.

The E2E tests verify important user flows such as loading the application, displaying humanitarian organizations and filtering organizations by category.

A separate production E2E workflow is also used after the PROD deployment has completed. This acts as a smaller smoke test against the deployed production environment. Instead of testing the pull request code locally, Playwright opens the live PROD frontend, which communicates with the PROD backend.

The two E2E workflows have different purposes: the DEV E2E tests are used to catch errors before merge, while the production smoke test is used to verify that the deployed application is working correctly after release.

Playwright uses an environment-based `BASE_URL`, which allows the same test setup to run against different frontend environments.

---
## Future Improvements
Possible future improvements include:
- Search functionality
- Additional filtering options
- Improved responsive design
- More detailed organization pages
- Loading and error states
- Accessibility improvements
- Additional production smoke tests
- Verified humanitarian organization data
