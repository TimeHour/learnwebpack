<template>
    <img-modal v-show="active" @close="active=false" src="http://placekitten.com/800/600"></img-modal>
    <button class="button is-primary" @click="active=true">Open Modal</button>
    
    <img-modal v-show="active2" @close="active2=false" src="https://placebear.com/800/600"></img-modal>
    <button class="button is-primary" @click="active2=true">Open Modal2</button>

    <img-modal v-show="active3" @close="active3=false" src="https://i.picsum.photos/id/508/800/600.jpg?hmac=p2_IXmp4opvx0kYYehSBci2-R_cJAwFjwxZXpZlS6gY"></img-modal>
    <button class="button is-primary" @click="active3=true">Open Modal3</button>

    <img-modal v-show="active4" @close="active4=false" src="https://picsum.photos/seed/martin_luberg/800/600">
        <h1>afafaf</h1>
    </img-modal>
    <button class="button is-primary" @click="active4=true">Open Modal4</button>

</template>

<script>
import ImgModal from '../components/ImgModal.vue'
import Modal from '../components/Modal.vue'
export default {
  components: { Modal, ImgModal },
    data(){
        return {
            active: false,
            active2: false,
            active3: false,
            active4: false,
        }
    }
}
</script>

<style>

</style>