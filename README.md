# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm startProject Name
Description
[Provide a brief description of your project. What does it do? What problem does it solve?]

Table of Contents
Installation
Usage
Features
Contributing
License
Installation
[Explain how to install and set up your project. Include any dependencies or prerequisites that need to be installed. You can use code examples, if necessary.]

bash
Copy code
# Clone the repository
git clone https://github.com/your-username/your-project.git

# Change directory
cd your-project

# Install dependencies
npm install
Usage
[Provide instructions on how to use your project. You can include code snippets and screenshots to demonstrate its functionality.]

bash
Copy code
# Start the application
npm start
Features
[List the key features of your project. Describe what makes it unique or useful.]

Contributing
[Explain how others can contribute to your project. Include guidelines for pull requests, reporting issues, and any code of conduct that contributors should follow.]

License
[Specify the license for your project, if applicable. You can choose from common open-source licenses like MIT, Apache, or GPL. If you're unsure, you can mention that it's under "All Rights Reserved."]

Endpoints
The base URL for your backend is: http://localhost:8001

Core Deliverables
As a user, I should be able to:

See a table of the transactions.
Fill out and submit the form to add a new transaction. This should add the new transaction to the table as well as post the new transaction to the backend API for persistence.
Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.
Endpoints for Core Deliverables
GET /transactions
Example Response:

[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
POST /transactions
Required Headers:

{
  "Content-Type": "application/json"
}
Request Object:

{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
Example Response:

{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}
Advanced Deliverables
These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I should be able to:

Sort transactions alphabetically by category or description.
Delete a transaction which will remove it from the table and delete it from the backend.
Endpoints for Advanced Deliverables
DELETE /transactions/:id
Example Response:

{}

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests]

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

