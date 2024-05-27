import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import useStorage from '../../hooks/useStorage';
import { PasswordItem } from './components/passwordItem';

export function Passwords() {
  const [listPasswords, setListPasswords] = useState([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      try {
        // Obtenha as senhas armazenadas
        const passwords = await getItem("@pass");
        // Atualize o estado apenas se as senhas forem recuperadas com sucesso
        if (passwords) {
          setListPasswords(passwords);
        }
      } catch (error) {
        console.error("Erro ao carregar senhas:", error);
      }
    }

    loadPasswords();
  }, [focused]);

  async function handleDeletePassword(item) {
    try {
      // Remova a senha do armazenamento
      await removeItem("@pass", item);
      // Atualize o estado após a remoção da senha
      setListPasswords(prevPasswords => prevPasswords.filter(password => password !== item));
    } catch (error) {
      console.error("Erro ao remover a senha:", error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          style={{ flex: 1, paddingTop: 14 }}
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PasswordItem data={item} removePassword={() => handleDeletePassword(item)} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#392de9",
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  title: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
});
