export default function Slidebar() {
    return (
      <div className="relative w-full overflow-hidden rounded-lg shadow-md">
        <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-900 p-8">
          {/* Nội dung bên trái */}
          <div className="text-white max-w-md">
            <h2 className="text-3xl font-bold mb-4">GIAO DIỆN MỚI - SẴN SÀNG BỨT PHÁ!</h2>
            <p className="mb-6">
              Hãy trải nghiệm giao diện website IUH mới, giúp bạn tương tác dễ dàng hơn
              và truyền tải nhiều nội dung một cách thuận tiện!
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full">
              KHÁM PHÁ NGAY
            </button>
          </div>
  
          {/* Hình ảnh bên phải */}
          <img
            src="../image/BANNER 30_4_WEB1.jpg"
            alt="Giao diện mới"
            className="w-1/2 object-cover rounded-lg"
          />
        </div>
      </div>
    );
  }
  