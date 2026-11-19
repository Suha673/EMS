localStorage.clear()
const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
      total: 3
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page UI using React and Tailwind CSS.",
        taskDate: "2026-11-12",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Design an attractive admin dashboard with sidebar and navigation.",
        taskDate: "2026-11-14",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Develop a responsive landing page for the company website.",
        taskDate: "2026-11-08",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
      total: 4
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Develop REST API",
        taskDescription: "Build REST APIs for employee registration and login.",
        taskDate: "2026-11-13",
        category: "Development"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Integration",
        taskDescription: "Connect MongoDB with the backend and configure employee collections.",
        taskDate: "2026-11-15",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Authentication Module",
        taskDescription: "Implement JWT authentication and role-based authorization.",
        taskDate: "2026-11-07",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Project Setup",
        taskDescription: "Initialize the Node.js project and configure dependencies.",
        taskDate: "2026-11-05",
        category: "Development"
      }
    ]
  },

  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
      total: 3
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for the employee management APIs.",
        taskDate: "2026-11-12",
        category: "Testing"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Login Functionality",
        taskDescription: "Test login functionality for admin and employee accounts.",
        taskDate: "2026-11-16",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Registration API",
        taskDescription: "Verify registration API responses and input validation.",
        taskDate: "2026-11-09",
        category: "Testing"
      }
    ]
  },

  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
      total: 4
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Employee Profile",
        taskDescription: "Develop an employee profile page displaying personal and professional details.",
        taskDate: "2026-11-13",
        category: "Frontend"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Task Filters",
        taskDescription: "Add filters for active, completed, new and failed tasks.",
        taskDate: "2026-11-17",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Responsive Navbar",
        taskDescription: "Make the navigation bar responsive across desktop and mobile screens.",
        taskDate: "2026-11-06",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Sidebar",
        taskDescription: "Build a reusable sidebar component for the dashboard.",
        taskDate: "2026-11-08",
        category: "Frontend"
      }
    ]
  },

  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
      total: 3
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Project Documentation",
        taskDescription: "Write technical documentation explaining project architecture and features.",
        taskDate: "2026-11-14",
        category: "Documentation"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create API Documentation",
        taskDescription: "Document all backend APIs with endpoints, parameters and responses.",
        taskDate: "2026-11-18",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Requirement Analysis",
        taskDescription: "Analyze project requirements and prepare the initial feature list.",
        taskDate: "2026-11-07",
        category: "Planning"
      }
    ]
  }
];





const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
  const employees =JSON.parse( localStorage.getItem('employees'))

  const admin= JSON.parse(localStorage.getItem('admin'))
  return { employees, admin };
}
