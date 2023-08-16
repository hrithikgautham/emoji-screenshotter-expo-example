import { StyleSheet, Text, View, Image, } from 'react-native'
import React, { useRef, } from 'react'

const ImageViewer = ({ placeHolderImage }) => {




  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={placeHolderImage === null ? require("../assets/images/background-image.png") : { uri: placeHolderImage }} />
    </View>
  )
}

export default ImageViewer

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingTop: 40,
    // backgroundColor: "red",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  }
})