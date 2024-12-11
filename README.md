# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Yash_TaskManager

# Task Management App

## Description

This Task Management App allows users to manage tasks effectively with features like adding, editing, deleting, and viewing tasks in a paginated table. The app also includes form validation, notifications, and API integration using Axios. Built with React and Ant Design, this project is developed using Vite for faster builds and a modern development experience.

## Steps to Set Up and Run the App Locally

### Prerequisites

- Node.js and npm installed on your system.
- A code editor, such as VS Code.

### Setup Instructions

1. **Clone the Repository:**

   "git clone <repository_url>
   <repository_folder>"

2. **Install Dependencies:**
   Run the following command to install all required dependencies:

   "npm install"

3. **Start the Development Server:**
   Launch the app locally using Vite:

   "npm run dev"

   The app will be available at `http://localhost:5173` by default.

4. **Build for Production:**
   To create a production-ready build, use the following command:

   "npm run build"

   The build files will be available in the `dist` folder.

5. **Preview Production Build:**
   You can preview the production build locally:

   "npm run preview"
6. **Preview Live Site:**
    You can preview the live site:

    `https://yash-task-management-app.netlify.app/`

## Design Choices and Assumptions

### Design Choices

1. **UI Framework:**
   Ant Design components (e.g., Table, Modal, Form, Button) are used for consistent styling and functionality.

2. **State Management:**
   React's `useState` and `useEffect` hooks are utilized for managing local state.

3. **API Integration:**

   - Axios is used for making API requests.
   - Rest API endpoints from `https://jsonplaceholder.typicode.com/todos` are used for fetching, adding, editing, and deleting tasks.

4. **Notifications:**
   Ant Design's `notification` component is used to provide user feedback for actions such as adding, updating, and deleting tasks.

5. **Pagination:**
   Ant Design's Table pagination is configured to display 10 tasks per page by default.

### Assumptions

1. **Unique IDs:**
   Since the Rest API does not provide unique IDs for new tasks, the app generates them using `Date.now()` for local handling.

2. **Due Dates:**
   Tasks retrieved from the API do not have a due date field. This app assumes that due dates are optional for existing tasks but mandatory when creating or editing tasks.

3. **Task Priority and Status:**

   - The API does not include a priority field. This app adds a `priority` field with options: High, Medium, and Low.
   - The `completed` field from the API is mapped to a toggle switch in the UI for better usability.

4. **User IDs:**
   Tasks are assigned a randomly generated `userId` to simulate a multi-user environment.

5. **Vite Setup:**
   - The project is scaffolded with Vite for a modern and fast development experience.
   - Hot Module Replacement (HMR) is enabled for a smoother development workflow.

---

Enjoy managing your tasks efficiently with this app! For any issues or suggestions, please feel free to contribute or raise an issue in the repository.
