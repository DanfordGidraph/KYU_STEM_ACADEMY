import React, {Component} from 'react';
import{View, Text, Image, Button, TouchableOpacity, StyleSheet,TouchableNativeFeedback,ImageBackground} from 'react-native';

import * as Constants from './Constants';

class DrawerContent extends Component {
    render() {
        return (
            <View style={{flex:1, backgroundColor:'white',flex:1,flexDirection:'column'}}>

                <ImageBackground 
                    source={require('./assets/images/drawer/drawer_top.png')}
                    style={{flex:3,borderWidth:1,}}>
                </ImageBackground>

                <View style={Styles.textView}>
                    <Text style={{flex:3,fontSize:15,justifyContent:'center', alignItems:'center',paddingTop:8,color:'#000',}}>
                    CT100/G/0274/14
                    </Text>
                    <TouchableOpacity  onPress={()=>{alert('Loging Out')}}  style={{flex:2, backgroundColor:Constants.ACCENT_COLOR,alignItems:'center',paddingTop:5,borderColor:'white',margin:5,borderWidth:1.5,borderRadius:5,}}>
                    <Text style={{flex:1,color:'white',fontSize:15,justifyContent:'center'}} >Log Out</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.textView}>
                    <Image source={require('./assets/images/drawer/theme.png')} style={{flex:2,maxHeight:40,maxWidth:40,}}/>
                    <Text style={{flex:4,alignSelf:'center',justifyContent:'center',alignContent:'center',fontSize:18,marginLeft:15}} >Theme</Text>
                    <TouchableOpacity  onPress={()=>{alert('Light Theme')}}  style={{flex:2,paddingRight:5,alignItems:'center',paddingTop:5,borderColor:'black',margin:5,borderWidth:1.5,borderRadius:5,}}>
                    <Text style={{flex:1,justifyContent:'center',fontSize:15}} >Light</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{alert('Dark Theme')}}  style={{flex:2, backgroundColor:'#040404',alignItems:'center',alignSelf:'center',justifyContent:'center',borderColor:Constants.PRIMARY_COLOR,margin:5,borderWidth:1.5,borderRadius:5,}}>
                    <Text style={{flex:1,color:'white',fontSize:15,alignSelf:'center'}} >Dark</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.textView}>
                    <Image  source={require('./assets/images/drawer/like.png')} style={{flex:2,maxHeight:40,maxWidth:40,}} />
                    <TouchableNativeFeedback
                        style={{flex:8,alignContent:'center',alignItems:'center',justifyContent:'center',}}
                        onPress={()=> alert('liking...')}
                    >
                        <Text style={{alignSelf:'center',fontSize:18,marginLeft:15}}>Like Us</Text>
                    </TouchableNativeFeedback>
                </View>

                <View style={Styles.textView}>
                    <Image source={require('./assets/images/drawer/share.png')} style={{flex:2,maxHeight:40,maxWidth:40,}} />
                    <TouchableNativeFeedback
                        style={{flex:8,alignContent:'center',alignItems:'center',justifyContent:'center',}}
                        onPress={()=> alert('Sharing App...')}
                    >
                        <Text style={{alignSelf:'center',fontSize:18,marginLeft:15}}>Share App</Text>
                    </TouchableNativeFeedback>
                </View>

                <View style={Styles.textView}>
                    <Image source={require('./assets/images/drawer/feedback.png')} style={{flex:2,maxHeight:40,maxWidth:40,}} />
                    <TouchableNativeFeedback
                        style={{flex:8,alignContent:'center',alignItems:'center',justifyContent:'center',}}
                        onPress={()=> alert('Giving Feedback...')}
                    >
                        <Text style={{alignSelf:'center',fontSize:18,marginLeft:15}}>Feedback</Text>
                    </TouchableNativeFeedback>
                </View>

                <View style={Styles.textView}>
                    <Image source={require('./assets/images/drawer/about.png')} style={{flex:2,maxHeight:40,maxWidth:40,}} />
                    <TouchableNativeFeedback
                        style={{flex:8,alignContent:'center',alignItems:'center',justifyContent:'center',}}
                        onPress={()=> alert('About')}
                    >
                        <Text style={{alignSelf:'center',fontSize:18,marginLeft:15}}>About</Text>
                    </TouchableNativeFeedback>
                </View>
                
                <View style={Styles.blankView} ></View>
                
            </View>
        )
    }
}

const Styles= StyleSheet.create({
    container:{
        backgroundColor:Constants.BODY_WHITE_COLOR,
    },
    topImage:{
        maxHeight: Constants.DEV_HEIGHT/3.4,
        maxWidth:Constants.DEV_WIDTH*.75,
    },
    textView:{
        flex:1,
        flexDirection:'row',
        padding:3,
        borderBottomColor: 'white',
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOpacity: .6,
        elevation: 1,
        
    },
    blankView:{
        flex:.5
    }
});

export default DrawerContent;