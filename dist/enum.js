"use strict";
// type UserRoles = "Admin" | "Editor" | "Viewer";
Object.defineProperty(exports, "__esModule", { value: true });
// type UserRoles = "Admin" | "Editor" | "Viewer";
// const canEdit = (role: UserRoles) => {
//   if (role === "Admin" || role === "Editor") {
//     return true;
//   } else return false;
// };
// const isEditPermissable = canEdit('Admin');
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
const isEditPermissable = canEdit(UserRoles.Admin);
//# sourceMappingURL=enum.js.map