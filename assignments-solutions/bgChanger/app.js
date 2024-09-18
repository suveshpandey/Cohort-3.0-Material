const btn = document.getElementsByClassName('btn');
for(let i = 0; i<btn.length; i++){
    btn[i].addEventListener('click',()=>{
        document.getElementById('app-container').style.backgroundColor = btn[i].innerHTML;
    })
}

const addBtn = document.getElementById('addBtn');
const input = document.getElementById('input');
addBtn.addEventListener('click',()=>{
    let newColor = document.createElement('button');
    newColor.innerHTML = input.value;
    document.getElementById('btnContainer').appendChild(newColor);

    newColor.addEventListener('click', ()=>{
        document.getElementById('app-container').style.backgroundColor = newColor.innerHTML;
    })
})