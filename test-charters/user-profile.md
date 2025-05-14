# 🧪 Test Charter: User Profile Module

---

## CHARTER
To validate the **User Profile** module, ensuring accurate information update, secure access control, persistent data handling across sessions, robust error handling, and a seamless UI/UX experience. Special attention to be given to edge cases such as password changes, unauthorized access, and behavior under abnormal usage.

---

## AREAS

| Category         | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| Functional       | Update user info, change password, view history, save & persist data        |
| UI/UX            | Interactive elements, layout issues, buttons responsiveness                 |
| Navigation       | Profile access flow, logout behavior, tab switching                         |
| Security         | Unauthorized access attempts, data visibility control                       |
| Error Handling   | Validation on save/update, feedback on invalid actions                      |

---

## TESTER  
**Kaushal**

---

## TASK BREAKDOWN
- Validate update functionality with all field combinations  
- Simulate login/logout cycles to verify data persistence  
- Review order history content accuracy  
- Attempt cross-profile access scenarios  
- Test password update and subsequent authentication  
- Monitor UI behavior and performance under repeated actions  

---

## DURATION  
**Long (1 hour)**

---

## BUG INVESTIGATION & REPORTING  
20 minutes dedicated to identifying, recording, and analyzing bugs.

---

## CHARTER VS. OPPORTUNITY  
**80/20** – Focused testing with room for exploratory scenarios based on observed behavior.

---

## TEST NOTES
- Feature Validation: TS5.1 to TS5.5
- Security: TS5.4, TS5.5
- Navigation: Logout, Profile navigation paths
- Error Handling: Name update spam, invalid password change
- UI/UX: Logout button behavior, star rating misrepresentation

---

## TEST CASES

| Test Case ID | Steps                                                                                   | Expected Outcome                                                   | Actual Outcome                                                                 | Status  |
|--------------|------------------------------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------------------|---------|
| TC-TS5.1     | Update name, phone, and address and click Save                                          | Info updates and shows confirmation                               | Multiple API calls on repeated clicks [Bug 3](https://jam.dev/c/eac1f980-6870-49af-9d58-d5bbe4e61405) | Fail    |
| TC-TS5.2     | Update profile > Logout > Login                                                         | Changes should persist                                             | Works as expected                                                              | Pass    |
| TC-TS5.3     | Navigate to order history and validate data points                                      | All details are correct and visible                               | Pass                                                                           | Pass    |
| TC-TS5.4     | Manually alter URL/session to access another user’s data                               | Access denied with proper error message                           | Pass                                                                           | Pass    |
| TC-TS5.5     | Change password > Logout > Attempt login with new password                              | Login should succeed with new password                            | Fail after 8hrs [Bug 2: Pending link]                                          | Fail    |
| TC-NAV-LOG   | Click logout via text and surrounding button area                                       | Logout triggered from entire button area                          | Only works when clicking text [Bug 1](https://jam.dev/c/0ae9f3a8-c6b3-4bd5-b1f8-df210a7c9b70) | Fail    |
| TC-UI-STARS  | Rate 0 stars and check profile display                                                  | Should show 0 stars                                                | Shows 5 stars [Bug 4](https://jam.dev/c/0bb4ef8b-6a7e-4fd4-a8ab-5123c9d9e069)  | Fail    |

---

## POTENTIAL RISKS
- API throttling due to repeated save triggers  
- Session expiry or data sync delay causing login issues  
- UI misleads due to inconsistent star ratings  
- Incomplete validation on logout interface

---

## BUGS

| Bug ID | Severity | Description                                                                                   | Steps to Reproduce                                                                                       | Status     |
|--------|----------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|------------|
| BUG-001| Medium   | Logout only works on clicking the text, not the full button area                             | Click on empty button box (not the text)                                                                 | [Open](https://jam.dev/c/0ae9f3a8-c6b3-4bd5-b1f8-df210a7c9b70)       |
| BUG-002| High     | Cannot login 8+ hours after account creation despite it existing                             | Create account > Wait 8 hrs > Attempt login                                                              | Open       |
| BUG-003| Medium   | Repeated Save triggers multiple API calls                                                     | Update name > Spam save button                                                                           | [Open](https://jam.dev/c/eac1f980-6870-49af-9d58-d5bbe4e61405)       |
| BUG-004| Low      | 0-star rating input displays as 5 stars                                                       | Give 0 rating > Check profile display                                                                    | [Open](https://jam.dev/c/0bb4ef8b-6a7e-4fd4-a8ab-5123c9d9e069)       |

---

## ISSUES & CLARIFICATIONS
- Why does account login fail after prolonged inactivity?  
- Should Save button have a debounce mechanism or become disabled post-click?  
- Is 0-star rating a valid input per business logic?

---

## ENHANCEMENTS
- Disable Save button after submission to prevent API flooding  
- Expand clickable area for Logout for better UX  
- Proper validation for 0-star input—either restrict or display accurately  
- Session warning or info banner before automatic expiration
