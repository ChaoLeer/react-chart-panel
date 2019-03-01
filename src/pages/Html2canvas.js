import React, { Component } from 'react'
import RCEcharts from '../lib/echarts.js'
import drawCanvas from '../lib/html2canvas.js'
import './Html2canvas.css'

class Html2canvasChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgSrc: ''
    }
  }
  
  exportdom = (sel) => {
    let vm = this
    drawCanvas(sel).then(canvas => {
      vm.setState({
        imgSrc: canvas.toDataURL('image/png')
      })
    })
  }
  componentDidMount() {
    var dom = document.querySelector('#echartDom')
    var domChart = new RCEcharts(dom, null, {
      renderer: 'svg'
    })
    var colorList = ['#FFB83C', '#F9D60A', '#AC90F7', '#77D9E6','#ADE151','#01949b',' #f17677']
    var dataSource = [
      { value: 50, name: '坚守' },
      { value: 50, name: '逆商' },
      { value: 50, name: '习惯' },
      { value: 30, name: '自信' },
      { value: 10, name: '敏捷' }
    ]
    dataSource = dataSource.map((itm, idx) => {
      return {
        ...itm,
        itemStyle: {
          color: colorList[idx]
        }
      }
    })
    console.log(RCEcharts.echarts)
    let option = {
      title: [
        {
          text: '',
          left: 'center'
        },{
          text: 'S',
          left: 'center',
          top:'center',
          textStyle:{
            color:"#fff",
            fontSize: 36,
            verticalAlign: 'middle',
            lineHeight: 1
          },
          // padding: [32, 38],
          // borderRadius: 100,
          // backgroundColor: "#fff",
          zlevel: 5
        }
      ],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      toolbox: {
        show: false
      },
      angleAxis: {
          interval: 1,
          type: 'category',
          data: dataSource.map(itm => itm.name),
          boundaryGap: false,
          z: 10,
          axisLine: {
              show: true,
              lineStyle: {
                  color: "#cacaca",
                  width: 1,
                  type: "solid"
              },
          },
          axisLabel: {
              interval: 0,
              show: true,
              color: "#cacaca",
              margin: 8,
              fontSize: 12
          },
          axisTick: {
            // alignWithLabel: true
          },
          splitLine: {
            show: true,
            lineStyle: {
                color: "#cacaca",
                width: 1,
                type: "solid"
            }
          }
      },
      radiusAxis: {
        show: false,
        axisAngle: 0,
        // min: 0,
        // max: 1,
        // interval: 20,
        axisLine: {
          show: false,
          lineStyle: {
            color: "#cacaca",
            width: 1,
            type: "solid"
          },
        },
        axisLabel: {
          show: false,
          formatter: '{value}',
          padding: [0, 0, 20, 0],
          color: "#cacaca",
          fontSize: 10
        },
        splitLine: {
          show: false,
          lineStyle: {
              color: "#cacaca",
              width: 1,
              type: "solid"
          }
        }
      },
      polar: {
        center:["50%","50%"]
      },
      series: [
        {
          type: 'bar',
          barCategoryGap: false,
          coordinateSystem: 'polar',//定义坐标系是极坐标
          // renderItem: function(params, api) {
          //   var data = [
          //     [ 50, '坚守' ],
          //     [ 50, '逆商' ],
          //     [ 50, '习惯' ],
          //     [ 30, '自信' ],
          //     [ 10, '敏捷' ]
          //   ]
          //   var colors =  ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b',' #f17677']
          //   console.log(params, api, api.coord([api.value(0), api.value(1)]))
          //   return {
          //     type: 'sector',
          //     shape: {
          //       cx: params.coordSys.cx,//中心x坐标
          //       cy: params.coordSys.cy,//中心y坐标
          //       r0: 0,//内半径
          //       r: api.value(0),//外半径
          //       startAngle: params.dataIndex === 0 ? 0 : (data[params.dataIndex - 1][0]) * Math.PI * 2,//起始角度弧度值
          //       endAngle: (api.value(0)) * Math.PI * 2//终止角度弧度值
          //     },
          //     style: {
          //       fill: colors[params.dataIndex]//填充色
          //     }
          //   }
          // },
          data: dataSource,
          zlevel: 1
        }
      ]
    } 
    domChart.chart.setOption(option)
  }
  render() {
    return (
      <div>
        <button onClick={this.exportdom.bind(this, '#wrapper')}>测试html2canvas</button>
        <div id="wrapper" className="dom-wrapper">
          <h2>生成图片</h2>
          <div id="echartDom" className="echart-dom"></div>
        </div>
        <img src={this.state.imgSrc} alt="img" width="600"/>
      </div>
    )
  }
}
export default Html2canvasChart
/**
  { value: 50, name: '坚守' },
  { value: 50, name: '逆商' },
  { value: 50, name: '习惯' },
  { value: 30, name: '自信' },
  { value: 10, name: '敏捷' },
 */