# PayEm Home Assignment

## Repository Structure
- **frontend**
  - Contains the UI code, with routing to create requests page, show requests page, and view a single request.
- **backend-node**
  - Backend code implemented in Node.js. Includes endpoints for creating and fetching requests.
- **backend-python**
  - Backend code implemented in Python. Functionality is equivalent to the Node.js backend.

## Current App State
- **Create Requests Page**
  - Allows the creation of requests with a `/post` endpoint implemented.
- **Fetch Requests Page**
  - Fetches requests from the server with a `/get` endpoint implemented.
- **Backend**
  - Simulates a database with a file where all reads and writes are performed.

## The Task
Your task is to enhance the existing application with the following features:

### Implement Filters Logic
- Implement the logic for filters according to the filters present in the UI.

### Request Details Page
- When clicking on a request on the requests page, a new page should open with the request details.
- Add all fields that exist in the database file to be displayed on the request details page.
- Implement the logic in the frontend and backend for approving or declining a request.

### Extend Request Object
- Add a new field to the Request object named `type`.
- `type` can be one of the following:
  - Purchase request
  - Fund request
  - Reimbursement request

---

Good luck with your assignment!
