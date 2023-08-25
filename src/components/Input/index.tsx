import React, {ClassAttributes, forwardRef} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './input.style';

type CustomInputType = {
  containerStyles?: object;
  label?: string;
  inputStyles?: object;
  secureTextEntry?: boolean;
  value: string;
  onChange: (t: string) => void;
  error?: string;
};

const CustomInput = forwardRef(
  (
    {
      containerStyles = {},
      label = '',
      inputStyles = {},
      secureTextEntry = false,
      value,
      onChange,
      error = '',
    }: CustomInputType,
    ref: any,
  ) => {
    return (
      <View style={[styles.feildContainer, containerStyles]}>
        <Text style={styles.fieldLabel}>{label}</Text>
        <TextInput
          ref={ref}
          style={[styles.input, inputStyles]}
          onChangeText={(text: string) => onChange(text)}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
          value={value}
        />
        {error !== '' && <Text style={styles.errorLabel}>{error}</Text>}
      </View>
    );
  },
);

export default CustomInput;
