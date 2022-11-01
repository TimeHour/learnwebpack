<template>
    <div v-if="!isNameSet">
        <input type="text" class="input" v-model="name" @keydown.enter="join()">
    </div>
  <div v-else>
  <input type="text" class="input" v-model="message" @keydown.enter="send()">
  <div class="columns" v-for="(msg, index) in messages" :key="index">
    <div class="column is-half is-flex" :class="{'is-justify-content-end is-offset-half' : msg.isMe}">
       <div class="notification m-2 p-2 is-size-4" :class="{'is-info': !msg.isMe, 'is-primary': msg.isMe}">{{msg.text}}</div>
        {{msg.text}}
        {{msg.name}}
    </div>
  </div> 
  </div>
</template>

<script>
export default {
    mounted(){
            this.ws = new WebSocket('ws://172.18.25.34:9000');
            
            // Connection opened
            this.ws.addEventListener('open', (event) => {
            
        });
           
           // Listen to Messages
            this.ws.addEventListener('message', (event) => {
                let data = JSON.parse(event.data);
            console.log(data);
            this.messages.push({text: event.data, isMe: false});
        });
    },
    data(){
        return{
            message: '',
            ws: null,
            messages: [
              //  {text:'asasasas', isMe: true},
              //  {text:'asasasdad', isMe: false},
              //  {text:'kjhhbvskjhu', isMe: true},
            ],
            isNameSet: false,
            name: '',
        }
    },
    methods: {
        send(){
            this.ws.send(JSON.stringify({type:'message', data: this.message}));
            this.messages.push({text: this.message, isMe: true, name: this.name});
            this.message = '';
        },
        join(){
            this.ws.send(JSON.stringify({type:'name', data: this.message}));
            this.isNameSet = true;
        }
    }
}
</script>

<style scoped>
.notification {
    width: fit-content;
    overflow-wrap: anywhere;
}

</style>