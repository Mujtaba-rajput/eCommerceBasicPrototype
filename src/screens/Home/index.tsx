import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {useGetProductsQuery} from './home.api';
import {Loader, ProductCard} from '../../components';
import styles from './home.style';
import {useAppDispatch} from '../../hooks/redux';
import {addToCart} from '../Cart/cart.slice';

const Home = () => {
  const {data: products, isLoading} = useGetProductsQuery('');
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to my Shop</Text>
      </View>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <FlatList
          contentContainerStyle={styles.flatlistContainer}
          data={products}
          renderItem={({item}) => (
            <ProductCard
              id={item.id}
              name={item.name}
              colour={item.colour}
              img={{uri: item.img}}
              price={item.price}
              onPress={() => {
                const product = {
                  id: item.id,
                  name: item.name,
                  colour: item.colour,
                  price: item.price,
                  img: item.img,
                  quantity: 1,
                };
                dispatch(addToCart(product));
              }}
            />
          )}
          keyExtractor={(item: any) => item.id}
          numColumns={1}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
