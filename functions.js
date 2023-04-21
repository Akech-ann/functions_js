// Create an array containing the names of all items in the inventory.
let item = ["banana", "rice", "cowpeas", "pumkins", "orange"]
// Create a separate array with the corresponding stock quantities of each item.
let stockAmount = [233, 399, 232, 561, 130]
let similarArrays = {}
item.forEach((Element, index)=>{
    similarArrays[Element]=stockAmount[index]
})
console.log(similarArrays)
// Write a function to add a new item to the inventory, updating both arrays.
function add(){
    similarArrays.screens = 4
}
add()
console.log(similarArrays)
// Write a function to update the stock quantity of an existing item.
function updateItems(){
    similarArrays["pears"] = 10
}
updateItems()
console.log(similarArrays)
// Write a function to calculate the total number of items in the inventory.
let value = 0
function findTotal (){
    let alls = stockAmount.reduce((first, last)=>first+last,value);
    console.log(alls);
}
// Write a function to find the item with the lowest stock quantity.
function mins(){
    let lower = Math.min(...stockAmount)
    console.log(lower)
}
mins()









