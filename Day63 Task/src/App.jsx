import React, { useState } from 'react';

import './app.scss';
import Dock from './components/Dock';
import Github from './windows/Github';
import MacTerminal from './windows/MacTerminal';
import Spotify from './windows/Spotify';
import Resume from './windows/Resume';
import Notes from './windows/Notes';

const App = () => {
  const [first, setFirst] = useState({
    github:false,
    cli:false,
    spotify:false,
    resume:false,
    note:false
  })
  return (
    <main>
      <Dock first={first} setFirst={setFirst}/>
      {first.github && <Github first={first} setFirst={setFirst} appName="github"/>}
      {first.cli && <MacTerminal first={first} setFirst={setFirst} appName="cli"/>}
      {first.spotify && <Spotify first={first} setFirst={setFirst} appName="spotify"/>}
      {first.resume && <Resume first={first} setFirst={setFirst} appName="resume"/>}
      {first.note && <Notes first={first} setFirst={setFirst} appName="note"/>}
    </main>
  )
}

export default App