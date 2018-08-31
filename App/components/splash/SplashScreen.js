import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import BlinkView from 'react-native-blink-view';

import * as Constants from '../../Constants';

const zeroOpac = 0;
const hundredOpac = 100;
class SplashScreen extends Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
            Actions.replace('LoginChoice');
        }, 1000);
        this.state = {
            isBlinking: true,
        }

    }
    
    render() {
       
        return (
            <View style={Styles.container}>
                <Image
                    style={Styles.splashLogo}
                    source={require('../../assets/images/splashLogo.png')}/>
                <Image
                    style={Styles.loaderGif}
                    source={require('../../assets/images/loader.gif')}/>
                <BlinkView binking={true} delay={500}>
                    <Text
                        style={{
                        color: '#fff',
                        fontSize: 20
                    }}>Loading Awesomeness</Text>
                </BlinkView>

            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: Constants.PRIMARY_COLOR,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    splashLogo: {
        alignItems: 'center',
        maxHeight: 200,
        maxWidth: 200,
        marginBottom: 30
    },
    loaderGif: {
        maxHeight: 50,
        maxWidth: 60,
        marginBottom: 10
    },
    loadingText: {
        color: '#fff',
        fontSize: 20
    }
});
export default SplashScreen