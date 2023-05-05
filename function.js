// /Create an array containing the names of all items in the inventory.
let grocery=["kales","tomatoes","cabbages","carrots","eggplant"];
//Create a separate array with the corresponding stock quantities of each item
let grocery_quantity= [7,120,10,100,200];
//add a new item
function addnew(item,quantity){
    grocery.push(item)
    grocery_quantity.push(quantity)
    console.log(grocery);
    console.log(grocery_quantity);
}
addnew("guava",300)
//update quantity
function updating(myitem,newquant){
    let check=grocery.indexOf(myitem)
    if (check >-1) {
        grocery_quantity[check]=newquant
        console.log(grocery_quantity);
    }
    else{
        console.log("Item not found")
    }
}
updating("carrots",600)
//sum of the groceryquantity
function sum_of() {
    let sum=0
    for (let i = 0; i < grocery_quantity.length ; i++) {
        sum +=grocery_quantity[i]
    }
    console.log(sum);
}
sum_of()
//sum
function addition(){
    let adding=grocery_quantity.reduce((a,b)=>a+b)
    console.log(adding)
    }
addition()
//item with lowest stock quantity
function lowest_quant() {
    let min=Math.min(...grocery_quantity)
    let index=grocery_quantity.indexOf(min)
    console.log(grocery[index])
}
lowest_quant()

function low(){
    let b = Math.min(...grocery_quantity)
    let ind = grocery_quantity.indexOf(min)
    console.log(grocery[ind]);
}
low()

















