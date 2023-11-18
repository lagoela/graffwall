import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Pressable, Text, Image, StyleSheet } from 'react-native';



export default function HomeScreen() {
    
    return (

        <SafeAreaProvider style={{ backgroundColor: '#ffffff' }}>
            <SafeAreaView style={style.container1}>
                <Text style={style.textTitle}>
                    GRAFFWALL
                </Text>
            </SafeAreaView>
            <SafeAreaView style={style.container2}>
                <Text style={style.textTitle}>
                    ULTIMAS PROPOSTAS
                </Text>
            </SafeAreaView>
            <SafeAreaView style={style.container3}>
                <Text style={style.textTitle}>
                    PROPRIEDADES
                </Text>
                <SafeAreaView style={style.containerBtnProps}>
                    <Pressable style={style.btnsProp}>
                        <Image
                            style={style.btnImageProp}
                            source={require("../../assets/btnAdicao.png")}
                        />
                        <Text style={style.btnTextProp}>
                            cadastrar
                        </Text>
                    </Pressable>
                    <Pressable style={style.btnsProp} >
                        <Image
                            style={style.btnImageProp}
                            source={require("../../assets/btnLapis.png")}
                        />
                        <Text style={style.btnTextProp}>
                            editar
                        </Text>
                    </Pressable>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

const style = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: 'gray',
        marginBottom: 5
    },
    container2: {
        flex: 3,
        backgroundColor: 'gray',
        marginBottom: 5
    },
    container3: {
        flex: 3,
        marginBottom: 5
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        marginHorizontal: 5,
        marginBottom: 10
    },
    containerBtnProps: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    btnsProp: {
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderWidth: 1,
        backgroundColor: '#dedede',
        borderRadius: 10
    },
    btnImageProp: {
        width: 40,
        height: 40,
    },
    btnTextProp: {
        fontSize: 20,
        alignSelf: 'center',
    }
})