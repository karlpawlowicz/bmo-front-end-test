# BMO Interview Test [![CI](https://github.com/karlpawlowicz/package-test/workflows/CI/badge.svg?branch=master)](https://github.com/karlpawlowicz/package-test/actions?query=workflow%3ACI+branch%3Amaster)

The app can be viewed by navigating to the S3 bucket that the master branch is configured to deploy to: http://bmo-front-end-test.s3-website.ca-central-1.amazonaws.com. The S3 bucket is not yet configured to handle any routes, such as the `/:city` route.

## Features

- Create React App - For quickly bootstrapping a React app
- GitHub Actions - For basic CI/CD
- ESLint – For linting
- Jest – For testing
- Husky - For running ESLint and Prettier on commit
- styled-components - As the CSS-in-JS library
- Redux - For state management
- Redux Thunk - For asynchronous data fetching
