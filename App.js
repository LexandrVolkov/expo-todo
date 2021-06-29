import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Navbar} from './src/Navbar'
import {AddTodo} from './src/AddTodo'
import {Todo} from './src/Todo'

export default function App() {
  const [todos,setTodos] = useState([])
const addTodo = title => {
  //  const newTodo = {
    //  id: Date.now().toString(),
      //title: title
    //}
    setTodos(prev => [
      ...prev,
      {
      id: Date.now().toString(),
      title
    }   
  ]) 


  }
 const removeTodo = id =>{setTodos(prev=>prev.filter(todo=>todo.id !==id))}
  return (
    <View>
        <Navbar title ='Todo App!'/>
        <View style = {styles.container}>
           <AddTodo onSubmit = {addTodo} />
              <ScrollView>
                {todos.map(todo =>(
                  <Todo todo={todo} key = {todo.id} onRemove={removeTodo}/>
                ))}
           </ScrollView>
         </View>
         </View>
      
  )

              }


const styles = StyleSheet.create({
  container:{
    
        paddingHorizontal:30,
    paddingVertical:20
            }
    
});