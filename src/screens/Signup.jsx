import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { colors } from "../global/colors";

import SubmitButton from "../components/SubmitButton";
import InputForm from "../components/InputForm";

import { useSignUpMutation } from "../services/authServices";

import { setUser } from "../features/UserSlice";
import { signUpSchema } from "../validations/signUpSchema";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const [triggerSignUp, result] = useSignUpMutation();

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
          localId: result.data.localId
        })
      );
    }
  }, [result]);

  const onSubmit = () => {
    try {
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");

      signUpSchema.validateSync({ email, password, confirmPassword });

      triggerSignUp({ email, password, returnSecureToken: true });
    } catch (error) {
      console.log("Signup Error");
      console.log(error.path);
      console.log(error.message);

      switch (error.path) {
        case "email":
          setErrorMail(error.message);
        case "password":
          setErrorPassword(error.message);
        case "confirmPassword":
          setErrorConfirmPassword(error.message);
        default:
          break;
      }
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Create you Account</Text>
        <InputForm label={"Email"} onChange={setEmail} error={errorMail} />
        <InputForm
          label={"Password"}
          onChange={setPassword}
          error={errorPassword}
          isSecure={true}
        />
        <InputForm
          label={"Confirm Password"}
          onChange={setConfirmPassword}
          error={errorConfirmPassword}
          isSecure={true}
        />
        
        <SubmitButton onPress={onSubmit} title="Send" />
        
        <View style={{flexDirection: 'row', gap: 3, justifyContent: 'center'}}>
        <Text style={styles.sub}>Already have an account?</Text>
        
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subLink}>Login</Text>
        </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGray,
  },
  container: {
    width: "90%",
    flexDirection: "column",
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 25,
    color: colors.midBlue,
    fontWeight: '600'
  },
  sub: {
    fontSize: 14,
    color: 'gray',
  },
  subLink: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666565',
  },
});
