import React from "react";
import Sidebar from "./components/SlideBar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
