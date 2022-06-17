let  form = document.querySelector('form')
let Todo = document.querySelector('#todo')
let list =document.querySelector('.list')

function todos(event){
    event.preventDefault()
    let value = event.target.elements.todo.value
    console.log(value)
    // let alltodos=[]
    // let todos={
    //     todo:value,
    // }
    // alltodos.push(todos)
    
    // alltodos.forEach((e)=>{
    //     let p = document.createElement('p')
    //     let div = document.createElement('div')
    //     p.innerText=e.todo
    //     div.append(p)
    //     list.append(div);
    //     console.log(alltodos)
    // })
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.innerText=value
    let button = document.createElement('button')
    button.innerText='❌'
    div.append(p,button)
    list.append(div);
    event.target.elements.todo.value=""
 
}



form.addEventListener('submit',todos)