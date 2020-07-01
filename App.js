import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers/PeopleReducer";

import { StyleSheet, Text, View } from "react-native";
const store = createStore(reducers);
//given you have installed react native debugger tools -> const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Text>Kams CRM App</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
