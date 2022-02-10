console.log("Merhaba adamım!")
    let a = {x:231, y:"akak"}
    function sace(a,...b){
        console.log(a.y+" name :"+b )
    }
    sace(a,12,3,4,"124")
    /*********************/
let s = function(...sayilar){
    console.log(sayilar)
}
s(1,2,3,4);
    /*********************/
let points = [1,2,3,4]
    console.log(...points)
    console.log(Math.max(...points))
    console.log(..."abc","a","v", ..."hfd")
    /*********************/
    let setState = function(params){ }
let populations = [1000,2333,setState,["sad",213,1241]]
let [small,med,high,[x,f,g]] = populations
console.log(small,"\n",med,"\n",high,"\n",x,"\n",g,"\n",f);
    /*********************/
    function someFunction([small1],number){ //gelen array deki ilk değeri small1 e ata
        console.log(small1)
    }
    someFunction(populations)
    /*********************/

    let category = {id: 1 , name: "içecek"}
    console.log(category.id)
    console.log(category["name"])
let {id, name} = category
console.log(id)
console.log(name)
    /*********************/
class Customer{
    constructor(id, customerNumber){
        this.id = id //this ->customer (instance)
        this.customerNumber = customerNumber
    }
}
let customer = new Customer(1,"12431")
customer.name = "Kadir Enes Sesiz" //Instance prototyping
console.log(customer.name)

Customer.age = 20 //class prototyping (Static)
console.log(Customer.age)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer(){
    constructor(firstName, id, customerNumber){
        super(id, customerNumber)
        this.firstName = firstName
    }
}
class IndividualCustomer extends Customer(){
    constructor(companyName, id, customerNumber){
        super(id, customerNumber)
        this.companyName = companyName
    }
}
/////////////////////////////////////////////////////////////////////////////////////7
/*
let sayHello = () => {
    console.log("Hi")
}
sayHello()
 let sayHello2 = function(){
    console.log("hi again")
 }
 sayHello2()

function addToCard(product){
    console.log(product.productName+" Adet: "+product.quantity)
}
let product1 = {productName:"elma", quantity:12}
let product2 = {productName:"karpuz", quantity:3}
product1 = product2
product1.productName = "çilek"
console.log(product2.productName)
addToCard(product1)
function addToCard2(products){
    console.log(products)
}

let products = [
    {productName:"nane", quantity:23},
    {productName:"kiraz", quantity:41},
    {productName:"armut", quantity:52}
]

addToCard2(products)
//rest-spread
function add(bisey, ...numbers){
    let total = 0;
    for(let i = 0; i<numbers.length; i++){
        total +=numbers[i]
    }
    console.log(total)
    console.log(bisey)
}
add(12,324,5,6,1,123)

let nums = [1,23,142,4,21]
console.log(Math.max(...nums))
//destruction
let [icAnadolu, marmara, karadeniz,[,marmaraSehirleri]] = [
    {name:"İç anadolu", population:"12M"},
    {name:"Marmara", population:"15M"},
    {name:"Karadeniz", population:"1100M"},
    [
            ["konya,bilecik"],
            ["istanbul","tekirdağ"],
            ["rize","ordu"]
    ]
]
console.log(marmara.name)
console.log(marmaraSehirleri)



let newProductName, newUnitPrice
({productName:newProductName, unitPrice:newUnitPrice} = {productName:"laptop",unitPrice:213})
console.log(newProductName)
console.log(newUnitPrice)


for(let i = 2; i<=20; i++){
    let sonuc = 0
   for(let z=2; z<i; z++){
       if(i%z == 0){
           sonuc++
       }
   }
   if(sonuc==0){
    console.log(i)
   }
}

let f = (a,b) =>{
    let top=0;
    for(let i=1; i<a; i++){
        
        if(a%i==0){
            top +=i;
        }
        var c= top;
    }
    let top1=0;
    for(let z=1; z<b; z++){
        
        if(b%z==0){
            top1 +=z;
        }
        var d= top1;
    }
    if(c==b&&d==a){
        console.log("arkadaştırlar")
    }
    else console.log("arkadaştırlar değillerdir")
}
f(220,254)
*************** */

    //map reduce filter
let card= [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"asf", quantity:5, unitPrice:13},
    {id:3, productName:"vxz", quantity:4, unitPrice:23},
    {id:4, productName:"sa", quantity:3, unitPrice:13},
    {id:5, productName:"zxv", quantity:6, unitPrice:2123},
    {id:6, productName:"Telefasfon", quantity:1, unitPrice:33},

]
console.log("<ul>")
card.map(product=>{
    console.log("<li>"+   product.productName+ ":"+product.unitPrice*product.quantity+"</li>")
}) //iterate edilen her bir dizi elemanı için verilen takma isim product
console.log("</ul>")

let quantityOver2 = card.filter(product=>product.quantity>2)
console.log(quantityOver2)

let total = card.reduce((acc,product)=>acc +product.quantity*product.unitPrice, 0)
console.log(total)


function addToCard(sepet){
    sepet.push({id:7, productName:"aff",quantity:1, unitPrice:22})
}
addToCard(card)
console.log(card)


let sayi = 1
function topla(number){
    number +=1
}
topla(sayi)
console.log(sayi)
/*******************************************/

