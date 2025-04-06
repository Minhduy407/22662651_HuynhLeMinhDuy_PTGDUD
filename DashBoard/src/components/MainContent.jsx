import OverviewCards from "./OverviewCards";
import ReportTable from "./ReportTable";

export default function MainContent() {
  return (
    <div className="flex-1 p-6 space-y-6">
      <OverviewCards />
      <ReportTable />
    </div>
  );
}
