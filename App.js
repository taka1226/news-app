import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import dummyarticles from './dummies/articles.json';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default function App() {
    const [articles, setArticle] = useState(dummyarticles);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={articles}
                renderItem={({ item }) => (
                    <ListItem
                        imageUrl={item.urlToImage}
                        title={item.title}
                        author={item.author}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}
