<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length <= 0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(comment,index) in comments" :key="index" :comment="comment" :deleteItem="deleteItem" :index="index"/>
    </ul>
  </div>
</template>

<script>
  import Item from "./Item";
    export default {
       //声明接收的属性,这个属性就会成为组件对象的属性
        props: ['comments','deleteItem'],
        components: {
            Item
        }
    }
</script>

<style>
  .reply {
    margin-top: 0;
  }


</style>
