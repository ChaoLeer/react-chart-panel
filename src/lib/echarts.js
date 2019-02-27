import echarts from 'echarts'
class RCEcharts {
  constructor(dom, theme, opts) {
    this.dom = dom || null
    this.theme = theme || null
    this.opts = opts || {}
    window.echarts = this.echarts = echarts
    this.chart = echarts.init(this.dom, this.theme, this.opts)
  }
}
export default RCEcharts