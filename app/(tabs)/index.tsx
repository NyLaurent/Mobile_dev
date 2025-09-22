import { Fonts } from "@/constants/theme";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const HomePage = () => {
  const insets = useSafeAreaInsets();
  const phones = [
    { id: "1", name: "iPhone 15 Pro" },
    { id: "2", name: "Samsung Galaxy S24" },
    { id: "3", name: "Google Pixel 8" },
    { id: "4", name: "OnePlus 12" },
    { id: "5", name: "Xiaomi 14" },
    { id: "6", name: "Nothing Phone (2)" },
    { id: "7", name: "Sony Xperia 1 V" },
    { id: "8", name: "Asus ROG Phone 8" },
  ];

  const categories = [
    { id: "c1", name: "New" },
    { id: "c2", name: "Best Sellers" },
    { id: "c3", name: "Budget" },
    { id: "c4", name: "Flagship" },
    { id: "c5", name: "Gaming" },
    { id: "c6", name: "Camera" },
  ];

  const handleAddToCart = (phoneName: string) => {
    console.log(`Added to cart: ${phoneName}`);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView
        contentContainerStyle={[
          styles.listContent,
          { paddingTop: insets.top + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {categories.map((cat) => (
            <View key={cat.id} style={styles.categoryChip}>
              <Text style={styles.categoryText}>{cat.name}</Text>
            </View>
          ))}
        </ScrollView>
        <Text style={styles.sectionTitle}>Popular Phones</Text>
        {phones.map((phone) => (
          <View key={phone.id} style={styles.phoneRow}>
            <Text style={styles.phoneName}>{phone.name}</Text>
            <TouchableOpacity
              onPress={() => handleAddToCart(phone.name)}
              activeOpacity={0.9}
              style={styles.addButton}
              accessibilityRole="button"
              accessibilityLabel={`Add ${phone.name} to cart`}
            >
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    gap: 14,
  },
  horizontalList: {
    paddingRight: 4,
    paddingLeft: 2,
    marginBottom: 12,
    gap: 0,
  },
  categoryChip: {
    backgroundColor: "#F5F7FA",
    borderWidth: 1,
    borderColor: "#E6E8EB",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    marginRight: 10,
  },
  categoryText: {
    color: "#111111",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  sectionTitle: {
    color: "#111111",
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    marginBottom: 4,
  },
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#E6E8EB",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },
  phoneName: {
    color: "#111111",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    flexShrink: 1,
    paddingRight: 12,
  },
  title: {
    color: "#111111",
    fontSize: 34,
    fontFamily: "Montserrat-ExtraBold",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  subtitle: {
    color: "#44484D",
    fontSize: 16,
    fontFamily: Fonts.sans,
    textAlign: "center",
    lineHeight: 22,
    marginTop: 4,
    maxWidth: 320,
  },
  primaryButton: {
    marginTop: 20,
    backgroundColor: "#111111",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    width: "100%",
    maxWidth: 320,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },
  addButton: {
    backgroundColor: "#111111",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
  },
});
export default HomePage;
