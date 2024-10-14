
### Conceptual Exercise

#### 1. What is the purpose of the React Router?

React Router is used to manage navigation and routing within a React application. It allows you to create and manage different routes in a single-page application (SPA) and dynamically render different components based on the URL path without needing to reload the page.

#### 2. What is a single page application?

A single-page application (SPA) is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. This results in a smoother user experience, as only the necessary data is updated, reducing the need for full-page reloads.

#### 3. What are some differences between client-side and server-side routing?

- **Client-side routing**: 
  - All the route handling is done on the client side using JavaScript. The application doesn't request new pages from the server but dynamically updates the content based on the current URL.
  - Pros: Faster navigation, smoother user experience.
  - Cons: Initial load time might be slower, needs JavaScript to be enabled.

- **Server-side routing**: 
  - Every time a user clicks a link, a new request is sent to the server, and the server responds with a new page.
  - Pros: Better for SEO and simpler architecture.
  - Cons: Slower user experience due to full-page reloads.

#### 4. What are two ways of handling redirects with React Router? When would you use each?

1. **Using the `<Navigate />` component**:
   - It is used to programmatically redirect users. You can place it inside your component's render method to redirect after an event, such as form submission.
   - Example: After logging in, you can redirect a user to the homepage.
   
2. **Using the `useNavigate` hook**:
   - This hook allows you to trigger navigation programmatically from a function in a functional component.
   - Example: You might use this when handling button clicks or specific conditions in your component logic to navigate to a new page.

#### 5. What are two different ways to handle page-not-found user experiences using React Router?

1. **Default Route in the Switch/Routes**: You can add a `<Route>` without a path at the end of your route definitions that renders a 404 component if no other routes match.
   
2. **Programmatic Handling**: You can use `useNavigate` or `Navigate` to programmatically redirect to a 404 page if an invalid path is detected within a component.

#### 6. How do you grab URL parameters from within a component using React Router?

You can grab URL parameters using the `useParams` hook in React Router. This hook allows you to access the parameters specified in your route.
Example:
```js
const { id } = useParams();
```
Here, `id` would be the URL parameter you defined in your route, like `/user/:id`.

#### 7. What is context in React? When would you use it?

Context in React allows you to share state or functions between components without having to pass props manually at every level. It provides a way to pass data through the component tree without needing to explicitly pass props down every level.

You would use Context when you have global data, like theme settings, user authentication status, or locale preferences, that need to be accessible by many components in the app.

#### 8. Describe some differences between class-based components and function components in React.

- **Class-based components**: 
  - Use ES6 classes and require a `render()` method to return JSX.
  - Can manage state and have lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc.

- **Function components**: 
  - Use plain JavaScript functions to return JSX.
  - Before hooks, function components were stateless, but with the introduction of hooks (like `useState`, `useEffect`), function components can now manage state and side effects.
  
Function components are now preferred due to their simplicity and the ability to use hooks.

#### 9. What are some of the problems that hooks were designed to solve?

Hooks were introduced to address the following problems:
- **Code Reusability**: With class components, sharing logic between components was complex and often required higher-order components or render props. Hooks simplify this with custom hooks.
- **Complex Components**: Class components with many lifecycle methods often had tangled logic. Hooks like `useEffect` cleanly separate side effects and improve readability.
- **State in Functional Components**: Before hooks, functional components were stateless. Hooks introduced the ability to use state and other React features without needing class components.
