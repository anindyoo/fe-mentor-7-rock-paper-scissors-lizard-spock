import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';

const App = () => {
  const routes = [
    {
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ];

  const routeConfig = {
    basename: '/fe-mentor-7-rock-paper-scissors-lizard-spock',
  };

  const router = createBrowserRouter(routes, routeConfig);

  return (
    <div className="
    APP-CONTAINER
    flex flex-col gap-24 lg:gap-[2.875rem]
    h-screen
    pt-[2.875rem]
    overflow-y-hidden"
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
