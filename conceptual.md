### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router is a library for handling navigation and routing in a React application. Its purpose is to enable the creation of single-page applications (SPAs) by allowing developers to define navigation routes, render different components based on those routes, and update the UI accordingly without a full-page reload. React Router helps manage the application's UI state and provides a way to synchronize the application's state with the URL.

- What is a single page application?
A Single Page Application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current page, rather than loading entire new pages from the server. SPAs use AJAX and client-side routing to provide a smoother user experience, as the page doesn't fully reload during navigation. React, in combination with React Router, is commonly used to build SPAs.

- What are some differences between client side and server side routing?
Client-Side Routing:
Navigation is handled on the client side without a full page reload.
Typically used in SPAs.
React Router is a popular library for client-side routing in React applications.
Server-Side Routing:
Navigation involves full page reloads and requests to the server for each new page.
Traditional approach used in multi-page applications.
Server sends a new HTML page in response to each navigation request.

- What are two ways of handling redirects with React Router? When would you use each?
Two ways to handle redirects:
Using the <Redirect> component: It renders a new location and updates the URL.
Programmatically using the history object: Calling history.push or history.replace to change the URL.
Handling Page-Not-Found Experiences:

Using a <Route> with no path: It matches any location, providing a catch-all for 404 errors.
Using a custom NotFound component: Render a specific component when no routes match.

- What are two different ways to handle page-not-found user experiences using React Router? 
Using a <Route> with no path: It matches any location, providing a catch-all for 404 errors.
Using a custom NotFound component: Render a specific component when no routes match.

- How do you grab URL parameters from within a component using React Router?
Using the useParams hook: It allows you to access the parameters of the current URL from within a component.

- What is context in React? When would you use it?
Context provides a way to pass data through the component tree without having to pass props down manually at every level.
It is useful for sharing values like themes, authentication status, or other global data.
Context is typically used when multiple components need access to the same data.

- Describe some differences between class-based components and function
  components in React.
Class-Based Components:
Use the class keyword to define components.
Have a this keyword to access state and props.
Support lifecycle methods.
Prior to React Hooks, used for state management and lifecycle logic.
Function Components:
Defined using arrow functions or the function keyword.
Use hooks (e.g., useState, useEffect) for state and side effects.
Simpler syntax, especially with the introduction of Hooks.
Typically preferred for new development.

- What are some of the problems that hooks were designed to solve?
Complexity of Class Components:
Hooks provide a more straightforward way to manage state and side effects in functional components.
Reuse of Stateful Logic:
Hooks enable the extraction and reuse of stateful logic without the need for higher-order components or render props.
Difficulty in Understanding Lifecycle Methods:
Hooks simplify component lifecycle logic with the introduction of the useEffect hook.
Sharing Stateful Logic Between Components:
Custom hooks allow the sharing of stateful logic between components without resorting to inheritance or other patterns.
