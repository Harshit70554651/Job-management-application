const employee = [
  {
    id: 1,
    email: "",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription: "Design a responsive login page using HTML, CSS, and JavaScript.",
        taskDate: "2026-09-23",
        taskCategory: "Development"
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Fix Navbar Responsiveness",
        taskDescription: "Fix the navbar layout on mobile devices and tablets.",
        taskDate: "2026-09-24",
        taskCategory: "Bug Fixing"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Update Portfolio",
        taskDescription: "Update the portfolio website with recent projects and skills.",
        taskDate: "2026-09-20",
        taskCategory: "Design"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Build Dashboard UI",
        taskDescription: "Create a responsive admin dashboard with sidebar navigation and summary cards.",
        taskDate: "2026-09-23",
        taskCategory: "Development"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Design Profile Card",
        taskDescription: "Create a reusable employee profile card component.",
        taskDate: "2026-09-21",
        taskCategory: "Design"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate the employee API and handle errors in the response.",
        taskDate: "2026-09-22",
        taskCategory: "Development"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Create Registration Form",
        taskDescription: "Develop a registration form with name, email, and password validation.",
        taskDate: "2026-09-23",
        taskCategory: "Development"
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Test Login Functionality",
        taskDescription: "Test login validation and verify error messages for invalid credentials.",
        taskDate: "2026-09-24",
        taskCategory: "Testing"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Prepare Project Documentation",
        taskDescription: "Write documentation explaining the project setup and features.",
        taskDate: "2026-09-19",
        taskCategory: "Documentation"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Develop Product Cards",
        taskDescription: "Create reusable product cards displaying images, names, prices, and buttons.",
        taskDate: "2026-09-23",
        taskCategory: "Development"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Update Website Footer",
        taskDescription: "Improve the footer layout and add contact and social media links.",
        taskDate: "2026-09-20",
        taskCategory: "Design"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "Fix Shopping Cart Bug",
        taskDescription: "Investigate and fix the issue with incorrect shopping cart item counts.",
        taskDate: "2026-09-22",
        taskCategory: "Bug Fixing"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Create Employee Table",
        taskDescription: "Build an employee table with names, email addresses, roles, and status.",
        taskDate: "2026-09-23",
        taskCategory: "Development"
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Implement Search Feature",
        taskDescription: "Add a search feature to filter employees by name or email.",
        taskDate: "2026-09-24",
        taskCategory: "Development"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Test Dashboard Layout",
        taskDescription: "Check the dashboard layout across desktop, tablet, and mobile screen sizes.",
        taskDate: "2026-09-21",
        taskCategory: "Testing"
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

export const setLocalStorage = ()=>{
 
    localStorage.setItem('employee',JSON.stringify(employee))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = ()=>{

   const  employee = JSON.parse( localStorage.getItem('employee'))
   const admin = JSON.parse(localStorage.getItem('admin'))
   console.log(employee, admin);
    

   return{employee, admin}
    
}