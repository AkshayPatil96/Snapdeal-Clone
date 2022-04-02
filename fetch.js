const asyncData = async (trendingUrl) => {
    try {
        // let trendingUrl =
        //     "https://profound-donut-01ca79.netlify.app/trending.json";

        let response = await fetch(trendingUrl);

        let trendingData = await response.json();

        return trendingData;
    } catch (error) {
        console.log("error: ", error);
    }
};

function appending(trendingData, parent) {
    trendingData.moreProducts.forEach((element) => {
        let box = document.createElement("div");
        box.className = "more";
        box.addEventListener("click", () => {
            let send = [];
            send.push(element);
            localStorage.setItem("preview", JSON.stringify(send));
            window.location.href = "./preview.html";
        });

        let img_div = document.createElement("div");
        img_div.className = "more-img";

        let detail_box = document.createElement("div");
        detail_box.className = "more-detail";

        let price_detail = document.createElement("div");

        let img = document.createElement("img");
        1;
        img.src = element.image;

        let title = document.createElement("span");
        title.innerText = element.name;
        title.className = "name";

        let s_price = document.createElement("span");
        s_price.innerText = element.strikedOfprice;
        s_price.className = "orig-price";

        let price = document.createElement("span");
        price.innerText = `Rs.${element.price}`;
        price.className = "sale-price";

        let offer_price = document.createElement("span");
        offer_price.innerText = `86% OFF`;
        offer_price.className = "offer-price";

        img_div.append(img);
        price_detail.append(s_price, price, offer_price);
        detail_box.append(title, price_detail);
        box.append(img_div, detail_box);

        parent.append(box);
    });
}

let preview = JSON.parse(localStorage.getItem("previewing")) || [];
console.log("preview: ", preview);

function appendD(trendingData, parent) {
    trendingData.trending.forEach((element) => {
        let box = document.createElement("div");
        box.className = "box";
        box.addEventListener("click", () => {
            let send = [];
            send.push(element);
            localStorage.setItem("preview", JSON.stringify(send));
            // window.location.href = "./preview.html";
        });

        let img_div = document.createElement("div");
        img_div.className = "slide-img";

        let detail_box = document.createElement("div");
        detail_box.className = "detail-box";

        let price_detail = document.createElement("div");
        price_detail.className = "price-detail";

        let img = document.createElement("img");
        img.src = element.image;

        let title = document.createElement("span");
        title.innerText = element.name;
        title.className = "name";

        let s_price = document.createElement("span");
        s_price.innerText = element.strikedOfprice;
        s_price.className = "orig-price";

        let price = document.createElement("span");
        price.innerText = `Rs.${element.price}`;
        price.className = "sale-price";

        let offer_price = document.createElement("span");
        offer_price.innerText = `86% OFF`;
        offer_price.className = "offer-price";

        img_div.append(img);
        price_detail.append(s_price, price, offer_price);
        detail_box.append(title, price_detail);
        box.append(img_div, detail_box);

        parent.append(box);
    });
}

export { asyncData, appending, appendD };
