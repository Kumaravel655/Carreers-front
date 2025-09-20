import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from './Header';
import Sidebar from './Sidebar';

export default function RecruiterLayout() {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="w-100 p-4" style={{ backgroundColor: '#f8f9fa' }}>
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}