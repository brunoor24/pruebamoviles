import { StyleSheet, Image } from 'react-native';

const PlaceholderImage = require('./assets/images/fifa.png');

export default function Navigator() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image placeholderImageSource={PlaceholderImage} /> 
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }