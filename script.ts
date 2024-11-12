// contact
let con_section= document.getElementById('con')
let con_btn = document.getElementById('con_btn')

con_btn?.addEventListener('click', ()=>{
    con_section!.classList.toggle("hide")
})

// Education
let ed_section = document.getElementById('ed')
let ed_btn = document.getElementById('ed_btn')

ed_btn?.addEventListener('click', ()=>{
    ed_section!.classList.toggle("hide")
})


// Experties

let expt_section = document.getElementById('expt')
let expt_btn = document.getElementById('expt_btn')

expt_btn?.addEventListener('click', ()=>{
    expt_section!.classList.toggle("hide")
})


//Language
let lang_section = document.getElementById('lang')
let lang_btn = document.getElementById('lang_btn')

lang_btn?.addEventListener('click', ()=>{
    lang_section!.classList.toggle("hide")
})

// Experience
let exp_section = document.getElementById('exp')
let exp_btn = document.getElementById('exp_btn')

exp_btn?.addEventListener('click', ()=>{
    exp_section!.classList.toggle("hide")
})

// refrence
let ref_section = document.getElementById('ref')
let ref_btn = document.getElementById('ref_btn')

ref_btn?.addEventListener('click', ()=>{
    ref_section!.classList.toggle("hide")
})


let print_btn = document.getElementById('print')
print_btn?.addEventListener('click', ()=>{
    window.print()
})