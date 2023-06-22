// SpringBoot Configuration

// export function AuthHeader() {
//   const user = JSON.parse(localStorage.getItem('user'))

//     if(user && user.token) {
//         return { Authorization : 'Bearer '+user.token};
//     } else {
//         return {}
//     }
// }


// Django Configuration

export function AuthHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.access) {
    return {
      Authorization: "Bearer " + user.access,
      "Content-Type": "multipart/form-data",
    };
  } else {
    return {};
  }
}
