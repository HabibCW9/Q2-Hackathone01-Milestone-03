// Get references to the form and display area

const form = document.getElementById("resumeform") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;


// Handle form submission

form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); //prevent page reload

  // collect user's input values
  const name = (
    document.getElementById("name") as HTMLInputElement
  )?.value.trim();
  const email = (
    document.getElementById("email") as HTMLInputElement
  )?.value.trim();
  const phone = (
    document.getElementById("phone") as HTMLInputElement
  )?.value.trim();
  const qualification = (
    document.getElementById("qualification") as HTMLInputElement
  )?.value.trim();
  const experience = (
    document.getElementById("experience") as HTMLInputElement
  )?.value.trim();
  const skills = (
    document.getElementById("Skills") as HTMLInputElement
  )?.value.trim();

  
  // Generate the Resume content dynamically

  const resumeHTML = `
  <h2"><b>Resume</b></h2>
    
    <h3>Personal Information</h3>
    <p><b>Name: </b>${name}</p>
    <p><b>Email: </b>${email}</p>
    <p><b>Phone: </b>${phone}</p>
    
    <h3><b>Education</b></h3>
    <p>${qualification}</p>
   
    <h3><b>Experience</b></h3>
    <p>${experience}</p>

    <h3><b>Skills</b></h3>
    <p>${skills}</p>`;

    // document.body.innerHTML = resumeHTML;

 

  // Display the generated resume

  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
  } else {
    console.error("The Resume Display Element is missing");
  }
});
