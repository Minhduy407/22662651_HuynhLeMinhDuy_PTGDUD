import NavItem from "./NavItem";

function Navigation() {
  const gioiThieuItems = [
    { label: 'Tổng quan', href: '/gioi-thieu/tong-quan' },
    { label: 'Lịch sử phát triển', href: '/gioi-thieu/lich-su' },
    { label: 'Cơ cấu tổ chức', href: '/gioi-thieu/co-cau' },
    { label: 'Đội ngũ cán bộ', href: '/gioi-thieu/doi-ngu' },
    { label: 'Hợp tác quốc tế', href: '/gioi-thieu/hop-tac' },
    { label: 'Thành tựu', href: '/gioi-thieu/thanh-tuu' },
    // Thêm nhiều mục hơn nếu cần
  ];

  const daoTaoItems = [
    { label: 'Chương trình đào tạo đại học', href: '/dao-tao/dai-hoc' },
    { label: 'Chương trình đào tạo sau đại học', href: '/dao-tao/sau-dai-hoc' },
    { label: 'Đào tạo ngắn hạn', href: '/dao-tao/ngan-han' },
    { label: 'Tuyển sinh các khóa', href: '/dao-tao/tuyen-sinh' },
    { label: 'Học phí', href: '/dao-tao/hoc-phi' },
    // Thêm nhiều mục hơn nếu cần
  ];

  const tuyenSinhItems = [
    { label: 'Thông tin tuyển sinh đại học', href: '/tuyen-sinh/dai-hoc' },
    { label: 'Thông tin tuyển sinh sau đại học', href: '/tuyen-sinh/sau-dai-hoc' },
    { label: 'Hướng dẫn đăng ký', href: '/tuyen-sinh/huong-dan' },
    { label: 'Chính sách ưu tiên', href: '/tuyen-sinh/chinh-sach' },
    { label: 'Điểm chuẩn các năm', href: '/tuyen-sinh/diem-chuan' },
    // Thêm nhiều mục hơn nếu cần
  ];

  return (
    <nav className="bg-gray-200 border-b border-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex">
            <NavItem href="#" icon={true}>
              <span className="text-gray-700">🏠</span>
            </NavItem>
            <NavItem href="#" dropdown={true} dropdownItems={gioiThieuItems}>
              GIỚI THIỆU
            </NavItem>
            <NavItem href="#" dropdown={true} dropdownItems={daoTaoItems}>
              ĐÀO TẠO
            </NavItem>
            <NavItem href="#" dropdown={true} dropdownItems={tuyenSinhItems}>
              TUYỂN SINH
            </NavItem>
            <NavItem href="#">NGHIÊN CỨU</NavItem>
            <NavItem href="#">SINH VIÊN</NavItem>
            <NavItem href="#">GIẢNG VIÊN</NavItem>
            <NavItem href="#">VĂN BẰNG</NavItem>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="py-1 px-3 pr-8 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;