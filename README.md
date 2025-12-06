# 🌱 GreenSfera: Climate-Tech Solutions Website

## Overview
GreenSfera is a modern and responsive web platform built with React and TypeScript, designed to drive practical climate solutions through digital engagement and community action. It showcases GreenSfera's initiatives in environmental restoration, youth innovation, and smart green technology, fostering global participation for a sustainable future.

## Features
*   **Interactive Homepage**: Engages visitors with dynamic content, including an impactful hero section, an overview of the organization, projects showcase, key impact statistics, and authentic testimonials.
*   **Detailed Informational Pages**: Dedicated sections for "Who We Are", "Our Projects", and "Youth Hub" provide in-depth information about GreenSfera's mission, vision, activities, and programs.
*   **Community Engagement Forms**: User-friendly contact forms enable visitors to easily get involved through volunteering, partnerships, donations, or general inquiries.
*   **Dynamic Testimonials Section**: Features a carousel of real stories from individuals and partners, highlighting the tangible impact and positive experiences within the GreenSfera community.
*   **Team Showcase**: An elegant "Meet The Team" section introduces the passionate individuals driving the organization, complete with their roles and contributions.
*   **Responsive Design**: Crafted with Tailwind CSS to ensure a seamless and visually appealing experience across all devices and screen sizes.
*   **Efficient Client-Side Routing**: Utilizes React Router DOM for smooth, single-page application navigation between different sections of the website.
*   **Supabase Integration**: Incorporates `@supabase/supabase-js` for potential client-side interactions with Supabase services, such as form submissions or data retrieval.

## Getting Started

### Installation
To get this project up and running on your local machine, follow these steps:

1.  ### 👯‍♀️ Clone the Repository
    Clone the project repository to your local machine using git:
    ```bash
    git clone https://github.com/Deelolade/greensfera-project.git
    ```
    Navigate into the project directory:
    ```bash
    cd greensfera-project
    ```

2.  ### 📦 Install Dependencies
    Install the necessary Node.js packages using npm:
    ```bash
    npm install
    ```

### Environment Variables
This project may require specific environment variables for services like Supabase. Create a `.env` file in the root directory of the project and add the following:

*   **VITE_SUPABASE_URL**: `Your Supabase project URL`
*   **VITE_SUPABASE_ANON_KEY**: `Your Supabase public anon key`

## Usage
Once the project dependencies are installed and environment variables are configured, you can start the development server:

1.  ### 🚀 Run the Development Server
    ```bash
    npm run dev
    ```
    This command will start the Vite development server. The application will typically be accessible at `http://localhost:5173` in your web browser.

2.  ### 🌐 Browse the Website
    Open your web browser and navigate to the address provided by the `npm run dev` command (e.g., `http://localhost:5173`). You can then explore the different sections of the GreenSfera website:
    *   **Home**: Discover the main initiatives and overall mission.
    *   **Who We Are**: Learn about the organization's mission, vision, and core values.
    *   **Projects**: Explore the various environmental and climate-tech projects.
    *   **Youth Hub**: Find programs and opportunities for youth involvement.
    *   **Contact**: Reach out to GreenSfera for inquiries, partnerships, or volunteering.

## Technologies Used

| Technology         | Icon | Description                                         |
| :----------------- | :--- | :-------------------------------------------------- |
| **Vite**           | ⚡️   | Next-generation frontend tooling for fast development. |
| **React**          | ⚛️   | A JavaScript library for building user interfaces.    |
| **TypeScript**     | ʦ   | A superset of JavaScript that adds static typing.     |
| **Tailwind CSS**   | 🎨   | A utility-first CSS framework for rapid UI development. |
| **Lucide React**   | ✨   | A collection of beautiful and customizable open-source icons. |
| **React Router DOM**| 🗺️   | Declarative routing for React applications.         |
| **Supabase JS**    | 🚀   | Client library for interacting with Supabase (backend-as-a-service). |

## Contributing
We welcome contributions to the GreenSfera project! If you're interested in improving this platform, please follow these guidelines:

1.  ### 🌿 Fork the Repository
    Fork the project repository on GitHub.

2.  ### 🌳 Create a New Branch
    Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
    (or `bugfix/your-bug-description`)

3.  ### 💻 Make Your Changes
    Implement your changes, ensuring that your code adheres to the project's coding standards and passes linting checks.

4.  ### ✅ Commit Your Changes
    Commit your changes with a clear and descriptive message:
    ```bash
    git commit -m "feat: Add new awesome feature"
    ```
    (or `fix: Resolve critical bug`)

5.  ### 🚀 Push to Your Branch
    Push your changes to your forked repository:
    ```bash
    git push origin feature/your-feature-name
    ```

6.  ### 📝 Create a Pull Request
    Open a pull request from your branch to the `main` branch of the original repository. Provide a detailed description of your changes.

## License
This project is licensed under the MIT License.

## Author Info
**Developed by Tinzwave Technologies**

*   **Twitter**: [@tinzwave](https://twitter.com/tinzwave_tech)
*   **LinkedIn**: [Tinzwave Technologies](https://www.linkedin.com/company/tinzwave-technologies/)

## Badges
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)
[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)