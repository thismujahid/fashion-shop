//#region of Header
// Active DropDwons In Header
const dropdwonBox = document.querySelectorAll(".dropdwon-box"),
    dropdwon = document.querySelectorAll("li.dropdwon"),
    header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        header.style.top = "-70px";
    } else {
        header.style.top = "0px";
    }
});
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
    if (window.scrollY >= 200) {
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

// End Open and Close Search Box
//#endregion Of Header
//#region Of Land Area
// Switch Tabs In Featured Products
const featTabs = document.querySelectorAll(".feat-products .tabs .tab"),
    featProducts = document.querySelectorAll(".feat-products .products");
featTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        featTabs.forEach((tabIn) => {
            tabIn.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        let activeProduct = document.querySelector(
            ".products" + e.currentTarget.dataset.feat
        );
        featProducts.forEach((fPro) => {
            fPro.classList.remove("active");
        });
        activeProduct.classList.add("active");
    });
});

// EndSwitch Tabs In Featured Products
//#endregion Of Land Area
//#region offers section Functionality
// add and remove opacity
const shdowElement = document.querySelector(".offers");
shdowElement.style.setProperty("--afterOpacity", 1);
const shdowElementAfter = window.getComputedStyle(
    shdowElement,
    ":before"
).height;
var shdowElementScrollPosition = shdowElement.offsetTop;
window.onscroll = () => {
    if (window.scrollY >= shdowElementScrollPosition) {
        shdowElement.style.setProperty("--afterOpacity", "1");
        console.log("0");
    } else if (
        window.scrollY >=
        shdowElementScrollPosition - (parseInt(shdowElementAfter) - 400)
    ) {
        shdowElement.style.setProperty("--afterOpacity", "0.9");
        console.log("-400");
    } else if (
        window.scrollY >=
        shdowElementScrollPosition - (parseInt(shdowElementAfter) - 300)
    ) {
        console.log("-300");
        shdowElement.style.setProperty("--afterOpacity", "0.6");
    } else if (
        window.scrollY >=
        shdowElementScrollPosition - (parseInt(shdowElementAfter) - 200)
    ) {
        console.log("-200");

        shdowElement.style.setProperty("--afterOpacity", "0.3");
    } else if (
        window.scrollY >=
        shdowElementScrollPosition - (parseInt(shdowElementAfter) - 100)
    ) {
        shdowElement.style.setProperty("--afterOpacity", "0.1");
        console.log("-100");
        header.style.top = "-70px";
    } else {
        shdowElement.style.setProperty("--afterOpacity", 0);
        header.style.top = "0px";
    }
};
// End add and remove opacity
// add Offers Timer
var countDownDate = new Date("Aug 12, 2021 7:05:14").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector(".timer").innerHTML = `<span >${days}<b>D</b></span>
            <span>${hours}<b>H</b></span>
            <span>${minutes}<b>M</b></span>
            <span>${seconds}<b>S</b></span>`;
    if (distance <= 0) {
        clearInterval(x);
        document.querySelector(".timer").innerHTML = "EXPIRED";
    }
}, 1000);
var day = new Date().getDate();
var mon = new Date().getMonth() + 1;
var fYear = new Date().getFullYear();
//End add Offers Timer
//#endregion offers section Functionality