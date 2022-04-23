import React from "react";

const TodoListItem =({todo, onRemovePressed, onCompletedPressed})=>{
    return(
            <div className=" rounded-md mt-2 p-4 relative shadow-[0_4px_10px_rgba(105,105,105)]">
                <h3>{todo.text}</h3>
                <div className=" absolute right-3  mr-4 bottom-3  ">
                    { todo.isCompleted 
                    ? null
                    : <button 
                onClick={()=> onCompletedPressed(todo.text)}
                className="text-base p-2
                 hover:bg-blue-700 mr-2 border-none 
                rounded-md outline-none cursor-pointer 
                inline-block bg-blue-500">Mark As Completed</button>}
                <button 
                onClick={()=> onRemovePressed(todo.text)}
                className=" text-base p-2 border-none
                 rounded-md outline-none cursor-pointer inline-block
                 hover:bg-red-700 bg-red-500">Remove</button>
                </div>


            </div>
    );
}
export default TodoListItem