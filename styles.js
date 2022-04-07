import {StyleSheet} from "react-native";

export const appStyles = StyleSheet.create({
    container: {
        flex:1,
        margin:16,
    },
    title: {
        fontSize: 30,
        color:"lightgrey",
        textAlign:"center",
    },
    subtitle: {
        fontSize:20,
        marginTop:4,
        color:"#666",
        textAlign:"center",
    },
    input: {
        color:"#c0c0c0",
        marginTop:32,
        paddingVertical:12,
        paddingHorizontal: 16,
        borderRadius:6,
        borderWidth:1,
        borderColor:"grey",
        fontSize: 18,
    },
    buttonContainer: {
        backgroundColor: "dimgrey",
        marginTop:8,
        paddingVertical:12,
        paddingHorizontal: 16,
        borderRadius:6,
        alignSelf:"flex-end",
        alignItems:"center",
        marginTop:8,
    },
    buttonText: {
        color:"lightgrey",
    },
    divider: {
        height:1,
        marginVertical:32,
    },
    taskContainer:{
        marginBottom:8,
        borderBottomWidth:1,
        borderColor:"#666",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:12,
    },
    taskText : {
        color:"lightgrey",
        fontSize:18,
    },
    taskDelete: {
        backgroundColor:"darksalmon",
        width:23,
        height:23,
        borderRadius:13,
        justifyContent:"center",
        alignItems:"center",
    },
    taskDeleteText : {
        fontSize:18,
    }
});