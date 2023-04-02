let q = (el)=>document.querySelector(el);

let areas = {
    a: null,
    b: null,
    c: null
}


document.querySelectorAll('.item').forEach(item =>{
item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);
});


document.querySelectorAll('.area').forEach(area =>{

    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);

});

q('.neutralArea').addEventListener('dragover', dragOverNeutral);
q('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
q('.neutralArea').addEventListener('drop', dropNeutral);


function dragStart(e){

    e.currentTarget.classList.add('dragging');

};

function dragEnd(e){

    e.currentTarget.classList.remove('dragging');
};


function dragOver(e){
    if(e.currentTarget.querySelector('.item') === null){
    e.preventDefault();
    e.currentTarget.classList.add('hover');
    }
}

function dragLeave(e){

    e.currentTarget.classList.remove('hover'); 
   
}

function drop(e){

    e.currentTarget.classList.remove('hover');
        
    if(e.currentTarget.querySelector('.item') === null){

        let dragItem = q('.item.dragging');
        e.currentTarget.appendChild(dragItem);

        updateAreas();
    }
}

function dragOverNeutral(e){

    e.preventDefault();
    e.currentTarget.classList.add('hover');

}

function dragLeaveNeutral(e){

    e.currentTarget.classList.remove('hover'); 

}

function dropNeutral(e){

    e.currentTarget.classList.remove('hover');
    let dragItem = q('.item.dragging');
    e.currentTarget.appendChild(dragItem);

    updateAreas();
}

function updateAreas(){

    document.querySelectorAll('.area').forEach(area =>{
        let name = area.getAttribute('data-name');

        if(area.querySelector('.item') !== null){
            areas[name] = area.querySelector('.item').innerHTML;
        }else{
            areas[name] = null;
        }
    })

   if(areas.a =="1" && areas.b =="2" && areas.c =="3"){

        q('.areas').classList.add('correct');
   }else{
    q('.areas').classList.remove('correct');
   }

}