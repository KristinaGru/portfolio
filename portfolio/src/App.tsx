import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import FrontPage from './pages/FrontPage/FrontPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <FrontPage />
      },
      {
        path: '/projects',
        element: <ProjectPage />
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
