# GEMINI.md

## Project Overview

This project is a simple command-line shopping cart application for a fruit store. It is written in TypeScript and runs on Node.js.

The application displays a menu of fruits with their prices, allows users to add items to their cart, and then prints a final bill.

The project is structured with a main entry point in `index.ts` and data models (classes for `Product`, `Cart`, and `CartItem`) in the `entity` directory.

## Building and Running

### Prerequisites

*   Node.js and npm

### Installation

To install the dependencies, run:

```bash
npm install
```

### Building the Project

To compile the TypeScript code, run:

```bash
npm run build
```

This will create a `dist` directory with the compiled JavaScript files.

### Running the Application

To run the application, use the following command:

```bash
npm start
```

This command will first build the project and then run the main application file (`dist/index.js`).

### Testing

There are no tests configured for this project.

## Development Conventions

*   The project uses TypeScript with ES6 features.
*   Code is organized into classes.
*   The `tsconfig.json` is configured to compile to `commonjs` modules in the `dist` directory.
*   The code is not formatted by any linter or formatter.
