<template>
  <div class="pdf">
    <PDFPage :bgColor="color" v-for="color in ['#ddd','#FFCCCC','#FFFFCC']" :key="color">
      <header class="header">
        <h2>这是一个标题</h2>
      </header>
      <section class="section">
        <vue-echarts :options="options1" class="vue-echarts"></vue-echarts>
        <table border="1">
          <thead>
            <tr>
              <td>测试1</td>
              <td>测试2</td>
              <td>测试3</td>
              <td>测试4</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 10" :key="i">
              <td>测试1</td>
              <td>测试2</td>
              <td>测试3</td>
              <td>测试4</td>
            </tr>
          </tbody>
        </table>
      </section>
    </PDFPage>
  </div>
</template>

<script>
import PDFPage from "../components/PDFPage";

export default {
  components: {
    PDFPage
  },
  data() {
    return {
      options1: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
.pdf {
  .header {
    text-align: center;
    h2 {
      margin: 0;
      padding: 1em;
    }
  }
  .vue-echarts {
    width: 100%;
  }
  table {
    width: 100%;
    td {
      width: 25%;
      text-align: center;
    }
  }
}
</style>