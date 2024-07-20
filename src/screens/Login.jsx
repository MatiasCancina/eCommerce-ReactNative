import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../global/colors";

import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useDispatch } from "react-redux";
import { useSignInMutation } from "../services/authServices";
import { setUser } from "../features/UserSlice";
import { insertSession } from "../persistance";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const [triggerSignIn, result] = useSignInMutation();

  useEffect(() => {
    if (result?.data && result.isSuccess) {
      insertSession({
        email: result.data.email,
        localId: result.data.localId,
        token: result.data.idToken
      }).then((response) => {
        console.log(response)
        dispatch(
          setUser({
            email: result.data.email,
            idToken: result.data.idToken,
            localId: result.data.localId,
          })
        );
      }).catch(err => {
        console.log(err)
      })
    }
  }, [result])

  const onSubmit = () => {
    triggerSignIn({
      email,
      password,
      returnSecureToken: true,
    });
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Login to you Account</Text>
        <InputForm label={"Email"} onChange={setEmail} error={""} />
        <InputForm
          label={"Password"}
          onChange={setPassword}
          error={""}
          isSecure={true}
        />

        <SubmitButton onPress={onSubmit} title="Send" />

        <View style={{ flexDirection: 'row', gap: 3, justifyContent: 'center' }}>
          <Text style={styles.sub}>Not have an account?</Text>

          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.subLink}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
