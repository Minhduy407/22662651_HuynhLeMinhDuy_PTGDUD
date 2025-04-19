import OverviewCards from "./OverviewCards";
import ReportTable from "./ReportTable";

export default function MainContent({ activeItem }) {
  return (
    <div className="flex-1 p-6 space-y-6">
      {activeItem === "Dashboard" && (
        <>
          <OverviewCards />
          <ReportTable />
        </>
      )}

      {/* Các mục khác chỉ hiển thị tiêu đề */}
      {activeItem === "Projects" && (
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Projects</h3>
          {/* Có thể thêm nội dung liên quan đến Projects ở đây */}
        </div>
      )}

      {activeItem === "Teams" && (
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Teams</h3>
          {/* Thêm nội dung liên quan đến Teams ở đây */}
        </div>
      )}

      {/* Các mục khác sẽ tiếp tục như vậy */}
      {activeItem === "Analytics" && (
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Analytics</h3>
          {/* Nội dung cho Analytics */}
        </div>
      )}

      {activeItem === "Messages" && (
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Messages</h3>
          {/* Nội dung cho Messages */}
        </div>
      )}

      {activeItem === "Integrations" && (
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Integrations</h3>
          {/* Nội dung cho Integrations */}
        </div>
      )}
    </div>
  );
}
