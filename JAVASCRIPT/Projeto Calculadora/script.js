let teclasNum = [...document.querySelectorAll('.num')];
let teclasOp = [...document.querySelectorAll('.tOpe')];
let display = document.querySelector('.display');


teclasNum.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
    
        let num = evt.target.innerHTML;

        console.log(num);

        if(num == "5"){
            alert("tecla 5");
        }
    })
    
})