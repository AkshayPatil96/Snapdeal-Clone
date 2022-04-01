let cartarea = document.getElementById("cartdetails")



let cartArr = JSON.parse(localStorage.getItem("addToCart"));


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
    quantity.innerText = `Quantity:1`
    quantity.setAttribute("class","small")

    let price = document.createElement("p")
    price.innerText = `Rs. ${el.price}`
    price.setAttribute("class","big")


    qtyprice.append(quantity, price)
    product.append(name, qtyprice)
    showcart.append(product)
})

////total data
let total = document.getElementById("total")
let deleverytotal = document.createElement("div")

let totaldiv = document.createElement("div")
totaldiv.setAttribute("class","displayflex")

let totaldiv2 = document.createElement("div")
totaldiv2.setAttribute("class","displayflex")

let totaldivp = document.createElement("p")
totaldivp.innerText = `Total`
totaldivp.setAttribute("class","small")
let totaldivrs = document.createElement("p")
totaldivrs.innerText = `999`
totaldivrs.setAttribute("class","big")

let totaldiv2p = document.createElement("p")
totaldiv2p.innerText = `Delivery Charges`
totaldiv2p.setAttribute("class","small")
let totaldiv2rs = document.createElement("p")
totaldiv2rs.innerText = `Free`
totaldiv2rs.setAttribute("id","free")
totaldiv.append(totaldivp, totaldivrs)
totaldiv2.append(totaldiv2p, totaldiv2rs)
deleverytotal.append(totaldiv, totaldiv2)

total.append(deleverytotal)




////you pay

let youpay = document.getElementById("youpay")

let youpaydiv = document.createElement("div")
youpaydiv.setAttribute("class","displayflex")

let youpayp = document.createElement("h4")
youpayp.innerText = `You Pay: `


let youpayrs = document.createElement("h4")
youpayrs.innerText = `Rs. 9999`
youpaydiv.append(youpayp, youpayrs)
youpay.append(youpaydiv)




document.getElementById("save").addEventListener("click",function(){
    window.location.href="2ndpage.html"
})
