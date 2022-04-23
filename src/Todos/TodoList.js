import React from "react"
import { connect } from "react-redux";
import TodoListItem from './TodoListItem'
import NewTodoForm from "./NewTodoForm";
import { removeTodo, completeTodo } from "../actions/actions";
const TodoList =({ todos =[], onRemovePressed, onCompletedPressed })=>{
    return(
            <div className=' max-w-3xl m-auto'>
                <NewTodoForm/>
                {todos.map(todo=>
                    <TodoListItem todo={todo}
                     onRemovePressed={onRemovePressed} 
                    onCompletedPressed={onCompletedPressed}/>
                )}
            </div>
    );
}
const mapStateToProps= state=>({
    todos:state.todos
    });
    const mapDispatchToProps= dispatch=>({
    onRemovePressed: text=> dispatch(removeTodo(text)),
    onCompletedPressed: text=>dispatch(completeTodo(text))
    });
    export default connect(mapStateToProps,mapDispatchToProps)(TodoList);