import React from 'react';
import './App.css';
import UserInfoCard from './components/UserInfoCard';

function App() {
  return (
    <div className="h-screen w-screen bg-zinc-300 flex items-center justify-center">
      <UserInfoCard />
    </div>
  );
}

export default App;
