import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ContactsPage from "./pages/ContactsPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/contacts"
        element={
          <PrivateRoute>
            <ContactsPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
