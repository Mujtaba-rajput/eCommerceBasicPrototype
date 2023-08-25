import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './productCard.style';
import CustomButton from '../CustomButton';

type ProductCardType = {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: any;
  onPress: any;
};

const ProductCard = ({
  id = 0,
  colour = '',
  name = '',
  price = 0,
  img = '',
  onPress,
}: ProductCardType) => {
  return (
    <View style={styles.container} key={id}>
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.imageSize} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.inner}>
          <Text style={styles.titleStyle} numberOfLines={3}>
            {name}
          </Text>
          <View>
            <Text style={styles.priceStyle}>{'$' + price}</Text>
          </View>
        </View>

        <View style={styles.dealContainer}>
          <Text numberOfLines={3} style={styles.description}>
            {'Color: ' + colour}
          </Text>
        </View>

        <View style={styles.footer}>
          <CustomButton
            label="Add to Cart"
            styles={styles.buttonContainer}
            textStyles={styles.buttonText}
            onClick={onPress}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
