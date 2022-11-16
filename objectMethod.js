let emp={}
let foodArray={foodName:"Pizza",Price:"Rs:200",Quantity:"30kg"};
let Employee=Object.create(emp);
function submit(){
    let positionValue=document.getElementById("selectPosition").value;
    let typeValue=document.getElementById("selectType").value;
    let availableValue=document.getElementById("selectAvailable").value;
     Employee.position=positionValue,
     Employee.type=typeValue,
     Employee.available=availableValue
     console.log(Employee);
    document.getElementById("objectCreate").innerHTML=JSON.stringify(Employee);

}
function showDetails(){
    let KeysOfObject=Object.keys(Employee);
    console.log(KeysOfObject);
    document.getElementById("keys").innerHTML=KeysOfObject;
}
function showValue(){
    let valueOfKeys=Object.values(Employee);
    document.getElementById("values").innerHTML=valueOfKeys;
    console.log(valueOfKeys);
}
function freez()
{
    let freezItem=Object.freeze(Employee);
    console.log(freezItem);
}
function NestedArray(){
    let KeysOfObject=Object.keys(Employee);
    let valueOfKeys=Object.values(Employee);
    let nestedArray=[];
    for(i=0;i<KeysOfObject.length;i++)
    {
        nestedArray.push([KeysOfObject[i],valueOfKeys[i]]);
    }
    console.log(nestedArray);
    // document.getElementById("nestedArray").innerHTML=nestedArray;
    let text;
    nestedArray.map(item=>{
        return(
            text+="<p>"+item[0]+":"+item[1]+"</p>"
        )
    })
    document.getElementById("nestedArray").innerHTML=text;
}
function mergeArray(){
    let mergeData=Object.assign(foodArray,Employee);
    console.log(mergeData);
}
