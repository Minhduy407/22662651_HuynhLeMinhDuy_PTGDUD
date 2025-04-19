import { useEffect, useState } from "react";
import { ShoppingCart, DollarSign, User } from "lucide-react";

const iconMap = {
  cart: <ShoppingCart className="w-6 h-6" />,
  usd: <DollarSign className="w-6 h-6" />,
  user: <User className="w-6 h-6" />,
};

export default function OverviewCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://67cd2e68dd7651e464ed8f46.mockapi.io/api/v1/jasgjkasl");
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Lỗi khi fetch API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div key={card.id} className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
          <div className={`p-3 rounded-full bg-${card.color}-100`}>
            {iconMap[card.symple] || null}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">{card.Title}</h3>
            <p className="text-3xl font-bold text-gray-900">${card.Price}</p>
            <p className="text-sm text-green-500">+{card.Percent}%<span className="text-sm text-gray-500">period of change</span></p>
            
          </div>
        </div>
      ))}
    </div>
  );
}
