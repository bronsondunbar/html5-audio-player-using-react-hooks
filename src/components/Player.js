import React, { useContext, useEffect, Fragment } from 'react'
import { Store } from '../store'
import Playback from '../utils/player'

import { PlayerContainer } from '../templates/index'

import Progress from './Progress'
import Controls from './Controls'

const Player = (props) => {
  const player = document.getElementById("audioPlayer")
	const { state } = useContext(Store)
  const { selectedTheme, songPlaying } = state
  const { playerPlaylist, playerReadyToPlay, playerSongProgress, playerSongEnded } = Playback()

  useEffect(() => {
    playerPlaylist()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    player && player.load()
    // eslint-disable-next-line
  }, [songPlaying])

	return (
  	<Fragment>
  		<audio
  			id="audioPlayer"
  			onCanPlay={() => playerReadyToPlay()}
  			onTimeUpdate={() => playerSongProgress()}
  			onEnded={() => playerSongEnded()}>
          <source src={songPlaying && songPlaying.source} type="audio/mpeg" />
      </audio>

      <PlayerContainer selectedTheme={selectedTheme}>
        <Progress />
        <Controls />
      </PlayerContainer>
  	</Fragment>
	)
}

export default Player