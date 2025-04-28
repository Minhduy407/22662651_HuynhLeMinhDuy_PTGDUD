import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import các icon mạng xã hội

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-gray-700 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Liên hệ */}
        <div>
          <h3 className="font-semibold mb-2">LIÊN HỆ</h3>
          <ul>
            <li>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</li>
            <li>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4,</li>
            <li>Quận Gò Vấp, Thành phố Hồ Chí Minh</li>
            <li>Điện thoại: 028 38940 390 - 100</li>
            <li>Tuyển sinh: 028 3985 1932 - 028 3895 5858 -</li>
            <li>028 3985 1917</li>
            <li>Email: dhcn@iuh.edu.vn</li>
          </ul>
        </div>

        {/* Hoạt động khác */}
        <div>
          <h3 className="font-semibold mb-2">HOẠT ĐỘNG KHÁC</h3>
          <ul>
            <li><a href="#" className="hover:underline">Hoạt động phục vụ cộng đồng</a></li>
            <li><a href="#" className="hover:underline">Sinh viên tình nguyện</a></li>
            <li><a href="#" className="hover:underline">CLB/Đội/Nhóm sinh viên</a></li>
            <li><a href="#" className="hover:underline">Kết nối doanh nghiệp</a></li>
          </ul>
        </div>

        {/* Thông tin mở rộng */}
        <div>
          <h3 className="font-semibold mb-2">THÔNG TIN MỞ RỘNG</h3>
          <ul>
            <li><a href="#" className="hover:underline">Báo chí viết về IUH</a></li>
            <li><a href="#" className="hover:underline">Khám phá IUH</a></li>
            <li><a href="#" className="hover:underline">Kỷ niệm năm</a></li>
            <li><a href="#" className="hover:underline">Bộ sưu tập</a></li>
            <li><a href="#" className="hover:underline">Dịch vụ sinh viên</a></li>
          </ul>
        </div>

        {/* Văn bản tiện ích */}
        <div>
          <h3 className="font-semibold mb-2">VĂN BẢN TIỆN ÍCH</h3>
          <ul>
            <li><a href="#" className="hover:underline">Quy chế-Quy định-Quy trình</a></li>
            <li><a href="#" className="hover:underline">Ba công khai</a></li>
            <li><a href="#" className="hover:underline">Biểu mẫu đào tạo</a></li>
            <li><a href="#" className="hover:underline">Quản lý khoa học</a></li>
            <li><a href="#" className="hover:underline">Phản hồi</a></li>
          </ul>
        </div>
      </div>

      {/* Phần logo, thống kê và mạng xã hội */}
      <div className="container mx-auto mt-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="logo-uhi.png" alt="Logo IUH Footer" className="h-10 mr-4" />
          <div>
            <p>© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
            <p className="text-xs">Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học Công nghiệp Thành phố Hồ Chí Minh.</p>
          </div>
        </div>

        <div>
          <p>Số lượt truy cập: 288,835,375</p>
          <p>Hôm nay: 21,728 <span className="ml-2">Đang xem: 88</span></p>
        </div>

        <div className="flex items-center space-x-4">
          <span>Chia sẻ:</span>
          <a href="#" className="text-blue-500 hover:text-blue-700"><FaFacebook size={20} /></a>
          <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={20} /></a>
          <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;