"use strict";
// union
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === "admin") {
        return "Admin Dashboard";
    }
    else if (role === "user") {
        return "User Dashboard";
    }
    else {
        return "guest Dashboard";
    }
};
getDashboard("guest");
const ChowdhuryShaheb = {
    name: "Chowdhury Shaheb",
    id: "123",
    phoneNo: "03943",
    designation: "manager",
    teamSize: 5,
};
//# sourceMappingURL=union.js.map