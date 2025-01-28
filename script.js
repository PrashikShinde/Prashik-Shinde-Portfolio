document.addEventListener("DOMContentLoaded", function () {
    const terminalBody = document.getElementById("terminal-body");
    const commandInput = document.getElementById("command-input");
    const themeToggle = document.getElementById("theme-toggle");
    document.body.classList.add("dark-theme");

    const commands = {
        help: "<span class='clickable' onclick='executeCommand(\"about\")'>about</span>, <span class='clickable' onclick='executeCommand(\"education\")'>education</span>, <span class='clickable' onclick='executeCommand(\"experience\")'>experience</span>, <span class='clickable' onclick='executeCommand(\"skills\")'>skills</span>, <span class='clickable' onclick='executeCommand(\"certifications\")'>certifications</span>, <span class='clickable' onclick='executeCommand(\"contact\")'>contact</span>, <span class='clickable' onclick='executeCommand(\"clear\")'>clear</span>",
        about: "I am Prashik Vishal Shinde, an IT professional passionate about cybersecurity, auditing, and development. With years of experience in IT GRC, auditing stock brokers, and handling VAPT, I am dedicated to providing secure and efficient solutions. I specialize in ensuring cybersecurity compliance and best practices in the field of risk advisory. My goal is to contribute to the digital safety of organizations and innovate in the field of IT security.",
        education: "I am currently pursuing an MSc in Computer Science, expecting to graduate by May 2025. I completed my BSc IT in 2023 with a CGPA of 9.53. My academic journey also includes completing HSC in 2020 with 67% and SSC in 2018 with 89%. My education has provided me with a strong foundation in cybersecurity, database management, and system audits.",
        experience: "I currently work as a Senior Associate – IT GRC at Kochar Consultants Pvt. Ltd. Previously, I worked as a Data Science Analyst at SSnC GlobeOp and worked on various web development, VAPT, and cybersecurity projects as a freelancer. My experience ranges from IT audits, risk advisory, and cybersecurity assessments to hands-on security analysis of various infrastructures.",
        skills: "My technical expertise includes IT Audits, VAPT, Secure Code Review, Python, SQL, Cloud Audits, and compliance management. I also excel in soft skills such as communication, problem-solving, and time management, which help me interact effectively with clients and execute projects efficiently.",
        certifications: "I hold multiple certifications, including CEH v12 (Certified Ethical Hacker) obtained in 2024 and ISO 27001 Lead Auditor certification. I have also been awarded the Best Research Paper Award in 2024 and ranked in the top 1000 in a Hackathon organized by Rise and ThriveDx in 2022.",
        contact: "You can reach me via email at prashikvs.as@gmail.com, connect with me on LinkedIn (linkedin.com/in/prashik-shinde), or check out my projects on GitHub (github.com/PrashikShinde). I am open to collaborations and discussions on cybersecurity and IT auditing.",
        clear: "clear"
    };

    function executeCommand(command) {
        if (command === "clear") {
            terminalBody.innerHTML = "";
        } else if (commands[command]) {
            printOutput(commands[command], true);
        } else {
            printOutput("Command not found. Type 'help' for a list of commands.");
        }
        commandInput.value = "";
    }

    function printOutput(text, typewriter = false) {
        let outputLine = document.createElement("p");
        outputLine.classList.add("output");
        if (typewriter) {
            typeWriterEffect(outputLine, text);
        } else {
            outputLine.innerHTML = text;
        }
        terminalBody.appendChild(outputLine);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function typeWriterEffect(element, text, i = 0) {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            setTimeout(() => typeWriterEffect(element, text, i + 1), 30);
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

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");
        themeToggle.textContent = document.body.classList.contains("light-theme") ? "Dark Mode" : "Light Mode";
    });

    printOutput(commands.help, true);

    document.body.style.backgroundImage = "url('cmatrix.gif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
});
