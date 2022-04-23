import React,{useState} from 'react'
import { connect } from 'react-redux';
import { createTodo } from '../actions/actions';
const NewTodoForm =({todos, onCreatePressed})=>{
    const [inputValue,setInputValue]= useState('')
    return(
        <div className=' rounded-md p-4 text-center shadow-[0_4px_10px_rgba(105,105,105)] w-full'>
            <input 
            type="text" 
            placeholder='Type your new Todo here'
            className='w-3/4 p-3 border shadow-sm outline-none rounded-md '
            value={inputValue}
            onChange={e=>setInputValue(e.target.value)}
            /> <button 
            onClick={()=>{
                const DuplicateText= todos.some(todo=> todo.text === inputValue)
                if(!DuplicateText){
                    onCreatePressed(inputValue)
                    setInputValue('')
                }
               
            }}
            className=" w-7.5 p-4 border-none   ml-2 cursor-pointer
                font-sm rounded-md text-white bg-indigo-600
                 hover:bg-indigo-700" > Create Todo</button>    
        </div>
    );
}
const mapStateToProps= state=>({
todos:state.todos
});
const mapDispatchToProps= dispatch=>({
onCreatePressed: text=> dispatch(createTodo(text))
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);