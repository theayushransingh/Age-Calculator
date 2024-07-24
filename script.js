const birthDate = document.querySelector("#birth-date")
const currentDate = document.querySelector("#current-date")
const output = document.querySelector(".out-put");
const btn = document.querySelector(".cal-btn");
const ageHeading = document.querySelector("#Age-heading");
let d = new Date();
thisYear = d.getFullYear;

btn.addEventListener("click", () => {
    if (birthDate.value == "" || currentDate.value == "") {
        return;
    }
    else {
        calculate_age(birthDate.value, currentDate.value);
    }
});

function calculate_age(start, end) {
    // console.log(start);
    let dobYear = parseInt(start.substring(0, 4), 10);
    let dobmonth = parseInt(start.substring(5, 7), 10);
    let dobDate = parseInt(start.substring(8, 10), 10);
    let currYear = parseInt(end.substring(0, 4), 10);
    let currMonth = parseInt(end.substring(5, 7), 10);
    let currDate = parseInt(end.substring(8, 10), 10);
    if (currYear > dobYear || dobYear < thisYear) {

        let yearAgeDiff = currYear - dobYear;
        let monthAgeDiff;
        if (currMonth >= dobmonth) {
            monthAgeDiff = currMonth - dobmonth;
        }
        else {
            yearAgeDiff--;
            monthAgeDiff = 12 + currMonth - dobmonth;
        }

        let daysAgeDiff;
        if (currDate >= dobDate) {
            daysAgeDiff = currDate - dobDate;
        }
        else {
            monthAgeDiff--;
            const daysInMonth = monthDays(dobmonth, dobYear);
            daysAgeDiff = daysInMonth + currDate - dobDate;
            if (monthAgeDiff < 0) {
                monthAgeDiff = 11;
                yearAgeDiff--;
            }
        }

        ageHeading.classList.remove("hide");
        output.innerHTML = `${yearAgeDiff} Years ${monthAgeDiff} Months ${daysAgeDiff} days`;
    }
    else {
        ageHeading.classList.add("hide");
        output.innerHTML = "<h3>Please Enter Valid Date <h3>"
    }
}

function monthDays(month, year) {
    return new Date(year, month, 0).getDate();;
}

