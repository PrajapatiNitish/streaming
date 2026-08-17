import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Streaming from './Stream'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Streaming />
  </StrictMode>,
)
