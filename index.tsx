import React from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View, Image } from "react-native";

import { homeStyles } from "../../styles/Home";
import { languages } from "../../constants/languages";

export default function HomeScreen() {
  return (
    <SafeAreaView style={homeStyles.screen}>
      <View style={homeStyles.content}>
        <Text style={homeStyles.title}>Programming Languages</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={homeStyles.scrollWrap}
          contentContainerStyle={homeStyles.scrollContent}
        >
          {languages.map((item) => (
            <View key={item.key} style={homeStyles.card}>
              <Image source={item.img} style={homeStyles.image} />
            </View>
          ))}
        </ScrollView>

        <TextInput
          style={homeStyles.input}
          placeholder="What is your favorite programming language from the list above?"
          placeholderTextColor="#666666"
        />
      </View>
    </SafeAreaView>
  );
}