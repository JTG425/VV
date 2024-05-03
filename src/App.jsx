import logo from './logo.svg';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import Score from './judgeComponents/scoresheet';
import Dashboard from './judgeComponents/judgedashboard';
import { useState } from 'react';
import Judge from './judgeView';
import Admin from './adminView';

function App() {
  const [mode, setMode] = useState("Admin Mode"); // ["judge", "admin"]

  return (
    <div className="App">
      <header className="header">
      </header>
      <motion.button
        className='mode-button'
        onClick={() => setMode(mode === "Admin Mode" ? "Judge Mode" : "Admin Mode")}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >{mode}</motion.button>


      {mode === "Admin Mode" ? (
        <Admin />
      ) : (
        <Judge />
      )}
    </div>
  );
}

export default App;




