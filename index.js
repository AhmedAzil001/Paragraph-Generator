const input=document.getElementById("name");
const container=document.querySelector(".Para");



const generateWords =(n)=>{
    let text="";
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0;i<n;++i){
        const random=(Math.random()*25).toFixed(0);
        text+=letters[random];
    }
    return text;
}


let numOfWords;
const generatePara =()=> {
    numOfWords=Number(input.value);
    const para=document.createElement("p");
    
    let data="";
    for(let i=0;i<numOfWords;++i){
        const randonNumber=(Math.random()*15).toFixed(0);
        data+=generateWords(randonNumber).toLowerCase();
        data+=" ";
    }
    para.innerText=data;
    
    para.setAttribute("class","paras");

    container.append(para);
}