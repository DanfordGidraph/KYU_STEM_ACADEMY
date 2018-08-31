import {StyleSheet} from 'react-native';

const primaryCol = global.whiteColor;
export const NavStyles = StyleSheet.create({
    navBarContainer: {
        minHeight:50,
        maxHeight: 50,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#1E88E5',
        paddingBottom: 5,
        
    },
    backButton: {
        flex: 2,
        marginTop: 10
    },
    pageTitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        flex: 8,
        paddingTop:5,
        paddingLeft:15,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    hambugerIcon: {
        maxHeight: 45,
        maxWidth: 45,
        margin: 5,
        flex:1,
    },
});
export const DrawerStyles = {
    drawer: {
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 3
    },
    main: {
        paddingLeft: 0
    }
}

