function navbar() {
    return `<div class="navbar">
            <div class="top">
                <div><p>Brand Waali Quality. Bazaar waali Deal!</p></div>
                <div>
                    <ul>
                        <li>Impact@Snapdeal</li>
                        <li>Gift Cards</li>
                        <li>Help Center</li>
                        <li>Sell On Snapdeal</li>
                        <li>
                            <i class="fa-solid fa-mobile-screen-button"></i
                            ><span>Downloas App</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nav">
                <div class="left">
                    <a href="#"
                        ><img
                            src="/components/logo/snapdeal-logo.png"
                            alt="Snapdeal logo"
                    /></a>
                </div>
                <div class="middle">
                    <input
                        type="text"
                        name=""
                        id="search"
                        class="search-bar"
                        placeholder="Search products & brands"
                        autocomplete="off"
                    />
                    <button>
                        <i class="fa-solid fa-magnifying-glass"></i
                        ><span>Search</span>
                    </button>
                </div>
                <div class="right">
                    <div class="cart">
                        <p>Cart</p>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div class="user">
                        <p>Sign In</p>
                        <i class="fa-solid fa-user"></i>
                    </div>
                </div>
            </div>
        </div>`;
}

export default navbar;
