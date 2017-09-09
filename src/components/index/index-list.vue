<template>
    <div class="index-list">
       {{m.imgs}} 
    </div>
</template>

<script>
  import './index-list.scss'
  export default {
    props:{
      m:Object
    },
    components: {
      
    },
    created(){
       console.log(this.m);
    },
    data(){
      return {
      
      }
    },
    methods:{
       
  },
    updated(){
     console.log(m,111);
    }
  }    
</script>