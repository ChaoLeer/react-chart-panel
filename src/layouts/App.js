import React, { Component } from 'react';
import './App.css';
import CHeader from  './Header';
import CpTagList from './TagList';
import { Layout } from 'antd';
import * as ChartList from '../charts';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Html2canvasChart from '../charts/echarts/Export.js'
const { Sider, Content } = Layout;


class App extends Component {
  state = {
    checked: true,
    chartList: [
      {i: 'a', x: 0, y: 0, w: 6, h: 3},
      {i: 'b', x: 6, y: 0, w: 6, h: 6},
      {i: 'c', x: 0, y: 6, w: 6, h: 6}
    ]
  };

  changeChart = (item) => {
    console.log('测试', item)
  }
  creatChart = (chart) => {
    console.log(chart, ChartList.default.Basebar)
    let Basebar = ChartList.default.Basebar
    return (
      <div key={chart['i']} data-grid={chart}>{chart.h * 30}
        <Basebar height={chart.h * 30} width={chart.w * 100}/>
      </div>
    )
  }
  layoutChange = () => {
    console.log('layout change')
    let eventResize = new Event('resize')
    window.dispatchEvent(eventResize)
  }
  layoutResizeStop = (nextChartList) => {
    console.log('layout resize stop', nextChartList)
    let eventResize = new Event('resize')
    window.dispatchEvent(eventResize)
    this.setState({
      chartList: [...nextChartList]
    })
  }
  render() {
    return (
      <Layout className="app">
        <CHeader/>
        <Layout className="app-main">
          <Sider className="app-aside">
            <CpTagList changeChart={this.changeChart.bind(this)}/>
          </Sider>
          <Content
          >
            <Html2canvasChart/>
            <GridLayout 
              onLayoutChange={this.layoutChange.bind(this)}
              onResizeStop={this.layoutResizeStop.bind(this)}
              className="grid-layout layout"
              rowHeight={30} width={1200} margin={[0, 0]}>
              {
                /* <div className="grid-layout__item" key="a">a</div>
                <div className="grid-layout__item" key="b">b</div>
                <div className="react-resizable grid-layout__item" key="c">c</div> */
              }
              {this.state.chartList.map((chart, idx) => this.creatChart(chart))}
            </GridLayout>
          </Content>
        </Layout>
      </Layout>
    );
  }
}



// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

// class App extends Component {
//   state = {
//     current: 'mail',
//   }

//   handleClick = (e) => {
//     console.log('click ', e);
//     this.setState({
//       current: e.key,
//     });
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="app-main">
//           <Header></Header>
//           <Menu
//             onClick={this.handleClick}
//             selectedKeys={[this.state.current]}
//             mode="horizontal"
//           >
//             <Menu.Item key="mail">
//               <Icon type="mail" />Navigation One
//             </Menu.Item>
//             <Menu.Item key="app" disabled>
//               <Icon type="appstore" />Navigation Two
//             </Menu.Item>
//             <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
//               <MenuItemGroup title="Item 1">
//                 <Menu.Item key="setting:1">Option 1</Menu.Item>
//                 <Menu.Item key="setting:2">Option 2</Menu.Item>
//               </MenuItemGroup>
//               <MenuItemGroup title="Item 2">
//                 <Menu.Item key="setting:3">Option 3</Menu.Item>
//                 <Menu.Item key="setting:4">Option 4</Menu.Item>
//               </MenuItemGroup>
//             </SubMenu>
//             <Menu.Item key="alipay">
//               <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
//             </Menu.Item>
//           </Menu>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
