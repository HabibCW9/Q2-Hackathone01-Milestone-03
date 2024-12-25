// Get references to the form and display area
var form = document.getElementById("resumeform");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle form submission
form.addEventListener("submit", function (event) {
    var _a, _b, _c, _d, _e, _f;
    event.preventDefault(); //prevent page reload
    // collect user's input values
    var name = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value.trim();
    var email = (_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value.trim();
    var phone = (_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.value.trim();
    var qualification = (_d = document.getElementById("qualification")) === null || _d === void 0 ? void 0 : _d.value.trim();
    var experience = (_e = document.getElementById("experience")) === null || _e === void 0 ? void 0 : _e.value.trim();
    var skills = (_f = document.getElementById("Skills")) === null || _f === void 0 ? void 0 : _f.value.trim();
    // Generate the Resume content dynamically
    var resumeHTML = "\n  <h2\"><b>Resume</b></h2>\n    \n    <h3>Personal Information</h3>\n    <p><b>Name: </b>".concat(name, "</p>\n    <p><b>Email: </b>").concat(email, "</p>\n    <p><b>Phone: </b>").concat(phone, "</p>\n    \n    <h3><b>Education</b></h3>\n    <p>").concat(qualification, "</p>\n   \n    <h3><b>Experience</b></h3>\n    <p>").concat(experience, "</p>\n\n    <h3><b>Skills</b></h3>\n    <p>").concat(skills, "</p>");
    // document.body.innerHTML = resumeHTML;
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The Resume Display Element is missing");
    }
});
