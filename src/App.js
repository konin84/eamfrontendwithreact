import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import UserManagement from "./pages/users/UserManagement";
import Clients from "./pages/users/Clients/Clients";

import AddCompany from "./pages/Company/AddCompany";
import CompanyDetails from "./pages/Company/CompanyDetails";
import UpdateCompany from "./pages/Company/UpdateCompany";
import UpdateLogo from "./pages/Company/UpdateLogo";
import NewBlog from "./pages/Blog/NewBlog";
import BlogList from "./pages/Blog/BlogList";
import UpdateBlog from "./pages/Blog/UpdateBlog";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/Photos/AboutUs";
import OurServices from "./pages/OurServices";
import OurContact from "./pages/OurContact";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import NewService from "./pages/Services/NewService";
import Images from "./pages/Photos/Images/Images";
import AddImages from "./pages/Photos/Images/AddImages";
import BlogDetails from "./pages/Blog/BlogDetails";
import Service from "./pages/Services/Service";
import UpdateServiceImage from "./pages/Services/UpdateServiceImage";
import ServiceUpdate from "./pages/Services/ServiceUpdate";
import ServiceDetails from "./pages/Services/ServiceDetails";
import NewNavBar from "./pages/HomePage/NewNavBar";
function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="welcome" element={<MainPage />} />

        <Route path="company-setting" element={<AddCompany />} />
        <Route path="company-info" element={<CompanyDetails />} />
        <Route path="company/update/:id" element={<UpdateCompany />} />
        <Route path="company/logo/update/:id" element={<UpdateLogo />} />
        <Route path="newnav" element={<NewNavBar />} />
        <Route path="blog" element={<NewBlog />} />
        <Route path="blog-list" element={<BlogList />} />
        <Route path="blog/update/:slug" element={<UpdateBlog />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="blogs/:slug" element={<BlogDetails />} />

        <Route path="user-management" element={<UserManagement />} />
        <Route path="clients" element={<Clients />} />

        <Route path="services/add-service" element={<NewService />} />
        <Route path="services" element={<Services />} />
        <Route path="service/:slug" element={<Service />} />
        <Route path="services/:slug" element={<ServiceDetails />} />
        <Route path="service/update/:slug" element={<ServiceUpdate />} />
        <Route
          path="service/update/image/:slug"
          element={<UpdateServiceImage />}
        />

        <Route path="about" element={<AboutUs />} />
        <Route path="ourservices" element={<OurServices />} />
        <Route path="contact" element={<OurContact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="images" element={<Images />} />
        <Route path="images/add-image" element={<AddImages />} />
      </Routes>
    </div>
  );
}

export default App;
