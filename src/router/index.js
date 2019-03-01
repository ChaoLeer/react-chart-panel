import App from '../layouts/App.js'
import Html2canvasChart from '../charts/echarts/Export.js'
const routeConfig = [
  { path: '/',
    component: App,
    // indexRoute: { component: Html2canvasChart },
    childRoutes: [
      { path: 'h2c', component: Html2canvasChart },
      // { path: 'drag',
      //   component: Inbox,
      //   childRoutes: [
      //     { path: '/messages/:id', component: Message },
      //     { path: 'messages/:id',
      //       onEnter: function (nextState, replaceState) {
      //         replaceState(null, '/messages/' + nextState.params.id)
      //       }
      //     }
      //   ]
      // }
    ]
  }
]
export default routeConfig