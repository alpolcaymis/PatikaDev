import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartContextProvider } from "./context/cart-context";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Ticket from "./pages/Ticket";
import Tickets from "./pages/Tickets";
import NewTicket from "./pages/NewTicket";
import AdminPanel from "./pages/AdminPanel";
import SearchTicket from "./pages/SearchTicket";
import SuccessTicket from "./pages/SuccessTicket";

function App() {
  return (
    <>
      <CartContextProvider>
        <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/new-ticket" element={<NewTicket />} />

              <Route path="/ticket-success" element={<SuccessTicket />} />

              <Route path="/ticket-search" element={<SearchTicket />} />

              <Route path="/ticket/:ticketId" element={<Ticket />} />

              <Route path="/login" element={<Login />} />

              <Route path="/admin" element={<PrivateRoute />}>
                <Route path="/admin" element={<AdminPanel />} />
              </Route>

              <Route path="/admin/tickets" element={<PrivateRoute />}>
                <Route path="/admin/tickets" element={<Tickets />} />
              </Route>

              <Route path="/admin/ticket/:ticketId" element={<PrivateRoute />}>
                <Route path="/admin/ticket/:ticketId" element={<Ticket />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </CartContextProvider>
      <ToastContainer />
    </>
  );
}

export default App;
