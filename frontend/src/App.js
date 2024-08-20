// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Mycomponant/Pages/Home';
import DataHome from './Mycomponant/Pages/DataHome';
import ContactPage from './Mycomponant/Pages/ContactPage';
import AdminLogin from './Mycomponant/AdminPages/AdminLogin';
import AdminPanel from './Mycomponant/AdminPages/AdminPanel';
import DashBoard from './Mycomponant/AdminPages/DashBoard';
import Signup from './Mycomponant/UserPages/Signup';
import Login2 from './Mycomponant/UserPages/Login2';
import UserPanel from './Mycomponant/UserPages/UserPanel';
import UserChangePassword from './Mycomponant/UserPages/UserChangePassword';
import AdminChangePassword from './Mycomponant/AdminPages/AdminChangePassword';
import UserMyProfile from './Mycomponant/UserPages/UserMyProfile';
import UserUpdateProfile from './Mycomponant/UserPages/UserUpdateProfile';
import ViewAllUser from './Mycomponant/AdminPages/ViewAllUser';
import AddFlight from './Mycomponant/AdminPages/AddFlight';
import ViewAllFlights from './Mycomponant/AdminPages/ViewAllFlights';
import UpdateFlight from './Mycomponant/AdminPages/UpdateFlight';
import UserDashBoard from './Mycomponant/UserPages/UserDashBoard';
import ViewUserFlights from './Mycomponant/UserPages/ViewUserFlights';
import ViewFlightDetails from './Mycomponant/UserPages/ViewFlightDetails';
import BookFlights from './Mycomponant/UserPages/BookFlights';
import ViewUserBookings from './Mycomponant/UserPages/ViewUserBookings';
import ViewBookingDetails from './Mycomponant/UserPages/ViewBookingDetails';
import ViewAllBooking from './Mycomponant/AdminPages/ViewAllBooking';
import UserBookingDetails from './Mycomponant/AdminPages/UserBookingDetails';
import PaymentPage from './Mycomponant/UserPages/PaymentPage';
import ViewAllContactAndFeedback from './Mycomponant/AdminPages/ViewAllContactAndFeedback';
import FrontContactPage from './Mycomponant/Pages/FrontContactPage';
import FrontViewFlights from './Mycomponant/Pages/FrontViewFlights';
import AddDestination from './Mycomponant/AdminPages/AddDestination';
import ViewDestination from './Mycomponant/AdminPages/ViewDestination';
import FrontDestinationPage from './Mycomponant/Pages/FrontDestinationPage';
import UpdateDestination from './Mycomponant/AdminPages/UpdateDestination';





function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} >
      <Route index element={<DataHome />}  /> 
      <Route path="contact"  element={<FrontContactPage/>}  />
      <Route path="signup"  element={<Signup />}  />
      <Route path="login"  element={<Login2 />}  />
      <Route path="adminLogin"  element={<AdminLogin />}  />
      <Route path="frontViewFlights"  element={<FrontViewFlights/>}  />
      <Route path="frontDestinationPage" element={<FrontDestinationPage/>}  /> 
      </Route>

      <Route path="/" element={<AdminPanel />} >
      <Route path="dashBoard" element={<DashBoard />}  /> 
      <Route path="adminChangePassword" element={<AdminChangePassword />}  /> 
      <Route path="viewAllUser" element={<ViewAllUser/>}  /> 
      <Route path="addFlight" element={<AddFlight/>}  /> 
      <Route path="viewAllFlight" element={<ViewAllFlights/>}  /> 
      <Route path="updateFlight" element={<UpdateFlight/>}  /> 
      <Route path="viewAllBooking" element={<ViewAllBooking/>}  /> 
      <Route path="userBookingDetails" element={<UserBookingDetails/>}  /> 
      <Route path="viewAllContactAndFeedback" element={<ViewAllContactAndFeedback/>}  /> 
      <Route path="addDestination" element={<AddDestination/>}  /> 
      <Route path="viewDestination" element={<ViewDestination/>}  /> 
      <Route path="updateDestination" element={<UpdateDestination/>}  /> 
   

      </Route>
      <Route path="/" element={<UserPanel />} >
      <Route path="userdashBoard" element={<UserDashBoard />}  /> 
      <Route path="userChangePassword" element={<UserChangePassword/>}  /> 
      <Route path="userMyProfile" element={<UserMyProfile/>}  /> 
      <Route path="userUpdateProfile" element={<UserUpdateProfile/>}  /> 
      <Route path="viewUserFlights" element={<ViewUserFlights/>}  /> 
      <Route path="viewFlightDetails" element={<ViewFlightDetails/>}  /> 
      <Route path="bookFlights" element={<BookFlights/>}  /> 
      <Route path="viewUserBookings" element={<ViewUserBookings/>}  /> 
      <Route path="viewBookingDetails" element={<ViewBookingDetails/>}  /> 
      <Route path="paymentPage" element={<PaymentPage/>}  /> 
      <Route path="userContact" element={<ContactPage/>}  /> 
      <Route path="userDestinationPage" element={<FrontDestinationPage/>}  /> 
      </Route>
   
    </Routes>
  </div>
  );
}

export default App;
