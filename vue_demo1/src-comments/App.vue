<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
        <Add :addComment="addComment"/>
        <!--组件间通信传递-->
        <List :comments="comments" :deleteItem="deleteItem"/>
    </div>
  </div>
</template>

<script>
    import Add from "./components/Add";
    import List from "./components/List";
    export default {

        data() {
            return {
                //数据在哪个组件,更新数据的行为就应该在哪个组件
                comments :[
                    {
                        name: 'Bob',
                        content: 'Vue还不错'
                    },
                    {
                        name: 'Cat',
                        content: 'Vue So Easy'
                    },
                    {
                        name: 'BZ',
                        content: 'Vue So So'
                    }
                ]
            }
        },

        methods: {
            addComment(comment) {
                //将数据添加到后边
                this.comments.unshift(comment)
            },
            //删除指定下标的评论
            deleteItem(index) {
              this.comments.splice(index, 1)
            }
        },


        components: {
            Add,
            List
        }
    }
</script>

<style scoped>

</style>
