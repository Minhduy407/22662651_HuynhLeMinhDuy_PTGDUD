import { useState } from "react";
import SlideBar from "./components/SlideBar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  // Hàm để thay đổi activeItem khi chọn mục mới từ Sidebar
  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SlideBar onMenuItemClick={handleMenuItemClick} />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent activeItem={activeItem} />
      </div>
    </div>
  );
}
