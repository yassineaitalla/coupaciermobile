import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AccueilPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Ici, vous devrez inclure votre composant de navbar React */}
      </View>

      <View style={styles.main}>
        <Text style={styles.title}>
          Coup'acier, votre source de métal sur mesure.
        </Text>

        <Text style={styles.subtitle}>Découvrez nos produits</Text>

        <View style={styles.products}>
          <TouchableOpacity style={styles.product}>
            <Image
              source={{uri: 'https://www.commentfer.fr/1163/fer-plat-acier-90mm.jpg'}}
              style={styles.productImage}
            />
            <Text style={styles.productTitle}>Fer plat acier 90mm</Text>
            <Text style={styles.productDescription}>Description du produit ici.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.product}>
            <Image
              source={{uri: 'https://www.commentfer.fr/1163/fer-plat-acier-90mm.jpg'}}
              style={styles.productImage}
            />
            <Text style={styles.productTitle}>Fer plat acier 90mm</Text>
            <Text style={styles.productDescription}>Description du produit ici.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.product}>
            <Image
              source={{uri: 'https://www.commentfer.fr/1163/fer-plat-acier-90mm.jpg'}}
              style={styles.productImage}
            />
            <Text style={styles.productTitle}>Fer plat acier 90mm</Text>
            <Text style={styles.productDescription}>Description du produit ici.</Text>
          </TouchableOpacity>

          {/* Ajoutez les autres produits de la même manière */}
        </View>

        <TouchableOpacity style={styles.allProductsButton}>
          <Text style={styles.allProductsButtonText}>Découvrez tous nos produits</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        {/* Ici, vous devrez inclure votre composant de footer React */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    // Styles du header
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  products: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  product: {
    width: '30%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 5,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  allProductsButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  allProductsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    // Styles du footer
  },
});

export default AccueilPage;
