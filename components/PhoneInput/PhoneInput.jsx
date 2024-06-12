import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList, StyleSheet } from "react-native";
import Drop from "../../assets/images/drop_down.svg";

const countries = [
    { code: "AF", name: "Afghanistan", callingCode: "93", flag: "🇦🇫" },
  { code: "AM", name: "Armenia", callingCode: "374", flag: "🇦🇲" },
  { code: "AZ", name: "Azerbaijan", callingCode: "994", flag: "🇦🇿" },
    { code: "AT", name: "Austria", callingCode: "43", flag: "🇦🇹" },
    { code: "BH", name: "Bahrain", callingCode: "973", flag: "🇧🇭" },
    { code: "BD", name: "Bangladesh", callingCode: "880", flag: "🇧🇩" },
    { code: "BT", name: "Bhutan", callingCode: "975", flag: "🇧🇹" },
    { code: "BN", name: "Brunei", callingCode: "673", flag: "🇧🇳" },
    { code: "BE", name: "Belgium", callingCode: "32", flag: "🇧🇪" },
    { code: "CH", name: "Switzerland", callingCode: "41", flag: "🇨🇭" },
    { code: "DE", name: "Germany", callingCode: "49", flag: "🇩🇪" },
    { code: "DK", name: "Denmark", callingCode: "45", flag: "🇩🇰" },
    { code: "ES", name: "Spain", callingCode: "34", flag: "🇪🇸" },
    { code: "FI", name: "Finland", callingCode: "358", flag: "🇫🇮" },
    { code: "FR", name: "France", callingCode: "33", flag: "🇫🇷" },
    { code: "GB", name: "United Kingdom", callingCode: "44", flag: "🇬🇧" },
    { code: "GR", name: "Greece", callingCode: "30", flag: "🇬🇷" },
    { code: "IE", name: "Ireland", callingCode: "353", flag: "🇮🇪" },
    { code: "IS", name: "Iceland", callingCode: "354", flag: "🇮🇸" },
    { code: "IT", name: "Italy", callingCode: "39", flag: "🇮🇹" },
    { code: "LU", name: "Luxembourg", callingCode: "352", flag: "🇱🇺" },
    { code: "NL", name: "Netherlands", callingCode: "31", flag: "🇳🇱" },
    { code: "NO", name: "Norway", callingCode: "47", flag: "🇳🇴" },
    { code: "PT", name: "Portugal", callingCode: "351", flag: "🇵🇹" },
    { code: "SE", name: "Sweden", callingCode: "46", flag: "🇸🇪" },
    { code: "US", name: "United States", callingCode: "1", flag: "🇺🇸" },
  { code: "KH", name: "Cambodia", callingCode: "855", flag: "🇰🇭" },
  { code: "CN", name: "China", callingCode: "86", flag: "🇨🇳" },
  { code: "CY", name: "Cyprus", callingCode: "357", flag: "🇨🇾" },
  { code: "GE", name: "Georgia", callingCode: "995", flag: "🇬🇪" },
  { code: "ID", name: "Indonesia", callingCode: "62", flag: "🇮🇩" },
  { code: "IN", name: "India", callingCode: "91", flag: "🇮🇳" },
  { code: "IR", name: "Iran", callingCode: "98", flag: "🇮🇷" },
  { code: "IQ", name: "Iraq", callingCode: "964", flag: "🇮🇶" },
  { code: "IL", name: "Israel", callingCode: "972", flag: "🇮🇱" },
  { code: "JP", name: "Japan", callingCode: "81", flag: "🇯🇵" },
  { code: "JO", name: "Jordan", callingCode: "962", flag: "🇯🇴" },
  { code: "KZ", name: "Kazakhstan", callingCode: "7", flag: "🇰🇿" },
  { code: "KW", name: "Kuwait", callingCode: "965", flag: "🇰🇼" },
  { code: "KG", name: "Kyrgyzstan", callingCode: "996", flag: "🇰🇬" },
  { code: "LA", name: "Laos", callingCode: "856", flag: "🇱🇦" },
  { code: "LB", name: "Lebanon", callingCode: "961", flag: "🇱🇧" },
  { code: "MY", name: "Malaysia", callingCode: "60", flag: "🇲🇾" },
  { code: "MV", name: "Maldives", callingCode: "960", flag: "🇲🇻" },
  { code: "MN", name: "Mongolia", callingCode: "976", flag: "🇲🇳" },
  { code: "MM", name: "Myanmar", callingCode: "95", flag: "🇲🇲" },
  { code: "NP", name: "Nepal", callingCode: "977", flag: "🇳🇵" },
  { code: "KP", name: "North Korea", callingCode: "850", flag: "🇰🇵" },
  { code: "OM", name: "Oman", callingCode: "968", flag: "🇴🇲" },
  { code: "PK", name: "Pakistan", callingCode: "92", flag: "🇵🇰" },
  { code: "PS", name: "Palestine", callingCode: "970", flag: "🇵🇸" },
  { code: "PH", name: "Philippines", callingCode: "63", flag: "🇵🇭" },
  { code: "QA", name: "Qatar", callingCode: "974", flag: "🇶🇦" },
  { code: "SA", name: "Saudi Arabia", callingCode: "966", flag: "🇸🇦"},
  { code: "BY", name: "Belarus", callingCode: "375", flag: "🇧🇾" },
  { code: "CZ", name: "Czech Republic", callingCode: "420", flag: "🇨🇿" },
  { code: "EE", name: "Estonia", callingCode: "372", flag: "🇪🇪" },
  { code: "HU", name: "Hungary", callingCode: "36", flag: "🇭🇺" },
  { code: "LT", name: "Lithuania", callingCode: "370", flag: "🇱🇹" },
  { code: "LV", name: "Latvia", callingCode: "371", flag: "🇱🇻" },
  { code: "MD", name: "Moldova", callingCode: "373", flag: "🇲🇩" },
  { code: "PL", name: "Poland", callingCode: "48", flag: "🇵🇱" },
  { code: "SK", name: "Slovakia", callingCode: "421", flag: "🇸🇰" },
  { code: "UA", name: "Ukraine", callingCode: "380", flag: "🇺🇦" },
  { code: "SG", name: "Singapore", callingCode: "65", flag: "🇸🇬" },
  { code: "AU", name: "Australia", callingCode: "61", flag: "🇦🇺" },
  { code: "NZ", name: "New Zealand", callingCode: "64", flag: "🇳🇿" }
];

