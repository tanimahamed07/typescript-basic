"use strict";
// as const assertion
Object.defineProperty(exports, "__esModule", { value: true });
const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
//# sourceMappingURL=asConst.js.map