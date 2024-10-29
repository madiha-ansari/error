var form = document.getElementById("resume_form");
var resumeDisplayElement = document.getElementById("resume_display");
// handle form submit
form.addEventListener("submit", function () {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    // collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("name").value;
    var phoneNo = document.getElementById("name").value;
    var education = document.getElementById("Education").value;
    var experience = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    // generate the resume
    var resumeHtml = "\n<h2><b>editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name: </b> \n        <span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Name: </b>  <span contenteditable=\"true\">").concat(email, "</span> </p>\n<p><b>Name: </b> <span contenteditable=\"true\">").concat(phoneNo, "</span> </p>\n\n<h2><b>Education</b></h2>\n<p  contenteditable=\"true\">").concat(education, "</p>\n<h2><b>Experience</b></h2>\n<p contenteditable=\"true\" >").concat(experience, "</p>\n<h2><b>Skills</b></h2>\n<p  contenteditable=\"true\">").concat(skills, "</p>");
    // dispplay the generate resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.log("The resume display element is missing ");
    }
});
