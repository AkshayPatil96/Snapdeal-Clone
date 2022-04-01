let cartarea = document.getElementById("cartdetails")



let cartArr = JSON.parse(localStorage.getItem("addToCart"));
console.log(cartArr)
let localtotal=localStorage.getItem("total");
console.log(localtotal)


let showcart = document.getElementById("product")
showcart.innerHTML = " "


let summery = document.createElement("div")
summery.setAttribute("id","summery")
summery.innerText = `SUMMARY (${cartArr.length} Items)`
showcart.append(summery)


cartArr.forEach(function (el, i) {
    let product = document.createElement("div")

    let name = document.createElement("p")
    name.setAttribute("class","big")
    name.innerText = el.name

    let qtyprice = document.createElement("div")
    qtyprice.setAttribute("class","displayflex")
    let quantity = document.createElement("p")
    quantity.innerText = `Quantity:${el.qty}`
    quantity.setAttribute("class","small")

    let price = document.createElement("p")
    price.innerText = `Rs. ${el.price}`
    price.setAttribute("class","big")


    qtyprice.append(quantity, price)
    product.append(name, qtyprice)
    showcart.append(product)
})



////you pay

let youpay = document.getElementById("youpay")

let youpaydiv = document.createElement("div")
youpaydiv.setAttribute("class","displayflex")

let youpayp = document.createElement("h4")
youpayp.innerText = `You Pay: `


let youpayrs = document.createElement("h4")
youpayrs.innerText = `Rs. ${localtotal}`
youpaydiv.append(youpayp, youpayrs)
youpay.append(youpaydiv)




document.getElementById("save").addEventListener("click",function(){
    window.location.href="2ndpage.html"
})
