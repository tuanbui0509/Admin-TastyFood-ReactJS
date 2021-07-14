import React from 'react'
import MenuSidebar from './Components/MenuSidebar/MenuSidebar'
import './App.css';

export default function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="dashboard">
          <MenuSidebar />

        </div>
      </div>
    </div>
  )
}

