import React, { Component } from 'react';
import './App.css';
import CHeader from  './Header';
import CpTagList from './TagList';
import { Layout } from 'antd';
import * as ChartList from '../charts'
const { Sider, Content } = Layout;

const RenderChart = (chart) => {
  console.log(chart, ChartList.default.Basebar)
  let Basebar = ChartList.default.Basebar
  return (
    <Basebar/>
  )
}
class App extends Component {
  state = {
    checked: true,
    chartList: ['n', 'b', 'c']
  };

  changeChart = (item) => {
    console.log('测试', item)
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
            {this.state.chartList.map((chart, idx) => (
              // this.renderChart.bind(this, chart)
              <RenderChart chart={chart} key={chart + idx}></RenderChart>
            ))}
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
