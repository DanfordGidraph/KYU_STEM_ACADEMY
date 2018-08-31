import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import Drawer from 'react-native-drawer';
import{Actions} from 'react-native-router-flux';
import Icon from "react-native-vector-icons/FontAwesome";

import * as Constants from '../../Constants';
import DrawerContent from '../../DrawerContent';
import {NavStyles, DrawerStyles} from '../../css/Styles';

class ContentLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
            NavTitle: global.globalTitle,
        }
    }
    componentDidMount(){
        
    }

    toggleDrawer(){
        this.state.drawerOpen?this._drawer.close():this._drawer.open()
    }

    render() {
        return (
            <Drawer 
            ref={(ref) => this._drawer = ref} 
            type="overlay" 
            side='left' 
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
                <View style={Styles.container}>
                    <Icon.ToolbarAndroid
                        style={{minHeight:50,height:50,backgroundColor:Constants.PRIMARY_COLOR}}
                        title={this.state.NavTitle}
                        titleColor="#f3f3f3"
                        navIconName="bars"
                        iconSize={30}
                        onIconClicked={this.toggleDrawer.bind(this)}
                        actions={[  
                            { title: 'Settings', iconName: 'facebook', iconColor: "#4099FF", iconSize: 30, show: 'never' },
                            { title: 'Follow me on Twitter', iconName: 'twitter', iconColor: "#4099FF", show: 'never' },
                            ]}
                        overflowIconName="ellipsis-v"
                    />

                    <View style={Styles.cards}>
                        <View style={Styles.menuItem}>
                            <TouchableOpacity
                                style={{
                                flex: 2
                            }}>
                                <Image
                                    style={Styles.menuItemImage}
                                    source={require('../../assets/images/menu_icons/notes_icon.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                flex: 1
                            }}>
                                <Text style={Styles.menuIItemText}>Notes</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={Styles.menuItem}>
                            <TouchableOpacity
                                onPress={() => {  }}
                                style={{
                                flex: 2
                            }}>
                                <Image
                                    style={Styles.menuItemImage}
                                    source={require('../../assets/images/menu_icons/assignments_icon.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                flex: 1
                            }}>
                                <Text style={Styles.menuIItemText , {fontSize:16,paddingTop:5,color:'#000'}}>CATs & Assignments</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={Styles.cards}>
                        <View style={Styles.menuItem}>
                            <TouchableOpacity
                                style={{
                                flex: 2
                            }}>
                                <Image
                                    style={Styles.menuItemImage}
                                    source={require('../../assets/images/menu_icons/books_icon.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                flex: 1
                            }}>
                                <Text style={Styles.menuIItemText}>Books</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.menuItem}>
                            <TouchableOpacity
                                style={{
                                flex: 2
                            }}>
                                <Image
                                    style={Styles.menuItemImage}
                                    source={require('../../assets/images/menu_icons/journal_icon.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                flex: 1
                            }}>
                                <Text style={Styles.menuIItemText}>Journals</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={Styles.cards}>
                        <View style={Styles.menuItem}>
                            <TouchableOpacity
                                style={{
                                flex: 2
                            }}>
                                <Image
                                    style={Styles.menuItemImage}
                                    source={require('../../assets/images/menu_icons/news_icon.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                flex: 1
                            }}>
                                <Text style={Styles.menuIItemText}>News</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.menuItem}>
                            <TouchableOpacity
                                style={{
                                flex: 2
                            }}>
                                <Image
                                    style={Styles.menuItemImage}
                                    source={require('../../assets/images/menu_icons/chatroom_icon.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                flex: 1
                            }}>
                                <Text style={Styles.menuIItemText}>Chat Room</Text>
                            </TouchableOpacity>
                        </View>
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
        backgroundColor: '#f2f2f2'
    },
    cards: {
        flex: 3,
        flexDirection: 'row',
       
    },
    menuItem: {
        flex: 1,
        opacity:1,
        flexDirection: 'column',
        margin: 5,
        padding: 3,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: 'white',
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
        borderBottomWidth: 1,
        shadowColor:'#000',
        shadowOpacity:.8,
        elevation:5,
        shadowOffset:{width:0,height:5},
    },
    menuItemImage: {
        maxHeight: 100,
        maxWidth: 100,
        alignSelf: 'center',
        alignItems: 'center'
    },
    menuIItemText: {
        marginTop: 3,
        fontSize: 16,
        color: '#000',
        alignSelf: 'center',
        alignContent:'center',
        justifyContent: 'center'
    }
});

export default ContentLanding