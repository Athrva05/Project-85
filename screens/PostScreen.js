import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class PostScreen extends Component {
    renderItem = ({item: post }) => {
          return <PostCard post ={post} navigation={this.props.navigation} />
          };
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>PostScreen</Text>
            </View>
        )
    }
}