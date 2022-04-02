let cartArr = JSON.parse(localStorage.getItem("addToCart"));

// function prod(i,t,p,q){
//     this.img = i;
//     this.title = t;
//     this.price = p;
//     this.qty = q
// }

// let prod1 = new prod("https://n3.sdlcdn.com/imgs/k/e/u/130x152/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg",
// "Veirdo - 100% Cotton Regular Fit Green Men's T-Shirt ( Pack of 1 )", 309, 1);
// cartArr.push(prod1);

// let prod2 = new prod("https://n2.sdlcdn.com/imgs/k/d/7/130x152/Aika-Black-Net-Chaniya-Choli-SDL265173587-1-f7a38.jpeg",
// "Aika Black Net Chaniya Choli Semi Stitched Lehenga Single", 675, 1);
// cartArr.push(prod2);

// let prod3 = new prod("https://n2.sdlcdn.com/imgs/j/v/d/130x152/1-3d341.jpg",
// "boAt Airdopes 131/138 Twin Wireless Earbuds with IWP Technology, Bluetooth V5.0, Immersive Audio, Up to 15H Total Playback, Instant Voice Assistant and Type-C Charging,Bluetooth Earphone (Active Black)",
// 1299, 1)
// cartArr.push(prod3);

// let prod4 = new prod("https://n1.sdlcdn.com/imgs/j/s/s/130x152/viv-Lifestyle-Brown-Casual-Shoes-SDL018192741-1-49e97.jpeg",
// "viv Lifestyle Brown Casual Shoes",625,1);
// cartArr.push(prod4);

// let prod5 = new prod("https://n3.sdlcdn.com/imgs/k/e/u/130x152/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg",
// "Veirdo - 100% Cotton Regular Fit Green Men's T-Shirt ( Pack of 1 )", 309, 1);
// cartArr.push(prod5);


console.log(cartArr);

let length = cartArr.length;

document.querySelector("#h3").innerText = `Shopping Cart (${length} items)`

const displayData = (items) =>{

    document.querySelector("tbody").innerHTML = "";

    items.forEach(({ image, name, price, qty },index) =>{

        let div = document.createElement("tr");

        let d1 = document.createElement("td");
        let pic = document.createElement("img");
        pic.src = image;
        d1.append(pic);

        let d2 = document.createElement("td");
        let title = document.createElement("p");
        title.innerText = name;

        var del = document.createElement("i");
        del.className="fa fa-trash";
        del.addEventListener("click",function(){
            dlt(index);
        });

        d2.append(title,del);

        let d3 = document.createElement("td");
        let rate = document.createElement("p");
        rate.innerText = `Rs.  ${price}`;
        d3.append(rate);

        let d4 = document.createElement("td");

        let btn1 = document.createElement("button");
        btn1.innerText = "ADD";
        btn1.setAttribute("class","btn")
        btn1.addEventListener("click",function(){
            add1(index);
        })

        let btn2 = document.createElement("button");
        btn2.innerText = "REMOVE";
        btn2.setAttribute("class", "btn")
        btn2.addEventListener("click",function(){

            if(qty > 1)
            {
                remove1(index);
            }
           
        })

        let btn3 = document.createElement("h4");
        btn3.innerText = qty;

        d4.append(btn1,btn3,btn2)

        let d5 = document.createElement("h5")
        d5.innerText = `Rs. ${price*qty}`
        d5.setAttribute("class","d5")


        div.append(d1,d2,d3,d4,d5)

        let hr = document.createElement("hr")
        document.querySelector("tbody").append(div,hr)
        
    });

}

const displaytotal = () =>{

    let total = cartArr.reduce(function(acc,elem){
        return acc + (elem.price * elem.qty);
    }, 0)

    document.querySelector("#total").innerText = `Sub Total :   Rs. ${total}`

    document.querySelector("#pay").innerText = `PROCEED TO PAY ( Rs. ${total+50})`
    

    localStorage.setItem("total",(total+50))
}

displayData(cartArr);
displaytotal();

const add1 =(index) =>{
    // console.log(index);
    cartArr[index].qty++;
    // console.log(cartArr)

    localStorage.setItem("addToCart",JSON.stringify(cartArr));
    displayData(cartArr);
    displaytotal();
}

const remove1 =(index) =>{
    // console.log(index);
    cartArr[index].qty--;
    // console.log(cartArr)

    localStorage.setItem("addToCart",JSON.stringify(cartArr));
    displayData(cartArr);
    displaytotal();
}

const dlt =(index) =>{
    cartArr.splice(index,1);
    localStorage.setItem("addToCart",JSON.stringify(cartArr));
    displayData(cartArr);
    displaytotal();
    let length = cartArr.length;
    document.querySelector("#h3").innerText = `Shopping Cart (${length} items)`

}


