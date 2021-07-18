import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'ระนอง', code: '85000' },
    { place: 'ยะลา', code: '95000' },
    { place: 'ภูเก็ต', code: '83000' },
    { place: 'พัทลุง', code: '93000' },
    { place: 'กระบี่', code: '81000' },
    { place: 'ชุมพร', code: '86000' },
    { place: 'ตรัง', code: '92000' },
    { place: 'นครศรีธรรมราช', code: '80000' },
    { place: 'นราธิวาส', code: '96000' },
    { place: 'ปัตตานี', code: '94000' },
    { place: 'พังงา', code: '82000' },
    { place: 'สงขลา', code: '90000' },
    { place: 'สุราษฎร์ธานี', code: '84000' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={Styles.zipItem}>
            
            <Text style={Styles.font1}>{place}</Text>
            <Text style={Styles.font2}>{code}</Text>
        </View>
    </TouchableHighlight>
    
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return  (
        <View>
            <Text style={Styles.home}>Thailand</Text>
            <Text style={Styles.font3}>ภาคใต้</Text>
            <FlatList
                data = {availableZipItems}
                keyExtractor = {item => item.code}
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
            <Text style={Styles.font3}>ภาคกลาง</Text>
            <Text style={Styles.font3}>ภาคเหนือ</Text>
            <Text style={Styles.font3}>ภาคอีสาน</Text>
            <Text style={Styles.font3}>ภาคตะวันออก</Text>
        </View>
    )
}   

const Styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    home: {
        textAlign: 'center',
        fontSize: 30,
        color: '#FFFAFA',
        backgroundColor: `#363636`,
    },
    font3: {
        textAlign: 'left',
        fontSize: 25,
        color: '#FFFAFA',
        backgroundColor: `#4F4F4F`,
    },
    font1: {
        flex: 1,
        color: '#FFFAFA',
        fontSize: 20,
        backgroundColor: '#828282',
    },
    font2: {
        flex: 1,
        color: '#FFFAFA',
        fontSize: 20,
        backgroundColor: '#828282',
    }
    
})