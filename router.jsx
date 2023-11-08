import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import NotFound from './Pages/NotFound';
import AllCharactersPage from './Pages/AllCharactersPage';
import ACharacterPage from './Pages/ACharacterPage';
import FavoritesPage from "./pages/FavoritesPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {path: 'about/',
         element: <AboutPage />,

        },
        {path: "characters/",
         element: <AllCharactersPage/>
        },
        {path: "character/:id/",
        element: <ACharacterPage/>
       },
       {
        path:'favorites/',
        element: <FavoritesPage/>
    },
      ],
      errorElement: <NotFound />,
    },
  ]);
  
  export default router;