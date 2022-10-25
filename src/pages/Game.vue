<template>
  <canvas 
    tabindex=0 
    ref="canvas" 
    height="700" 
    width="1300" 
       @keydown="keyDown"
       @keyup="keyUp">
</canvas>
</template>

<script>
export default {
    mounted(){
        this.ctx = this.$refs['canvas'].getContext('2d');
        setInterval(()=>{
            if(this.keysDown.a){
                this.x--;
            }
            if(this.keysDown.d){
                this.x++;
            }
            if(this.keysDown.s){
                this.y++;
            }
            if(this.keysDown.w){
                this.y--;
            }
            this.draw();
        },0);

    },
    data(){
        return{
            cps: null,
            x: 95,
            y: 50,
            keysDown: {
                w: false,
                a: false,
                s: false,
                d: false,
            }
        }
    },
    methods: {
        draw(){
            let clear = {
                x1: this.x-25<0 ? 0 : this.x-25,
                y1: this.y-25<0 ? 0 : this.y-25,
                x2: this.x+25<1300 ? 1300 : this.x+25,
                y2: this.y+25<700 ? 700 : this.x+25,

            }
            this.ctx.clearRect(clear.x1, clear.y1, clear.x2, clear.y2);
            this.ctx.restore();
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            this.ctx.fillStyle = 'darkblue';
            this.ctx.fill();

        },
        keyDown(event){
            console.log(event)
            if(event.code == 'KeyD'){
                this.keysDown.d = true;
            }
            console.log(event)
            if(event.code == 'KeyA'){
                this.keysDown.a = true;
            }
            console.log(event)
            if(event.code == 'KeyW'){
                this.keysDown.w = true;
            }
            console.log(event)
            if(event.code == 'KeyS'){
                this.keysDown.s = true;
            }
        },
        keyUp(event){
            console.log(event)
            if(event.code == 'KeyD'){
                this.keysDown.d = false;
            }
            console.log(event)
            if(event.code == 'KeyA'){
                this.keysDown.a = false;
            }
            console.log(event)
            if(event.code == 'KeyW'){
                this.keysDown.w = false;
            }
            console.log(event)
            if(event.code == 'KeyS'){
                this.keysDown.s = false;
            }
        }
    }
}
</script>

<style scoped>
    canvas{
        border: 3px dashed black;
    }
</style>