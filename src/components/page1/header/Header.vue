<template>
  <div>
      <div class="headerStyle">
          <div>找男生</div>
          <div>找女生</div>
          <div>放入男生</div>
          <div>放入女生</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style>
    .headerStyle{
        width: 100%;
        height: 60px;
        background-color: #bfa;
        display: flex;
    }
    .headerStyle div{
        width: 25%;
        height: 100%;
        border: 1px black solid;
        text-align: center;
        line-height: 62px;
    }
</style>