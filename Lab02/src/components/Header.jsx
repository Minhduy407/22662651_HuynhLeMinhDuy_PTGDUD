import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                {/* Logo */}
                <div className="header-logo">
                    <img src="../src/images/chefify.png"/>
                </div>

                {/* Search Bar */}
                <div className="header-search">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="cakescascsa" />
                </div>

                {/* Navigation */}
                <nav className="header-nav">
                    <ul>
                        <li>What to cook</li>
                        <li>Recipes</li>
                        <li>Ingredients</li>
                        <li>Occasions</li>
                        <li>About Us</li>
                    </ul>
                </nav>

                {/* Recipe Box & Profile */}
                <div className="header-right">
                    <button className="recipe-box-btn">
                        <img src="../src/images/archive_check.png" />
                        Your Recipe Box</button>
                    <img src="../src/images/avatar.png" className="profile-img" />
                </div>
            </div>
        </header>
    );
}
