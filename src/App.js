import './App.css';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import Admin from './pages/Admin';
import Reservation from './pages/Reservation';
import NotFound from './pages/404';
import './services/reservationService'
import { getAllReservations } from './services/reservationService';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Reservation />
    },
    {
      path: '/reservation',
      element: <Reservation />
    },
    {
      path: '/admin',
      element: <Admin />
    },
    {
      path: '*',
      element: <NotFound />
    }

  ]
)

// getAllReservations()

function App() {
  return (
      <div className='App'>

        <BrowserRouter router={router} />

      </div>
  )
}

export default App;
