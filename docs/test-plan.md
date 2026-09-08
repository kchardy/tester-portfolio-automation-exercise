# Test Plan – Automation Exercise

## 1. Document information
- Project: Automation Exercise
- Application: https://www.automationexercise.com/
- Tester: Katarzyna Chardy
- Test plan version: 1.0
- Test period: 30.08 – 14.09

  ## 2. Objective
The objective of this project is to verify the main user flows of the
Automation Exercise web application and identify functional, validation,
visual and usability defects.

The project is also intended to demonstrate practical manual testing
skills, including test planning, test case design, test execution, defect
reporting and preparation of a test summary report.

## 3. Scope
The following areas are included:

- User registration
- User login and logout
- Product list and product details
- Product search
- Product categories
- Product reviews
- Shopping cart
- Checkout
- Payment form validation
- Invoice download

## 4. Out of scope

The following areas are not included in this test cycle:

- API testing
- Automated testing
- Performance and load testing
- Security and penetration testing
- Database testing
- Mobile application testing
- Real payment processing
- Email delivery
- Testing on physical mobile devices

API and automated testing will be included in later stages of the
portfolio project.

## 5. Test types

The following test types will be performed:

- Functional testing
- Positive testing
- Negative testing
- Input validation testing
- Exploratory testing
- Smoke testing
- Basic usability testing
- Basic visual testing

## 6. Test environment

- Operating system: Windows 10 Home
- Browser: Google Chrome [151.0.7922.175 version]
- Screen resolution: 2560 x 1440
- Application URL: https://www.automationexercise.com/
- Test environment: Public practice environment
- Internet connection: cable

## 7. Test approach

Testing will be performed manually.

Test cases will be designed based on:

- Application behaviour
- Available application functionality
- Exploratory testing observations
- Common e-commerce expectations
- Equivalence partitioning
- Boundary value analysis
- Positive and negative scenarios

Each test case will receive one of the following statuses:

- Passed – the actual result matches the expected result
- Failed – the actual result differs from the expected result
- Blocked – the test cannot be completed
- Not Run – the test has not been executed

Failed test cases will be linked to defect reports created in GitHub
Issues.

## 8. Test data

Only fictional test data will be used.

The repository will not contain:

- Real payment card details
- Real addresses or telephone numbers
- Passwords used for personal accounts
- Authentication tokens
- Other sensitive information

Unique email addresses may be required for registration tests.

## 9. Entry criteria

Testing can begin when:

- The application is accessible
- The selected functionality is available
- The test scope has been defined
- Test data is prepared
- Test cases are ready for execution

## 10. Exit criteria

The test cycle can be completed when:

- All planned test cases have been executed
- Every test case has a recorded status
- Failed tests are linked to defect reports
- Evidence has been collected for reported defects
- Critical and high-severity defects have been documented
- A test summary report has been prepared

## 11. Defect management

Defects will be recorded using GitHub Issues.

Each defect report should contain:

- Clear title
- Environment
- Preconditions
- Steps to reproduce
- Actual result
- Expected result
- Reproducibility
- Severity
- Priority
- Related test case
- Screenshot or recording, when applicable

Defects will use labels describing their type, severity, priority,
component and status.

## 12. Risks and limitations

| Risk or limitation | Impact | Mitigation |
|---|---|---|
| Public test environment may change | Tests may produce different results | Record the execution date and browser version |
| No complete business requirements | Some expected results may be assumptions | Clearly document assumptions |
| Shared environment and data | Other users may affect available data | Use unique test data |
| Limited browser coverage | Browser-specific defects may not be detected | State that testing is limited to Chrome |
| No access to the application code or database | Root cause cannot be confirmed | Report only observable behaviour |
| Practice payment system | Real payment processing cannot be verified | Test only form behaviour and validation |

## 13. Test deliverables

The project will contain:

- Test plan
- Exploratory testing notes
- Manual test cases
- Test execution results
- Defect reports in GitHub Issues
- Screenshots or recordings
- Test summary report
- API tests in a later project stage
- Automated tests in a later project stage
