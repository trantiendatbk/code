import React, { Component } from 'react';
import { View, Dimensions, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';



const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height
class Shift_Cipher extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            cryp: '',
            key: '',
            result: [],
            show: false
        };
    };



    Cryp = () => {
        this.setState({ result: [] })
        console.log('vao day')
        var i = Object.values(this.state.input)
        // console.log('vao day ii' + i[0].toString())
        this.setState({ show: true })
        console.log('show la :' + this.state.show)
        i.forEach(element => {
            console.log('vao day2' + element.toString())
            let m = element.toString()
            let m1 = m.charCodeAt(0) - 97
            console.log("index la" + m1)

            let index = m.charCodeAt(0) - 97;
            let convert = (index + parseInt(this.state.key)) % 26 + 97
            //    convert.fromCharCode()
            console.log('skfkdjk+' + "convert" + convert)
            let word = String.fromCharCode(convert)
            let upWord = word.toUpperCase()
            console.log('dda' + String.fromCharCode(22))
            console.log("hhhh" + word.toUpperCase())
            this.state.result.push(upWord)
            this.state.result.join();
            console.log('ket hop ' + this.state.result.join())
            this.setState({ cryp: this.state.result.join('') })
            console.log('data la :' + this.state.result)
            console.log('show la :' + this.state.show)

        });

    }
    Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    render() {
        return (
            <View>
                <ScrollView>
                <TextInput
                    style={{
                        fontSize: 20,
                        borderColor: "#707070",
                        borderBottomWidth: 1,
                        paddingBottom: 1.5,
                        marginTop: DEVICE_HEIGHT/10
                    }}
                    placeholder="Nhap chuoi can ma hoa"
                    placeholderTextColor="#B1B1B1"
                    returnKeyType="next"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    value={this.state.input}
                    onChangeText={input => this.setState({ input })}
                />
                <TextInput
                    style={{
                        fontSize: 20,
                        borderColor: "#707070",
                        borderBottomWidth: 1,
                        paddingBottom: 1.5,
                        marginTop: 25.5
                    }}
                    placeholder="Nhap Key"
                    placeholderTextColor="#B1B1B1"
                    returnKeyType="next"
                    keyboardType='numeric'
                    textContentType="emailAddress"
                    value={this.state.key}
                    onChangeText={key => this.setState({ key })}
                />

                <View style={{width: DEVICE_WIDTH,alignItems:'center'}}>
                <TouchableOpacity onPress={() => this.Cryp()} style={{ justifyContent: 'center', alignItems: 'center', width: DEVICE_WIDTH / 3, height: DEVICE_HEIGHT / 12, borderRadius: 5, marginTop: 15, backgroundColor: '#ff6633' }}>
                    <Text>
                        Ma hoa
                    </Text>
                </TouchableOpacity>
                </View>
                
                    <View style={{ width: DEVICE_WIDTH, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>

                        {this.state.show ?

                            <View style={{}}>
                                <Text style={{ color: '#FF3333', fontSize: 20 }}>
                                    Chuoi sau khi ma hoa la:
            </Text>
                                <Text style={{ color: '#339900', fontSize: 25, letterSpacing: 5 }}>{this.state.cryp}</Text>
                            </View>

                            : null}

                    </View>
                </ScrollView>
                <View style={{width: DEVICE_WIDTH,alignItems:'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ justifyContent: 'center', alignItems: 'center', width: DEVICE_WIDTH / 3, height: DEVICE_HEIGHT / 12, borderRadius: 5, marginTop: 15, backgroundColor: '#ff6633' }}>
                    <Text>
                       Back
                    </Text>
                </TouchableOpacity>
                </View>


              

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default Shift_Cipher;