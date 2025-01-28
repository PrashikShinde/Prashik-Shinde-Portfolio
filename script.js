document.addEventListener("DOMContentLoaded", function () {
    const terminalBody = document.getElementById("terminal-body");
    const commandInput = document.getElementById("command-input");

    const commands = {
        help: "Available commands: about_me, education, experience, skills, certifications, contact, clear",
        about_me: "I am Prashik Vishal Shinde, an IT professional specializing in cybersecurity, IT audit, and development.",
        education: "- MSc CS (Pursuing, 2025)\n- BSc IT (Graduated, 2023, CGPA: 9.53)\n- HSC (2020, 67%)\n- SSC (2018, 89%)",
        experience: "- Senior Associate – IT GRC at Kochar Consultants\n- Data Science Analyst at SSnC GlobeOp\n- Freelancer (Web Dev, VAPT, Auditing Projects)",
        skills: "Technical: IT Audit, VAPT, Python, SQL, Cloud Audit\nSoft Skills: Communication, Time Management, Problem Solving",
        certifications: "- CEH v12 (2024)\n- ISO 27001 LA (2024)\n- Best Research Paper Award (2024)",
        contact: "Email: prashikvs.as@gmail.com\nLinkedIn: linkedin.com/in/prashik-shinde\nGitHub: github.com/PrashikShinde",
        clear: "clear"
    };

    commandInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const command = commandInput.value.trim().toLowerCase();
            processCommand(command);
            commandInput.value = "";
        }
    });

    function processCommand(command) {
        const outputElement = document.createElement("p");
        outputElement.innerHTML = `<span class="command">$ ${command}</span>`;

        if (command === "clear") {
            terminalBody.innerHTML = "";
        } else if (commands[command]) {
            outputElement.innerHTML += `<br>${commands[command]}`;
        } else {
            outputElement.innerHTML += `<br>Command not found. Type 'help' for a list of commands.`;
        }

        terminalBody.appendChild(outputElement);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});
