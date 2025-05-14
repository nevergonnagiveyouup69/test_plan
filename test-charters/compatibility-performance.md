# 🧪 TEST CHARTER – Compatibility and Performance Testing

## CHARTER
To evaluate the website’s **compatibility and performance** across multiple platforms and network conditions. Testing aims to validate responsive design, optimal load times, graceful degradation, and caching effectiveness. Special attention will be given to **error messaging, API behavior, and UI integrity** under various environments.

---

## AREAS

| Area          | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| Functional    | Check site behavior with/without JS, caching, API calls                     |
| UI/UX         | Consistent layout across browsers and devices                               |
| Navigation    | Page transitions and load times                                              |
| Security      | Submit button abuse and API throttling possibilities                        |
| Error Handling| Verify clear, actionable error messages across pages                        |

---

## TESTER
**Kaushal**

---

## TASK BREAKDOWN

- Cross-browser UI validation (Chrome, Firefox, Safari, Edge, Brave)
- Device layout testing (Mobile, Tablet, Desktop)
- Load time benchmarking
- Load testing and response monitoring
- JavaScript-disabled and throttled network simulation
- Cache behavior and image load optimization
- Defect reporting with reproducible steps and recordings

---

## DURATION
**Long (1 hour)**

---

## BUG INVESTIGATION & REPORTING
**20 minutes** allocated post-testing for analysis, documentation, and linking.

---

## CHARTER VS. OPPORTUNITY
**80% Structured / 20% Exploratory**

---

## TEST NOTES

- **Feature Validation:** TS6.1, TS6.2, TS6.3, TS6.4, TS6.5, TS6.6  
- **Security:** API throttling, repeated submission  
- **Navigation:** Seamless movement across pages in all browsers  
- **Error Handling:** Meaningful error messaging validation  
- **UI/UX:** Responsive and consistent layout

---

## TEST CASES

| Test Case ID | Steps                                                                 | Expected Outcome                                              | Actual Outcome                                                 | Status     |
|--------------|-----------------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|------------|
| TC-6.1       | Open site in Chrome, Firefox, Safari, Edge                           | Consistent UI across all browsers                              | Safari screen breaks; Edge fails on small screen               | Fail 🔗 [Bug#3](https://jam.dev/c/1538b511-28b2-4e1c-955a-733367527115), [Bug#4](https://jam.dev/c/ab275f9f-4076-40d9-a807-d07cc7c7c439) |
| TC-6.2       | Access site on mobile, tablet, desktop                               | Responsive design and fluid layout                             | Mobile and tablet not responsive                               | Fail 🔗 Bug#5 |
| TC-6.3       | Measure load time under normal network                               | All pages load in under 3 seconds                              | Mostly under 3s, but submit buttons trigger repeated APIs      | Partial 🔗 [Bug#6](https://jam.dev/c/09a90076-27d6-4a71-be26-31f72dda8403) |
| TC-6.4       | Simulate high traffic using load testing tool                        | Graceful degradation, no crash                                 | Performance degrades with repeated API hits                    | Fail 🔗 Bug#6 |
| TC-6.5       | Disable JavaScript / throttle network                                | Content fallback or proper messaging shown                     | Pages load poorly, errors unclear                              | Fail 🔗 [Bug#1](https://jam.dev/c/e4972887-d69a-4741-99f5-adcb1330dc06) |
| TC-6.6       | Check caching and image optimization via DevTools                    | Cached resources, compressed images                            | No major issues                                                 | Pass       |

---

## POTENTIAL RISKS

- Inconsistent browser rendering
- Lack of responsive layout = poor mobile experience
- API call redundancy slowing down performance
- Form input field validation loopholes
- Vague or missing error messages

---

## BUGS

| Bug ID | Severity   | Description                                                                 | Steps to Reproduce                                                      | Status     |
|--------|------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------|------------|
| Bug#1  | Medium     | Error messages are unclear and uninformative                                | Trigger any form error                                                  | Open 🔗 [Link](https://jam.dev/c/e4972887-d69a-4741-99f5-adcb1330dc06) |
| Bug#2  | Medium     | Brave browser triggers multiple API calls simultaneously                    | Open any data-fetching page in Brave                                   | Open 🔗 [Link](https://jam.dev/c/09a90076-27d6-4a71-be26-31f72dda8403) |
| Bug#3  | High       | Edge browser fails completely on smaller screen sizes                        | Open site in Edge with window <768px                                   | Open 🔗 [Link](https://jam.dev/c/1538b511-28b2-4e1c-955a-733367527115) |
| Bug#4  | High       | Safari UI breaks; phone number field accepts alphabets                      | Open in Safari, go to form with phone field                            | Open 🔗 [Link](https://jam.dev/c/ab275f9f-4076-40d9-a807-d07cc7c7c439) |
| Bug#5  | Critical   | No responsiveness on mobile or tablet                                       | Load site on mobile or tablet                                          | Open       |
| Bug#6  | High       | Submit buttons allow multiple API calls, reducing performance               | Click any submit button repeatedly                                     | Open       |

---

## ISSUES & CLARIFICATIONS

- Are we enforcing input validation at client-side or server-side?
- Should error messages follow a UX writing guideline?
- What are the target device specs for responsiveness testing?

---

## ENHANCEMENTS

- Add throttling or debounce to API requests on submit
- Use proper `type="tel"` for phone number fields
- Integrate clear, user-focused error messages
- Implement lazy loading for images
- Add a responsive testing framework (e.g., Tailwind, Bootstrap Grid)

