import ReactPlayer from "react-player"

const playerStyle = {
  width: 50,
}

export default function VideosPlayer() {
  return <ReactPlayer width='200' style={playerStyle} url='https://www.youtube.com/watch?v=wmCW8xSWGZY&t=37s' />
}
