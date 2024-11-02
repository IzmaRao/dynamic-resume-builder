document
  .getElementById("resumeform")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Type assertions
    const NameElement = document.getElementById("Name") as HTMLInputElement;
    const OccupationElement = document.getElementById(
      "Occupation"
    ) as HTMLInputElement;
    const EmailElement = document.getElementById("Email") as HTMLInputElement;
    const PhoneElement = document.getElementById("Phone") as HTMLInputElement;
    const AddressElement = document.getElementById(
      "Address"
    ) as HTMLInputElement;
    const DegreeElement = document.getElementById("Degree") as HTMLInputElement;
    const EducationStartElement = document.getElementById(
      "EducationStart"
    ) as HTMLInputElement;
    const EducationEndElement = document.getElementById(
      "EducationEnd"
    ) as HTMLInputElement;
    const UniversityNameElement = document.getElementById(
      "UniversityName"
    ) as HTMLInputElement;
    const AchievementsElement = document.getElementById(
      "Achievements"
    ) as HTMLTextAreaElement;
    const ExperienceElement = document.getElementById(
      "Experience"
    ) as HTMLTextAreaElement;
    const CompanyNameElement = document.getElementById(
      "CompanyName"
    ) as HTMLInputElement;
    const CompanyDetailsElement = document.getElementById(
      "CompanyDetails"
    ) as HTMLTextAreaElement;
    const JobStartElement = document.getElementById(
      "JobStart"
    ) as HTMLInputElement;
    const JobEndElement = document.getElementById("JobEnd") as HTMLInputElement;
    const SkillElement = document.getElementById(
      "Skills"
    ) as HTMLTextAreaElement;
    const UploadimgElement = document.getElementById(
      "Uploadimg"
    ) as HTMLInputElement;

    if (
      NameElement &&
      OccupationElement &&
      EmailElement &&
      PhoneElement &&
      AddressElement &&
      DegreeElement &&
      EducationStartElement &&
      EducationEndElement &&
      UniversityNameElement &&
      AchievementsElement &&
      ExperienceElement &&
      CompanyNameElement &&
      CompanyDetailsElement &&
      JobStartElement &&
      JobEndElement &&
      SkillElement &&
      UploadimgElement
    ) {
      const name = NameElement.value;
      const occupation = OccupationElement.value;
      const email = EmailElement.value;
      const phone = PhoneElement.value;
      const address = AddressElement.value;
      const degree = DegreeElement.value;
      const educationStart = EducationStartElement.value;
      const educationEnd = EducationEndElement.value;
      const universityName = UniversityNameElement.value;
      const achievements = AchievementsElement.value;
      const experience = ExperienceElement.value;
      const companyName = CompanyNameElement.value;
      const companyDetails = CompanyDetailsElement.value;
      const jobStart = JobStartElement.value;
      const jobEnd = JobEndElement.value;
      const skills = SkillElement.value;

      const file = UploadimgElement.files![0];
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        const resumeOutput = `
              <div class="all-div">
                  <div class="res-one-div">
                      <div>
                          <img height="160" width="160" src="${imageDataUrl}" alt="Uploaded Image" />
                      </div>
                      <div class="name-occupation-div">
                          <h2 class="name">${name}</h2>
                          <div class="hr-div"></div>
                          <h3 class="occupation">${occupation}</h3>
                      </div>
                  </div>
                  <div class="data-div">
                      <div>
                          <div class="experience-div">Experience</div>
                          <div class="experience-data-div">
                              <div>
                                  <ul class="ul-data">
                                      <li>
                                          <h6>${experience}</h6>
                                          <p>${jobStart} to ${jobEnd}</p>
                                      </li>
                                  </ul>
                              </div>
                              <div class="company-div">
                                  <div>
                                      <h4>${companyName}</h4>
                                      <p>${companyDetails}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div class="experience-div">Education</div>
                          <div class="experience-data-div">
                              <div>
                                  <ul class="ul-data">
                                      <li>
                                          <h6>${degree}</h6>
                                          <p>${educationStart} to ${educationEnd}</p>
                                      </li>
                                  </ul>
                              </div>
                              <div class="company-div">
                                  <div>
                                      <h4>${universityName}</h4>
                                      <p>${achievements}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="contact-skill-div">
                          <div class="contact-divv">
                              <div class="contact-div">Contact</div>
                              <div class="contact-data">
                                  <p>${address}</p>
                                  <p>${phone}</p>
                                  <p>${email}</p>
                              </div>
                          </div>
                          <div>
                              <div class="skill-div">Skills</div>
                              <div class="skills">
                                  <div>${skills}</div>
                              </div>
                          </div>
                      </div>
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


