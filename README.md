# Users App UI React

## Table of contents

- Project description
- Project setup
- Project structure
- Improvements

---

## Project description

The project User List Page is a list of 6 users with basic information about them (It has pagination using infinite scrolling while users scroll down the page).

- Upon clicking a user entry in the User List Page, the User Details Page is open. It is possible to have more detailed information about the user.
- Upon clicking the create user button located in the page header, the User Details Page is open. Where it is possible submit a form to create a new user.

---

## Project setup

- To run the project in dev environment **"npm run dev"**. For a dev server. Navigate to http://localhost:5174/.

- To run the project in pre production environment run **"npm run build"** and **"npm run dev"**. For a pre production server. Navigate to http://localhost:5173/.

---

## Project structure

The project is using npm workspaces. The project is organized inside the root.

- **assets**: App images fooder.
- **components**: App components that will be loaded in the Project.
- **lib**: Types and Variables used throughout the project.
- **pages**: App pages.
- **routes**: File to organize the routes.
- **Theme**: Global theme project.

---

## Improvements

- Use Next.js
- Test: Use react testing library to test react components, Cypress for end to end and Jest for unit testing.
- Styles components or styled from mui.
- Beter user experience:
  - Create flow, succeeded modal with options to redirect to main page or create new user.
  - Add filters to Users List.
