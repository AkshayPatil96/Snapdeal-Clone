let item = JSON.parse(localStorage.getItem("item"));

let selectSort = document.getElementById("select-sort")
selectSort.addEventListener("click", () => {

    if (selectSort.value === "ltoh") {
        item.sort((a, b) => {
            return a.price - b.price;
        })
        append(item)
    } else if (selectSort.value === "htol") {
        item.sort((a, b) => {
            return b.price - a.price;
        })
        append(item)
    }
})

let sortByPrice = document.getElementById("sortBYPrice");
sortByPrice.addEventListener("click", () => {
    let lowPrice = document.getElementById("low").value
    let highPrice = document.getElementById("high").value
    let newItem = item.filter((elements) => {
        return Number(elements.price) > lowPrice && Number(elements.price) < highPrice;
    })
    append(newItem);

})
let sortByRating = document.getElementById("sortByRating");
sortByRating.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(sortByRating)
    let value = formData.get("rating")
    let newItem = item.filter((elements) => {
        return Number(elements.rating) >= Number(value)
    })
    append(newItem);
})

let FashionName = localStorage.getItem("Fashion");
let append = (data) => {
    document.getElementById("product-bar").innerHTML = null;
    document.getElementById("product-type").innerText = FashionName;
    data.map((elem, index) => {
        if (index != 0) {
            let div = document.createElement("div");
            div.addEventListener("click", () => {
                preview(elem);
                window.location.href = "preview.html"
            })
            let img = document.createElement("img");
            img.src = elem.image;
            let name = document.createElement("p");
            name.innerText = elem.name;
            let pricediv = document.createElement("div");
            pricediv.setAttribute("id", "priceDiv")
            let strikedOfprice = document.createElement("span");
            strikedOfprice.innerText = "Rs. " + elem.strikedOfprice;
            let price = document.createElement("span");
            price.innerText = "Rs. " + elem.price
            pricediv.append(strikedOfprice, price);
            let rating = document.createElement("div");
            let ratingValue = elem.rating;
            for (let i = 1; i <= 5; i++) {
                let span = document.createElement("span");
                if (i <= ratingValue) {
                    span.innerHTML = "★"
                    span.style.color = "gold"
                } else {
                    span.innerHTML = "★"
                    span.style.color = "#d3c6bf"
                }
                rating.append(span);
            }
            div.append(img, name, pricediv, rating)
            document.getElementById("product-bar").append(div)
        }


    })
}
append(item);


let preview = (elem) => {
    localStorage.setItem("preview", JSON.stringify(elem))
}
