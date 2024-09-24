import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const App = () => {
  const bookPrice = 141.8;
  const currency = 'đ';
  const [quantity, setQuantity] = useState(1);
  const discounts = ['discount10', 'discount20', 'discount30'];
  const [selectedDiscount, setDiscount] = useState(null);
  const [isDiscountListVisible, setIsDiscountListVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(bookPrice);

  const increaseQuantity = () => {
    setQuantity((before) => before + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((before) => before - 1);
  };
  const calculatePrice = () => {
    return (quantity * bookPrice).toFixed(3) + ' đ';
  };
  const selectDiscount = (discount) => {
    setDiscount(discount);
    setIsDiscountListVisible(false);
  };
  const applyDiscount = () => {
    let discountMultiplier = 1;

    if (selectedDiscount === 'discount10') {
      discountMultiplier = 0.9;
    } else if (selectedDiscount === 'discount20') {
      discountMultiplier = 0.8;
    } else if (selectedDiscount === 'discount30') {
      discountMultiplier = 0.7;
    }
    const discountedPrice = (quantity * bookPrice * discountMultiplier).toFixed(
      3
    );
    setTotalPrice(discountedPrice);
  };

  return (
    <View
      style={{ flex: 1, alignItems: 'center', backgroundColor: 'lightblue' }}>
      <View style={{ flex: 5, marginTop: 10 }}>
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image source={require('./book.png')} />
          <View>
            <Text style={{ marginBottom: 5 }}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={{ marginBottom: 5 }}> Cung cấp bởi Tiki Trading</Text>
            <Text style={{ marginBottom: 5 }}> {calculatePrice()}</Text>{' '}
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity
                onPress={increaseQuantity}
                style={[styles.btn, {}]}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  +
                </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5 }}>
                {quantity}
              </Text>
              <TouchableOpacity
                onPress={decreaseQuantity}
                style={[styles.btn, {}]}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  -
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text>mã giảm giá đã lưu</Text>
          <TouchableOpacity onPress={() => setIsDiscountListVisible(true)}>
            <Text style={{ color: 'red' }}>Xem tại đây</Text>
          </TouchableOpacity>
        </View>

        {isDiscountListVisible && (
          <FlatList
            data={discounts}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.discountItem}
                onPress={() => selectDiscount(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            style={styles.discountList}
          />
        )}
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <View
            style={{
              borderColor: 'black',
              borderWidth: 1,
              width: 200,
              height: 50,
              justifyContent: 'center',
            }}>
            {selectedDiscount && (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {selectedDiscount}
              </Text>
            )}
          </View>
          <TouchableOpacity
            onPress={applyDiscount}
            style={{
              marginLeft: 10,
              width: 100,
              height: 40,
              backgroundColor: 'green',
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              padding: 10,
              borderRadius: 15,
            }}>
            áp dụng
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text>bạn có phiếu giảm giá khác?</Text>
        <Text style={{ color: 'red' }}>Nhap tai day </Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text>tạm tính</Text>
        <Text style={{ color: 'red', marginLeft: 10 }}>{totalPrice}</Text>
      </View>
      <View style={{ flex: 4 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>Thanh tien</Text>
          <Text style={{ marginLeft: 10 }}>{totalPrice}</Text>
        </View>
        <TouchableOpacity
          style={{
            width: 240,
            height: 60,
            backgroundColor: 'orange',
            textAlign: 'center',
            padding: 15,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            borderRadius: 20,
          }}>
          tiến hành đặt hàng
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    padding: 5,
    width: 20,
    borderRadius: 10,
    height: 28,
  },
  discountList: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: '90%',
  },
  discountItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'pink',
  },
});
export default App;
