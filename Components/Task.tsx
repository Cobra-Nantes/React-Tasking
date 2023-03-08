import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface TaskProps {
    text: string;
    removeFunction: (index: number) => void;
    index: number
}

export default function Task(props: TaskProps) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity onPressOut={() => props.removeFunction(props.index)}>
        <Image source={require("../assets/trash.png")} style={styles.trash} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
  },
  itemLeft: {
  },
  square: {
  },
  itemText: {
  },
  trash: {
  },
});