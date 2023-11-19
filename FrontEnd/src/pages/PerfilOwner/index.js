import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Pressable, Text, Image, StyleSheet, View } from 'react-native';



export default function PerfilOwnerScreen() {

    return (

        <SafeAreaProvider style={{ backgroundColor: '#ffffff' }}>

            <SafeAreaView style={style.mainContainer}>



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
                        <Pressable style={style.btnsProp} >
                            <Image
                                style={style.btnImageProp}
                                source={require("../../assets/btnAdicao.png")}
                            />
                            <Text style={style.btnTextProp}>
                                Cadastrar
                            </Text>
                        </Pressable>
                        <Pressable style={style.btnsProp} >
                            <Image
                                style={style.btnImageProp}
                                source={require("../../assets/btnLapis.png")}
                            />
                            <Text style={style.btnTextProp}>
                                Editar
                            </Text>
                        </Pressable>
                    </SafeAreaView>

                </SafeAreaView>

            </SafeAreaView>

        </SafeAreaProvider>

    )
}

const style = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginHorizontal: 16
    },
    container2: {
        flex: 1,
        marginBottom: 5,
    },
    container3: {
        flex: 1,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
    },
    containerBtnProps: {
        flex: 1,
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
    },

    bottomBar: {
        height: 80,
        borderWidth: 1,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    }
})