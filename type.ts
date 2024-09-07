const form = document.getElementById('Editable Resume') as HTMLFormElement;
const resumeOutput = document.getElementById('resume output') as HTMLDivElement;

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form values and ensure they are treated as strings
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.trim();
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value.trim();
    const skills = (document.getElementById('skills') as HTMLInputElement).value.trim();

    // Basic validation
    if (!name || !email || !education || !workExperience || !skills) {
        alert('Please fill out all fields.');
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Ensure skills are separated by commas
    const skillsArray = skills.split(',').map(skill => skill.trim());

    // Generate static resume content
    const resumeHTML = `
        <h1>${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <h2>Education</h2>
        <p>${education}</p>
        <h2>Work Experience</h2>
        <p>${workExperience}</p>
        <h2>Skills</h2>
        <ul>
            ${skillsArray.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
    `;

    // Display the generated resume
    resumeOutput.innerHTML = resumeHTML;

    // Hide the form after generating the resume
    form.style.display = 'none';
});
