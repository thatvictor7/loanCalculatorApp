import React from 'react'
import { Text, StyleSheet, View, Picker } from 'react-native'
import { Input } from 'react-native-elements';

const LoanTerm = () => {
    return(
        <View>
        <View style={styles.horizontal}>
            <View style={styles.inputView}>
                <Input
                  style={styles.input}
                //   shake='true'
                  textAlign={'center'}
                  placeholder='6'
                  // leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />
            </View>
            <View tyle={styles.pickerView}>
                <View style={styles.pickerViewLoanTerm}>
                    <Picker
                      selectedValue={this.state.language}
                      style={styles.picker}
                      onValueChange={(itemValue, itemIndex) =>
                      this.setState({language: itemValue})
                    }>
                    <Picker.Item label="Month(s)" value="month" />
                    <Picker.Item label="Year(s)" value="year" />
                  </Picker>
                </View>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
        backgroundColor: "white",
        width: 205,
        borderRadius: 50,
        height: 40
    },
    pickerViewLoanTerm: {
        marginLeft: 15,
        borderRadius: 50,
        // backgroundColor: "white",
        color: 'white',
        backgroundColor: '#2608B1',
        borderWidth: 1,
        // borderColor: '#bdc3c7',
        overflow: 'hidden',
        width: 140
        // height: 14
    },
    input: {
        // alignItems: 'center',
        // width: 260,
        // marginHorizontal: 50,
        // backgroundColor: 'white',
        // height: 1
    },
    pickerView: {
        // width: 130, 
        // height: 150
    },
    horizontal: {
        display: 'flex',
        flexDirection: 'row'
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-around'
        // height: 45
    }, 
    picker: {
        color: 'white',
        height: 40
    }
})

export default LoanTerm