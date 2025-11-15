// Union & intersection types

type UserRole = "Admin" | "User";

const getDashBoard = (role : UserRole) => {
    if(role === "Admin"){
        return "Admin Dashboard";
    }
    else if(role === "User"){
        return "User Dashboard"
    }
    else{
        return "Guest Dashboard"
    }
};

getDashBoard('Admin');



// intersection means &

type Employee = {
    id : string;
    name : string;
    phoneNo : string
};

type Manager = {
    designation : string;
    teamSize : number;
};

type EmployeeManager = Employee & Manager

const Supervisor : EmployeeManager = {
    id : '123',
    name : "shawon",
    phoneNo : "018",
    designation : "Sipervisor",
    teamSize : 20
}
