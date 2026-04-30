// union

type userRole = "admin" | "user" | "guest";

const getDashboard = (role: userRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "guest Dashboard";
  }
};

getDashboard("guest");

//intersection

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
  name: "Chowdhury Shaheb",
  id: "123",
  phoneNo: "03943",
  designation: "manager",
  teamSize: 5,
};
