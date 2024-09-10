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
    flex flex-col justify-center gap-24 lg:gap-[2.875rem]
    pt-[2.875rem]"
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
