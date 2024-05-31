import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Please enter the amount of second",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter valid number";
        }
        else if (input > 60) {
            return "seconds must be in 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTimer(val) {
    const intTimer = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTimer = new Date(intTimer);
    setInterval((() => {
        const currTimer = new Date();
        const timeDiff = differenceInSeconds(intervalTimer, currTimer);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 60)));
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec}`);
    }), 1000);
}
startTimer(input);
