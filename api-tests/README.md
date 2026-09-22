# API Tests – Postman
This directory contains positive and negative API tests for the [Automation Exercise API](https://automationexercise.com/api_list).

## Files
- `automation-exercise-api-tests.postman_collection.json` – Postman collection
- `api-test-summary-report.md` – test execution summary
- `evidence/api-run-2026-09-20.png` – Postman Collection Runner result

## Covered scenarios
1. Get all products
2. Search for products using a valid term
3. Search without the required parameter
4. Get all brands
5. Send an unsupported PUT request to the brands endpoint

## Running the tests
1. Import `automation-exercise-api-tests.postman_collection.json` into Postman.
2. Open the imported collection.
3. Verify that the `baseUrl` collection variable is set to `https://automationexercise.com`.
4. Select **Run collection**.
5. Run the complete collection.

## Latest execution result
- Requests executed: 5
- Checks executed: 15
- Passed: 15
- Failed: 0
- Skipped: 0
- Execution errors: 0

See the [API test summary report](api-test-summary-report.md) for details.
