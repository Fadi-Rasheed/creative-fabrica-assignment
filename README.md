# Creative Fabrica

## Project structure

```
Creative-Fabrica-Assignment
├── src
│ ├── components                        # The shared components like (Buttons, Card, Link ...etc)
│ │ ├── {ComponentName}\*\*
│ │ │ ├── index.tsx
│ │ │ ├── {ComponentName}.tsx
│ │ │ ├── {ComponentName}.types.tsx     # TS interface for props
│ │ │ ├── utils                         # (internal utils/ they could perfectly belong inside the component folder)
│ │ │ ├── __tests__
│ │ │ │  └── {ComponentName}.test.tsx
│ ├── constants                         # The common constants that could be used in multiple places
│ ├── screens                           # Combination of one or more sections that will construct the main content
│ │ ├── {screenName}\*\*
│ │ │ ├── index.tsx
│ │ │ ├── {screenName}.tsx
│ │ │ ├── {screenName}.types.tsx        # TS interface for props
│ │ │ ├── utils                         # (internal utils/ they could perfectly belong inside the screens folder)
│ │ │ ├── __tests__
│ │ │ │  └── {screenName}.test.tsx
│ ├── sections                          # The Sections of the page (Header, Footer, Hero, ...etc)
│ │ ├── {sectionName}\*\*
│ │ │ ├── index.tsx
│ │ │ ├── {sectionName}.tsx
│ │ │ ├── {sectionName}.types.tsx       # TS interface for props
│ │ │ ├── utils                         # (internal utils/ they could perfectly belong inside the sections folder)
│ │ │ ├── __tests__
│ │ │ │  └── {sectionName}.test.tsx
│ ├── services                          # The functions, configurations, and constants for the API requests
│ ├── utils                             # (Generic utils/ they could be used in multiple places)
│ ├── App.tsx
│ ├── AppErrorBoundary.tsx
│ ├── AppWrapper.tsx
│ ├── index.css
│ └── main.tsx
├── test-utils                          # Testing Utils
├── .eslintrc.yml
├── .prettier.yml
├── index.html
├── jest.config.cjs
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Developer quick start

Clone repository

Run `npm install` in order to install the required dependencies

Run `npm run dev` to start the project in dev mode.

## Build

Run `npm run build` builds the project in the dist folder.

## Testing

`npm run test` runs jest.

`npm run test:coverage` runs jest and produce a coverage report.

## External libraries

- `react` is used to simplify the project development process by employing a component-based approach. By leveraging the advantages of `JSX`, it enhances project scalability and provides access to a rich ecosystem, facilitating better development.

- `react-query` is used ini order to have automated caching and it will enhance the project's scalability.

- `react-error-boundary` is used to enhance the user experience by capturing errors without causing disruptions to the application.

- `typescript` is used to reduce bugs, enhance type safety, and increase code quality.

- `tailwindcss` is chosen for its developer-friendly approach and its ability to maintain consistent coding styles.

- `vite` is chosen for its fast development server, shorter build times, developer-friendly, and excellent documentation.

- `Jest` is used for unit test and `Testing-library` is used for rendering and writing assertions.

- `eslint` is used to enhance and enforce code quality and consistency, reducing bugs and promoting a unified and consistent code style.

- `prettier` is used to maintain a uniform code style and automating the correction of code formatting.

- `eslint` and `prettier` has been installed and configured via running `npx do-me-lint` more info [here](https://github.com/nikolai-katkov/do-me-lint).
