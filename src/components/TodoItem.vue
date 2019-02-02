<template>
    <div class="todo-item" :class="{'is-complete':todo.completed}">
      <p>
        <input type="checkbox" v-on:change="markComplete">
        {{todo.title}}
        <button class="del" @click="$emit('del-todo', todo.id)">x</button>
        </p>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {
      markComplete() {
          this.todo.completed = !this.todo.completed;
      }
    }
}
</script>

<style scoped>
.todo-item {
    padding: 10px;
    background: #f4f4f4;
    border-bottom: 1px solid #ccc;
}
.is-complete {
    text-decoration: line-through;
}
.del {
    background-color: #ff0000;
    padding: 5px 9px;
    border-radius: 50%;
    float: right;
    color: #fff;
    border: none;
}

</style>

