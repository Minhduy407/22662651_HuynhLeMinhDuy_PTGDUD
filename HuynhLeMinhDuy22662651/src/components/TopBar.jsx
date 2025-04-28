function TopBar() {
    return (
      <div className="bg-indigo-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-xs flex items-center hover:underline">
              <span>E-OFFICE</span>
            </a>
            <a href="#" className="text-xs flex items-center hover:underline">
              <span>EMAIL</span>
            </a>
            <a href="#" className="text-xs flex items-center hover:underline">
              <span>THƯ VIỆN - THÔNG TIN</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-xs hover:underline">
              KẾT NỐI
            </a>
            <span className="text-xs">|</span>
            <a href="#" className="text-xs hover:underline">
              LIÊN HỆ
            </a>
            <div className="flex space-x-2">
              <a href="#" className="flex items-center">
                <img src="../image/icon-flag-vn.png" alt="Vietnamese" width={20} height={14} className="rounded" />
              </a>
              <a href="#" className="flex items-center">
                <img src="../image/icon-flag-en.png" alt="English" width={20} height={14} className="rounded" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default TopBar
  