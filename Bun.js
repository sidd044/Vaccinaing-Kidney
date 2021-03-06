import React from 'react';
import {Image,Dimensions,TouchableOpacity,KeyboardAvoidingView,Modal,TouchableWithoutFeedback,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';

const styles=
	 StyleSheet.create({
		 container:{
			 flex:1,
			 marginLeft:10,
			 marginTop:20,
			 marginRight:10,
		 },
		 button:{
			 width: Dimensions.get('window').width/2.3,
			height: Dimensions.get('window').height/7,
			borderWidth:0.4,	
			justifyContent: 'center',
			alignItems: 'center',
		},
		 header:{
			fontWeight:'bold',
			fontSize:20,
			marginBottom:10,
			textAlign:'center',
			marginTop:5
		 },
		text:{
	
			fontSize:15,
			
			textAlign:'justify',
			marginBottom:20,
			marginLeft:16,marginRight:16,
		},
		scrollView:{
			flex:1,
			paddingRight:15,
			paddingLeft:10,
			
		},
		input:{
		marginTop:5,
		borderColor: 'black',
		borderLeftWidth:2,
		borderRightWidth:2,
		borderTopWidth:2,
		borderBottomWidth: 2,
		width:200,
		height:45,
		fontSize:16,
		paddingLeft:10,
		alignSelf:'center',
		},
		menu:{
			fontSize:20,
			borderBottomWidth:1,	
		}
	 })

const Viral = (props) => {	
	return(
		<ScrollView style={styles.scrollView}>
			<Text style={styles.header}>Viral markers</Text>
			<View>
				<Image  style={{width: 330,height: 230,resizeMode: 'contain',marginBottom:10}}  source={require('./assets/test-tubes-155769-640_orig.png')} />
			</View>
			<Text style={styles.text}>Viral markers are indicators of status of few dangerous viruses in your body, they are, hepatitis B, hepatitis C and Human Immunodeficiency Virus (HIV). The presence of these viruses calls for need of separate dialysis station; at least for hepatitis B and HIV. The downside is that these viruses are contagious and hence their transmission should be strictly avoided. They can get transmitted if proper precautions are not taken by the dialysis care team. </Text>
			<Text style={styles.text}>The positive side is that one i.e. Hepatitis B out of these 3 infections can be prevented through vaccination. Your dialysis care team can provide you a schedule for this vaccination. After completion of the first course of vaccination, it is vital to test whether the vaccine is potent in producing the desired protective effect. This testing is done through a blood test named <Text style={{fontWeight:'bold'}}>Antibody to hepatitis B surface antigen (anti‑HBs).</Text></Text>
			<Text style={{textAlign:'center',fontSize:19,marginBottom:10}}>Check your status</Text>
			<TextInput style={styles.input}  placeholder="Anti-Hbs in mIU/ml" value={props.viral}  keyboardType="numeric" maxLength={4} onChangeText = {props.viralCal}/>
			<Text style={{alignSelf:'center',marginTop:5,color:'red',marginBottom:20}}>{props.viralResult}</Text>
		</ScrollView>
	)
}
const Dialysis  = (props) => {
	return(
		<ScrollView style={styles.scrollView}>
			<Text style={styles.header}>Dialysis adequacy</Text>
			<View style={{width:10}} width={10}>
				<Image style={{width: 380,height: 240,resizeMode: 'contain'}} source={require('./assets/p-w-wmn92520-anemia-facts-lg.jpg')} />
			</View>
			<Text style={styles.text}>Dialysis Adequacy measures the effectiveness of your dialysis treatments. It is important to receive enough dialysis to feel well and minimize the side effects of kidney failure. Dialysis adequacy can be measured in a number of ways: </Text>
			
			<View style={{marginLeft:10}}>
				<Text >• How well you feel</Text>
				<Text >• How much excess fluid you may have</Text>
				<Text >• How well your blood pressure is controlled</Text>
				<Text >• Results of certain lab values (discussed below)</Text>
			</View>
			
			<View  style={{marginTop:10}}>
				<Text style={styles.header}>BUN (Blood Urea Nitrogen)</Text>
				<Text style={styles.text}>The BUN is a measurement of waste products in the blood. Normal range for a person with kidney failure varies according to an individuals protein intake. Your values may range from 20-80 mg/dl when the labs are drawn prior to your dialysis treatment. This lab measurement is used in the adequacy calculations listed below.</Text>
			</View>
			
			<View  style={{marginTop:10}}>
				<Text style={styles.header}>URR (Urea Reduction Ratio)</Text>
				<Text style={styles.text}>URR is calculated from BUN levels, one drawn before and one drawn after your dialysis treatment. The URR is generally measured once per month. If you are dialyzing well, your URR should be at least 65%</Text>			
			</View>
			<Text style={{textAlign:'center',fontSize:19,marginBottom:10}}>Check your status</Text>
			<TextInput style={styles.input}  placeholder="Urea Post HD  in mg/dl" value={props.viral}  keyboardType="numeric" maxLength={4} onChangeText = {props.post}/>
				<TextInput style={styles.input}  placeholder="Urea Pre HD in mg/dl " value={props.viral}  keyboardType="numeric" maxLength={4} onChangeText = {props.resultDialysis}/>
			<Text style={{alignSelf:'center',marginTop:10,color:'red'}}>URR : {props.result}</Text>
			
			<View style={{marginBottom:10}}>
				<Text style={styles.text}>Another way to measure the effectiveness of your dialysis treatments is Kt/v. It is calculated using a number of values including your weight, URR, the dialyzer clearance, and dialysis time. If you are dialyzing well your Kt/v should be at least 1.2.</Text>
				<Text style={styles.text}>Your URR and Kt/v will be checked monthly or more often if indicated by low levels, unstable levels, or changes in your condition.</Text>
				<Text style={styles.text}>Dialysis adequacy may be affected by:</Text>
					<View style={{marginLeft:10}}>
						<Text >•	The length of your physician ordered dialysis treatment.</Text>
							<Text style={{marginLeft:10}}>o	It is important to dialyze for the prescribed time.  </Text>
						
						<Text style={{marginTop:10}}>•	The frequency of your dialysis treatments.</Text>
							<Text style={{marginLeft:10}}>o It is important not to miss any treatments.</Text>
							
						<Text style={{marginTop:10}}>•	How well your access works.</Text>
							<Text style={{marginLeft:10}}>o Foundations of mining non-structured medical data.</Text>
							
						<Text style={{marginTop:10}}>•How much fluid you gain between treatments.</Text>
							<Text style={{marginLeft:10}}>o Gaining a large amount of fluid between treatments will make your dialysis treatment less effective and ultimately weaken your heart. It is important to follow your fluid guidelines.</Text>						
					</View>
				
			</View>
		</ScrollView>
	)
}
const Anemia = (props) => {
	return(
		<ScrollView style={styles.scrollView}>
			<Text style={styles.header}>Anemia</Text>
			<View style={{width:100}} width={100}>
				<Image  style={{width: 375,height: 200,resizeMode: 'contain'}}resizeMode="stretch" source={require('./assets/318096_2200-1200x628.jpg')} />
			</View>
				<Text style={styles.header}>Hemoglobin</Text>
			<Text style={styles.text}>In normal individuals, a hormone named erythropoietin is made by the kidneys. This hormone stimulates bones to make Red Blood Cells (RBCs). When kidneys fail, they can no longer make erythropoietin and due to this the level of haemoglobin drops. Hence, in kidney patients this hormone is administered in artificial form through injections. They are known as erythropoietin injections.</Text>
			<Text style={styles.text}>It is ideally important to measure haemoglobin every month or more frequently if the level is dangerously low. Low levels of hemoglobin can lead to fatigue, shortness of breath, rapid heart rate, etc. The ideal level for your hemoglobin in dialysis patients should be around 11-11.5 g/dl. Several researches have demonstrated that levels above 13 g/dl may be harmful to patients on dialysis.</Text>
			<Text style={{textAlign:'center',fontSize:19,marginBottom:10}}>Check your status</Text>
			<TextInput style={styles.input}  placeholder="Hemoglobin in g/dl" value={props.viral}  keyboardType="numeric" maxLength={4} onChangeText = {props.calculateAnemia}/>
			<Text style={{alignSelf:'center',marginTop:10,color:'red'}}> {props.result}</Text>
			
			<Text style={styles.header}>Iron Saturation and Ferritin</Text>
			<Text style={styles.text}>These tests are a part of iron study. Our body requires iron to make red blood cells. Patients  undergoing hemodialysis may have low iron levels which can lead to anemia.</Text>
			<Text style={styles.text}>Your iron levels will be monitored every 3 months. Ideally, the iron saturation should be greater than 20 % and ferritin should be between 100-500 ng/ml.</Text>
			<Text style={styles.text}>If the levels of these are low, you will be advised to take iron injections. These injections are usually administered through intravenous route during the dialysis treatment itself. </Text>
		</ScrollView>
	)
} 

const Nutritional = (props) => {
	return(
		<ScrollView style={styles.scrollView}>
		
			<Text style={styles.header}>Nutritional markers</Text>
			<View style={{width:10}} width={10}>
				<Image  style={{width: 380,height: 220,resizeMode: 'contain'}} resizeMode="stretch" source={require('./assets/N.jpg')} />
			</View>
			<Text style={styles.header}>Albumin </Text>
			<Text style={styles.text}>Albumin is a complex protein made from the foods you eat each day. People on dialysis may have a low albumin level due to poor appetite or low protein food choices.   Albumin levels may also be low due to infections or inflammation.  A low level of albumin may lead to health problems such as difficulty in fighting off infections.</Text>
			<Text style={styles.text}>Your albumin level will be monitored monthly. The ideal level is greater than 4 g/dL. If your level is less than 4, your dietitian will talk with you to identify ways to increase the amount of protein in your diet.</Text>
			<Text style={{textAlign:'center',fontSize:19,marginBottom:10}}>Check your status</Text>
			<TextInput style={styles.input}  placeholder="Albumin in g/dl" value={props.viral}  keyboardType="numeric" maxLength={4} onChangeText = {props.calculateNutritionalA}/>
			<Text style={{alignSelf:'center',marginTop:10,color:'red'}}> {props.resultNutritionalA}</Text>
		
			<Text style={styles.header}>Potassium </Text>
			
			<Text style={styles.text}>Albumin is a complex protein made from the foods you eat each day. People on dialysis may have a low albumin level due to poor appetite or low protein food choices.   Albumin levels may also be low due to infections or inflammation.  A low level of albumin may lead to health problems such as difficulty in fighting off infections.</Text>
			<Text style={styles.text}>Your albumin level will be monitored monthly. The ideal level is greater than 4 g/dL. If your level is less than 4, your dietitian will talk with you to identify ways to increase the amount of protein in your diet.</Text>
			<Text style={{textAlign:'center',fontSize:19,marginBottom:10}}>Check your status</Text>
			<TextInput style={styles.input}  placeholder="Potassium in mEq/L" value={props.viral}  keyboardType="numeric" maxLength={4} onChangeText = {props.calculateNutritionalB}/>
			<Text style={{alignSelf:'center',marginTop:10,color:'red',marginBottom:20}}> {props.resultNutritionalB}</Text>
		</ScrollView>
	)
}
const Bone = (props) => {
	return(
		<ScrollView style={styles.scrollView}>
			<Text style={styles.header}>Bone and mineral markers</Text>
			<View>
				<Image style={{width: 380,height: 200,resizeMode: 'contain'}} resizeMode="stretch" source={require('./assets/bone_test.jpg')} />
			</View>
			<Text style={styles.text}>Healthy kidneys help in maintaining calcium and phosphorus balance in the body. When kidneys fail, there arises an imbalance in calcium and phosphorus metabolism due to which phosphorus level rises and calcium level begins to drop in blood. This may lead to weakened bones and in some cases, hardening of arteries and veins (due to calcium and phosphorus deposition). </Text>
			<Text style={styles.text}>Additionally, kidneys work in close coordination with parathyroid glands and intestines to maintain balance in calcium and phosphorus levels. Kidneys are responsible for converting vitamin D in its active form, this active form of vitamin D helps in absorbing calcium from intestines. This calcium is then taken up by the bones. In the absence of active vitamin D, bones remain weak due to unavailability of calcium. Also, weakened kidneys cannot flush out excessive phosphorus from body due to which its level rises which in turn stimulates parathyroid gland to secrete parathyroid hormone (PTH). This PTH in turn stimulates kidneys to convert vitamin D into its active form. Unavailability of active vitamin D worsens the calcium – phosphorus metabolism leading to mineral bone disease (MBD). </Text>
			<Text style={styles.text}>MBD can be manifested as weak bones, enlarged parathyroid glands, calcification (hardening) of arteries and veins. In order to avoid these complications several medical strategies need to be employed like:</Text>
			<Text style={styles.text}>The lab values associated with bone and mineral metabolism are phosphorus, calcium, and PTH and vitamin D. Calcium and Phosphorus levels should be monitored monthly while PTH and highly deranged. The ideal range for Calcium is 8-10mg/dl and that for phosphorus is 3-5mg/dl. The ideal range for PTH is 150-600pg/ml and that for vitamin D is >25ng/ml.</Text>
			
			<View style={{marginLeft:10,paddingTop:10,marginBottom:10}}>
				<Text style={styles.text} >•	Phosphate binders: These are pills that need to be taken with food so that they can bind with the phosphorus coming from food and eliminate it through stool.</Text>
				<Text style={styles.text}>• Dietary phosphate restriction: Limiting the amount of phosphorus in your diet by eliminating foods with additives, nuts, whole cereals, etc.</Text>
				<Text style={styles.text}>• Vitamin D supplementation: Vitamin D supplements are medicines which are extremely vital to avoid bone mineral disorder.</Text>
			</View>
		
		</ScrollView>
	)
}

export default class BUN extends React.Component {
	 static navigationOptions = ({ navigation, screenProps }) => ({
		headerTitle:"Lab values interpretation",	
	 })
	 constructor(props){
		 super(props);
		 this.state = {
			 uPost:'',
			 uPre:'',
			 result:'',
			 modalVisibleViral:false,
			 viral:0.0,
			 viralResult:'',
			 mode:'',
			 resultNutritionalA:'',
			 anemia:'',
			 resultNutritionalB:'',
		 }
	}
		 calculate = (uPre) => {
			this.setState({uPre})
			const sum = Number(100 * ( 1 - (this.state.uPost / uPre))).toFixed(2)
			 if(sum<65){this.setState({result:`${sum}% ,This value indicates Inadequate dialysis`})}
			 else{this.setState({result:`${sum}% ,This value indicates Adequate dialysis`})}
		 }
		 calculate2 = (uPost) => {
			this.setState({uPost})
			const sum = Number(100 * ( 1 - (uPost / this.state.uPre))).toFixed(2)
			 if(sum<65){this.setState({result:`${sum}% ,This value indicates Inadequate dialysis`})}
			 else{this.setState({result:`${sum}% ,This value indicates Adequate dialysis`})}
			
		 }
	 viralCal = (v) => {
		 v=parseInt(v)
		if(v == 0){
			this.setState({viralResult:'Revaccination'})
		}
		else if(v>=1 && v<10){this.setState({viralResult:'Booster dose'})}
		else if (v>=10){this.setState({viralResult:'Repeat antibody test after 1 year'})}
		 else{this.setState({viralResult:''})}
	}
	calculateAnemia = (v)  =>{
			if(v>=1 && v<=4.9){this.setState({anemia:'Life threatening anemia, you need to consult your doctor who may advise you to do further blood tests and if considered critical, you may be advised blood transfusion.'})}
			else if(v>4.9 && v<=6.9){this.setState({anemia:'Severely anemic, you need to consult your doctor who may advise you to do further blood tests and revise your medical prescription for erythropoietin, iron and vitamin injections.'})}
			else if(v>6.9 && v<=8.9){this.setState({anemia:'Moderately anemic, you need to consult your doctor who may advise you to do further blood tests and revise your medical prescription for erythropoietin, iron and vitamin injections.'})}
			else if(v>8.9 && v<=10.9){this.setState({anemia:'Mildly anemic, you need to consult your doctor who may advise you to do further blood tests and revise your medical prescription for erythropoietin, iron and vitamin injections.'})}
			else if(v>10.9 && v<=11.9){this.setState({anemia:'Normal, your doctor will suggest you a schedule of erythropoietin, iron and vitamin injections to maintain your haemoglobin in this range'})}
			else if(v>11.9 && v<=18){this.setState({anemia:'High, your doctor will taper down your erythropoietin and iron injections.'})}
			else{this.setState({anemia:''})}
	}
	calculateNutritional = (v) => {
		v= parseInt(v)
		if(v>=4 && v<=6){this.setState({resultNutritionalA:'Optimal'})}
		else if(v>=3.5 && v<4){this.setState({resultNutritionalA:'Mildly low, you need to visit your Renal Dietician inorder who can review your food intake in order to give you extra proteins and calories. '})}
		else if(v>=3 && v<3.4){this.setState({resultNutritionalA:'Moderately low, you need to visit your Renal Dietician who can review your food intake in order to give you extra proteins and calories. Your Dietician may choose to give you artificial protein supplementation if you are unable to maintain optimal protein intake from food.'})}
		else if(v>=1 && v<3){this.setState({resultNutritionalA:'Severely low, you need to visit your Renal Dietician who can review your food intake in order to give you extra proteins and calories. Your Dietician may choose to give you artificial protein supplementation if you are unable to maintain optimal protein intake from food.'})}
		else if(v>6){this.setState({resultNutritionalA:'Invalid number'})}
		else{this.setState({resultNutritionalA:""})}
	}
	calculatePotassium = (v) => {
		v = parseInt(v)
		if(v<=3.5){this.setState({resultNutritionalB:'Low, you need to have a high potassium diet, consult your Renal Dietician for the same.'})}
		else if(v>3.5 && v<= 5.5 ){this.setState({resultNutritionalB:'Normal, you need to have a moderate potassium diet.'})}
		else if(v>5.5  &&  v<= 6.0){this.setState({resultNutritionalB:'High, you need to limit potassium in your diet, consult your Renal Dietician for the same.'})}
		else if(v >6 && v<= 6.9){this.setState({resultNutritionalB:'Caution, you need to limit potassium in your diet, consult your Renal Dietician for the same'})}
		else if(v > 7){this.setState({resultNutritionalB:'Alarming, you need to limit potassium in your diet, consult your Renal Dietician for the same'})}
		else{this.setState({resultNutritionalB:''})}
	}
	render(){
		return(
			<View style={styles.container}>
				<ScrollView>
				<View>
					<Text style={{fontWeight:'bold',fontSize:17,marginLeft:14}}>How to interpret your lab values?</Text>
					<Text style={styles.text}>When on dialysis, you will need to undergo regular blood investigations in order to keep your health in a good state. Your values/figures help your doctor decide 
						your treatment regime. Herewith
						embedded is a list of few routinely performed lab tests, their normal ranges, what do the deviations from normal ranges mean and what should
						you do to optimise your health.
					</Text>
				</View>
				
				<View style={{marginTop:20,flexDirection:'row',marginLeft:4}}>	
				
					<TouchableWithoutFeedback  onPress={() => this.setState({modalVisibleViral:true,mode:'Viral'})} >
					<View style={{backgroundColor:'#F44336'}}>
						<View style={styles.button}>
							<Text style={{fontSize:16,color:'white'}}>Viral markers</Text>
						</View>
					</View>
					</TouchableWithoutFeedback>
					<View style={{marginLeft:22}}>
						<TouchableWithoutFeedback onPress={() => this.setState({modalVisibleViral:true,mode:'Dialysis'})}>
							<View style={{backgroundColor:'#00BCD4'}}>
							<View style={styles.button}>
								<Text style={{fontSize:16,color:'white'}}>Dialysis adequacy</Text>
							</View>
							</View>
						</TouchableWithoutFeedback>
					</View>
					</View>
					<View style={{marginTop:20,flexDirection:'row',marginLeft:4}}>	
					<TouchableWithoutFeedback onPress={() => this.setState({modalVisibleViral:true,mode:'Anemia'})} >
							<View style={{backgroundColor:'#2196F3'}}>
						<View style={styles.button}>
							<Text style={{fontSize:16,color:'white'}}>Anemia</Text>
						</View>
						</View>
					</TouchableWithoutFeedback>
						<View style={{marginLeft:22,backgroundColor:'#CDDC39'}}>
						<TouchableWithoutFeedback onPress={() => this.setState({modalVisibleViral:true,mode:'Nutritional'})}>
							
							<View style={styles.button}>
								<Text style={{fontSize:16,color:'white'}}>Nutritional markers</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</View>
				<View style={{marginTop:20,marginRight:10}}>
				<TouchableWithoutFeedback onPress={() => this.setState({modalVisibleViral:true,mode:'Bone'})} >
						<View  style={{backgroundColor:"#706292",marginLeft:4,borderWidth:0.4,width:Dimensions.get('window').width/1.08,height: Dimensions.get('window').height/7,justifyContent: 'center',}}>
							<Text style={{fontSize:16,marginLeft:10,color:'white',textAlign:'center'}}>Bone and mineral markers</Text>
							
						</View>
					</TouchableWithoutFeedback>
				</View>
				
				<Modal visible={this.state.modalVisibleViral}  animationType="slide" onRequestClose={() => this.setState({modalVisibleViral:false})}>
					<View style={{flex:1}}>
					
						<View style={{flex:1}}>
						{this.state.mode == 'Viral' ?
						
							<Viral  viral={this.state.viral} viralCal = {(v) => this.viralCal(v)}  viralResult={this.state.viralResult}/>
						:
							null
						}
						
						{this.state.mode == 'Dialysis' ?
							<Dialysis  viral={this.state.viral} post = {(v) => this.calculate2(v)} result={this.state.result} resultDialysis={(v) => this.calculate(v)}/>
						:
						null
						}
						
					{this.state.mode == 'Anemia' ?
							<Anemia  viral={this.state.viral}  result={this.state.anemia} calculateAnemia={(v) => this.calculateAnemia(v)}/>
						:
						null
						}
						{this.state.mode == 'Nutritional' ?
							<Nutritional viral={this.state.viral} resultNutritionalA={this.state.resultNutritionalA} resultNutritionalB={this.state.resultNutritionalB} 
							calculateNutritionalA={(v) => this.calculateNutritional(v)}  
							calculateNutritionalB={(v) => this.calculatePotassium(v)} />
						:
						null
						}
						{this.state.mode == 'Bone' ?
							<Bone  />
						:
						null
						}
						</View>
						</View>
				</Modal>
				</ScrollView>
			</View>	
		)
	}
}
