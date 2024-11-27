# GitHub Repository Search Application

## Overview

This application allows users to search for GitHub repositories, view details, list issues, filter issues by state, and visualize issue statistics with a pie chart.

## Features

- **Search Repositories:** Search for repositories by name.
- **View Repository Details:** View URL, description, forks count, stargazers count, open issues count.
- **Redirect to GitHub:** Link to the repository's GitHub page.
- **View Issues:** List all current issues.
- **Filter Issues by State:** Filter between open and closed issues.
- **Visualize Issues:** Display a pie chart showing open vs. closed issues.

## Installation

### Prerequisites

- **Node.js:** v14.x or higher
- **npm:** v6.x or higher

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/azterix101/github-repo-search.git
   cd github-repo-search
   ```

2. **Install dependencies and run the application:**

   ```bash
   npm install
   npm start
   ```

## Design Considerations

When I was creating this project, I took several key design considerations into account to ensure the application is robust, user-friendly, and maintainable.

---

### **1. User Experience (UX) and User Interface (UI) Design**

- **Consistency:**
  - Leveraged Ant Design components to provide a consistent look and feel throughout the application.
  - By adhering to Ant Design's design language, I ensured visual harmony and intuitive user interactions.

- **Responsiveness:**
  - Implemented a responsive layout using Ant Design's Grid system (`Row` and `Col` components).
  - Made sure the application works well on various screen sizes, from mobile devices to desktops.

- **Accessibility:**
  - Used semantic HTML elements and ARIA attributes to enhance accessibility.
  - Ensured all interactive elements are keyboard-accessible and screen-reader friendly.

---

### **2. Theming and Styling**

- **Dark Mode Implementation:**
  - Utilized Ant Design's theming capabilities to implement both light and dark modes.
  - By using Ant Design's `ConfigProvider` with theme algorithms (`theme.darkAlgorithm` and `theme.defaultAlgorithm`), I enabled dynamic theming.
  - Ensured that custom components and styles adapt to theme changes by using CSS variables (e.g., `var(--ant-bg-color)`, `var(--ant-text-color)`).

- **Avoiding Hardcoded Styles:**
  - Refrained from using hardcoded color values in styles.
  - Emphasized the use of theme tokens and variables to ensure consistency and adaptability.

---

### **3. Component Reusability and Modularity**

- **Reusable Components:**
  - Broke down the UI into reusable components like `SearchBar`, `RepositoryList`, `IssueList`, and `IssuePieChart`.
  - Ensured each component is self-contained and focused on a single responsibility.

- **Separation of Concerns:**
  - Kept business logic separate from presentation by handling data fetching within components but maintaining styling through Ant Design.

---

### **4. State Management and Data Flow**

- **Local State Management:**
  - Used React's `useState` and `useEffect` hooks for managing local component state.
  - Maintained simplicity by avoiding external state management libraries for this scale of application.

- **Data Fetching:**
  - Centralized API interactions using an `api` module with Axios instances.
  - Handled asynchronous operations with proper error handling and loading states.

---

### **5. Performance Considerations**

- **Efficient Rendering:**
  - Implemented pagination for lists to handle large data sets efficiently.
  - Used keys in lists to optimize rendering and prevent unnecessary re-renders.

- **Lazy Loading (Future Consideration):**
  - Considered implementing lazy loading for components or data that are not immediately needed.

---

### **6. Accessibility (A11y)**

- **Semantic HTML:**
  - Used semantic elements like `<form>`, `<label>`, and `<button>` to improve accessibility.

- **ARIA Attributes:**
  - Added ARIA labels and roles where appropriate to enhance screen reader compatibility.

- **Color Contrast:**
  - Ensured sufficient color contrast between text and background in both light and dark modes to meet accessibility standards.

---

### **7. Responsive Design**

- **Mobile-Friendly Layout:**
  - Used responsive breakpoints provided by Ant Design (`xs`, `sm`, `md`, `lg`) to adjust layouts on different screen sizes.

- **Flexible Components:**
  - Ensured that components like charts and lists are responsive and adjust their size accordingly.

---

### **8. Error Handling and User Feedback**

- **User Notifications:**
  - Used Ant Design's `message` component to display feedback to users for actions like search results or errors.

- **Loading States:**
  - Displayed loading indicators (`Spin` component) during data fetching to inform users that an operation is in progress.

---

### **9. Integration with Third-Party Libraries**

- **Charting with Recharts:**
  - Used `recharts` for data visualization (e.g., `IssuePieChart` component).
  - Integrated theme tokens into the chart components to ensure they adapt to theme changes.

- **Routing with React Router:**
  - Implemented client-side routing using `react-router-dom` to enable navigation between the home page and repository details pages.

---

### **10. Code Maintainability and Readability**

- **TypeScript Usage:**
  - Used TypeScript for type safety and to catch errors at compile time.
  - Defined interfaces for component props and API responses to ensure consistent data structures.

- **Code Organization:**
  - Structured the project with a clear separation between components, pages, styles, and utilities.

- **Naming Conventions:**
  - Used descriptive and consistent naming for variables, functions, and components to enhance readability.

---

**Overall**, I designed the project with a focus on creating a seamless and accessible user experience while ensuring the codebase is clean, maintainable, and scalable. By leveraging Ant Design's robust component library and theming capabilities, I achieved a professional look and feel with minimal custom styling, allowing for efficient development and easier maintenance.

---

