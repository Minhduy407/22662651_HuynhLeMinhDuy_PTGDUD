function MainHeader() {
    return (
      <header className="bg-sky-100 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="../image/logo.png" alt="University Logo" width={80} height={80} className="mr-4" />
            <div className="text-center md:text-left">
              <div className="text-xl md:text-2xl font-bold text-indigo-900">BỘ CÔNG THƯƠNG</div>
              <div className="text-lg md:text-xl font-bold text-indigo-800">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</div>
              <p className="text-sm text-red-500 italic">Đổi mới tư duy, làm giàu thêm trí thức - đời sống</p>
            </div>
          </div>
        </div>
      </header>
    )
  }
  
  export default MainHeader
  