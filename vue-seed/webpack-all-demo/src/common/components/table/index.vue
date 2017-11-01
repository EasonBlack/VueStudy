<template>
  <div>
      <table>
        <thead>
          <th v-for='(col, $index) in cols' :key='$index'>
            {{col}}
          </th>
        </thead>
        <tbody>
          <tr v-for='(row, $index) in rows' :key='$index'>
            <td v-for='(col, $index) in cols' :key='$index'>
               {{row[col]}}
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
  export default {
    props: ['rows', 'cols']
  }
</script>
<style lang='scss' scoped>
</style>