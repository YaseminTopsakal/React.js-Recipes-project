
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Detail from './components/Detail';
import Product from './components/Product';
import Favorite from './components/Favorite';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:
      [
        {
          path: '/', element: <Product />
        },
        {
          path: '/:id', element: <Detail />
        },{
          path:'/favorite', element:<Favorite/>
        }

      ]
  },
 

]);


function App() {
  return (


    <RouterProvider router={router} />

  );
}

export default App;
