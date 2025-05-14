# Test Charter : Product search

## CHARTER
**Testing Objectives**:
- Verify the functionality and accuracy of product search and filtering.
- Ensure product search works with both valid and invalid inputs.
- Ensure filtering options (category, price range) are working correctly and produce accurate results.

**Expected Behavior**:
- Search returns correct products when valid search terms are used.
- Incorrect or misspelled search terms trigger relevant suggestions or error messages.
- Filtering options properly refine product results based on selected criteria.

## AREAS
| Area              | Focus                                                         |
|-------------------|---------------------------------------------------------------|
| **Functional**     | Verify product search, filtering, and sorting mechanisms.     |
| **UI/UX**          | Ensure intuitive design for search and filter interactions.    |
| **Navigation**     | Ensure smooth navigation when interacting with search and filters. |
| **Security**       | Ensure no data leaks or errors when interacting with search.  |
| **Error Handling** | Ensure appropriate error messages when search terms or filters result in no results. |

## TESTER
Kaushal

## TASK BREAKDOWN
1. **Product Search Validation**: Ensure that search queries for products by name, category, and other filters work as expected.
2. **Misspelled Product Search**: Test how the system handles incorrect product names or partial entries.
3. **Filter Validation**: Test various combinations of category, price range, and sorting filters.
4. **Empty Search Handling**: Test the system’s response to non-existing products.
5. **404 Page Navigation**: Verify broken navigation links such as the TechShop icon.

## DURATION
- **Long (1 hour)**

## BUG INVESTIGATION & REPORTING
- Allocate 15 minutes for investigation of defects and issues.

## CHARTER VS. OPPORTUNITY
- **Structured Testing**: 80%
- **Exploratory Testing**: 20%

## TEST NOTES
- Test different product search scenarios including partial names, incorrect spellings, and empty results.
- Ensure the filtering mechanisms provide accurate and relevant results.
- Check UI behavior for category selections, price range filters, and multiple filter combinations.
- Verify proper handling of error states, such as 404 errors and no search results.

## TEST CASES

| Test Case ID | Steps                                             | Expected Outcome                                    | Actual Outcome                                    | Status  |
|--------------|---------------------------------------------------|----------------------------------------------------|--------------------------------------------------|---------|
| TS2.1        | Search for product "Arduino"                      | Return products related to "Arduino"                | Product list returned as expected                 | Pass    |
| TS2.2        | Search for misspelled "Arduin"                    | Display relevant suggestions for "Arduino"          | Suggestions appeared as expected                  | Pass    |
| TS2.3        | Apply category filter for "sensors"               | Display products only from the "sensors" category   | Filter worked as expected                         | Pass    |
| TS2.4        | Apply multiple filters (category, price range)    | Show results matching both filters                  | Filters worked in combination                     | Pass    |
| TS2.5        | Search for non-existing product "nonexistent123"  | Display empty results with helpful message          | Correct message displayed                         | Pass    |

## POTENTIAL RISKS
- Search and filter mechanisms might not work under high load, leading to slow response times.
- Misspelled search terms may not trigger adequate suggestions, confusing users.
- UI inconsistencies with filter combinations may lead to poor user experience.

## BUGS

| Bug ID | Severity | Description                                                                 | Steps to Reproduce                                                                          | Status        |
|--------|----------|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|---------------|
| 1      | High     | Sorting issues when selecting connectors (IC Base 14 Pin appears incorrectly in sort) | 1. Select connectors. 2. Sort by Low to High. 3. Observe IC Base 14 Pin at the top.        | [Open](https://jam.dev/c/f33aaea5-3b14-4d6a-8604-3c112f9e79d5) |
| 2      | Critical | Clicking on TechShop icon results in a 404 error page                        | 1. Click on TechShop icon. 2. Observe that it leads to a 404 error page.                   | [Open](https://jam.dev/c/9576119d-76aa-42c4-b813-fd34b51c486c) |
| 3      | Medium   | Searching for "74273 flip flop" works with full term but not partial "74" | 1. Search for "74273 flip flop" with full term (works). 2. Search for "74" (does not work). | [Open](https://jam.dev/c/b0291cea-3c0b-48f3-839a-4b9a87713e71) |
| 4      | Low      | Searching random values like "abcd" shows unrelated results                 | 1. Search for random string "abcd". 2. Observe unrelated product suggestions.               | [Open](https://jam.dev/c/74ff7abd-f90a-4eba-bd71-7586bfcd18ef) |

## ISSUES & CLARIFICATIONS
- Need clarification on handling search term suggestions for partial matches. Should the system prioritize exact matches over partial terms?
- What should be the expected user experience when no products match search filters, besides displaying a helpful message?

## ENHANCEMENTS
- Improve search suggestion accuracy to handle misspelled or partial terms more effectively.
- Enhance UI/UX for filter combinations, possibly displaying selected filters more clearly.
- Improve error handling and recovery for 404 errors and other navigation issues.
- Add a empty product screen
