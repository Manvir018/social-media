import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import CreatePost, { createPostAction } from './Components/CreatePost';
import PostList, { postLoader } from './Components/PostList';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
        {path: "/", element: <PostList />, loader: postLoader },
        {path: "/CreatePost", element: <CreatePost />, action: createPostAction},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router = {router} />
  </React.StrictMode>,
);
