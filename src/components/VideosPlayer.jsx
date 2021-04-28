import React from "react"
import ReactPlayer from "react-player"

const playerStyle = {
  width: 50,
}

export default function VideosPlayer() {
  return (
    <React.Suspense fallback={<p>loading...</p>}>
      <ReactPlayer width='200' style={playerStyle} url='https://www.youtube.com/watch?v=wmCW8xSWGZY&t=37s' />
    </React.Suspense>
  )
}
