import React from 'react'
import Window from './Window'

const Spotify = ({first,setFirst,appName}) => {
  return (
    <Window first={first} setFirst={setFirst} appName={appName}>
    <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/artist/2oSONSC9zQ4UonDKnLqksx?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </Window>
  )
}

export default Spotify