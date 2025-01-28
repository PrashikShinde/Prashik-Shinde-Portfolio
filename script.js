document.addEventListener("DOMContentLoaded", function () {
    const terminalBody = document.getElementById("terminal-body");
    const commandInput = document.getElementById("command-input");
    const themeToggle = document.getElementById("theme-toggle");

    const commands = {
        help: "Available commands: about, education, experience, skills, certifications, contact, clear",
        about: "I am Prashik Vishal Shinde, an IT professional passionate about cybersecurity, auditing, and development. Located in Kalyan, Thane, Maharashtra.",
        education: "MSc Computer Science (Pursuing, Completion: May 2025)\nBSc IT (Graduated in 2023, CGPA: 9.53)\nHSC (2020, 67%)\nSSC (2018, 89%)",
        experience: "Senior Associate – IT GRC at Kochar Consultants Pvt. Ltd.\nData Science Analyst at SSnC GlobeOp\nFreelancer (Web Dev, VAPT, Auditing Projects)",
        skills: "IT Audit, VAPT, Secure Code Review, Python, SQL, Cloud Audits\nSoft Skills: Communication, Problem Solving, Time Management",
        certifications: "CEH v12 (2024)\nISO 27001 Lead Auditor (2024)\nBest Research Paper Award (2024)\nTop 1000 Rank in Hackathon (2022)",
        contact: "Email: prashikvs.as@gmail.com\nLinkedIn: linkedin.com/in/prashik-shinde\nGitHub: github.com/PrashikShinde",
        clear: "clear"
    };

    function executeCommand(command) {
        if (command === "clear") {
            terminalBody.innerHTML = "";
        } else if (commands[command]) {
            printOutput(commands[command]);
        } else {
            printOutput("Command not found. Type 'help' for a list of commands.");
        }
        commandInput.value = "";
    }

    function printOutput(text) {
        let outputLine = document.createElement("p");
        outputLine.classList.add("output");
        outputLine.textContent = text;
        terminalBody.appendChild(outputLine);
        terminalBody.scrollTop = terminalBody.scrollHeight;
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
    });
});
