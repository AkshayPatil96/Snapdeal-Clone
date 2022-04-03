

let showdetails = document.getElementById("dompayment")
// for show caedit card details....
document.getElementById("credit").addEventListener("click", () => {
    creditdetails()
})
function creditdetails(event) {
    showdetails.innerHTML = null
    //console.log("hiii")
    let head = document.createElement("h5")
    head.innerText = "Pay using Credit Cards"
    head.setAttribute("id", "type")
    let br = document.createElement("div")
    br.setAttribute("class", "number")

    let name = document.createElement("p")
    name.innerText = "Card Number"

    let nameinput = document.createElement("input")
    nameinput.placeholder = "Enter Card Number"

    let fdiv = document.createElement("div")
    fdiv.setAttribute("class", "fdiv")
    let mdiv = document.createElement("div")
    mdiv.setAttribute("class", "mdiv")
    let maindiv = document.createElement("div")
    maindiv.setAttribute("class", "maindiv")
    let ldiv = document.createElement("div")
    ldiv.setAttribute("class", "ldiv")

    let expiry = document.createElement("p")
    expiry.innerText = "Expiry Date"

    let month = document.createElement("input")
    month.placeholder = "MM"

    let year = document.createElement("input")
    year.placeholder = "year"

    let cvv = document.createElement("p")
    cvv.innerText = "CVV";



    let cvvinput = document.createElement("input")
    cvvinput.placeholder = "CVV";
    cvvinput.type = "password"

    let button = document.createElement("button")

    button.setAttribute("id", "paybutton")
    button.addEventListener("click",function(){
        window.location.href="../sucessfull.html"
    })
    button.innerText = "PAY"
    let trustpay = document.createElement("h4")


    trustpay.innerText = "TrustPay: 100% Payment Protection Easy Returns Policy"
    trustpay.setAttribute("id", "trusttext")



    br.append(name, nameinput)


    mdiv.append(month, year)
    ldiv.append(cvv, cvvinput)
    fdiv.append(expiry)
    maindiv.append(fdiv, mdiv, ldiv)
    showdetails.append(head, br, maindiv, button, trustpay)
}




/// for show debit card details.......
document.getElementById("debit").addEventListener("click", () => {
    debitdetails()
})
function debitdetails(event) {
    showdetails.innerHTML = null
    //console.log("hiii")
    let head = document.createElement("h5")
    head.innerText = "Pay using Debit Cards"
    head.setAttribute("id", "type")
    let br = document.createElement("div")
    br.setAttribute("class", "number")

    let name = document.createElement("p")
    name.innerText = "Card Number"

    let nameinput = document.createElement("input")
    nameinput.placeholder = "Enter Card Number"

    let fdiv = document.createElement("div")
    fdiv.setAttribute("class", "fdiv")
    let mdiv = document.createElement("div")
    mdiv.setAttribute("class", "mdiv")
    let maindiv = document.createElement("div")
    maindiv.setAttribute("class", "maindiv")
    let ldiv = document.createElement("div")
    ldiv.setAttribute("class", "ldiv")

    let expiry = document.createElement("p")
    expiry.innerText = "Expiry Date"

    let month = document.createElement("input")
    month.placeholder = "MM"

    let year = document.createElement("input")
    year.placeholder = "year"

    let cvv = document.createElement("p")
    cvv.innerText = "CVV";
    



    let cvvinput = document.createElement("input")
    cvvinput.placeholder = "CVV";
    cvvinput.type = "password"

    let button = document.createElement("button")
    button.setAttribute("id", "paybutton")
    button.addEventListener("click",function(){
        window.location.href="../sucessfull.html"
    })
    button.innerText = "PAY"
    let trustpay = document.createElement("h4")


    trustpay.innerText = "TrustPay: 100% Payment Protection Easy Returns Policy"
    trustpay.setAttribute("id", "trusttext")



    br.append(name, nameinput)


    mdiv.append(month, year)
    ldiv.append(cvv, cvvinput)
    fdiv.append(expiry)
    maindiv.append(fdiv, mdiv, ldiv)
    showdetails.append(head, br, maindiv, button, trustpay)
}



//for netbanking details

