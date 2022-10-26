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
        this.$refs['canvas'].focus();
        this.ctx = this.$refs['canvas'].getContext('2d');   
        this.start = Date.now();
        window.requestAnimationFrame(this.step);

    },
    data(){
        return{
            start: null,
            stop: null,
            cps: null,
            x: 95,
            y: 50,
            keysDown: {
                w: false,
                a: false,
                s: false,
                d: false,
            },
            speed: 200,
            xSpeed: 0,
            ySpeed: 0,
            radius: 20,
            drag: 0.1,
        }
    },
    methods: {
        draw(){
            let clearRadius = this.radius + this.speed+1;
            let clear = {
                x1: this.x-clearRadius<0 ? 0 : this.x-clearRadius,
                y1: this.y-clearRadius<0 ? 0 : this.y-clearRadius,

            }
            this.ctx.clearRect(clear.x1, clear.y1, clearRadius*2, clearRadius*2);
            this.ctx.restore();
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
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
        },
        step(){
            this.stop = Date.now();
            let elapsed = this.stop - this.start;
            this.start = Date.now();
            let move = this.speed/1000 * elapsed;
            if(this.keysDown.a){
                this.xSpeed=move*-1;
            }
            if(this.keysDown.d){
                this.xSpeed=move;
            }
            if(this.keysDown.s){
                this.ySpeed=move;
            }
            if(this.keysDown.w){
                this.ySpeed=move*-1;
            }
            this.x+=this.xSpeed;
            this.y+=this.ySpeed;
            if(this.xSpeed!=0){
                this.xSpeed+= this.xSpeed>0 ? -1*this.drag : this.drag;
                this.xSpeed = Math.round(this.xSpeed * 100) / 100
            }

            if(this.ySpeed!=0){
                this.ySpeed+= this.ySpeed>0 ? -1*this.drag : this.drag;
                this.ySpeed = Math.round(this.ySpeed * 100) / 100
            }
            this.draw();
            window.requestAnimationFrame(this.step);

        }
    }
}
</script>

<style scoped>
    canvas{
        border: 3px dashed black;
    }
</style>