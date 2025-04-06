export default function OverviewCards() {
    const cards = [
      { title: "Total Revenue", value: "$1,230,000", change: "+3%" },
      { title: "Active Users", value: "2,430", change: "-1%" },
      { title: "New Projects", value: "15", change: "+5%" },
    ];
  
    return (
      <div className="grid grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">{card.title}</h3>
            <p className="text-3xl font-bold text-gray-900">{card.value}</p>
            <p className={`text-sm ${card.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
              {card.change}
            </p>
          </div>
        ))}
      </div>
    );
  }
  