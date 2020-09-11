import React from 'react'
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux'
// import Form_Tu_van from './component/Form_Tu_van'
import Core from './screens/Core'
import Form_Tu_Van from './component/Form_Tu_Van'
import Js from './screens/Js'
import Spring from './screens/Spring'
import Web from './screens/Web'
// import Js from './screens/Js'

// import { Actions } from 'react-native-router-flux';


const Routes = () => (
   <Router>
      {/* <Scene key = "root">
         <Scene key = "Form_Tu_van" component = {Form_Tu_Van} title = "Home" />
         <Scene key = "Core" component = {Core} title = "Core" />
      </Scene> */}
      <Scene
              key="mediaContainerScreen"
              panHandlers={null}
              hideNavBar
            >
 <Tabs
                    key="mediaContainerTabs"
                    swipeEnabled
                    showLabel={true}
                    tabBarPosition='top'
                    tabBarStyle={{ backgroundColor: Colors.navBar }}
                    labelStyle={{ color: Colors.primaryColor }}
                    indicatorStyle={{ backgroundColor: Colors.primaryColor }}
                    activeBackgroundColor="white"
                    lazy
                    >
      {/* <Scene
        key="root"
        tabs
        tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        labelStyle={{ fontSize: 16, marginBottom: 15 }}
      > */}
        {/* Tab 'Ichi' và các màn hình của nó */}
        <Scene key="Core" tabBarLabel="Core">
          <Scene
            key="Form_Tu_Van"
            component={Form_Tu_Van}
            title="form"
          />
          <Scene
            key="Core"
            component={Core}
            title="Core"
          />
        </Scene>
        {/* Tab 'Ni' và các màn hình của nó */}
        <Scene key="Js" tabBarLabel="Js">
          {/* <Scene
            key="magenta"
            component={MagentaScreen}
            title="Magenta"
          />
          <Scene
            key="green"
            component={GreenScreen}
            title="Green"
          /> */}
        </Scene>
        {/* Tab 'San' và các màn hình của nó */}
        <Scene key="Spring" tabBarLabel="Spring">
          {/* <Scene
            key="violet"
            component={VioletScreen}
            title="Violet"
          />
          <Scene
            key="Web"
            component={YellowScreen}
            title="Web"
          /> */}
        </Scene>
        <Screen key="Web" tabBarLabel="Web">
           
        </Screen>
        </Tabs>
        </Scene>
   </Router>
)
export default Routes