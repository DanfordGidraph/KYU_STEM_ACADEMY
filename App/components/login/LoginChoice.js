import React, {Component} from 'react';
import {View, Image,Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {NavStyles} from '../../css/Styles';
import * as Constants from '../../Constants';

export default class LoginChoice extends Component {
    constructor(props){
        super(props);
        this.state={
            NavTitle: global.globalTitle
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={NavStyles.navBarContainer}>

                    <Text style={NavStyles.pageTitle}>{this.state.NavTitle}</Text>
                    
                </View>

                <View style={Styles.choiceCard}>
                    <ImageBackground
                        style={{
                        flex: 1,
                        justifyContent: 'flex-end'
                    }}
                        source={require('../../assets/images/login_choice/students_login.png')}>
                        <TouchableOpacity
                            style={{
                            marginLeft: Constants.DEV_WIDTH*.5,
                            marginBottom: Constants.DEV_HEIGHT*.25,
                            padding: 2,
                            width: 165,
                            height: 90
                        }}
                            onPress={() => {
                            Actions.StudentsLogin()
                        }}>
                            <Image
                                style={Styles.choiceImage}
                                source={require('../../assets/images/login_choice/students-login_btn.png')}/>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

                <View style={Styles.choiceCard}>
                    <ImageBackground
                        style={{
                        flex: 1,
                        justifyContent: 'flex-end'
                    }}
                        source={require('../../assets/images/login_choice/lecturers_login.png')}>
                        <TouchableOpacity
                            style={{
                            marginLeft: Constants.DEV_WIDTH*.49,
                            marginBottom: Constants.DEV_HEIGHT*.26,
                            padding: 2,
                            width: 165,
                            height: 80
                        }}
                            onPress={() => {
                            Actions.LecturersLogin()
                        }}>
                            <Image
                                style={Styles.choiceImage}
                                source={require('../../assets/images/login_choice/lecturers-login_btn.png')}/>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    choiceCard: {
        flex: 1,
        borderTopColor: 'teal',
        borderTopWidth: 3,
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
    choiceImage: {
        maxWidth: Constants.DEV_WIDTH*.50,
        maxHeight: Constants.DEV_WIDTH*.23,
        flex: 1
    }
});