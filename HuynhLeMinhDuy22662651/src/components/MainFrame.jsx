

export default function MainFrame() {
  return (
    <div className="container mx-auto flex p-4">
      {/* Sidebar */}
      <aside className="w-1/4 bg-blue-800 text-white p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">CƠ CẤU TỔ CHỨC</h2>
        <ul className="space-y-3">
          {[
            "LÃNH ĐẠO",
            "CÁC PHÒNG BAN",
            "CÁC KHOA",
            "CÁC VIỆN",
            "CÁC TRUNG TÂM",
            "CÁC PHÂN HIỆU",
            "ĐOÀN THỂ",
          ].map((item) => (
            <li
              key={item}
              className="flex justify-between items-center bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-md cursor-pointer"
            >
              <span>{item}</span>

            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="w-3/4 grid grid-cols-2 gap-4 px-4">
        {/* Each section */}
        {[
          { title: "THÔNG BÁO" },
          { title: "TUYỂN SINH" },
          { title: "TIN TỨC - SỰ KIỆN" },
          { title: "HỢP TÁC QUỐC TẾ" },
        ].map((section) => (
          <section
            key={section.title}
            className="border rounded-lg shadow p-4 bg-white"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-blue-800">{section.title}</h3>
              <a href="#" className="text-xs text-blue-500 hover:underline">
                xem tất cả
              </a>
            </div>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span className="text-red-500">•</span>
                <p>Tin tức mẫu 1</p>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-500">•</span>
                <p>Tin tức mẫu 2</p>
              </li>
            </ul>

            {/* Nếu muốn thêm hình ảnh trong mục "Tin tức - Sự kiện" */}
            {section.title === "TIN TỨC - SỰ KIỆN" && (
              <img
                src="../image/AVEVA-BANNER.jpg"
                alt="Sự kiện"
                className="rounded-lg mt-3"
              />
            )}
          </section>
        ))}
      </main>
    </div>
  );
}