document.getElementById("net").addEventListener("click", () => {
    netdetails()
})
function netdetails(event) {
    showdetails.innerHTML = null
    //console.log("hiii")
    let head = document.createElement("h5")
    head.innerText = "Pay using Net Banking"
    head.setAttribute("id", "type")
    let br = document.createElement("div")
    br.setAttribute("class", "number")

    let name = document.createElement("p")
    name.innerText = "Select Bank"

    let nameinput = document.createElement("select")
    nameinput.placeholder = "Select"
    nameinput.setAttribute("class", "netclass")



    let button = document.createElement("button")
    button.setAttribute("id", "paybutton")
    button.innerText = "MAKE PAYMENT"
    button.addEventListener("click",function(){
        window.location.href="../sucessfull.html"
    })
    let trustpay = document.createElement("h4")


    trustpay.innerText = "TrustPay: 100% Payment Protection Easy Returns Policy"
    trustpay.setAttribute("id", "trusttext")



    br.append(name, nameinput)



    showdetails.append(head, br, button, trustpay)
}


//for cash on delivery details

document.getElementById("cod").addEventListener("click", () => {
    coddetails()
})
function coddetails(event) {
    showdetails.innerHTML = null
    //console.log("hiii")
    let head = document.createElement("h5")
    head.innerText = "Pay using Cash On Delivery"
    head.setAttribute("id", "type")



    let button = document.createElement("button")
    button.setAttribute("id", "paybutton")
    button.innerText = "PLACE COD ORDER"
    button.addEventListener("click",function(){
        window.location.href="../sucessfull.html"
    })
    let trustpay = document.createElement("h4")


    trustpay.innerText = "TrustPay: 100% Payment Protection Easy Returns Policy"
    trustpay.setAttribute("id", "trusttext")



    //br.append(name,nameinput)



    showdetails.append(head, button, trustpay)
}

//for EMI details
document.getElementById("emi").addEventListener("click", () => {
    emidetails()
})
function emidetails(event) {
    showdetails.innerHTML = null
    //console.log("hiii")
    let head = document.createElement("h5")
    head.innerText = "Pay using EMI"
    head.setAttribute("id", "type")
    let br = document.createElement("div")
    br.setAttribute("class", "number")

    let name = document.createElement("p")
    name.innerText = "Select Bank"

    let nameinput = document.createElement("select")
    nameinput.placeholder = "Select"
    nameinput.setAttribute("class", "netclass")







    br.append(name, nameinput)



    showdetails.append(head, br)
}

//foe e-gift voucher


document.getElementById("gift").addEventListener("click", () => {
    giftdetails()
})
function giftdetails(event) {
    showdetails.innerHTML = null
    //console.log("hiii")
    let head = document.createElement("h5")
    head.innerText = "Pay using e-Gift Voucher"
    head.setAttribute("id", "type")
    let br = document.createElement("div")
    br.setAttribute("class", "number")

    let name = document.createElement("p")
    name.innerText = "Voucher Code"

    let nameinput = document.createElement("select")
    //nameinput.placeholder = "Select"
    nameinput.setAttribute("class", "netclass")
    let name2 = document.createElement("p")
    name2.innerText = "Voucher Pin"

    let nameinput2= document.createElement("select")
    //nameinput.placeholder = "Select"
    nameinput2.setAttribute("class", "netclass")

    let apply=document.createElement("button")
    apply.setAttribute("id","apply")
    apply.innerText="APPLY"
    apply.addEventListener("click",function(){
        window.location.href="../sucessfull.html"
    })

    let br2 = document.createElement("div")
    br2.setAttribute("class", "number")



    br.append(name, nameinput)

    br2.append(name2, nameinput2)

    showdetails.append(head, br,br2,apply)
}

//for upi payment details

document.getElementById("upi").addEventListener("click", () => {
    upidetails()
})
function upidetails(event) {
    showdetails.innerHTML = null
    //console.log("hiii")
    let head = document.createElement("h5")
    head.innerText = "Pay using UPI"
    head.setAttribute("id", "type")
     
let br=document.createElement("div")


    let upi=document.createElement("input")
    upi.placeholder="Enter VPA Ex: 90152xxxxx@oksbi"
    upi.setAttribute("id", "upiinput")

    let verify=document.createElement("button")
    verify.setAttribute("id","verify")
    verify.innerText="VERIFY"

    let button = document.createElement("button")
    button.setAttribute("id", "paybutton")
    button.innerText = "PAY"
    button.addEventListener("click",function(){
        window.location.href="../sucessfull.html"
    })
    let trustpay = document.createElement("h4")


    trustpay.innerText = "TrustPay: 100% Payment Protection Easy Returns Policy"
    trustpay.setAttribute("id", "trusttext")



    br.append(upi,verify)



    showdetails.append(head, br, button, trustpay)
}



/// cart details



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
