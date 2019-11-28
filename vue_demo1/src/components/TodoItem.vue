<template>
<!--  onmouseenter="" onmouseleave="" onmouseover="" onmouseout=""-->
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <a href="javascript:" v-show="isShow" @click="deleteItem1">删除</a>
    <button class="btn btn-danger" v-show="isShow" value="删除">删除</button>
  </li>
</template>

<script>
    export default {
        props: {
            todo:Object,
            index:Number,
            deleteItem:Function
        },
        data() {
            return {
                bgColor: 'white', //背景颜色
                isShow: false     //是否显示
            }
        },
        methods: {
            handleEnter(isEnter) {
                if (isEnter) {
                    this.bgColor = 'green'
                    this.isShow = true
                } else {
                    this.bgColor='white', //背景颜色
                    this.isShow=false     //是否显示
                }
            },
            deleteItem1() {
                const {todo,index,deleteItem} = this
                deleteItem(index)
            }
        }
    }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
