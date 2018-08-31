import React,{Component} from 'react';
import { View,Text,TouchableOpacity,Image,TextInput, StyleSheet,Button,ImageBackground,Picker,ScrollView } from 'react-native';
import Drawer from 'react-native-drawer';
import{Actions} from 'react-native-router-flux';
import Icon from "react-native-vector-icons/FontAwesome";
import ImagePicker from 'react-native-image-picker';

import * as Constants from '../../Constants';
import DrawerContent from '../../DrawerContent';
import {NavStyles, DrawerStyles} from '../../css/Styles';

class StudentSignup extends Component {
    constructor(props){
        super(props);
        this.state = { 
            drawerOpen:false,
            year:'First',
            course:'BSc IT',
            semister:'First',
            profilePic: require('../../assets/images/profile/placeholder.jpg'),

            errorVisible:0,
            userNameError:"",
            regNoError:"",
            emailError:"",
            passwordError:"",
            passNoMatchError:"",

         }
    }

    toggleDrawer(){
        this.state.drawerOpen?this._drawer.close():this._drawer.open()
    }

    selectProfilePic() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
        };
    
        ImagePicker.showImagePicker(options, (response) => {
            
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            //   var image  = require(response.uri);
           this.setState({
               profilePic: {uri: response.uri},
           })
          }

        });
}

    render() {
        return (
                <Drawer 
                ref={(ref) => this._drawer = ref} 
                type="overlay" 
                side='right' 
                content={< DrawerContent />} 
                open={this.state.drawerOpen} 
                onClose={() => {
                    this.setState({drawerOpen: false,});
                }} 
                tapToClose={true} 
                openDrawerOffset={0.25} // 20% gap on the left side of drawer
                panCloseMask={0} 
                closedDrawerOffset={0} 
                styles={DrawerStyles} 
                tweenHandler={(ratio) => ({
                    main: {
                        opacity: (2 - ratio) / 2
                    }
                })}>
                <Icon.ToolbarAndroid
                        style={{minHeight:50,height:50,backgroundColor:Constants.PRIMARY_COLOR}}
                        title={this.state.NavTitle}
                        titleColor="#f3f3f3"
                        navIconName="arrow-left"
                        /* iconSize={30} */
                        onIconClicked={()=>{Actions.pop()}}
                        actions={[  
                            { title: 'Drawer', iconName: 'bars', iconColor:Constants.BODY_WHITE_COLOR , iconSize: 35, show: 'always' },
                            ]}
                            onActionSelected={()=>{this.toggleDrawer()}}
                        
                    />
                <ScrollView style={Styles.container}>
                    

                    <View style={Styles.topView}>
                        <Text
                            style={{
                            flex: 3,
                            color: '#000',
                            fontSize: 15,
                            fontFamily: 'roboto'
                        }}>Already a Member?</Text>
                        <Button
                            style={Styles.signUpButtonStyle}
                            onPress={() => Actions.push('StudentsLogin')}
                            title={'Sign In'}></Button>
                    </View>

                    <View 
                        style={Styles.topForm}>
                        <ImageBackground source={this.state.profilePic} 
                        style={{borderRadius:5,flex:1,justifyContent:'center',flexDirection:'column',}} >
                            <TouchableOpacity 
                            style={{flex:2,justifyContent:'center',alignContent:'center',flexDirection:'row',marginTop:Constants.DEV_HEIGHT/4.5,}}
                            onPress={this.selectProfilePic.bind(this)}>
                                <Icon name='upload' color={Constants.BODY_WHITE_COLOR} size={15} style={{paddingTop:6}} />
                                <Text style={{
                                 alignSelf:'center',                                 
                                 color:Constants.BODY_WHITE_COLOR,
                                 fontSize:Constants.PRIMARY_FONT_SIZE,
                                 alignContent:'center',
                                 marginLeft:5,
                                 }}>Upload</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                        
                        <View style={{flex:2,}}>

                                <View style={Styles.topFormRight}>
                                    <Text style={{fontSize:18,color:'#040404',flex:1,marginLeft:3}}> Course: </Text>
                                    <Picker 
                                        style={{flex:2.2,}}
                                        selectedValue={this.state.course}
                                        onValueChange={(itemValue, itemIndex) => this.setState({course: itemValue})} >
                                        <Picker.Item style={{fontSize:10}} label='BSc IT' value='BSc Information Technology'/>
                                        <Picker.Item label='BSc BIT' value='BSc Business Information Technology'/> 
                                        <Picker.Item label='BSc Stats' value='BSc Statistics'/>  
                                        <Picker.Item label='BSc Comp Sci.' value='BSc Computer Science'/>
                                        <Picker.Item label='BSc Math Comp' value='BSc Mathematics & Comuter Science'/>
                                        <Picker.Item label='BSc Acturial Sci' value='BSc Acturial Science'/>
                                    </Picker>
                                </View> 

                                <View style={Styles.topFormRight} >
                                    <Text style={{fontSize:18,color:'#040404',flex:1,marginLeft:3}}> Year: </Text>
                                    <Picker 
                                        style={{flex:2.2,}}
                                        selectedValue={this.state.year}
                                        onValueChange={(itemValue, itemIndex) => this.setState({year: itemValue})} >
                                        <Picker.Item label='First' value='First Year'/>
                                        <Picker.Item label='Second' value='Second Year'/>
                                        <Picker.Item label='Third' value='Third Year'/>
                                        <Picker.Item label='Fourth' value='Fourth Year'/>                                    
                                    </Picker>
                                </View>

                                <View style={Styles.topFormRight} >
                                    <Text style={{fontSize:18,color:'#040404',flex:1,marginLeft:3}}> Sem: </Text>
                                    <Picker 
                                        style={{flex:2.2,}}
                                        selectedValue={this.state.semister}
                                        onValueChange={(itemValue, itemIndex) => this.setState({semister: itemValue})} >
                                        <Picker.Item label='First Sem' value='First Semister'/>
                                        <Picker.Item label='Second Sem' value='Second Semister'/>                                   
                                    </Picker>
                                </View>

                                
                                
                        </View>
                        
                        
                    </View>
                    
                        {/* <Text style={{color:'red',fontSize:9,flex:this.state.errorVisible}}>{this.state.userNameError}</Text> */}
                        <View style={{flex:1,flexDirection:'row',minHeight:Constants.DEV_HEIGHT/13.0,height:Constants.DEV_HEIGHT/13.0,justifyContent:'center',alignItems:'center'}} >
                              <Text style={{flex:1.5}} >Full Name:</Text>   
                              <TextInput style={{marginTop:3,flex:5,fontSize:Constants.SECONDARY_FONT_SIZE,color:'#020202'}} placeholder='Your Full Name' ></TextInput>
                        </View>
                        {/* <Text style={{color:'red',fontSize:9,flex:this.state.errorVisible}}>{this.state.regNoError}</Text> */}
                        <View style={{flex:1,flexDirection:'row',minHeight:Constants.DEV_HEIGHT/13.0,height:Constants.DEV_HEIGHT/13.0,justifyContent:'center',alignItems:'center'}} >
                              <Text style={{flex:1.5}} >Reg No.:</Text>   
                              <TextInput style={{marginTop:3,flex:5,fontSize:Constants.SECONDARY_FONT_SIZE,color:'#020202'}} placeholder='Your Full Name' ></TextInput>
                        </View>
                        {/* <Text style={{color:'red',fontSize:9,flex:this.state.errorVisible}}>{this.state.emailError}</Text> */}
                        <View style={{flex:1,flexDirection:'row',minHeight:Constants.DEV_HEIGHT/13.0,height:Constants.DEV_HEIGHT/13.0,justifyContent:'center',alignItems:'center'}} >
                              <Text style={{flex:1.5}} >Email:</Text>   
                              <TextInput style={{marginTop:3,flex:5,fontSize:Constants.SECONDARY_FONT_SIZE,color:'#020202'}} placeholder='Your Full Name' ></TextInput>
                        </View>
                        {/* <Text style={{color:'red',fontSize:9,flex:this.state.errorVisible}}>{this.state.passwordError}</Text> */}
                        <View style={{flex:1,flexDirection:'row',minHeight:Constants.DEV_HEIGHT/13.0,height:Constants.DEV_HEIGHT/13.0,justifyContent:'center',alignItems:'center'}} >
                              <Text style={{flex:1.5}} >Password:</Text>   
                              <TextInput style={{marginTop:3,flex:5,fontSize:Constants.SECONDARY_FONT_SIZE,color:'#020202'}} placeholder='Your Full Name' ></TextInput>
                        </View>
                        {/* <Text style={{color:'red',fontSize:9,flex:this.state.errorVisible}}>{this.state.passNoMatchError}</Text> */}
                        <View style={{flex:1,flexDirection:'row',minHeight:Constants.DEV_HEIGHT/13.0,height:Constants.DEV_HEIGHT/13.0,justifyContent:'center',alignItems:'center'}} >
                              <Text style={{flex:1.5}} >Confirm Password:</Text>   
                              <TextInput style={{marginTop:3,flex:5,fontSize:Constants.SECONDARY_FONT_SIZE,color:'#020202'}} placeholder='Your Full Name' ></TextInput>
                        </View>
                    
                    

                    <View
                        style={{
                        flex: 1.2,
                        padding: 5,
                        paddingTop: 10
                    }}>
                        <Button
                            style={{flex:1}}
                            onPress={() => {
                            alert(Constants.DEV_WIDTH);
                        }}
                            title={'Sign Up'}></Button>
                    </View>
                </ScrollView>
                    
                
            </Drawer>
        );
    }
}

const Styles = StyleSheet.create({
   container:{
       flex:1,
   },
   topView: {
    flex: 1,
    padding: 5,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    borderBottomColor: 'white',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOpacity: .8,
    elevation: 5,
    shadowOffset: {
        width: 0,
        height: 5
    }
    },
    topForm:{
        flex:4,
        marginTop:10,
        marginBottom:5,
        flexDirection:'row',
        borderBottomColor: 'white',
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOpacity: .8,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 5
        },
        maxHeight:Constants.DEV_HEIGHT/3.7,
        minHeight:Constants.DEV_HEIGHT/3.7,
    },
    bottomForm:{
        flex:6,
        flexDirection:"column",
        borderWidth:2,
        zIndex:100,
    },
    topFormRight:{
        flexDirection:'row',
        marginBottom:5,
        paddingBottom:10,
        borderRadius:10,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        minHeight:Constants.DEV_HEIGHT/13.0,
        height:Constants.DEV_HEIGHT/13.0,
        borderBottomColor: 'white',
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOpacity: .8,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 5
        }
    }

});

export default StudentSignup;