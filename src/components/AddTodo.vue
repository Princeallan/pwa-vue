<template>
    <div>
        <form @submit="addTodo">
            <input name="title" v-model="title" placeholder="Add Todo Item..." type="text">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
// import uuid from 'uuid';
export default {
    name: "AddTodo",
    data() {
        return {
           title: '' 
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault();
            const newTodo = {
                title: this.title,
                completed: false
            }
            this.$emit('add-todo', newTodo);

            this.title = '';
        }
    }
}
</script>

<style scoped>
  form {
      display: flex;
      margin: 10px 0;
      background-color: #f4f4f4;
  }

  input[type="text"] {
      flex: 10;
      padding: 5px;
  }

  input[type="submit"] {
      flex: 2;
  }

  .btn {
      display: inline-block;
      border: none;
      background: #555;
      color: #fff;
      cursor: pointer;
      padding: 7px 20px;
      font-weight: 400;
  }
  .btn:hover {
      background: #666;
  }

</style>

