import { Text,View,SafeAreaView,FlatList } from "react-native";
import { useState } from "react";

import { COLORS, NFTData} from '../constants';
import FocusedStatusBar from "../components/FocusedStatusBar";
import HomeHeader from "../components/HomeHeader";
import { Colors } from "react-native/Libraries/NewAppScreen";



export const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <FocusedStatusBar background={COLORS.primary}/>

        <View style={{ flex: 1 }} >
            <View style={{ zIndex: 0 }} >
                <FlatList 
                data={NFTData}
                renderItem={({item}) => <Text>{ item.name }</Text>}
                keyExtractor={( item ) => item.id }
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<HomeHeader/>}
                />
            </View>

            <View style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: -1
            }}>
                <View style={{ backgroundColor: COLORS.primary, height: '300px' }} />
                <View style={{ backgroundColor: COLORS.white , flex:1 }} />
            </View>
        </View>
    </SafeAreaView>
  )
}