let btn= document.querySelector("#primero");
let ul= document.querySelector("#primero2");
let resultado= document.querySelector("#resultado")
let resultado2= document.querySelector("#resultado2")
let sumaingresos= 0



btn.addEventListener("click", function(){
    
    let inpt= document.querySelector("#primero3").value;
    let inpt2= document.querySelector("#primero3x").value;


    let inpt3= inpt +" "+ inpt2


    if(inpt3.trim()!== ""){


    //creación de elementos
        let li= document.createElement("li")
        li.textContent= inpt3
        li.appendChild(addDeletBtn())  //<li> textoo <button> </li>
    //adjuntar el elemento creado dentro el ul
        ul.appendChild(li)
    }
   

    sumaingresos=sumaingresos+Number(inpt2)
    resultado.textContent= sumaingresos
    


})


    
   












function addDeletBtn() {
    let deleteBtn= document.createElement("button");
    deleteBtn.textContent= "X";

    deleteBtn.addEventListener("click", (e) =>{
        let item= e.target.parentElement;
        ul.removeChild(item)

        let itemn= target.parentElement.btn2;

        sumaingresos= sumaingresos-itemn
        resultado.textContent= sumaingresos
        

        
    })
    
    return deleteBtn;
}


////////////////////////////////22222222222222222222222222222//////////////////////////




let btn2= document.querySelector("#segundo2");
let ul2= document.querySelector("#segundo3");




btn2.addEventListener("click", function(){
    
    let inpt2= document.querySelector("#segundo").value;
    let inpt22= document.querySelector("#segundox").value;

    let inpt223= inpt2+ " "+inpt22


    
    if(inpt2.trim()!== ""){


    //creación de elementos
        let li2= document.createElement("li")
        li2.textContent= inpt223
        li2.appendChild(addDeletBtn2())  //<li> textoo <button> </li>
    //adjuntar el elemento creado dentro el ul
        ul2.appendChild(li2)
    }
   

    v1= Number(inpt22)
v2=v1+=v1
    resultado2.textContent=v2

})





function addDeletBtn2() {
    let deleteBtn2= document.createElement("button");
    deleteBtn2.textContent= "X";

    deleteBtn2.addEventListener("click", (e) =>{
        let item2= e.target.parentElement;
        
        ul2.removeChild(item2)
    })
    
    return deleteBtn2;
}
