import { Route, Routes } from 'react-router-dom';
import TopBar from "./Components/TopBar";
import QuestionsPage from "./Pages/QuestionsPage";
import EssayPage from './Pages/EssayPage';
import McqPage from './Pages/McqPage';
import Login from './Pages/Login';
import './Components/TopBar.css';

function App(){
  return(
    <div className='h-full'>
      {/* <TopBar /> */}
      <Routes>
        <Route path="/" element={<QuestionsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="essayPage" element={<EssayPage />} />
        <Route path="mcqPage" element={<McqPage />} />
      </Routes>
    </div>
  );
}

export default App;
