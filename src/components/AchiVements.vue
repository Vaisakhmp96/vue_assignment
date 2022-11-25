<template>
  <div>
    <b-table striped hover :items="items"></b-table>
    <h2>Additional Certificate :</h2>
    <li><b class="text10">Certified public speaker (Impact foundation, hyderabad)</b></li>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {Institution: 'P.H.S.S', Streame: 'S.S.L.C', YOP: '2013' },
          { Institution: 'P.T.M.Y.H.S.S',  Streame:'H.S.E-C.S.E', YOP: '2015' },
          { Institution: 'S.V.S.C.S.E', Streame: 'B.E-C.S.E', YOP: '2020'},
          
        ]
      }
    }
  }
</script>
<style>

h2 {
  margin-left: 20px;
}
b.text10 {
  margin-left: 20px;
}
</style>
