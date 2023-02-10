# mx-scrollbar

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/mx-scrollbar.svg)](https://www.npmjs.com/package/mx-scrollbar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mx-scrollbar
```

## Usage

```tsx
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

```

## License

MIT © [MaxiCorrea](https://github.com/MaxiCorrea)
