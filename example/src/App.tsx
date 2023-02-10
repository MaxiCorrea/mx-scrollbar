import React from 'react'
import { MxScrollbar } from 'mx-scrollbar'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <MxScrollbar>
        <div
          style={{
            overflow: 'scroll',
            height: '900px'
          }}
        >
          <div style={{ height: '3500px' }} />
        </div>
      </MxScrollbar>
    </div>
  )
}

export default App
