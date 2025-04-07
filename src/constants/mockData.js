import dedent from "dedent";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Mastering the Core Trio: HTML, CSS, and JavaScript",
    summary:
      "A beginner-friendly guide to understanding the foundational technologies of front-end development.",
    date: "2025-04-07",
    url: "posts/1",
    author: "Nikita",
    content: [
      { element: "h2", content: "Why the Core Trio Matters" },
      {
        element: "p",
        children: [
          {
            type: "text",
            content:
              "These three languages are the foundation of front-end development.",
          },
        ],
      },
      {
        element: "p",
        children: [
          { type: "bold", content: "HTML " },
          { type: "text", content: "structures the content, " },
          { type: "bold", content: "CSS " },
          { type: "text", content: "styles it, and " },
          { type: "bold", content: "JavaScript " },
          { type: "text", content: "makes it interactive." },
        ],
      },
      {
        element: "codeblock",
        language: "html",
        content: `<button onclick="alert('Hello!')">Click Me</button>`,
      },
      {
        element: "list",
        ordered: false,
        items: [
          `<button> is the HTML element. It defines the structure of a clickable button on the page.`,
          "You’d use CSS to change how the button looks, like its color, size, hover effects, etc.",
          `onclick="alert('Hello!')" is JavaScript, it adds behavior.`,
        ],
      },
      {
        element: "img",
        src: "https://www.ultimatewb.com/blog/wp-content/uploads/html-js-css-website-coding.jpg",
        alt: "Code Example",
      },
    ],
  },
  {
    id: 2,
    title: "Essential Modern JavaScript Features You Should Know",
    summary:
      "Explore ES6+ features like arrow functions, destructuring, and async/await with examples.",
    date: "2025-04-07",
    url: "posts/2",
    author: "Nikita",
    content: [
      {
        element: "h2",
        content: "Why Modern JavaScript Matters",
      },
      {
        element: "img",
        src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LyZcwuLWv2FArOumCxobpA.png",
        alt: "Modern JavaScript Features",
      },
      {
        element: "p",
        children: [
          {
            type: "text",
            content:
              "Modern JavaScript introduces cleaner, more expressive syntax. Features like ",
          },
          {
            type: "link",
            content: "arrow functions",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
            style: "italic",
          },
          { type: "text", content: ", " },
          {
            type: "link",
            content: "destructuring",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
            style: "bold",
          },
          {
            type: "text",
            content: ", and async/await make your code more readable.",
          },
        ],
      },
      {
        element: "h3",
        content: "Key Features at a Glance",
      },
      {
        element: "list",
        ordered: true,
        items: [
          "Arrow Functions: short syntax for functions",
          "Destructuring: extract values from arrays/objects",
          "Async/Await: handle promises with cleaner syntax",
        ],
      },
      {
        element: "codeblock",
        language: "javascript",
        content: dedent(`
          const user = { name: "Nikita", role: "Dev" };
          const { name, role } = user;
          const greet = (name) => \`Hi, \${name}!\`;
          async function fetchData() {
            const res = await fetch("/api/data");
            const data = await res.json();
            console.log(data);
          }
        `),
      },
    ],
  },
  {
    id: 3,
    title: "React 101: Getting Started with Components and Hooks",
    summary:
      "A practical introduction to React's core concepts, including functional components and hooks.",
    date: "2025-04-07",
    url: "posts/3",
    author: "Nikita",
    content: [
      { element: "h2", content: "Building with Components" },
      {
        element: "p",
        children: [
          { type: "text", content: "Hooks like " },
          {
            type: "link",
            content: "useState",
            href: "https://react.dev/reference/react/useState",
            style: "bold",
          },
          { type: "text", content: " and " },
          {
            type: "link",
            content: "useEffect",
            href: "https://react.dev/reference/react/useEffect",
            style: "italic",
          },
          { type: "text", content: " changed the game." },
        ],
      },
      {
        element: "list",
        ordered: true,
        items: [
          "Break UI into Components",
          "Use useState for local state",
          "Use useEffect for side effects",
        ],
      },
      {
        element: "p",
        children: [
          {
            type: "text",
            content:
              "React makes it easy to build complex UIs by encouraging developers to break the user interface into small, reusable components. Instead of writing large blocks of HTML, each part of your UI—like buttons, forms, or headers—can live in its own component, which keeps your code modular and easy to maintain. Components also make collaboration easier, since different parts of the UI can be developed and tested independently.",
          },
        ],
      },
      {
        element: "p",
        children: [
          {
            type: "text",
            content:
              "One of the key features introduced with React Hooks is useState, which allows you to manage local state inside functional components. Whether it's tracking input field values, toggling visibility, or updating counters, useState gives you a simple way to make your UI dynamic without needing to convert to class-based components.",
          },
          {
            type: "text",
            content:
              "React also offers useEffect, a powerful Hook used to handle side effects in your application. This includes things like fetching data from an API, setting up subscriptions, or manually updating the DOM. By using useEffect, you can tie your side effects to the component lifecycle, ensuring that actions like cleanup or re-fetching happen at the right time.",
          },
        ],
      },
      {
        element: "p",
        children: [
          {
            type: "text",
            content:
              "React also offers useEffect, a powerful Hook used to handle side effects in your application. This includes things like fetching data from an API, setting up subscriptions, or manually updating the DOM. By using useEffect, you can tie your side effects to the component lifecycle, ensuring that actions like cleanup or re-fetching happen at the right time.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Version Control and Tooling for Front-End Developers",
    summary:
      "Learn how Git, NPM, and modern bundlers like Vite streamline your workflow.",
    date: "2025-04-07",
    url: "posts/4",
    author: "Nikita",
    content: [
      { element: "h3", content: "Tooling to the Rescue" },
      {
        element: "p",
        children: [
          { type: "text", content: "In modern front-end development, " },
          { type: "bold", content: "version control " },
          {
            type: "text",
            content:
              "is a non-negotiable skill. It allows developers to track changes in code, collaborate with teams seamlessly, and revert to previous versions if something breaks. Git, the most widely used version control system, is often paired with platforms like GitHub or GitLab to enable remote collaboration, pull requests, and code reviews. Whether you’re a solo developer or part of a team, using version control ensures your codebase stays clean, organized, and backed up.",
          },
        ],
      },
      {
        element: "p",
        children: [
          {
            type: "text",
            content:
              "Alongside version control, front-end developers rely heavily on ",
          },
          { type: "bold", content: "tooling " },
          {
            type: "text",
            content:
              "to streamline their workflow. Tools like npm or Yarn manage project dependencies, making it easy to integrate packages like React, Tailwind CSS, or Axios. Build tools such as Vite, Webpack, and Parcel optimize performance and bundle your assets efficiently, while linters (like ESLint) and formatters (like Prettier) help enforce consistency and catch errors early in development.",
          },
        ],
      },
      {
        element: "p",
        children: [
          {
            type: "text",
            content: "Developers also benefit from ",
          },
          { type: "bold", content: "module bundlers and transpilers " },
          {
            type: "text",
            content:
              "like Babel, which allow us to write modern JavaScript while ensuring compatibility with older browsers. And let’s not forget task runners and dev servers that automatically reload the browser as you code—drastically improving productivity and feedback cycles. When used together, version control and a solid set of tools create a smooth and scalable environment for front-end projects, from small experiments to enterprise-level apps.",
          },
        ],
      },
      {
        element: "img",
        src: "https://fs.buttercms.com/resize=width:885/NFhF3dWBTf5wPnfTsdjR",
        alt: "NPM logo",
      },
    ],
  },
  {
    id: 5,
    title: "Working with APIs and Managing State in Front-End Apps",
    summary:
      "Understand how to fetch data using APIs and manage state efficiently in your applications.",
    date: "2025-04-07",
    url: "posts/5",
    author: "Nikita",
    content: [
      { element: "h2", content: "Managing Dynamic Data" },
      {
        element: "p",
        children: [
          { type: "italic", content: "APIs" },
          {
            type: "text",
            content:
              " allow apps to interact with real-time data sources. APIs are crucial for dynamic applications.",
          },
        ],
      },
      {
        element: "p",
        children: [
          { type: "bold", content: "State management" },
          {
            type: "text",
            content:
              " is an essential aspect of building apps that interact with APIs. It helps maintain consistency and data flow.",
          },
        ],
      },
      {
        element: "list",
        ordered: true,
        items: [
          "Call the API",
          "Parse the JSON response",
          "Update the application state with the fetched data",
        ],
      },
      {
        element: "list",
        ordered: false,
        items: [
          "Use the fetched data for rendering",
          "Handle errors gracefully",
          "Ensure the UI is responsive during data loading",
        ],
      },
      {
        element: "codeblock",
        language: "javascript",
        content: dedent(`useEffect(() => {
          fetch("https://api.example.com/data")
          .then(res => res.json())
          .then(data => setData(data));
          }, []);`),
      },
      {
        element: "img",
        src: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js-1536x864.png",
        alt: "API Illustration",
      }
    ],
  },
];

export default BLOG_POSTS;
