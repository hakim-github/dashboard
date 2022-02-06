# Dashboard

Boilerplate based on [Create React App](https://github.com/facebook/create-react-app). with

- [ ] ENV config (production, staging, dev)
- [ ] i18n
  - [ ] Localization manager integration
- [ ] Auth0 authentification
  - [ ] JWT token management
- [ ] Sentry Error Tracking
- [x] EsLint & Prettify
- [ ] E2E testing with Cypress
- [x] Deployment

## Project setup

- Clone this project
- Copy `.env.example` as `.env` file in same level
- Install dependencies using `yarn`
- Run the project in development mode using `yarn start`

## Available Scripts

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.

`yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Environment variables
- `src/config` all variables should be mapped in the respective environments
- `.env` will contain all secret variables that should not have a default value in the code.
- Variables starting with `REACT_APP` will be available browser side.
- In the .env.example all variables under 
`#Should be in github secret` should be passed to github secret and saved in the password manager under a note `project_name_env.env`


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
