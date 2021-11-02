import * as React from 'react';
import { FlatList } from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import styles from './styles';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';

const firstCategory = categories.items[2];

const HomeScreen = ({ navigation }: RootTabScreenProps<'Home'>) => {
  return (
    <View style={styles.container}>
      {/* List of Categories */}
      <FlatList 
        data={categories.items}
        renderItem={({item}) => <HomeCategory category={item} />} 
      />
    </View>
  );
}


export default HomeScreen;
