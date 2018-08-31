import{View,TouchableOpacity,Image} from 'react-native';
export const NavConfigs = {
    titleConfig:{
        title: global.globalTitle,
        tintColor:global.whiteColor, // - (String) - Title's text color
        ellipsizeMode:'middle',// - ('head', 'middle', 'tail', 'clip') - How to display the text
        numberOfLines :1,
    },
    statusBar:{
        //style //- ('light-content' or 'default') - Style of statusBar
        hidden:false, //- (Boolean)
        tintColor: global.primaryColor, //- (String) - Status bar tint color
        hideAnimation: 'none', //- ('fade', 'slide', 'none') - Type of statusBar hide animation
        showAnimation: 'slide', //- ('fade', 'slide', 'none') - Type of statusBar show animation
    },
    containerStyles:{
        backgroundColor:global.primaryColor,
    }
}

export const hambugerIcon=() => {return(
    <TouchableOpacity style={{ flex:1,maxHeight:40, maxWidth:40}}>
    <Image style={{flex:1,maxHeight:40, maxWidth:40}} source={require('../assets/images/nav_icons/hambuger.png')} />
    </TouchableOpacity>
)} 