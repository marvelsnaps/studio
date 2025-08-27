import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import enableAntiSave from './lib/antiSave'

// Enable best-effort anti-save handlers
enableAntiSave()

createRoot(document.getElementById("root")!).render(<App />);
