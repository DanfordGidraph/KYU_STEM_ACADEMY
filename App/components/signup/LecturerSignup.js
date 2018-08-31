import React,{Component} from 'react';
import { View,Text,TouchableOpacity,Image,TextInput, StyleSheet, Button } from 'react-native';
import Drawer from 'react-native-drawer';
import{Actions} from 'react-native-router-flux';
import Icon from "react-native-vector-icons/FontAwesome";

import * as Constants from '../../Constants';
import DrawerContent from '../../DrawerContent';
import {NavStyles, DrawerStyles} from '../../css/Styles';

class StudentSignup extends Component {
    constructor(props){
        super(props);
        this.state = { drawerOpen:false, }
    }

    toggleDrawer(){
        this.state.drawerOpen?this._drawer.close():this._drawer.open()
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
                    this.setState({drawerOpen: false});
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
                <View>
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
                        style={Styles.topForm}
                    ></View>
                    <View
                        style={Styles.bottomForm}
                    ></View>

                    <View
                        style={{
                        flex: 1.2,
                        padding: 5,
                        paddingTop: 10
                    }}>
                        <Button
                            style={{flex:1}}
                            onPress={() => {
                            alert('Signing Up');
                        }}
                            title={'Sign Up'}></Button>
                    </View>
                </View>
                    
                
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
        flexDirection:'row',
        borderWidth:2,
    },
    bottomForm:{
        flex:6,
        flexDirection:"column",
        borderWidth:2,
    },

});

export default StudentSignup;