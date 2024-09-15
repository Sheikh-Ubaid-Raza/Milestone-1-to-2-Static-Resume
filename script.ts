var toggle = document.getElementById('toggle-skills') as HTMLButtonElement

var skills = document.getElementById('skills') as HTMLElement

toggle.addEventListener('click', ()=> {
    if ((skills.style.display as string) === 'none'){
        skills.style.display = 'block'
    }else{
        skills.style.display = 'none'
    }
})