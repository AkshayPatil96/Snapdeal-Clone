let category = (data, main,search) => {
    for (let e in data) {
        let element = document.querySelector(".top-category-menu");
        let li = document.createElement("li");
        li.addEventListener("mouseenter", () => {
            main.style.display = "block";
            appendData(data[e], main,search);
            localStorage.setItem("Fashion", data[e].title);
        });
        let img = document.createElement("img");
        img.src = data[e].icon;
        let p = document.createElement("p");
        p.innerText = data[e].title;
        li.append(img, p);
        element.append(li);
    }
};
let appendData = (data, main,search) => {
    main.innerHTML = null;
    main.addEventListener("mouseleave", () => {
        main.style.display = "none";
    });
    let div = document.createElement("div");
    div.style.background = "none";
    for (let e in data) {
        if (e !== "icon" && e !== "title") {
            let categoryName = document.createElement("h4");
            categoryName.innerText = e.toUpperCase();
            categoryName.style.background = "none";
            // console.log('categoryName: ', categoryName);
            let itemNames = document.createElement("div");
            itemNames.style.background = "none";

            let itemData = data[e];

            for (let items in itemData) {
                let item = document.createElement("p");
                item.style.cursor = "pointer";
                item.innerText = items;
                item.addEventListener("click", () => {
                    localStorage.setItem(
                        "item",
                        JSON.stringify(itemData[items])
                    );
                    window.location.href = "products.html";
                });
                itemNames.append(item);
            }
            div.append(categoryName, itemNames);
            main.append(div);
        }
    }
};


let appendSearch = (data,main,searchValue)=>{
   for(let e in data){
       localStorage.setItem("Fashion",e);
       let categories=(data[e])
       for(let el in categories){
           let products=(categories[el])
           for(let elem in products){
          
            if(elem===searchValue){
                    localStorage.setItem("item",JSON.stringify(products[elem]))
                    window.location.href="products.html"
                    return;
            }
           }
       }
   }
}

export {category,appendSearch};
