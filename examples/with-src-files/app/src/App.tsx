import './App.css'
import { css, cx } from '../../generated/css'
import { Stack } from '../../generated/jsx'
import { button } from '../../generated/recipes'
import { Button } from '../../ui-lib/src/button'

function App() {
  return (
    <>
      <h1 className={css({ fontSize: '4xl', lineHeight: '1.1' })}>Hello from Panda 🐼</h1>
      <h2 className={css({ fontSize: '2xl', my: 4, color: 'yellow.400' })}>shipping/with-src-files</h2>
      <Stack>
        <Button visual="funky" shape="square" size="lg">
          Button component from ui-lib (hover to see library specific styles)
        </Button>
        <button className={cx(button(), css({ bgColor: 'teal.400', color: 'rgba(0, 0, 0, 0.8)', fontWeight: 'bold' }))}>
          button recipe from ui-lib, with local overrides
        </button>
      </Stack>
    </>
  )
}

export default App
