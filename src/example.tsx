import './styles.css'
import ReactDOM from 'react-dom'
import { FPSView } from './@components'

const rootElement = document.getElementById('root')
ReactDOM.render(<FPSView position="top-left" />, rootElement)
