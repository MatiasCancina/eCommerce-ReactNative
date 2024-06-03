import { StyleSheet, View } from 'react-native'
import Categories from '../components/Categories'
import Header from '../components/Header'

export default function Home() {
    return (
        <View style={{ width: '100%' }}>
            <Header title={'Categories'} />
            <Categories />
        </View>
    )
}

const styles = StyleSheet.create({})