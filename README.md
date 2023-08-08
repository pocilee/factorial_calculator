# Factorial Calculator


## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Cypress Support](https://on.cypress.io/support)

### Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)

### Fork this repo

If you want to experiment with running this project in Continuous Integration, you'll need to [fork](https://github.com/pocilee/factorial_calculator) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/pocilee/factorial_calculator.git

## cd into the cloned repo
cd factorial_calculator

## install the node_modules
npm install
```

### Run All Test Cases (API and E2E) - In Headless Mode
- `yarn cy:run`

------------


### Run All Test Cases (API and E2E) - In Browser Mode
- `yarn cy:open`

------------


### Run All API Test Cases
- `yarn cy:api`

------------


### Run All E2E Test Cases
- `yarn cy:e2e`

------------
