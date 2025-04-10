import { render } from 'preact'
import './index.css'
import 'halfmoon/css/halfmoon.min.css';
import App from './components/app.tsx'

render(<App />, document.getElementById('app')!)
