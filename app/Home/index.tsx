import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "../types/FilterStatus";
import { Item } from "@/components/Item";
import { ScrollView } from "react-native";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITEMS = [
  {
    id: "1",
    description: "Como comprar ",
    status: FilterStatus.DONE,
  },
  {
    id: "2",
    description: "Testando compra",
    status: FilterStatus.PENDING,
  },
  {
    id: "3",
    description: "Compra executada",
    status: FilterStatus.DONE,
  },
  {
    id: "4",
    description: "Teste de Compra nova",
    status: FilterStatus.PENDING,
  },
];

export function HomePage() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/main/logo.png")} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adiconar" />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={{
                status: item.status,
                description: item.description,
              }}
              onRemove={() => console.log("remove")}
              onStatus={() => console.log("mudando status")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separatror} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui</Text> }
        />
      </View>
    </View>
  );
}
