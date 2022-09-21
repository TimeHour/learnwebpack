<template>
<div class="container">
    <section class="section">
            <button class="button" @click="count++">{{ count }}</button>
        <div class="field has-addons">
            <p class="control">
                <input type="text" v-model="newItem" @keydown.enter="addItem()">
            </p>
            <p class="control">
                <button class="button" @click="addItem()">Add</button>
            </p>
        </div>
    <div class="content">
            <h1>All items</h1>
            <ul>
                <li v-for="item in items" :key="item.id">
                    {{ item.name }}
                    	<input type="checkbox" v-model="item.done">    
                </li>
            </ul>
            
            <h1>Done items</h1>
            <ul>
                <li v-for="item in doneItems" :key="item.id">
                    {{ item.name }}
                    	<input type="checkbox" v-model="item.done">    
                </li>
            </ul>

            <h1>not done items</h1>
            <ul>
                <li v-for="item in notDoneItems" :key="item.id">
                    {{ item.name }}
                    	<input type="checkbox" v-model="item.done">    
                </li>
            </ul>
        </div>
  </section>
</div>
</template>

<script>
export default {
    data(){
        return{
            name:"Martin Luberg",
            count: 0,
            items: [
                {name:"sai",done: true, id: 0},
                {name:"kali",done: true, id: 1},
                {name:"sool",done: false, id: 2},
                {name:"piim",done: true, id: 3},
                {name:"leib",done: false, id: 4},
                ]
        }
    },
    methods: {
        addItem(){
            if(this.newItem.trim() != ''){
                this.items.push({name: this.newItem,done: false, id: this.items.lenght});
            }
            this.newItem = '';
        }
    },
    computed: {
        doneItems(){
            return this.items.filter(item => item.done)
        },
        notDoneItems(){
            return this.items.filter(item => !item.done)
        }
    },

}
</script>

<style>

</style>