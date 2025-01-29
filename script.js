document.addEventListener("DOMContentLoaded", function () {
    const terminalBody = document.getElementById("terminal-body");
    const commandInput = document.getElementById("command-input");
    const themeButton = document.querySelector(".theme-button"); // Fix for missing theme button
    document.body.classList.add("dark-theme");

    const commands = {
        help: "Available commands: about, education, experience, skills, certifications, contact, clear",
        about: "I am Prashik Vishal Shinde, an IT professional passionate about cybersecurity, auditing, and development. With years of experience in IT GRC, auditing stock brokers, and handling VAPT, I am dedicated to providing secure and efficient solutions. I specialize in ensuring cybersecurity compliance and best practices in the field of risk advisory.",

        education: `
        Education:
        ├── MSc Computer Science (2023 - 2025)
        │   ├── Expected Graduation: May 2025
        │   ├── Institution: XYZ University
        │   └── CGPA: 9.53
        ├── BSc IT (2020 - 2023)
        │   ├── Institution: ABC College
        │   ├── CGPA: 9.53
        │   └── Completed: 2023
        ├── HSC (2020)
        │   ├── Percentage: 67%
        │   └── Completed: 2020
        └── SSC (2018)
            ├── Percentage: 89%
            └── Completed: 2018`,

        experience: `
        Experience:
        ├── Senior Associate – IT GRC (Current)
        │   ├── Company: Kochar Consultants Pvt. Ltd.
        │   ├── Specialization: IT Governance, Risk, and Compliance
        │   ├── Compliance: ISO 27001, NIST, GDPR
        │   └── Responsibilities: Risk assessments, security audits, policy development
        ├── Data Science Analyst
        │   ├── Company: SS&C GlobeOp
        │   ├── Focus: Data analytics, ML models, automation
        │   ├── Contributions: Predictive modeling, dashboard development
        │   └── Role: Strategic decision-making, risk assessment
        └── Freelance
            ├── Web Development
            ├── Vulnerability Assessment & Penetration Testing (VAPT)
            └── Cybersecurity Consulting`,
    

        skills: "My technical expertise includes IT Audits, VAPT, Secure Code Review, Python, SQL, Cloud Audits, and compliance management. I also excel in communication, problem-solving, and time management.",
        certifications: "I hold multiple certifications, including CEH v12 (Certified Ethical Hacker) obtained in 2024 and ISO 27001 Lead Auditor certification. I also won the Best Research Paper Award in 2024 and ranked in the top 1000 in a Hackathon organized by Rise and ThriveDx in 2022.",
        contact: function () {
            const contactForm = `
                <form id="contact-form" onsubmit="return submitContactForm(event)">
                    <p>Enter your details:</p>
                    <div class="input-label">
                    <label for="name" class="labels">Name:</label>
                    <input type="text" id="name" required class="input">
                    </div>

                    <div class="input-label">
                    <label for="email" class="labels">Email:</label>
                    <input type="email" id="email" required class="input">
                    </div>

                    <div class="input-label">
                    <label for="message" class="labels">Message:</label>
                    <textarea id="message" rows="4" required class="input textarea"></textarea><br>
                    </div>
                    <button type="submit" class="form-button">Submit</button>
                </form>
            `;
    printOutput(contactForm, false, true);
},
    clear: "clear",
    };

function executeCommand(command) {
    if (command === "clear") {
        terminalBody.innerHTML = "";
    } else if (commands[command]) {
        if (typeof commands[command] === "function") {
            commands[command]();
        } else {
            printOutput(commands[command], true);
        }
    } else {
        printOutput("Command not found. Type 'help' for a list of commands.");
    }
    commandInput.value = "";
}

function printOutput(text, typewriter = false, isHTML = false) {
    let outputLine = document.createElement("div");
    outputLine.classList.add("output");

    if (isHTML) {
        outputLine.innerHTML = text;
    } else if (typewriter) {
        typeWriterEffect(outputLine, text);
    } else {
        outputLine.textContent = text;
    }

    terminalBody.appendChild(outputLine);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

function typeWriterEffect(element, text, i = 0) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriterEffect(element, text, i + 1), 10);
    }
}

commandInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let command = commandInput.value.trim();
        if (command) {
            let userInput = document.createElement("p");
            userInput.textContent = "$ " + command;
            userInput.classList.add("user-input");
            terminalBody.appendChild(userInput);
            executeCommand(command);
        }
    }
});

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    themeButton.textContent = document.body.classList.contains("light-theme") ? "Dark Mode" : "Light Mode";
});

printOutput(commands.help, true);
});

function submitContactForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Contact Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Thank you for reaching out! Your message has been submitted.");
    return false;
}
