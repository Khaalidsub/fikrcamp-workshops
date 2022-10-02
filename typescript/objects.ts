// explicit mentioning the object type
//optional type
const  meat : {name:string,id:string,expiryDate:Date,price:number,exportedBy?:string} = {
    id:"",
    name:"chicken",
    expiryDate: new Date(),
    price: 15,
    // exportedBy:""
} 
meat.exportedBy = "dubai"

const flour:{id:string,name:string,price:number,count:number,isAvailable?:boolean} = {
    id:"",
    name:"",
    price:15,
    // isAvailable:true, how do we check
    count:15

}

if (flour.count > 0) {
    flour.isAvailable = true
}


console.log(flour)
// inferring the type
const beverage = {
    id:"super_bvg_rani_pineapple",
    name:"Rani",
    expiryDate: new Date(),
    price: 10,
} //milk,water,fanta

// add new fields wont work for implicit types
beverage.exportedBy  = ""

