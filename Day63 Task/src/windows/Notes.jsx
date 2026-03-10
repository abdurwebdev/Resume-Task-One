import React, { useEffect, useState } from 'react'
import Window from './Window'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Notes = ({first,setFirst,appName}) => {
  const [markdown, setmarkdown] = useState('');
  useEffect(()=>{
    fetch('/note.txt')
    .then( data=>data.text())
    .then( text=>setmarkdown(text))
  },[])
  return (
    <Window first={first} setFirst={setFirst} appName={appName}>
      <div className="notess">
        <SyntaxHighlighter language='typescript' style={atelierCaveDark}>{markdown}</SyntaxHighlighter>
      </div>
    </Window>
  )
}

export default Notes