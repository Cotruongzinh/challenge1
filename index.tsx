import React from "react";
import { SafeAreaView, Text, TextInput, View, Image, FlatList } from "react-native";

import { homeStyles } from "../../styles/Home";
import { languages } from "../../constants/languages";

export default function HomeScreen() {
  return (
    <SafeAreaView style={homeStyles.screen}>
      <View style={homeStyles.content}>
        <Text style={homeStyles.title}>Programming Languages</Text>

        <FlatList
          data={languages}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator
          style={homeStyles.list}
          contentContainerStyle={homeStyles.listContent}
          renderItem={({ item }) => (
            <View style={homeStyles.card}>
              <Image source={item.img} style={homeStyles.image} />
            </View>
          )}
        />

        <TextInput
          style={homeStyles.input}
          placeholder="What is your favorite programming language from the list above?"
          placeholderTextColor="#666666"
        />
      </View>
    </SafeAreaView>
  );
}
