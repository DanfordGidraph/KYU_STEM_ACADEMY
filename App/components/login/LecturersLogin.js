import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Drawer from 'react-native-drawer';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {NavStyles, DrawerStyles} from '../../css/Styles';
import {NavConfigs, hambugerIcon} from '../../configs/Configs';
import DrawerContent from '../../DrawerContent';
import * as Constants from '../../Constants';

class StudentLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
            NavTitle: global.globalTitle
        }
    }

    toggleDrawer() {
        this.state.drawerOpen
            ? this
                ._drawer
                .close()
            : this
                ._drawer
                .open()
    }

  
    render() {
        return (
            <Drawer ref={(ref) => this._drawer = ref} type="overlay" side='right' content={< DrawerContent />} open={this.state.drawerOpen} onClose={() => {
                this.setState({drawerOpen: false});
            }} tapToClose={true} openDrawerOffset={0.25} // 20% gap on the left side of drawer
    panCloseMask={0} closedDrawerOffset={0} styles={DrawerStyles} tweenHandler={(ratio) => ({
                main: {
                    opacity: (2 - ratio) / 2
                }
            })}>

                <View style={Styles.container}>

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
                        }}>Not A Member Yet?</Text>
                        <Button
                            style={Styles.signUpButtonStyle}
                            onPress={() => alert('Sign Up')}
                            title={'Sign Up'}></Button>
                    </View>

                    <View
                        style={{
                        flex: 6,
                        alignItems: 'center',
                        justifyContent: 'center'
                        }}>
                        <Image
                            style={Styles.splashImage}
                            source={require('../../assets/images/LoginSplashLogo.png')}/>
                    </View>

                    <TextInput placeholder={'Faculty ID'} style={Styles.inputBox}/>
                    <TextInput placeholder={'Password'} style={Styles.inputBox} secureTextEntry/>

                    <View style={{flex:1.2,padding:5,paddingTop:10,}}>
                        <Button
                            style={Styles.LoginButtonStyle}
                            onPress={() => {
                            alert('Logging In')
                        }}
                            title={'Log In'}></Button>
                    </View>

                </View>

            </Drawer>
        )
    }
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
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
    splashImage: {
        flex: 1,
        maxWidth: 200,
        maxHeight: 200,
        alignSelf: 'center'
    },
    inputView: {
        flex: 4,
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: '#000',
        marginTop: 10,
        justifyContent: 'center',
        // paddingTop: 50
    },
    inputBox: {
        flex: 2,
        padding: 5,
        paddingBottom: -5,
        margin: 3,
        borderColor: 'teal',
        borderWidth: 1,
        borderRadius: 10,
        maxHeight: 50,
        minHeight: 40,
        color: 'black',
        fontSize: 15,
        backgroundColor: 'white',
        borderBottomColor: 'white',
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOpacity: .8,
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 5
        }
    },
    loginButtonStyle: {
        flex: 1,     
    },
    signUpButtonStyle: {
        margin: 10,
        height: 30,
        color: 'teal',
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'teal',
        justifyContent: 'center'
    },
    buttonTextStyle: {
        fontSize: 17,
        color: 'white'
    }
})
const titleConfig = {
    title: global.globalTitle,
    tintColor: global.whiteColor, // - (String) - Title's text color
    ellipsizeMode: 'middle', // - ('head', 'middle', 'tail', 'clip') - How to display the text
    numberOfLines: 1
}

export default StudentLogin;