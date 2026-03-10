import React from "react";
import Terminal from "react-console-emulator";
import Window from "./Window";
import "./macterminal.scss";

const MacTerminal = ({first,setFirst,appName}) => {

  const commands = {

    help: {
      description: "Show available commands",
      usage: "help",
      fn: () =>
`Available Commands:

about      → Learn about me
skills     → See my technical skills
projects   → View my projects
github     → Open my GitHub
contact    → Get my contact info
echo       → Echo any text

Example:
echo hello world`
    },

    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "Hi, I'm Abdur Rehman 👋 A React Frontend Developer who loves building modern UI and animations.",
    },

    skills: {
      description: "My tech stack",
      usage: "skills",
      fn: () =>
`Skills:
React.js
JavaScript
Tailwind CSS
GSAP
Three.js
Lenis
Locomotive Scroll`,
    },

    projects: {
      description: "My projects",
      usage: "projects",
      fn: () =>
`Projects:
1. AI Healthcare Chatbot
2. Ochi.design Clone
3. Works.studio Clone
4. 3D Image Cylinder`,
    },

    github: {
      description: "My GitHub",
      usage: "github",
      fn: () => "GitHub: https://github.com/yourusername",
    },

    contact: {
      description: "Contact info",
      usage: "contact",
      fn: () =>
`Email: your@email.com
LinkedIn: https://linkedin.com`,
    },

    echo: {
      description: "Echo a passed string",
      usage: "echo <text>",
      fn: (...args) => args.join(" "),
    }

  };

  return (
    <Window first={first} setFirst={setFirst} appName={appName}>
      <div className="term">
      <Terminal
        commands={commands}
        noDefaults={true}
        welcomeMessage={
`Welcome to Abdur Rehman's Terminal Portfolio 🚀
Type 'help' to see available commands.`
        }
        promptLabel={"abdur@portfolio:~$"}
        style={{ backgroundColor: "transparent",padding:0,margin:0 }}
      />
      </div>
    </Window>
  );
};

export default MacTerminal;