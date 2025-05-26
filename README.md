# Weather App Template

> **This is a GitHub Template Repository** — click **Use this template** to begin.

---

## Features

* Modern **ES6+** JavaScript with **Webpack 5** bundling
* **Development** and **production** build configurations
* Live-reloading dev server (`webpack-dev-server`)
* **Prettier** for code formatting and **ESLint** for linting
* Supports CSS imports and HTML asset injection via **HTMLWebpackPlugin**

---

## Prerequisites

* [Node.js](https://nodejs.org/) >=14.x
* [npm](https://www.npmjs.com/) (or Yarn)

---

## Getting Started

1. **Create a new repository from this template** on GitHub (click *Use this template*).
2. **Clone** your new repo:

   ```bash
   git clone https://github.com/<YOUR-USERNAME>/<YOUR-REPO>.git
   cd <YOUR-REPO>
   ```
3. **Install** dependencies:

   ```bash
   npm install
   ```
4. **Run** the development server:

   ```bash
   npm start
   ```

   The app will open at [http://localhost:8080](http://localhost:8080) with live-reload.
5. **Build** for production:

   ```bash
   npm run build
   ```

   The optimized files will be output to the `dist/` folder.

---

## Available Scripts

Below are the scripts provided in `package.json` for common tasks:

| Command              | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| `npm run clean`      | Remove the `dist/` folder to start fresh                                       |
| `npm run prebuild`   | Run `clean` automatically before building                                      |
| `npm run build:dev`  | Build in development mode (unminified, source maps)                            |
| `npm run build:prod` | Build in production mode (optimized, minified)                                 |
| `npm run build`      | Alias for `npm run build:prod`                                                 |
| `npm start`          | Build (dev) and launch the live-reload dev server                              |
| `npm run lint`       | Run ESLint on `src/` and automatically fix linting errors                      |
| `npm run format`     | Run Prettier to format all source files (`.js`, `.jsx`, `.css`, `.html`, etc.) |

---

## Project Structure

```
├── dist/                # Production build output
├── node_modules/        # npm dependencies
├── src/                 # Source files
│   ├── index.js         # Main entry point
│   ├── index.html       # HTML template
│   └── style.css        # Stylesheet
├── webpack.common.js    # Shared Webpack config
├── webpack.dev.js       # Development config
├── webpack.prod.js      # Production config
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
└── package.json         # NPM scripts & dependencies
```

---

## License

This project is licensed under the [ISC License](LICENSE).
