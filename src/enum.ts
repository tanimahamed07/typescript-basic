// type UserRoles = "Admin" | "Editor" | "Viewer";


// type UserRoles = "Admin" | "Editor" | "Viewer";

// const canEdit = (role: UserRoles) => {
//   if (role === "Admin" || role === "Editor") {
//     return true;
//   } else return false;
// };


// const isEditPermissable = canEdit('Admin');


enum UserRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};


const isEditPermissable = canEdit(UserRoles.Admin);