# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




######################################################################################################################################


# 🚀 Multi‑Theme React App

*React · TypeScript · Tailwind CSS · Theme Context · GitHub Pages*

---

## 🔍 Overview

This beginner‑friendly React project demonstrates a **Multi‑Theme Switcher App** built with:

- A header, hero section, and a responsive **product card grid**
- **Theme switching** (Light / Dark / Colorful) powered by React Context and persisted via `localStorage`
- Mobile‑first responsiveness using **Tailwind CSS**
- **React Router (v6)** for navigation between Home, About, and Contact pages

## 🛠️ Features

| Feature                       | Description                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| `ThemeContext` + `useEffect` | Handles theme state globally and preserves it across browser reloads         |
| Tailwind CSS grid utilities  | `grid-cols-1`, `sm:grid-cols-2`, `md:grid-cols-3` adapt cards across breakpoints |
| Reusable `Card` component    | Displays product image, title, short description, and a button               |
| React Router v6              | Leverages `<BrowserRouter>`, `<Routes>`, and `<NavLink>`                    |
| No authentication/login      | Public static frontend; no credentials needed                               |

## 📥 Live Demo *(Optional)*

> If deployed via GitHub Pages, replace these placeholders:

**Demo URL**  
`https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/`

**Test Credentials**  
_No login required — it’s a public frontend app._

---

## 🧩 Project Structure

/multi-theme-switcher
│
├── public/
│ └── index.html
│
├── src/
│ ├── index.tsx # App entry: renders <App /> within <ThemeProvider>
│ ├── index.css # Tailwind imports + 3 theme CSS variables
│ ├── App.tsx # Defines navigation routes & layout
│ │
│ ├── context/
│ │ └── ThemeContext.tsx # React context for theme peristence & switching
│ │
│ ├── components/
│ │ ├── Header.tsx # Navbar with theme dropdown + page links
│ │ └── Card.tsx # Reusable product card UI component
│ │
│ └── pages/
│ ├── Home.tsx # Hero + card grid (satisfies PDF “Main Content” spec)
│ ├── About.tsx # Simple about page
│ └── Contact.tsx # Simple contact page
│
├── craco.config.js # Injects Tailwind/postcss into CRA without ejecting
├── tailwind.config.js # Config with content: ['./src/**/*.{ts,tsx}']
└── package.json

---

## 🚧 Getting Started

### Step 1: Clone & Install

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
npm install

Step 2: Tailwind CSS + CRACO Setup
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 @craco/craco

#####Add to package.json:

json
Copy
Edit
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
}

#####craco.config.js should include:

js
Copy
Edit
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};

Step 3: Initialize Tailwind Config (v3)
bash
Copy
Edit
npx tailwindcss init -p



Then in tailwind.config.js, use:

js
Copy
Edit
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};


Step 4: Run Locally
bash
Copy
Edit
npm start
Open http://localhost:3000 to view the app.





