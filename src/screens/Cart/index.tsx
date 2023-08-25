import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from '../Home/home.style';
import {useAppSelector} from '../../hooks/redux';
import {CartItemCard} from '../../components';

interface CartItemCardType {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: any;
  quantity: number;
}

const Cart = () => {
  const {cartItems, totalAmount} = useAppSelector(state => state.cart);

  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      {cartItems?.map((item: CartItemCardType) => {
        return (
          <CartItemCard
            id={item.id}
            name={item.name}
            img={item.img}
            colour={item.colour}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
      {totalAmount > 0 && (
        <View style={styles.cartAmountContainer}>
          <Text style={styles.cartAmountText}>
            Total Amount is: ${totalAmount.toFixed(2)}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;