const PhoneInput = ({
  defaultCode = "IN",
  defaultValue = "",
  disabled = false,
  placeholder = "Phone Number",
  withShadow = false,
  onChangeFormattedText,
  onChangeCountry,
  onChangeText,
}) => {
  const [countryCode, setCountryCode] = useState(defaultCode);
  const [callingCode, setCallingCode] = useState(countries.find(c => c.code === defaultCode).callingCode);
  const [phoneNumber, setPhoneNumber] = useState(defaultValue);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectCountry = (country) => {
    setCountryCode(country.code);
    setCallingCode(country.callingCode);
    setModalVisible(false);
    if (onChangeCountry) {
      onChangeCountry(country);
    }
  };

  const handleChangeText = (text) => {
    setPhoneNumber(text);
    if (onChangeText) {
      onChangeText(text);
    }
    if (onChangeFormattedText) {
      if (callingCode) {
        onChangeFormattedText(text.length > 0 ? `+${callingCode}${text}` : text);
      } else {
        onChangeFormattedText(text);
      }
    }
  };

  return (
    <View style={[styles.container, withShadow ? styles.shadow : {}]}>
      <TouchableOpacity
        style={styles.flagButtonView}
        disabled={disabled}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.flagText}>{countries.find(c => c.code === countryCode).flag}</Text>
        <Text style={styles.callingCodeText}>+{callingCode}</Text>
        <Drop />
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        value={phoneNumber}
        editable={!disabled}
        keyboardType="number-pad"
      />
      <Modal visible={modalVisible} animationType="slide">
        <FlatList
          data={countries}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.countryItem} onPress={() => handleSelectCountry(item)}>
              <Text style={styles.flagText}>{item.flag}</Text>
              <Text style={styles.countryName}>{item.name}</Text>
              <Text style={styles.callingCodeText}>+{item.callingCode}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
  },
  flagButtonView: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  flagText: {
    fontSize: 18,
  },
  callingCodeText: {
    marginHorizontal: 5,
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  countryName: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  closeButton: {
    padding: 10,
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 16,
    color: "blue",
  },
});

export default PhoneInput;
