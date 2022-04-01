let category = (data, main) => {
    for (let e in data) {
        let element = document.querySelector(".top-category-menu");
        let li = document.createElement("li");
        li.addEventListener("mouseenter", () => {
            main.style.display = "block";
            appendData(data[e], main)
            localStorage.setItem("Fashion", data[e].title)
        })
        let img = document.createElement("img");
        img.src = data[e].icon;
        let p = document.createElement("p");
        p.innerText = data[e].title;
        li.append(img, p);
        element.append(li)
    }
}
let appendData = (data, main) => {
    main.innerHTML = null;

    main.addEventListener("mouseleave", () => {
        main.style.display = "none"
    })
    let div = document.createElement("div");
    div.style.background = "none";
    for (let e in data) {
        if (e !== "icon" && e !== "title") {
            let categoryName = document.createElement("h4");
            categoryName.innerText = e.toUpperCase();
            categoryName.style.background = "none";
            let itemNames = document.createElement("div");
            itemNames.style.background = "none";
            let itemData = (data[e])
            for (let items in itemData) {
                let item = document.createElement("p");
                item.style.cursor = "pointer";
                item.innerText = items;
                item.addEventListener("click", () => {
                    localStorage.setItem("item", JSON.stringify((itemData[items])))
                    window.location.href = "products.html";
                })
                itemNames.append(item);
            }
            div.append(categoryName, itemNames)
            main.append(div)
        }
    }
}

export default category;