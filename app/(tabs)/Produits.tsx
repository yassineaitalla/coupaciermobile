import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Produits en acier</Text>
      </View>

      <TouchableOpacity style={styles.product} onPress={() => console.log('Ajouté au panier')}>
        <Image
          source={{ uri: 'https://www.commentfer.fr/1163/fer-plat-acier-90mm.jpg' }}
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Fer plat acier 90mm</Text>
          <Text style={styles.productPrice}>Prix : 10€</Text>
          <TouchableOpacity style={styles.addToCartButton} onPress={() => console.log('Ajouté au panier')}>
            <Text style={styles.addToCartButtonText}>Ajouter au panier</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.product} onPress={() => console.log('Ajouté au panier')}>
        <Image
          source={{ uri: 'https://www.commentfer.fr/1163/fer-plat-acier-90mm.jpg' }}
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Fer plat acier 90mm</Text>
          <Text style={styles.productPrice}>Prix : 10€</Text>
          <TouchableOpacity style={styles.addToCartButton} onPress={() => console.log('Ajouté au panier')}>
            <Text style={styles.addToCartButtonText}>Ajouter au panier</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  product: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    padding: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    marginBottom: 5,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
