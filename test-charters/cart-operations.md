# 🧪 Test Charter – Cart Operations

---

## **CHARTER**
Validate the Cart functionalities including item addition/removal, subtotal/total accuracy, UI feedback, session persistence, and error responses. Expected behavior: Seamless user experience for cart-related interactions with accurate price handling and informative error messaging.

---

## **AREAS**

| Category        | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| Functional      | Cart updates, price calculations, item persistence                         |
| UI/UX           | Button responsiveness, error messaging, alignment of cart layout           |
| Navigation      | Movement between product pages, cart, and checkout                         |
| Security        | Cart manipulation protection, session integrity                            |
| Error Handling  | Proper messaging for edge cases like empty cart or invalid quantity inputs |

---

## **TESTER**
Kaushal

---

## **TASK BREAKDOWN**
- Add product from listing and detail views
- View and validate cart summary
- Modify item quantity (+/-)
- Remove single or multiple items
- Trigger checkout with an empty cart
- Check tax and total calculation accuracy
- Session validation with persisted cart data (if logged in)

---

## **DURATION**
Long Session (1 hour)

---

## **BUG INVESTIGATION & REPORTING**
15 minutes dedicated to bug analysis and documentation

---

## **CHARTER VS. OPPORTUNITY**
Structured: 90%  
Exploratory: 10%

---

## **TEST NOTES**
- TS4.1 & TS4.4 revealed quantity and decimal handling inconsistencies
- TS4.5 surfaced discrepancies in total cost calculations due to rounding
- TS4.6 tested graceful handling for empty cart and revealed missing messaging
- Security: Manipulating negative or zero values caused inconsistent behavior

---

## **TEST CASES**

| Test Case ID | Steps                                                                 | Expected Outcome                                           | Actual Outcome                                                                | Status     |
|--------------|-----------------------------------------------------------------------|------------------------------------------------------------|--------------------------------------------------------------------------------|------------|
| TC-4.1       | Add product to cart from listing page                                 | Item should be added with accurate price and quantity      | Decimal values rounded off ([Bug 1](https://jam.dev/c/d582476c-2582-4300-b58f-f2027b1aea7a)) | ❌ Fail     |
| TC-4.2       | View cart after adding multiple items                                 | Cart reflects correct items, quantities, and pricing       | Quantity accurate; price displayed incorrectly due to decimal truncation      | ❌ Fail     |
| TC-4.3       | Remove selected items from cart                                       | Removed items should no longer appear in the cart          | As expected                                                                   | ✅ Pass     |
| TC-4.4       | Change quantity to -1 and 0                                           | Should show validation error or block input                | Incorrect quantity increment observed ([Bug 4](https://jam.dev/c/7a076373-67d8-4629-b96f-79012bf508a7)) | ❌ Fail     |
| TC-4.5       | Validate total with tax & shipping for 3 items                        | Correct subtotal + tax/shipping should reflect in total    | Whole numbers used; decimal component missing ([Bug 2](https://jam.dev/c/5b7ad3a7-fe75-48b7-8cc4-a31a45252651)) | ❌ Fail     |
| TC-4.6       | Go to cart with no items, attempt checkout                            | User should see a graceful error message                   | Error message is vague or absent                                              | ❌ Fail     |

---

## **POTENTIAL RISKS**
- Data inconsistency due to decimal truncation
- Vulnerability to negative quantity manipulation
- Checkout failure or miscommunication due to bad error handling
- Loss of user session data impacting cart persistence

---

## **BUGS**

| Bug ID | Severity | Description                                                                                  | Steps to Reproduce                                                                 | Status        |
|--------|----------|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|----------------|
| BUG-1  | High     | Decimal values removed when adding product with no discount                                  | Add product with decimal pricing to cart                                          | [Open](https://jam.dev/c/d582476c-2582-4300-b58f-f2027b1aea7a)     |
| BUG-2  | High     | Decimal values are missing from product prices in order summary                              | Place an order and review price display                                           | [Open](https://jam.dev/c/5b7ad3a7-fe75-48b7-8cc4-a31a45252651)     |
| BUG-3  | Medium   | Invalid search values cause Bad Request instead of showing a clean empty UI                  | Enter invalid characters in search                                                | [Open](https://jam.dev/c/1ecca4ac-73cc-4860-9f12-b4f741217f01)     |
| BUG-4  | Critical | -1 or 0 quantities are accepted, but cart reflects them as +1                                 | Try setting quantity as -1 or 0 in cart                                           | [Open](https://jam.dev/c/7a076373-67d8-4629-b96f-79012bf508a7)     |

---

## **ISSUES & CLARIFICATIONS**
- Should decimal formatting be enforced at API or UI level?
- Expected behavior for cart persistence—cookie or server-side session?
- Should zero quantity auto-remove item or prompt error?

---

## **ENHANCEMENTS**
- Format prices to two decimal places consistently across UI and order summary
- Block cart manipulation with invalid quantity inputs (negative, zero)
- Improve error messaging for empty cart and search failures
- Enable session-based or cookie-based cart persistence logic

---
```
