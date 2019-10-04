import styled from '@xstyled/styled-components'

const PlayerBarProgress = styled.div`
  background: #262626;
  width: ${(props) => !isNaN(props.songPlayingProgress) ? `${props.songPlayingProgress}%;` : '0;'}
  height: 100%;
  transition: all 0.3s;
`
export default PlayerBarProgress