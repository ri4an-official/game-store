<template>
    <ul>
        <li v-for="(todolist, index) in TodoLists" :key="index">
            <span class="name">{{ todolist.name }}</span>
            <span class="delete" @click="Delete(todolist.id)">x</span>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        TodoLists: Array,
        Delete: Function,
    },
}
</script>
view rawTodo.vue hosted with ❤ by GitHub
