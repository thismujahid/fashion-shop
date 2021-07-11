// Active DropDwons In Header
const dropdwonBox = document.querySelectorAll(".dropdwon-box"),
    dropdwon = document.querySelectorAll("li.dropdwon"),
    header = document.getElementById("header");
dropdwon.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdwon.forEach((drop) => {
            drop.classList.remove("active");
        });
        dropdwonBox.forEach((drop) => {
            drop.classList.remove("active");
            header.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        theLinks.classList.add("cl");

        const actEle = document.querySelector(
            ".dropdwon-box" + e.currentTarget.dataset.cont
        );
        actEle.classList.add("active");
        header.classList.add("active");
    });
});
window.onscroll = () => {
    if (window.scrollY >= 400) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
};

// Switch Products In Products Dropdown
const tabs = document.querySelectorAll(".list .item"),
    products = document.querySelectorAll(".item-products .item-product");
tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        tabs.forEach((tab2) => {
            tab2.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        products.forEach((product) => {
            product.style.display = "none";
        });
        const actProduct = document.querySelector(
            ".item-product" + e.currentTarget.dataset.proLink
        );
        actProduct.style.display = "block";
    });
});
//End Switch Products In Products Dropdown

// Open and Close The Cart
const theCart = document.querySelector(".the-cart"),
    cartOpener = document.querySelector(".cart-opener"),
    cartCloser = document.querySelector(".the-cart .closer");
cartOpener.onclick = () => {
    theCart.classList.add("active");
};
cartCloser.onclick = () => {
    theCart.classList.remove("active");
};
// Calculate The Price
const productsPrice = document.querySelectorAll(".product-price"),
    lastPrice = document.querySelector(".last-price");
let productsPrices = [];
for (let i = 0; i < productsPrice.length; i++) {
    let price = Number(productsPrice[i].textContent);
    productsPrices.push(price);
}
const result = productsPrices.reduce(
    (init, currentValue) => init + currentValue,
    0
);
lastPrice.textContent = result;
// Remove Elements from Cart
const cartProducts = document.querySelectorAll(".cart-product"),
    cartProductsArray = Array.from(cartProducts);

productRemoveBtn = document.querySelectorAll(".remove-product");

for (let i = 0; i < cartProductsArray.length; i++) {
    productRemoveBtn[i].onclick = () => {
        cartProducts[i].remove();
    };
}

// Count Of Products
proCount = document.getElementById("count");
proCount.textContent = cartProducts.length;

//End Open and Close The Cart

// Get Width Of Window and Edit the Header Links
const theLinks = document.querySelector("header .links");
if (screenX < 880) {
    theLinks.classList.add("mobile");
    document
        .querySelector("header .right-actions .profile")
        .classList.add("mobile");
} else if (screenX < 500) {
    document.querySelector("header .the-cart").classList.add("mobile");
} else {
    theLinks.classList.remove("mobile");
    document
        .querySelector("header .right-actions .profile")
        .classList.add("mobile");
    document.querySelector("header .the-cart").classList.add("mobile");
}

// end Get Width Of Window and Edit the Header Links

// open and close mobile Links Menu
const closerMobileMenu = document.querySelector(".links.mobile .closer"),
    openerMobileMenu = document.querySelector(".mobile-menu i");
openerMobileMenu.onclick = (_) => theLinks.classList.add("active");
closerMobileMenu.onclick = (_) => {
    theLinks.classList.remove("active");
    theLinks.classList.remove("cl");
    dropdwon.forEach((drop) => {
        drop.classList.remove("active");
    });
    dropdwonBox.forEach((drop) => {
        drop.classList.remove("active");
    });
};

// End Open and Close Mobile Links Menu

// Open and Close Search Box

const searchOpener = document.querySelector(".right-actions .search"),
    searchBoxCloser = document.querySelector(".search-box .closer"),
    searchBox = document.querySelector(".search-box");

searchOpener.onclick = (_) => {
    searchBox.classList.add("active");
    header.classList.add("active");
};
searchBoxCloser.onclick = (_) => {
    searchBox.classList.remove("active");
    header.classList.remove("active");
    if (window.scrollY >= 400) {
        header.classList.add("active");
    }
};