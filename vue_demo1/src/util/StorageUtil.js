/*
  使用LocalStorage存储的工具模块
  暴露的:
  1.函数 //一个函数就是一个功能
  2.对象 //一个对象包含多个功能
 */
const TODOS_KEY = 'todos_key'
export default {

  saveTodos(todos) {
    //将todos最新的值保存到localStorage
    window.localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
  },
  readTodos() {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  }
}



