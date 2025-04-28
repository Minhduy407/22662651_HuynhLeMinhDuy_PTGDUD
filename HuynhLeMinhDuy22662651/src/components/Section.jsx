import React from 'react';

function Section() {
  return (
    <section className="bg-blue-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Phân hiệu Quảng Ngãi */}
          <div className="rounded-md overflow-hidden shadow-md">
            <img
              src="../image/QN03.jpg" 
              alt="Phân hiệu Quảng Ngãi"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">PHÂN HIỆU QUẢNG NGÃI</h3>
            </div>
          </div>

          {/* Cơ sở Thanh Hóa */}
          <div className="rounded-md overflow-hidden shadow-md">
            <img
              src="../image/TH03.jpg" 
              alt="Cơ sở Thanh Hóa"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">CƠ SỞ THANH HÓA</h3>
            </div>
          </div>

          {/* Video và Hình ảnh */}
          <div className="rounded-md overflow-hidden shadow-md">
            <img
              src="../image/video-background.jpg" // Thay thế bằng URL hình ảnh thật
              alt="Video và Hình ảnh"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">VIDEO VÀ HÌNH ẢNH</h3>
              <a href="#" className="text-blue-300 hover:underline block mt-2">
                xem tất cả
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;