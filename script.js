
function takeinput(){
    const inputField=document.getElementById("inp");
    inputField.addEventListener("input",function(){
        const gridsize=parseInt(inputField.value,10);
        if (gridsize>0 && gridsize<65){
            create(gridsize);
        }
        else {
            alert("Please enter a grid size between 1 and 64.");
        }
    })
}
// function selectedcolor(){
//     const colorPicker = document.getElementById("colorpicker");
//     console.log(colorPicker.value);
//     return colorPicker.value;
    
// }
let randomcolor=()=>{
    let r=Math.floor(Math.random() * 256) ;
    let g=Math.floor(Math.random() * 256) ;
    let b=Math.floor(Math.random() * 256) ;
    let rancolor=`rgb(${r}, ${g}, ${b})`;
    return rancolor;
}
// let actions=()=>{
//     let event="mouseover"
//     document.querySelector(".action").addEventListener("click",()=>{
//         event= "click";
//     })
//     console.log(event);
//     return()=> event;
// }
// function themes(){
//     document.querySelector(".dn").addEventListener("click",()=>{

//     })
// }

function create(a){
    document.querySelector(".container").style.gridTemplateColumns = `repeat(${a}, 1fr)`;
document.querySelector(".container").style.gridTemplateRows = `repeat(${a}, 1fr)`;
// const getCurrentEvent = actions();
for(let i=0;i<a*a;i++){
    let dv=document.createElement("div");
    dv.setAttribute("class","boxes");
    dv.addEventListener("mouseover",()=>{
        dv.style.backgroundColor=randomcolor();
    })
    dv.addEventListener("click",()=>{
        dv.style.backgroundColor=randomcolor();
    })
    document.querySelector(".gridlines").addEventListener("click",()=>{
        dv.setAttribute("style","border:1.5px solid black;");
        document.querySelector(".container").style.border="none"
    })
    document.querySelector(".reset").addEventListener("click",()=>{
        document.querySelector(".container").innerHTML = '';
        document.querySelector(".container").style.border = '3px solid black';
        document.getElementById("inp").value = '';
        // document.getElementById("colorpicker").value='#ff0000';
    })
    document.querySelector(".container").append(dv);
}
}
takeinput();