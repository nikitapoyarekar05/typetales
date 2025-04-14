# TypeTales  

A **React 19** blogging application built with **Vite** and tested using **Vitest** and **Testing Library**.

## Features  
- Blog post listing and details pages  
- Styled using **CSS Modules**  
- **React Router** for navigation  
- Unit and integration tests using **Vitest** and **Testing Library**  

## Project Structure  
    type-tales 
        │── .github/
        │ │ └── workflows/
        │ │ │ │ └── deploy.yml
        │── src/ 
        │ ├── components/         # Reusable React components 
        │ ├── container/          # Container components for pages
        │ ├── globals/            # Global CSS files
        │ ├── pages/              # Page components (Home, Blog)
        │ ├── utilities/          # utility files containing mock data, authoring and helper functions
        │ ├── App.jsx             # Main application component
        │ ├── main.jsx            # Entry point
        ├── tests/                # vite test setup files
        │── public/               # Static files (index.html, etc.)
        │── package.json          # Project dependencies
        │── vite.config.js        # Vite configuration
        │── .eslintrc.js          # Linting rules
        │── .gitignore            # Git ignore rules

## Installation & Setup  
1. Clone the repository:  
   ```sh
   git clone https://github.com/nikitapoyarekar05/type-tales.git
   cd type-tales
2. Install dependencies:
    ```sh 
    npm install
3.  Run the development server:
    ```sh
    npm run dev
4. Open the app in your browser:
    ```sh
    http://localhost:5173
5. To run tests
    ```sh
    npm run test
## License 
This project is licensed under the MIT License.