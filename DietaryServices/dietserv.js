let userRole = "subscriber";
let accessTo;

switch(userRole) {
    case "employee":
        accessTo = "Dietary Services";
        break;
    case "enrolledMember":
        accessTo = "Dietary Services and Dietician";
        break;
    case "subscriber":
        accessTo = "Facilitate Dietary Services (partial)";
        break;
    default:
        accessTo = "No access. You need to enroll or subscribe first!"
}

console.log("You have access to:", accessTo)