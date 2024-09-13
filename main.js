var _a;
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // type assertion
    var NameElement = document.getElementById("Name");
    var EmailElement = document.getElementById("Email");
    var PhoneElement = document.getElementById("Phone");
    var SkillElement = document.getElementById("Skill");
    var ExperienceElement = document.getElementById("Experience");
    var EducationElement = document.getElementById("Education");
    var UploadimgElement = document.getElementById("Uploadimg");
    if (NameElement &&
        EmailElement &&
        PhoneElement &&
        SkillElement &&
        EducationElement &&
        ExperienceElement &&
        UploadimgElement) {
        var name_1 = NameElement.value;
        var email_1 = EmailElement.value;
        var phone_1 = PhoneElement.value;
        var Skill_1 = SkillElement.value;
        var education_1 = EducationElement.value;
        var experience_1 = ExperienceElement.value;
        var uploadimg = UploadimgElement.value;
        // create resume output
        // ...
        // ...
        // ...
        var file = UploadimgElement.files[0];
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            var imageDataUrl = reader_1.result;
            var resumeOutput = "\n    <h2 style=\"color: #333; font-weight: bold; margin-bottom: 10px;\">Generated Resume</h2>\n    <div style=\"text-align: center; margin-top: 20px;\">\n      <img src=".concat(imageDataUrl, " style=\"width: 100px; height: 100px; border-radius: 50%; object-fit: cover;\" />\n    </div>\n    <div style=\"display: flex; flex-wrap: wrap; justify-content: space-between;\">\n      <div style=\"flex-basis: 40%; margin: 10px;\">\n        <p><strong style=\"color: #666;\">Name</strong>  : ").concat(name_1, "</p>\n        <p><strong style=\"color: #666;\">Email</strong> : ").concat(email_1, "</p>\n        <p><strong style=\"color: #666;\">Phone</strong> : ").concat(phone_1, "</p>\n      </div>\n      <div style=\"flex-basis: 40%; margin: 10px;\">\n        <p><strong style=\"color: #666;\">Education</strong> : ").concat(education_1, "</p>\n        <p><strong style=\"color: #666;\">Skills</strong> : ").concat(Skill_1, "</p>\n        <p><strong style=\"color: #666;\">Experience</strong> : ").concat(experience_1, "</p>\n      </div>\n    </div>\n  ");
            var resumeOutputElement = document.getElementById("resumeOutput");
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
            }
            else {
                console.error("the resume output elements are missing");
            }
        };
        reader_1.readAsDataURL(file);
    }
    else {
        console.error("one or more output elements are missing");
    }
});
