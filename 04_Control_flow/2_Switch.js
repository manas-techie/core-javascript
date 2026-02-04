// switch statement in jS

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

// Explanation:
// The switch statement evaluates the expression (in this case, the variable 'day')
// and executes the corresponding case block that matches the value.
// If none of the cases match, the default block is executed.
// Each case block ends with a break statement to prevent fall-through to subsequent cases.