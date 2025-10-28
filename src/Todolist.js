    import React, { useState } from 'react'

    export default function Todolist() {
        const [todoList,setTodoList] = useState([]);

        const submitData = (e) =>{
            e.preventDefault();

            const todoName = e.target.todoName.value;
            // alert(name)
            if (!todoList.includes(todoName)) {
                const finalTodo = [...todoList,todoName]
                setTodoList(finalTodo)
            }
            else{
                alert("already exist")
            }
        }
        const deleteTodo = (indexToRemove) =>{
            const updateList = todoList.filter((_,index)=> index!==indexToRemove);
            setTodoList(updateList)
        }
    return (
        <>
        <div className='text-center m-4'>
            <h2 className='mb-3'>Hello Todo</h2>
            <form onSubmit={submitData}>
                <input className='border me-2'type='text' name='todoName'/>
                <button className='bg-slate-700 text-white px-3'>Add</button>
            </form>

            <ul className='m-5'>
                {
                    todoList.map((value,index)=>{
                        return <li key={index} className='text-left p-2 border relative'>{value} <span onClick={()=>deleteTodo(index)} className='cursor-pointer absolute right-2'>&times;</span></li>
                    })
                }
            </ul>
        </div>
        
        </>
    )
    }
