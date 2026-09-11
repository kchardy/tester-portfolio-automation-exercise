# Test Summary Report – Automation Exercise

## 1. Project Overview
This report summarizes the results of manual functional testing performed on the Automation Exercise web application.

- Application: [Automation Exercise](https://www.automationexercise.com/)
- Test type: Manual functional testing
- Platform: Web
- Test environment: Desktop browser on Windows
- Execution period: 30 August–7 September 2026
- Tester: Katarzyna Chardy
- Execution status: Completed

## 2. Test Objective
The objective of testing was to verify selected user flows and identify functional or usability issues in the following areas:

- User registration
- Login and logout
- Product listing and search
- Product reviews
- Shopping cart
- Checkout and payment
- Cart preservation after registration

## 3. Test Execution Summary
| Status | Number of test cases | Percentage |
|---|---:|---:|
| Passed | 16 | 72.7% |
| Failed | 6 | 27.3% |
| Blocked | 0 | 0% |
| Not Run | 0 | 0% |
| **Total** | **22** | **100%** |

## 4. Results by Module
| Module | Total | Passed | Failed |
|---|---:|---:|---:|
| Registration | 3 | 3 | 0 |
| Login | 4 | 4 | 0 |
| Products | 5 | 3 | 2 |
| Cart | 4 | 3 | 1 |
| Cart / Registration | 1 | 1 | 0 |
| Product Review | 3 | 2 | 1 |
| Payment | 2 | 1 | 1 |
| **Total** | **22** | **16** | **6** |

Detailed test cases and execution results are available in the [`test-cases`](../test-cases) directory.

## 5. Defect Summary
Six defects were identified and reported during test execution.

| Defect | Description | Related test case |
|---|---|---|
| [BUG-001](https://github.com/kchardy/tester-portfolio-automation-exercise/issues/1) | A product review containing only a whitespace character can be submitted. | TC-REV-001 |
| [BUG-002](https://github.com/kchardy/tester-portfolio-automation-exercise/issues/2) | Payment card fields accept alphabetic characters and allow the order to be placed. | TC-PAY-001 |
| [BUG-003](https://github.com/kchardy/tester-portfolio-automation-exercise/issues/3) | A product inconsistent with the selected category is displayed under Kids / Dress. | TC-PROD-001 |
| [BUG-004](https://github.com/kchardy/tester-portfolio-automation-exercise/issues/4) | The cart remove control appears disabled even though it is functional. | TC-CART-001 |
| [BUG-005](https://github.com/kchardy/tester-portfolio-automation-exercise/issues/5) | AdGuard hides the product search field and search button. | TC-PROD-005 |
| [BUG-006](https://github.com/kchardy/tester-portfolio-automation-exercise/issues/6) | No information is displayed when a product search returns no results. | TC-PROD-003 |

The current status and full reproduction details are available in [GitHub Issues](https://github.com/kchardy/tester-portfolio-automation-exercise/issues).

## 6. Key Findings
The registration, login and logout scenarios worked correctly in the tested scope.

Basic shopping cart operations, including adding and removing products, worked correctly. Cart contents were also preserved after user registration.

The most significant problem was identified in the payment form. Numeric card fields accepted alphabetic characters, and an order could still be placed successfully.

Additional issues were found in product categorization, product search feedback, product review validation and the visual presentation of the cart removal control.

## 7. Limitations
The testing covered selected functional scenarios and was not a complete test of the application.

The following areas were outside the scope of this test cycle:

- Performance testing
- Security testing
- Accessibility testing
- Mobile browser testing
- Cross-browser compatibility testing
- API testing
- Automated testing

The behavior described in BUG-005 may depend on the browser extension and its filtering configuration.

## 8. Conclusion
The tested application partially meets the expected functional requirements.

Core user flows such as registration, login, product browsing and basic cart operations were completed successfully. However, the payment validation issue should be treated as the highest-priority finding because incorrectly formatted card data can be accepted and an order can be placed.

Further testing is recommended after the reported defects are resolved, particularly regression testing of the payment, product search and product review areas.
