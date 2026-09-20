# API Test Summary – Automation Exercise
- Execution date: 20 September 2026
- Tool: Postman Collection Runner
- Collection: Automation Exercise API Tests
- Scope: 5 API requests
- Result: 15 passed, 0 failed, 0 skipped, 0 execution errors

## Tested scenarios
1. Get all products
2. Search for products using a valid term
3. Search without the required parameter
4. Get all brands
5. Send an unsupported PUT request to the brands endpoint

## Observations
All 15 checks passed during this run. In both negative scenarios, Postman displayed HTTP 200 while the response body reported an error code. The missing-parameter test checks both values; the unsupported PUT test checks the response body.

## Evidence
[Postman Collection Runner screenshot](evidence/api-run-2026-09-20.png)

## Limitations
This run covered selected endpoints only. It did not include account-related endpoints, performance testing or security testing.
