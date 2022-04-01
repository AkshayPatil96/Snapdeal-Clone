// localStorage preview data
let preview = JSON.parse(localStorage.getItem("preview"));
// console.log(preview);

let cart = document.querySelector(".fa-cart-shopping")
let count = document.createElement("span");
let counter = localStorage.getItem("count") || 0;
cart.innerHTML = null;
count.innerHTML = counter;
localStorage.setItem("count", counter);
cart.append(count);

let appendPreview = (data) => {
    let imageDiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = data.image;
    imageDiv.append(image)
    document.getElementById("preveiw-product-image").append(imageDiv)

    let detailsDiv = document.createElement("div");
    let title = document.createElement("p");
    title.innerText = data.name;

    let pricediv = document.createElement("div");
    pricediv.setAttribute("id", "priceDiv")
    let strikedOfprice = document.createElement("span");
    strikedOfprice.innerText = "Rs." + data.strikedOfprice;
    let price = document.createElement("span");
    price.innerText = "Rs." + data.price
    pricediv.append(strikedOfprice, price);

    let rating = document.createElement("div");
    rating.setAttribute("class", "rating")
    let ratingValue = data.rating;
    let ratingNumber = document.createElement("p");
    ratingNumber.innerHTML = "(" + ratingValue + ")" + ` <span>ratings</span>`
    let starDiv = document.createElement("div");
    for (let i = 1; i <= 5; i++) {
        let span = document.createElement("span");
        if (i <= ratingValue) {
            span.innerHTML = "★"
            span.style.color = "gold"
        } else {
            span.innerHTML = "★"
            span.style.color = "#d3c6bf"
        }
        starDiv.append(span);
    }
    let div = document.createElement("div");
    div.setAttribute("class", "devider")
    let ask =document.createElement("p");
    ask.setAttribute("class","ask")
    ask.innerText="Have a question?"

    rating.append(starDiv, div, ratingNumber,div,ask)
    let hrd = document.createElement("hr");
    let sizeDiv = document.createElement("div");
    sizeDiv.setAttribute("class", "sizeDiv")
    let size = document.createElement("div");
    size.innerText = "Size";
    let sizeNumber = document.createElement("div");
    sizeNumber.innerText = data.size;
    sizeDiv.append(size, sizeNumber)

    let colorDiv = document.createElement("div");
    colorDiv.setAttribute("class", "colorDiv")
    let color = document.createElement("div");
    color.innerText = "Color";
    let colorImage = document.createElement("img");
    colorImage.src = data.image;
    colorDiv.append(color, colorImage)

    let addToCartDiv = document.createElement("div")
    addToCartDiv.setAttribute("id", "AddToCartDiv")
    let addTocart = document.createElement("button");
    addTocart.innerText = "ADD TO CART";
    addTocart.addEventListener("click", () => {
        let addToCart = JSON.parse(localStorage.getItem("addToCart")) || [];
        data.qty=1;
        addToCart.push(data);
        localStorage.setItem("addToCart", JSON.stringify(addToCart))
        counter++;
        cart.innerHTML = null;
        count.innerHTML = counter;
        localStorage.setItem("count", counter);
        cart.append(count);
    })
    let buyNow = document.createElement("button");
    let sdIcon = document.createElement("img")
    sdIcon.src = `https://logodix.com/logo/1241333.png`
    sdIcon.style.width = "30px"
    buyNow.innerHTML = "BUY NOW"
    // buyNow.append(sdIcon)
    addToCartDiv.append(addTocart, buyNow)
    detailsDiv.append(title, rating, hrd, pricediv, sizeDiv, colorDiv, addToCartDiv)
    document.getElementById("preview-product-details").append(detailsDiv)
}
appendPreview(preview);