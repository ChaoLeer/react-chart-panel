import React, { Component } from 'react'
import { Icon, Tag } from 'antd';

class TagList extends Component {
  state = {
    list: [{
      icon: 'pie-chart',
      checked: false,
      label: '饼图'
    }, {
      checked: false,
      label: '柱形图'
    }, {
      checked: false,
      label: '折线图'
    }]
  };
  /**
   * 点击tag 执行动作
   */
  handleChange = (idx, item, e) => {
    let vm = this
    let {list} = vm.state
    let checkItm = null
    console.log(this.props)
    if (item.checked) {
      return
    } else {
      list = list.map((l,i) => {
        i === idx && (checkItm = l)
        return {
          ...l,
          checked: i === idx
        }
      })
      // 更新图表
      vm.props.changeChart(checkItm)
    }
    vm.setState({
      list
    })
  }
  // changeChart = (item) => {
  //   console.log('测试', item)
  // }
  // onClick={e => this.handleChange(idx, item, e)}>

  render() {
    return (<div className="app-aside__taglist">
      {this.state.list.map((item, idx) => {
        return <Tag key={item.label + idx}
          color={item.checked ? '#2db7f5' : '#108ee9'}
          onClick={this.handleChange.bind(this, idx, item)}>
          <Icon type={item.icon || 'area-chart'}/>
          &nbsp;
          {item.label}
        </Tag>                                                                                                                                                                                              
      })}
    </div>)
  }
}
export default TagList;