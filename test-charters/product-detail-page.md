# 🧪 TEST CHARTER – Product Detail Page Validation

---

## **CHARTER**
To verify the functionality, UI/UX, navigation, security, and error handling of the Product Detail Page, ensuring all key elements such as images, product data, user reviews, and variant selections behave as expected and provide a smooth user experience.

---

## **AREAS**

| Area           | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| Functional     | Product data display, variant selection, wishlist functionality            |
| UI/UX          | Image sizing, text overflow, button state consistency                      |
| Navigation     | Back-navigation, carousel interactions                                      |
| Security       | Data integrity for wishlist and review submission                          |
| Error Handling | Product load failure, action feedback messages                             |

---

## **TESTER**
Kaushal

---

## **TASK BREAKDOWN**
- Validate image load and carousel behavior
- Verify all product metadata display correctly
- Confirm user reviews and ratings are present, sorted, and visually clean
- Test wishlist interactions and persistence
- Assess variant functionality
- Simulate failure cases for product data load
- Investigate reported UI/UX bugs

---

## **DURATION**
Long Session – 1 Hour

---

## **BUG INVESTIGATION & REPORTING**
Allocated 20 minutes for triage, reproduction steps, and documentation per defect

---

## **CHARTER VS. OPPORTUNITY**
Structured Testing: 90%  
Exploratory Opportunity: 10%

---

## **TEST NOTES**
- Focus on image consistency across carousel
- Observe if wishlist state persists between screens
- Check review text behavior under excessive length
- Try submitting without real input to test form behaviors
- UI capitalization and success message triggers to be validated
- Attempt unselecting "Notify Me" state
- Explore zoom feature on product images if available

---

## **TEST CASES**

| Test Case ID | Steps                                                                 | Expected Outcome                                                                 | Actual Outcome                                                                                                 | Status     |
|--------------|-----------------------------------------------------------------------|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|------------|
| TC-3.1       | Load product page, inspect images and zoom                           | Images load, are zoomable, no distortion                                        | Zoom works. First image (carousel) is bigger compared to others [Bug 2]                                                | ❌ Fail     |
| TC-3.2       | Check title, description, price, availability                        | All elements are visible and accurate                                           | Title, description, etc., display correctly                                                                   | ✅ Pass     |
| TC-3.3       | Scroll to reviews, check order, content layout                       | Reviews visible, properly wrapped or truncated                                 | Long reviews overflow layout [Bug 3]                                                                           | ❌ Fail     |
| TC-3.4       | Interact with image carousel                                          | Navigation works, no broken links                                               | No broken links, carousel functions                                                                            | ✅ Pass     |
| TC-3.5       | Select variant options (color/size)                                   | Variant selection updates content or image appropriately                        | Variants function properly                                                                                     | ✅ Pass     |
| TC-3.6       | Simulate product load failure                                         | Error message or fallback UI is shown                                          |  No proper error screen or message                                                                                |❌ Fail    |
| TC-3.7       | Add to wishlist, navigate back                                        | Wishlist indication visible on product card                                    | No indication on listing page [Bug 1]                                                                          | ❌ Fail     |
| TC-3.8       | Toggle “Notify me” on out-of-stock item                              | Toggle should enable and disable                                                | Can’t unselect once selected [Bug 4]                                                                           | ❌ Fail     |
| TC-3.9       | Select star rating without submitting                                | No success message until full submission                                       | Success message shown prematurely, and summary not capitalized [Bug 5]                                         | ❌ Fail     |

---

## **POTENTIAL RISKS**
- Uncapped user inputs may break layout
- Inconsistent image rendering on varied screen sizes
- Unintended actions triggering messages or UI changes
- Missing accessibility fallback for broken image scenarios

---

## **BUGS**

| Bug ID | Severity | Description                                                                                          | Steps to Reproduce                                                                                  | Status     |
|--------|----------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------|
| B-001  | Medium   | Wishlist indicator missing on product listing after adding from detail page                         | Add item to wishlist → Return to listing → No indicator visible                                     | [Open](https://jam.dev/c/af26cef3-05b3-4de7-968d-a3b4b3406412)       |
| B-002  | High     | First product image larger than others in carousel others are smaller                                                   | Load product with multiple images → Observe size inconsistency                                      | [Open](https://jam.dev/c/6792732a-fd60-44ff-9b0b-a4c35cba71ca)       |
| B-003  | Medium   | No limit on user review/question length → layout break                                                | Submit long review → Observe overflow or wrapping issues                                            | [Open](https://jam.dev/c/5f847950-214a-42b8-b3cc-c98a9a899f62)       |
| B-004  | Medium   | Cannot deselect "Notify Me" once enabled                                                              | Select out-of-stock product → Tap “Notify Me” → Try to unselect                                     | [Open](https://jam.dev/c/45c2e9d5-246a-4700-81d5-7509b74dc309)       |
| B-005  | Low      | Rating star triggers success message without submission. Summary not capitalized                     | Tap star rating → Observe success message before completing → Check summary text casing             | [Open](https://jam.dev/c/1712b825-d2d9-49e8-9123-6710df061eea)       |

---

## **ISSUES & CLARIFICATIONS**
- Is zoom intended to work on mobile?
- Should carousel be swipeable or just button-controlled?
- Expected character limit for reviews?
- Should out-of-stock products be interactable for wishlist/notify options?

---

## **ENHANCEMENTS**
- Implement max-length limit and proper overflow styling for user-generated content
- Standardize image sizes within carousel
- Capitalize confirmation messages and ensure proper triggers
- Add wishlist indicators across views for consistency
- Make “Notify Me” toggle fully reversible

---
