# Test Automation Framework using BDD Cucumber and TypeScript for Rudderstack application

This repository contains a test automation framework using Behavior-Driven Development (BDD) with Cucumber and TypeScript. The framework is designed to be environment-aware, with separate configuration files for different environments (e.g., development, QA, production).

## Setup
1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.

## Running Tests: Only prod env works as I don't have other env creds
- To run tests for the **dev** environment, use the command: `yarn test:dev`

- To run tests for the **QA** environment, use the command: `yarn test:qa`

- To run tests for the **prod** environment, use the command: `yarn test:prod`
 


## Configuration
- Environment-specific configurations are stored in different .env files. Each environment has its own configuration file (e.g., `.env.dev`, `.env.qa`, `.env.prod`) containing variables such as base URL, credentials, etc.

## Project Structure
The project structure is organized as follows:
- `features`: Contains Gherkin feature files defining test scenarios. It also contains TypeScript files for step definitions, page objects, and other utilities.
- `.env files`: Contains environment-specific configuration files.
- `package.json`: Includes scripts for running tests in different environments.
- `wdio.conf.ts`: Configuration file contains settings and options that define how the tests should be executed.

## Dependencies
- `@cucumber/cucumber`: Cucumber framework for BDD.
- `typescript`: TypeScript compiler.
- `@types/cucumber`: TypeScript definitions for Cucumber.
- `dotenv`: For loading environment variables from `.env` files.

## Running Locally
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run tests using one of the provided scripts (`npm run test:dev`, `npm run test:qa`, `npm run test:prod`).

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

