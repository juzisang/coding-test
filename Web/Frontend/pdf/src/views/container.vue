<template>
  <div class="container" :style="{visibility: show ? 'visible' : 'hidden'}" ref="container">
    <div class="prints">
      <div class="btn" @click="handleWindowPrint">调起浏览器</div>
      <div class="btn btn1" @click="handleDownPdf">jsPDF + html2canvas</div>
    </div>
    <iframe ref="iframe" :height="pageHeight" src="./index.html#/pdf" frameborder="no" width="100%"></iframe>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
export default {
  data() {
    return {
      show: false,
      pageHeight: 0
    }
  },
  async mounted() {
    await this.onLoad()
    this.show = true
    this.pageHeight = this.$refs.iframe.contentDocument.body.clientHeight
  },
  methods: {
    onLoad() {
      return new Promise((reslove) => window.addEventListener('load', reslove))
    },
    handleWindowPrint() {
      this.$refs.iframe.contentWindow.print();
    },
    async handleDownPdf() {
      const pdf = new jsPDF({ format: 'a4', compress: true })
      const htmlBody = this.$refs.iframe.contentWindow.document.body
      const pdfPages = await Promise.all([...htmlBody.querySelectorAll('.PDFPage')])
      const pdfPage = htmlBody.querySelector('.PDFPage')
      const pageHeight = pdfPage.clientHeight
      const pageWidth = pdfPage.clientWidth
      const scaleBy = 2
      for (const element of pdfPages) {
        const canvas = document.createElement('canvas')
        canvas.width = pageWidth * scaleBy
        canvas.height = pageHeight * scaleBy
        canvas.style.width = pageWidth * scaleBy + 'px'
        canvas.style.height = pageHeight * scaleBy + 'px'
        const context = canvas.getContext('2d')
        context.scale(scaleBy, scaleBy)
        context.font = 'Microsoft YaHei'
        const canvasData = await html2canvas(element, { canvas, scale: 1 })
        // document.body.appendChild(canvasData)
        pdf.addImage(canvasData.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 210, 297, null, 'NONE');
        pdf.addPage();
      }
      if (pdf.internal.pages.length > pdfPages.length) {
        pdf.deletePage(pdf.internal.pages.length - 1)
      }
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