import React,{useEffect} from "react"
import { connect } from "react-redux";
import TodoListItem from './TodoListItem'
import NewTodoForm from "./NewTodoForm";
import {loadTodos} from '../thunk/thunks'
import { removeTodo, completeTodo } from "../actions/actions";
import { isLoading } from "../reducers/reducers";
const TodoList =({ todos =[], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos })=>{
    useEffect(()=>{
        startLoadingTodos();
    },[])
    const loadingMessage=<div>Loading todos.....</div>
    const Content=(
            <div className=' max-w-3xl m-auto'>
                <NewTodoForm/>
                {todos.map(todo =>
                    <TodoListItem  todo={todo}
                     onRemovePressed={onRemovePressed} 
                    onCompletedPressed={onCompletedPressed}/>
                )}
            </div>
    );
    return isLoading? loadingMessage:Content
}
const mapStateToProps= state=>({
    isLoading:state.isLoading,
    todos:state.todos
    });
    const mapDispatchToProps= dispatch=>({
        startLoadingTodos:()=>dispatch(loadTodos()),
    onRemovePressed: text=> dispatch(removeTodo(text)),
    onCompletedPressed: text=>dispatch(completeTodo(text))
    });
    export default connect(mapStateToProps,mapDispatchToProps)(TodoList);