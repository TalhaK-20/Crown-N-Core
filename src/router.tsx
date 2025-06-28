import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Wellness from "./pages/Wellness";
import Hair from "./pages/Hair";
import Spa from "./pages/Spa";
import AboutUs from "./pages/AboutUs";
import PerformanceTherapy from "./pages/PerformanceTherapy";
import HostEvent from "./pages/HostEvent";
import BookAppointment from "./pages/BookAppointment";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/wellness",
    element: <Wellness />,
  },
  {
    path: "/hair",
    element: <Hair />,
  },
  {
    path: "/spa",
    element: <Spa />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/performance-therapy",
    element: <PerformanceTherapy />,
  },
  {
    path: '/host-event',
    element: <HostEvent/>
  },
  {
    path: '/book-appointment',
    element: <BookAppointment/>
  }
]);

export default router;