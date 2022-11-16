let productArr=[]

function addProduct(){
    let Id=document.getElementById("inpID").value;
    let Name=document.getElementById("inpName").value;
    let Price=document.getElementById("prodPrice").value;
    let Quantity=document.getElementById("prodQuant").value;
    let obj={prodId:Id,prodName:Name,prodPrice:Price,prodQuantity:Quantity}
    productArr.push(obj);
    console.log(productArr)
    populate();
}
function populate()
{
    let text;
    if(productArr.length>0){
    text="<table><tr><th>Product Id</th><th>Product Name</th><th>Product Price</th><th>Product Quantity</th><th>Action</th></tr>"
    productArr.map((item,i)=>{
        return(
            text+="<tr><td>"+item.prodId+"</td><td>"+item.prodName+"</td><td>"+item.prodPrice+"</td><td><button class='btnQuantity' ind="+i+" onclick='decrement(this)'>-</button><span >"+item.prodQuantity+"</span><button class='btnQuantity' ind="+i+" onclick='increment(this)'>+</button></td><td><button ind="+i+" onclick=deleteData(this)>Delete</button></td></tr>"
        )
    })
    document.getElementById("tblData").innerHTML=text
    text="</table>"
}else{
    document.getElementById("tblData").innerHTML="";
}
   
}
function deleteData(args)
{
  let index=args.getAttribute("ind");
  console.log(index);
  productArr.splice(index,1);
  populate();
}
function increment(args){
    let index=args.getAttribute("ind");
    let prevQuantity=args.previousSibling.innerHTML;
     prevQuantity=parseInt(prevQuantity)+parseInt(1);
     console.log( prevQuantity);
     productArr[index].prodQuantity=prevQuantity;
     populate();
}
function decrement(args){
    let index=args.getAttribute("ind");
    console.log(index);
    let quantity=args.nextSibling.innerHTML;
    console.log(quantity);
    if(productArr[index].prodQuantity>1){
    quantity=parseInt(quantity)-parseInt(1);
    productArr[index].prodQuantity=quantity;}
    populate();
}