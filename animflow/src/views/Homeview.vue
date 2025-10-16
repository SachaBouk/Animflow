<script>
import codepen2 from '@/components/codepen2.vue';

export default {
  components: {
    codepen2
  }
}
</script>

<template>

    <div class="HomeStart">
        <h1>WELCOME</h1>
        <h1>ON</h1>
        <h1>ANIMFLOW</h1>
    </div>
    <codepen2 />
    


</template>


<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

body{

    background-color:grey;

}


.HomeStart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  margin-top: 170px;
}

.HomeStart h1 {
  font-size: 6rem;
  color: white;
}

</style>

