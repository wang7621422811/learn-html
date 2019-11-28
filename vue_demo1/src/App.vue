<template>
  <div class="todo-container">
    <div class="todo-wrap">
<!--      把您的addTodo事件监听-->
      <ToDoHeader @addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteItem="deleteItem"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
  import ToDoHeader from "./components/ToDoHeader";
  import TodoList from "./components/TodoList";
  import TodoFooter from "./components/TodoFooter";
  import StorageUtil from "./util/StorageUtil";
  export default {

      data() {
        return {
           /* todos: [
                {title:'吃饭',complete:false},
                {title:'睡觉',complete:true},
                {title:'coding',complete:false}
            ]*/
           todos: StorageUtil.readTodos()

        }
      },

      watch: {//使用深度监视
          todos: {
              deep: true, //深度监视
              handler: function (value) {
                  //将todos最新的值保存到localStorage
                  StorageUtil.saveTodos(value)
              }
              //handler:StorageUtil.saveTodos
          }
      },
      methods: {
          addTodo(todo) {
              this.todos.unshift(todo)
          },
          deleteItem(index) {
              this.todos.splice(index,1)
          },
          //删除所有选中的
          deleteCompleteTodos() {
             this.todos =  this.todos.filter(todo => !todo.complete)
          },
          //全选全部选
          selectAllTodos(isCheck) {
              this.todos.forEach(todo => todo.complete = isCheck)
          }
      },

      //映射标签
      components: {
          ToDoHeader,
          TodoList,
          TodoFooter
      }
  }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
