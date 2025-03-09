import React, { useEffect, useState } from "react";
import "./Content.css"
export default function Content() {
    const [array, setArray] = useState([]);

    useEffect(() => {
        fetch("https://67cd344edd7651e464ed9fce.mockapi.io/api/v1/d/Food")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched data:", data);
                if (Array.isArray(data)) {
                    setArray(data);
                }
            })
    }, []);

    return (
        <div className="container-content">
            <div className="content">
                {array.map((item) => (
                    <div key={item.id} className="content-item">
                        <img src={item.image} />
                        <div className="content-item-info">
                            <h3>{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
