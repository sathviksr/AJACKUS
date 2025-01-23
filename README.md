**User Management Web Application:**

Objective:
The objective of this project is to develop a simple web application where users can view, add, edit, and delete user details by interacting with a mock backend API. The application is built using React with Vite for development and bundling.

**Features:**

**User Interface:**

    1    User List Display:
    ◦    Displays a list of users with details including ID, First Name, Last Name, Email, and Department.
    ◦    Users are displayed in a responsive table format.
User Management App:

A simple web application for managing user details. Users can view, add, edit, and delete user data using a mock backend API.

Features:
- View a list of users.
- Add new users.
- Edit existing user details.
- Delete users.
- Basic error handling for API requests.

Technologies Used:
- React (with Vite)
- Axios for API requests
- JSONPlaceholder for mock API
- JavaScript
- Basic CSS for styling

Setup Instructions:
Clone the repository:
   bash
   git clone https://github.com/sathviksr/AJACKUS_User_Management
   cd AJACKUS_User_Management

Install dependencies:
npm install

Run the development server:
npm run dev

Project can be viewed in this link:
https://ajackus-user-management.vercel.app/

Challenges Faced
	•	Mock API Limitations: The JSONPlaceholder API doesn’t persist changes, so added or edited data is only simulated for demonstration purposes.
	•	Error Handling: Handling errors gracefully for different API scenarios (e.g., network errors or invalid responses) required careful implementation.
	•	UI Design: Ensuring the layout was clean and functional without overcomplicating the styling took some iteration.


Future Improvements
	•	Responsive Design: Improve the layout to work better on mobile and tablet devices.
    2    User Actions:
    ◦    Buttons for "Add", "Edit", and "Delete" are available for user interactions.

    3    Form for Input:
    ◦    A form to add new users or edit existing users.
    ◦    Fields include First Name, Last Name, Email, and Department.


**Backend Interaction:**

    1    Mock API:
    ◦    Uses JSONPlaceholder (https://jsonplaceholder.typicode.com/) to simulate backend interactions.
    ◦    /users endpoint is utilized for CRUD operations.

    2    Data Fetching:
    ◦    Users are fetched from the /users endpoint and displayed in the table.

    3    Add User:
    ◦    Posts new user data to the API. JSONPlaceholder simulates a successful response without persisting data.

    4    Edit User:
    ◦    Fetches user data for editing and updates it by sending a PUT request to the /users endpoint.

    5    Delete User:
    ◦    Deletes a user by sending a DELETE request to the API.


**Functionality:**

    1    Error Handling:
    ◦    Displays an error message to the user if API requests fail.
    ◦    Handles network issues gracefully.

    2    Pagination:
    ◦    Implements pagination for the user list to enhance navigation.
    ◦    Users can navigate between pages to view data in chunks.

    3    Responsive Design:
    ◦    The application is responsive and works seamlessly on both desktop and mobile devices.

    4    Client-side Validation:
    ◦    Validates user input in the form to ensure required fields are filled.

**Running Locally:**

**Prerequisites:**
    •    Node.js (v14 or above)
    •    npm or yarn package manager

**Steps to Run:**
    1    Clone the repository:
git clone https://github.com/sathviksr/AJACKUS
    2    cd AJACKUS_User_Management
    3    Install dependencies:
          npm install
    4    Start the development server:
         npm run dev
    5    Open your browser and navigate to local host port specified

**Deployment:**
The application has been deployed and is accessible at:  https://ajackus-new.vercel.app/

**Challenges Faced:**

	1	Mock Backend Constraints:
	◦	JSONPlaceholder does not persist changes, making it challenging to test long-term updates.
	◦	Resolved by simulating changes and informing the user of the mock nature.

	2	Pagination Logic:
	◦	Handling API data with limited control over page sizes required custom logic for splitting data into pages.

	3	Responsive Design:
	◦	Ensuring the interface worked across various devices and resolutions required several iterations of CSS adjustments.

	4	Error Handling:
	◦	Differentiating between client-side and server-side errors added complexity but improved user experience.

**Assumptions:**
	1	JSONPlaceholder is used as a mock API, so no data persistence is expected.
	2	Users will interact with the application via a desktop or mobile browser.
	3	Basic validation is sufficient for this demo, and advanced security measures (e.g., authentication) are not implemented.
