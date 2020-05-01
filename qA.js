import React from 'react';

import {Image,TouchableOpacity,KeyboardAvoidingView,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';


import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';

export default class qA extends React.Component{
	constructor(props){
		super(props);
		this.fetchQansA()
	}
	 static navigationOptions = {
    headerTitle: 'Questions and Answers',
	 }
	 //{"Question": "\u2022\tWhat is Chronic Kidney Disease (CKD)?"}
	state={
		Q:[],
		A:[]
	}
	
	
	fetchQansA = async () => {
		
			const response = await fetch("https://vkidneym.herokuapp.com/QnA")
			const re = await response.json()
			//re.map(this.QA)
			this.setState({Q:re})
	}
		
		    
		
	render(){
		return(
			<ScrollView>
				<View style={{alignItems: 'center',marginTop:10,}}>
				
						{this.state.Q.map((Qu) => 
							<View style={{alignItems: 'center',marginTop:10,marginBottom:15}}>
								<Text style={{marginLeft:7,marginRight:7,fontSize:20,color: 'red',fontWeight: "bold",textAlign:'justify'}}>{Qu.Question}</Text>
						
								<Text style={{marginLeft:7,marginRight:7,fontSize:19,textAlign:'justify' }}>{Qu.Answer}</Text>
						
						</View>)
						}
					
					
				</View>
			</ScrollView>
		)
	}
}