import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './cartItemCard.style';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../utils/colors';
import {
  decreaseQuantity,
  increaseQuantity,
  // removeFromCart,
} from '../../screens/Cart/cart.slice';
import {useAppDispatch} from '../../hooks/redux';

type CartItemCardType = {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: any;
  quantity: number;
};

const CartItemCard = ({
  id = 0,
  colour = '',
  name = '',
  price = 0,
  img = '',
  quantity = 0,
}: CartItemCardType) => {
  const dispatch = useAppDispatch();

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity(id)); // Dispatch the action to decrease quantity
  };

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity(id)); // Dispatch the action to increase quantity
  };

  return (
    <View style={styles.container} key={id}>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: img}} style={styles.image} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.description}>{'Color: ' + colour}</Text>
          <Text style={styles.text}>{'$' + price}</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.innerfooter}>
          <View style={styles.flex}>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => handleDecreaseQuantity(id)}>
              <Icon name={'minus'} size={15} color={colors.textColor} />
            </TouchableOpacity>
          </View>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantity}>{quantity}</Text>
          </View>
          <View style={styles.flex}>
            <TouchableOpacity
              style={styles.circle1}
              onPress={() => {
                handleIncreaseQuantity(id);
              }}>
              <Icon name={'plus'} size={15} color={colors.textColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItemCard;
