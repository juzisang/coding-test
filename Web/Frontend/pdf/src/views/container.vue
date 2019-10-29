<template>
  <div class="container">
    <div class="prints">
      <div class="btn" @click="handleWindowPrint">调起浏览器</div>
      <div class="btn btn1" @click="handleDownPdf">jsPDF + html2canvas</div>
    </div>
    <iframe id="container" name="container" src="./index.html#/pdf" frameborder="no" width="100%"></iframe>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
export default {
  mounted() {
    window.addEventListener('load', () => {
      const container = document.querySelector('#container');
      container.style.height = container.contentWindow.document.body.clientHeight + 'px';
    });
  },
  methods: {
    handleWindowPrint() {
      document.querySelector('#container').contentWindow.print();
    },
    async handleDownPdf() {
      const pdf = new jsPDF({ format: 'a4' });
      const width = pdf.internal.pageSize.getWidth();

      const htmlBody = document.querySelector('#container').contentWindow.document.body;

      const pages = await Promise.all([...htmlBody.querySelectorAll('.PDFPage')].map(ele => html2canvas(ele)));

      pages.forEach(canvas => {
        pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, width, (canvas.height * width) / canvas.width, null, 'NONE');
        pdf.addPage();
      });
    //   pdf.internal.scaleFactor = 1.33;
      pdf.save('个人报告.pdf');
    }
  }
};
</script>

<style lang="scss">
.container {
  width: 210mm;
  margin: 0 auto;
  overflow: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  iframe {
    width: 100%;
  }
  .btn {
    box-sizing: border-box;
    display: inline-block;
    height: 56px;
    width: 50%;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
    background: #0099ff;
    color: #fff;
    &:active {
      opacity: 0.8;
    }
    &.btn1 {
      border-left: 1px #fff solid;
    }
  }
}
</style>