import React, { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../config/theme';


export default function InputText({ label }) {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (label === "Enter password") {
    return (
      <View style={{ ...styles.inputContainer, 
                     ...styles.input, 
                     display: "flex", 
                     flexDirection: "row",
                     justifyContent: "space-between",
                     alignItems: "center",
                  }}>
        {/**<Icon name="lock" size={24} color="gray" style={styles.icon} />**/}
        <TextInput
          style={{ width: "75%", height: "100%", fontSize: 18, marginLeft: 3 }}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
        />
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          style={styles.icon}
        >
          <Icon name={showPassword ? "visibility" : "visibility-off"} size={24} color="gray" />
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={{ ...styles.inputContainer, 
                      ...styles.input, 
                      display: "flex", 
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                  }}>
        {/**<Icon name="person" size={24} color="gray" style={styles.icon} />**/}
        <TextInput
          style={{ fontSize: 18, marginLeft: 3 }}
          onChangeText={setText}
          value={text}
          placeholder={label}
        />
      </View>
    );
  }
}
