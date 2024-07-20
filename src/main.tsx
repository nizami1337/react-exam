import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCar from './components/AddCar/AddCar.tsx'
import CarMenu from './components/Car/Car.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/car/:carId',
    element: <CarMenu/>
  },
  {
    path: '/addcar',
    element: <AddCar/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
