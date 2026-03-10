import React from 'react'
import Window from './Window'
import './github.scss'

const Github = ({first,setFirst,appName}) => {
  const repositories = [
    {
      id: 1,
      title: "AI Healthcare Chatbot",
      image: "/images/healthcare.png",
      tags: ["React", "AI", "Chatbot", "Tailwind"],
      liveLink: "https://ai-healthcare-chatbot.vercel.app",
      repoLink: "https://github.com/username/ai-healthcare-chatbot"
    },
    {
      id: 2,
      title: "Ochi Design Clone",
      image: "/images/ochi.png",
      tags: ["React", "GSAP", "Locomotive Scroll", "Tailwind"],
      liveLink: "https://ochi-clone.vercel.app",
      repoLink: "https://github.com/username/ochi-clone"
    },
    {
      id: 3,
      title: "Rejouice Website Clone",
      image: "/images/rejoice.png",
      tags: ["React", "GSAP", "ScrollTrigger"],
      liveLink: "https://rejouice-clone.vercel.app",
      repoLink: "https://github.com/username/rejouice-clone"
    },
    {
      id: 4,
      title: "3D Image Cylinder",
      image: "/images/cylinder.png",
      tags: ["Three.js", "React", "3D"],
      liveLink: "https://3d-cylinder.vercel.app",
      repoLink: "https://github.com/username/threejs-cylinder"
    },
    {
      id: 5,
      title: "Works Studio Clone",
      image: "/images/works.png",
      tags: ["React", "GSAP", "Animation"],
      liveLink: "https://works-studio-clone.vercel.app",
      repoLink: "https://github.com/username/works-studio-clone"
    }
  ];
  
  return (
    <Window first={first} setFirst={setFirst} appName={appName}>
        <div className="cards">
          {repositories.map((elem,idx)=>(
            <div key={idx} className="card">
              <img src={elem.image} alt="" />
              <h1>{elem.title}</h1>
              <div className="tags">
                {elem.tags.map((elem,idx)=>(
                  <h1 key={idx}>{elem}</h1>
                ))}
              </div>
              <div className="foot">
                <a target='_blank' href={elem.repoLink}>Repo</a>
                <a target='_blank' href={elem.liveLink}>Live Demo</a>
              </div>
            </div>
          ))}
        </div>
    </Window>
  )
}

export default Github