# Mio Character Bio Creator

This project is a character bio creator application built with React.

## `src/App.tsx`

This file contains the main application component, `App`, which is responsible for rendering a form that allows users to input information about a character.

### Functionality

The `App` component includes the following functionalities:

- **State Management:** Uses `useState` hooks to manage the state of various form fields such as `name`, `age`, `gender`, `occupation`, `personality`, `story`, and `relation`. It also manages state for dynamic lists of `hobbies` and `relations` with other characters.
- **Form Handling:** Implements functions to handle changes in input fields, including adding and removing hobbies and relations.
- **Form Submission:** The `handleSubmit` function validates required fields (`name`, `age`, `gender`), converts the `age` to a number, and then saves the form data to the local storage as a JSON string under the key `characterBio`. It also displays an alert to notify the user that the data has been saved.
- **Dynamic Input Fields:** Allows users to add multiple hobbies and relations with other characters dynamically.
- **Data Download:** Includes a `handleDownload` function that allows users to download the saved character data as a JSON file.
- **UI Components:** Utilizes custom UI components like `Input`, `Label`, `Textarea`, `Button`, and `Select` from the project's UI library.

### State Variables

- `name`: Stores the character's name.
- `age`: Stores the character's age.
- `gender`: Stores the character's gender.
- `occupation`: Stores the character's occupation.
- `personality`: Stores a description of the character's personality.
- `story`: Stores the character's backstory.
- `relation`: Stores the character's relation to the user.
- `hobbies`: An array of objects, each containing a unique ID and the hobby's value.
- `relations`: An array of objects, each containing a unique ID, the related character's name, and the relation type.

### Functions

- `handleAddHobby`: Adds a new empty hobby input field.
- `handleHobbyChange`: Updates the value of a specific hobby.
- `handleAddRelation`: Adds a new set of input fields for a relation with another character.
- `handleRelationChange`: Updates either the character name or the relation type for a specific relation.
- `handleSubmit`: Handles the form submission, validates input, and saves data to local storage.
- `handleDownload`: Handles the download of the saved character data as a JSON file.

### UI Structure

The component renders a form with various input fields and controls, including:

- Text inputs for name, age, occupation, and relation to the user.
- A select dropdown for gender.
- Textareas for personality and story.
- Dynamically added input fields for hobbies and relations with other characters.
- Buttons to add new hobbies and relations.
- A submit button to save the character bio.
- A download button to download the saved data.

## Available Scripts

### Using Yarn

- `yarn dev`: Runs the development server.
- `yarn build`: Builds the application for production.
- `yarn lint`: Runs the linter.
- `yarn preview`: Previews the production build locally.
- `yarn test`: Runs the tests.
- `yarn postbuild`: Runs postbuild tasks.

### Using npm

- `npm run dev`: Runs the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs the linter.
- `npm run preview`: Previews the production build locally.
- `npm run test`: Runs the tests.
- `npm run postbuild`: Runs postbuild tasks.

## Packages Used

This project uses the following packages:

- **Vite React Typescript:** A build tool and framework for building React applications with TypeScript.  Provides fast development server and optimized production builds.
- **Tailwind:** A utility-first CSS framework that provides a large set of pre-defined CSS classes for rapid UI development.  It allows for highly customizable and consistent styling.
- **Shadcn:** A UI component library built on top of Tailwind CSS, offering pre-built, reusable components to accelerate development.  Provides a consistent design system.
- **Babel:** A JavaScript compiler that transforms modern JavaScript code into a version compatible with older browsers.  Ensures broader browser support.
- **Playwright:** An end-to-end testing framework for web applications.  Used for automated testing of the application's functionality.
