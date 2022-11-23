import { Routes, Route } from 'react-router-dom';
import { CreateCarProvider } from '../hook/createCar';
import { EditCarProvider } from '../hook/editCar';
import { CreateCar } from '../pages/CreateCar';
import { EditCar } from '../pages/EditCar';
import { Home } from '../pages/Home';
import { ListCar } from '../pages/ListCar';

export function AppRoutes() {
  return (
    <Routes >
      <Route path="/" element={<Home />}  />
      <Route path="/list" element={<ListCar />} />
      <Route
        path="/create"
        element={
          <CreateCarProvider>
            <CreateCar />
          </CreateCarProvider>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <EditCarProvider>
            <EditCar />
          </EditCarProvider>
        }
      />
    </Routes>
  );
}
