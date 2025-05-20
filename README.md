# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Admin Panel

A modern admin panel built with React and Tailwind CSS, featuring RTL support and responsive design.

## Page Structure

When creating a new page in the application, follow this structure:

1. First, import the required components:

```jsx
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
```

2. Add the Navbar and Sidebar components at the top of your page:

```jsx
<>
  <Navbar />
  <Sidebar />
  {/* Your page content goes here */}
</>
```

3. Wrap your page content with this container div to ensure proper layout and spacing:

```jsx
<div className="mr-0 lg:mr-64 p-4 lg:p-8 bg-gray-100 min-h-screen mt-16 lg:mt-10 transition-all duration-300">
  {/* Your page content goes here */}
</div>
```

This container div provides:

- Proper margin for the sidebar (`mr-0 lg:mr-64`)
- Consistent padding (`p-4 lg:p-8`)
- Light gray background (`bg-gray-100`)
- Full height (`min-h-screen`)
- Top margin for the navbar (`mt-16 lg:mt-10`)
- Smooth transitions (`transition-all duration-300`)

## Example Page Structure

Here's a complete example of a new page:

```jsx
import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";

function NewPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="mr-0 lg:mr-64 p-4 lg:p-8 bg-gray-100 min-h-screen mt-16 lg:mt-10 transition-all duration-300">
        {/* Your page content goes here */}
      </div>
    </>
  );
}

export default NewPage;
```

## Features

- Responsive design
- RTL support
- Modern UI with Tailwind CSS
- Consistent layout across all pages
- Mobile-friendly navigation
- Dark mode support (coming soon)

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

## Contributing

When adding new pages or features:

1. Follow the page structure guidelines above
2. Maintain RTL support
3. Ensure responsive design
4. Use Tailwind CSS for styling
5. Follow the existing component patterns
