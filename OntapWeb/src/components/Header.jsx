import "tailwindcss";
export default function Header(){
    return(
        <div className="header container">
            <div className="container flex flex-row gap-2">
                <div>
                    <img src="../src/assets/chefify.png" />    
                </div>
                <div>
                    <img src="../src/assets/search.png" alt="" />
                </div>
                <div>
                    <ul className="flex flex-row gap-2">
                        <li>What to cook</li>
                        <li>Recipes</li>
                        <li>Ingredients</li>
                        <li>Occasions</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div>
                    <button className="bg-pink-500 w-40">Your Recipe Box</button>
                </div>
                <div>
                    <img className="w-25 h-20 rounded-full" src="../src/assets/avatar copy.png" alt="" />
                </div>
            </div>
        </div>
    );
}