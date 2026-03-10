import React from 'react';
import Window from './Window';
import './resume.scss'
const Resume = ({first,setFirst,appName}) => {
  return (
    <Window first={first} setFirst={setFirst} appName={appName}>
      <div className="resume-window">
        <iframe
          src="/resume.pdf"
          title="Resume PDF"
          className='resume-iframe'
        />
      </div>
    </Window>
  );
};

export default Resume;