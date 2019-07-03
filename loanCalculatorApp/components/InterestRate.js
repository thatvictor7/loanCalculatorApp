import React from 'react'
import { Text, StyleSheet, View, Picker } from 'react-native'
import { Input } from 'react-native-elements';

const InterestRate = () => {
    return(
        <View style={styles.horizontal}>
            <View style={styles.inputView}>
                <Input
                  style={styles.input}
                  textAlign={'center'}
                  underlineColorAndroid = "transparent"
                  placeholder='8.0'
                  // leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />
            </View>
            <View style={styles.picker}>
                <Text style={{color: 'white', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>%</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
        marginTop: 5,
        backgroundColor: "white",
        width: 260,
        // height: 50,
        borderRadius: 50,
    },
    input: {
        // borderRadius: 50,
        height: 35
    },
    picker: {
        backgroundColor: '#2608B1',
        height: 45,
        borderRadius: 50,
        marginTop: 5,
        color: 'white',
        width: 80,
        textAlign: 'center', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    horizontal: {
        display: 'flex',
        flexDirection: 'row',
        height: 40
    },
})

export default InterestRate