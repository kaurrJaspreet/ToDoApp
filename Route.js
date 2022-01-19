
///Orignal Project

import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';
import Splash from "./src/screens/Splash";
import HomeScreen from "./src/screens/Home";
import AddNote from "./src/screens/AddNote";



const Project = createStackNavigator({
  // const Project = FluidNavigator({
    
    Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false     // this will do your task
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false     // this will do your task
    }
  },
  AddNote: {
    screen: AddNote,
    navigationOptions: {
      headerShown: false     // this will do your task
    }
  },
  
  
  
});
export default createAppContainer(Project);