document.getElementById("resumeform")?.addEventListener("submit", function (event) {
    event.preventDefault();

    // type assertion
    const NameElement = document.getElementById("Name") as HTMLInputElement;
    const EmailElement = document.getElementById("Email") as HTMLInputElement;
    const PhoneElement = document.getElementById("Phone") as HTMLInputElement;
    const SkillElement = document.getElementById("Skill") as HTMLInputElement;
    const ExperienceElement = document.getElementById(
      "Experience"
    ) as HTMLInputElement;
    const EducationElement = document.getElementById(
      "Education"
    ) as HTMLInputElement;
    const UploadimgElement = document.getElementById(
      "Uploadimg"
    ) as HTMLInputElement;

    if (
      NameElement &&
      EmailElement &&
      PhoneElement &&
      SkillElement &&
      EducationElement &&
      ExperienceElement &&
      UploadimgElement 
    ) {
      const name = NameElement.value;
      const email = EmailElement.value;
      const phone = PhoneElement.value;
      const Skill = SkillElement.value;
      const education = EducationElement.value;
      const experience = ExperienceElement.value;
      const uploadimg = UploadimgElement.value;

      // create resume output
// ...

// ...

// ...

const file = UploadimgElement.files![0];
const reader = new FileReader();
reader.onload = () => {
  const imageDataUrl = reader.result as string;
  const resumeOutput = `
    <h2 style="color: #333; font-weight: bold; margin-bottom: 10px;">Generated Resume</h2>
    <div style="text-align: center; margin-top: 20px;">
      <img src=${imageDataUrl} style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover;" />
    </div>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
      <div style="flex-basis: 40%; margin: 10px;">
        <p><strong style="color: #666;">Name</strong>  : ${name}</p>
        <p><strong style="color: #666;">Email</strong> : ${email}</p>
        <p><strong style="color: #666;">Phone</strong> : ${phone}</p>
      </div>
      <div style="flex-basis: 40%; margin: 10px;">
        <p><strong style="color: #666;">Education</strong> : ${education}</p>
        <p><strong style="color: #666;">Skills</strong> : ${Skill}</p>
        <p><strong style="color: #666;">Experience</strong> : ${experience}</p>
      </div>
    </div>
  `;

  const resumeOutputElement = document.getElementById("resumeOutput");
  if (resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeOutput;
  } else {
    console.error("the resume output elements are missing");
  }
};
reader.readAsDataURL(file);

}else {
  console.error("one or more output elements are missing");
}
})


