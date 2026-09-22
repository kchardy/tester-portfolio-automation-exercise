# Automated UI Tests – Playwright
This directory contains automated UI tests for the [Automation Exercise](https://automationexercise.com/) website.

## Technologies
- Playwright Test
- TypeScript
- Chromium
- Node.js and npm

## Covered scenarios
1. Displaying the product catalogue and search field
2. Searching for products
3. Adding a product to the cart
4. Verifying the product and quantity in the cart
5. Rejecting login with invalid credentials

## Project structure
- `products.spec.ts` – product catalogue, search and add-to-cart tests
- `cart.spec.ts` – cart contents test
- `login.spec.ts` – negative login test
- `helpers/consent.ts` – optional consent-dialog handling

## Installation
1. Run `npm ci`.
2. Run `npx playwright install chromium`.

## Running the tests
- Run all tests in headless mode: `npm test`
- Run all tests with a visible browser: `npm run test:headed`

## Notes
The tests use `https://automationexercise.com` as the base URL.

The website places its product-search field inside the `advertisement` section. A content blocker may hide this section, so content blocking may need to be disabled for this website when running the tests.