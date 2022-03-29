let cartArr = [];

function prod(i,t,p,q){
    this.img = i;
    this.title = t;
    this.price = p;
    this.qty = q
}

let prod1 = new prod("https://n3.sdlcdn.com/imgs/k/e/u/130x152/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg",
"Veirdo - 100% Cotton Regular Fit Green Men's T-Shirt ( Pack of 1 )", 309, 1);
cartArr.push(prod1);

let prod2 = new prod("https://n2.sdlcdn.com/imgs/k/d/7/130x152/Aika-Black-Net-Chaniya-Choli-SDL265173587-1-f7a38.jpeg",
"Aika Black Net Chaniya Choli Semi Stitched Lehenga Single", 675, 1);
cartArr.push(prod2);

console.log(cartArr);

function displayData(items){

    document.querySelector("tbody").innerHTML = "";

    items.forEach(function(elem,index){

        let div = document.createElement("tr");
        

        let d1 = document.createElement("td");
        let pic = document.createElement("img");
        pic.src = elem.img;
        d1.append(pic);

        let d2 = document.createElement("td");
        let name = document.createElement("p");
        name.innerText = elem.title;
        d2.append(name);

        let d3 = document.createElement("td");
        let price = document.createElement("p");
        price.innerText = `Rs. - ${elem.price}`;
        d3.append(price);

        let d4 = document.createElement("td");

        let btn1 = document.createElement("button");
        btn1.innerText = "ADD 1";
        btn1.addEventListener("click",function(){
            add1(index);
        })

        let btn2 = document.createElement("button");
        btn2.innerText = "REMOVE 1";
        btn2.addEventListener("click",function(){
            remove1(index);
        })

        let btn3 = document.createElement("h4");
        btn3.innerText = elem.qty;

        d4.append(btn1,btn3,btn2)


        div.append(d1,d2,d3,d4)
        document.querySelector("tbody").append(div)
        
    });

}

displayData(cartArr);

function add1(index){
    // console.log(index);
    cartArr[index].qty++;
    // console.log(cartArr)

    localStorage.setItem("cartItems",JSON.stringify(cartArr));
    displayData(cartArr);

}

function remove1(index){
    // console.log(index);
    cartArr[index].qty--;
    // console.log(cartArr)

    localStorage.setItem("cartItems",JSON.stringify(cartArr));
    displayData(cartArr);

}

