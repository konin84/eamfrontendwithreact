import axios from "axios";
import { API_URL } from "../utils/config";
import { AuthHeader } from "../utils/authHeader";

// export const realtorHouses = () =>{
//   return axios.get(API_URL+'/house/realtor-houses',
//   {
//     headers:
//       AuthHeader()
//   }
//   )
// }
// export const tenantHouse = () =>{
//   return axios.get(API_URL+'/house/house',
//   {
//     headers:
//       AuthHeader()
//   }
//   )
// }

// export const adminHouses = () =>{
//   return axios.get(API_URL+'/house/all-houses',
//   {
//     headers:
//       AuthHeader()
//   }
//   )
// }

// export const totalAmountPaid = () =>{
//   return axios.get(API_URL+'/house/total-bills',
//   {
//     headers:
//       AuthHeader()
//   }
//   )
// }

export const addCompany = (data) => {
  return axios.post(API_URL + "/company/add-company", data, {
    headers: AuthHeader(),
  });
};

export const companyInfo = () => {
  return axios.get(API_URL + "/company/add-company", {
    headers: AuthHeader(),
  });
};

export const getCompanyInfo = (id) => {
  return axios.get(API_URL + "/company/company/" + id, {
    headers: AuthHeader(),
  });
};

export function updateCompany(id, data) {
  return axios.put(API_URL + "/company/company/update/" + id, data, {
    headers: AuthHeader(),
  });
}
export function updateCompanyLogo(id, data) {
  return axios.put(API_URL + "/company/company/logo/update/" + id, data, {
    headers: AuthHeader(),
  });
}

export const addNewBlog = (data) => {
  return axios.post(API_URL + "/company/newBlog", data, {
    headers: AuthHeader(),
  });
};

export const viewBlogs = () => {
  return axios.get(API_URL + "/company/newBlog", {
    headers: AuthHeader(),
  });
};
export const publishedBlogs = () => {
  return axios.get(API_URL + "/company/published-blogs", {
    headers: AuthHeader(),
  });
};

export const getBlog = (slug) => {
  return axios.get(API_URL + "/company/published-blogs/" + slug, {
    headers: AuthHeader(),
  });
};

export function updateBlog(slug, data) {
  return axios.put(API_URL + "/company/blog/update/" + slug, data, {
    headers: AuthHeader(),
  });
}

export const deleteBlog = (slug) => {
  return axios.delete(API_URL + "/company/blog/delete/" + slug, {
    headers: AuthHeader(),
  });
};

export const newService = (service) => {
  return axios.post(API_URL + "/company/addService", service, {
    headers: AuthHeader(),
  });
};

export const ListServices = () => {
  return axios.get(API_URL + "/company/all-services", {
    headers: AuthHeader(),
  });
};

export const getService = (slug) => {
  return axios.get(API_URL + "/company/service/" + slug, {
    headers: AuthHeader(),
  });
};

export const updateService = (slug, data) => {
  return axios.put(API_URL + "/company/service/update/" + slug, data, {
    headers: AuthHeader(),
  });
};
export const updateServiceImage = (slug, data) => {
  return axios.put(API_URL + "/company/service/update/image/" + slug, data, {
    headers: AuthHeader(),
  });
};

export const deleteService = (slug) => {
  return axios.delete(API_URL + "/company/service/delete/" + slug, {
    headers: AuthHeader(),
  });
};

//  the is the list of a tenant's bill
export const myBill = () => {
  return axios.get(API_URL + "/house/myBill", {
    headers: AuthHeader(),
  });
};

//  the is the list of all bill of tenants managed by a realtor
export const bills = () => {
  return axios.get(API_URL + "/house/bills", {
    headers: AuthHeader(),
  });
};

export const houseImages = () => {
  return axios.get(API_URL + "/house/house-image", {
    headers: AuthHeader(),
  });
};

export const realtorLandLords = () => {
  return axios.get(API_URL + "/account/myLandLords", {
    headers: AuthHeader(),
  });
};

export function uploadImage(data) {
  return axios.post(API_URL + "/house/images", data, {
    headers: AuthHeader(),
  });
}

// MANAGING IMAGE CATEGORIES
export function allImages() {
  return axios.get(API_URL + "/photo/all-photos", {
    headers: AuthHeader(),
  });
}

export function publishedImages() {
  return axios.get(API_URL + "/photo/gallery", {
    headers: AuthHeader(),
  });
}

export function addImage(data) {
  return axios.post(API_URL + "/photo/add-photo", data, {
    headers: AuthHeader(),
  });
}

// `/house/house/$(id)`
export function updateImage(id, data) {
  return axios.put(API_URL + "/photo/update/" + id, data, {
    headers: AuthHeader(),
  });
}

export const deleteImage = (id) => {
  return axios.delete(API_URL + "/photo/delete/" + id, {
    headers: AuthHeader(),
  });
};
