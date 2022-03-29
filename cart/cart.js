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

let prod3 = new prod("https://n2.sdlcdn.com/imgs/j/v/d/130x152/1-3d341.jpg",
"boAt Airdopes 131/138 Twin Wireless Earbuds with IWP Technology, Bluetooth V5.0, Immersive Audio, Up to 15H Total Playback, Instant Voice Assistant and Type-C Charging,Bluetooth Earphone (Active Black)",
1299, 1)
cartArr.push(prod3);

let prod4 = new prod("https://n1.sdlcdn.com/imgs/j/s/s/130x152/viv-Lifestyle-Brown-Casual-Shoes-SDL018192741-1-49e97.jpeg",
"viv Lifestyle Brown Casual Shoes",625,1);
cartArr.push(prod4);

let prod5 = new prod("https://n3.sdlcdn.com/imgs/k/e/u/130x152/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg",
"Veirdo - 100% Cotton Regular Fit Green Men's T-Shirt ( Pack of 1 )", 309, 1);
cartArr.push(prod5);


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

        var del = document.createElement("i");
        del.className="fa fa-trash";
        del.addEventListener("click",function(){
            del(index);
        });

        d2.append(name,del);

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

        let d5 = document.createElement("h5")
        d5.innerText = `Rs. ${elem.price*elem.qty}`
        d5.setAttribute("class","d5")


        div.append(d1,d2,d3,d4,d5)
        document.querySelector("tbody").append(div)
        
    });

}

function displaytotal(){

    let total = cartArr.reduce(function(acc,elem){
        return acc + (elem.price * elem.qty);
    }, 0)

    document.querySelector("#total").innerText = `Sub Total :   Rs. ${total}`
}

displayData(cartArr);
displaytotal();

function add1(index){
    // console.log(index);
    cartArr[index].qty++;
    // console.log(cartArr)

    localStorage.setItem("cartItems",JSON.stringify(cartArr));
    displayData(cartArr);
    displaytotal();
}

function remove1(index){
    // console.log(index);
    cartArr[index].qty--;
    // console.log(cartArr)

    localStorage.setItem("cartItems",JSON.stringify(cartArr));
    displayData(cartArr);
    displaytotal();
}

function del(index){
    cartArr.splice(index,1);
    localStorage.setItem("cartItems",JSON.stringify(cartArr));
    displayData(cartArr);
    displaytotal();
}



