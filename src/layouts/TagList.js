import React, { Component } from 'react'
import { Icon, Tag } from 'antd';
class TagList extends Component {
  state = {
    list: [{
      icon: 'pie-chart',
      checked: true,
      label: '饼图'
    }, {
      checked: false,
      label: '柱形图'
    }, {
      checked: false,
      label: '折线图'
    }]
  };

  handleChange = (idx, item, e) => {
    let {list} = this.state
    if (item.checked) {
      return
    } else {
      list = list.map((l,i) => {
        return {
          ...l,
          checked: i === idx
        }
      })
    }
    this.setState({
      list
    })
  }
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