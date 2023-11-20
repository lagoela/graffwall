import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Pressable, Text, Image, StyleSheet, View } from 'react-native';



export default function PerfilOwnerScreen({ navigation }) {

    return (

        <SafeAreaProvider style={{ backgroundColor: 'white' }}>

            <SafeAreaView style={style.mainContainer}>

                <SafeAreaView style={style.headerContainer}>
                    <View style={{ alignSelf: 'center', marginRight: 10 }}>
                        <Image
                            style={style.menuHamburguer}
                            source={require("../../assets/menuHamburger.png")} />
                    </View>
                    <Text style={{ alignSelf: 'center', fontSize: 25, marginRight: 10, fontWeight: 'bold' }}>
                        GraffWall
                    </Text>
                </SafeAreaView>

                <SafeAreaView style={style.container2}>
                    <Text style={style.textTitle}>
                        Ultimas propostas
                    </Text>
                </SafeAreaView>

                <SafeAreaView style={style.container3}>
                    <Text style={style.textTitle}>
                        Propriedades
                    </Text>
                    <SafeAreaView style={style.containerBtnProps}>
                        <Pressable style={style.btnsProp} onPress={() => navigation.navigate('CadastroWall')}>
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
        backgroundColor: 'white',
        marginHorizontal: 15
    },
    headerContainer: {
        height: 50,
        flexDirection: 'row',
        marginBottom: 15
    }
    ,
    container2: {
        flex: 1,
        marginBottom: 5,
    },
    container3: {
        flex: 1,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 30
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
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    btnImageProp: {
        width: 40,
        height: 40,
    },
    btnTextProp: {
        fontSize: 20,
        alignSelf: 'center',
    },

    menuHamburguer: {
        width: 30,
        height: 30
    }
})