// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import CourseDetails from './pages/courseDetails'; // Make sure this matches the correct file name
// import Login from './pages/Login';
// import AboutUs from './pages/AboutUs';
// import MycCourses from './pages/MycCourses';
// import OfflineForm  from './pages/OfflineForm';

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/course" element={<CourseDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/mycourses" element={<MycCourses />} />
            <Route path="/offlineForm" element={<OfflineForm />} />
            <Route path="/course/:id" element={<CourseDetails />} /> */}
         </Routes>
      </>
   );
};
 
export default App;
