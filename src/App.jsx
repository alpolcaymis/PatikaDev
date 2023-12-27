import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewTicket from "./pages/NewTicket";
import Tickets from "./pages/Tickets";
import Ticket from "./pages/Ticket";
import { CartContextProvider } from "./context/cart-context";
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

              <Route path="/login" element={<Login />} />

              <Route path="/admin" element={<PrivateRoute />}>
                <Route path="/admin" element={<AdminPanel />} />
              </Route>

              <Route path="/new-ticket" element={<NewTicket />} />

              <Route path="/ticket-success" element={<SuccessTicket />} />

              <Route path="/ticket-search" element={<SearchTicket />} />

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
