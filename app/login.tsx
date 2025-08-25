import CustomButton from "@/conponents/CustomButton";
import FormInput from "@/conponents/FormInput";
import { loginSchema } from "@/schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from "react-native";

import z from "zod";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  // async function onSubmit(data: z.infer<typeof loginSchema>) {
  //   const response = await fetchLogin(data);
  //   if (response?.status === 200) {
  //     console.log(response?.data.data);
  //     await setAuth(
  //       response?.data.data
  //     );
  //     router.push("/map");
  //   }
  // }
  return (<View style={styles.container}>
      <FormInput containerStyle={styles.input} name="loginId" errorMessage={errors.loginId?.message} control={control} placeholder='아이디를 입력하세요' label='ID' />
      <FormInput containerStyle={styles.input} isPassword name="password" errorMessage={errors.password?.message} control={control} placeholder='비밀번호를 입력하세요' label='비밀번호' />
      <CustomButton containerStyle={styles.button} onPress={() => {}} text={"로그인"} />
  </View>)
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 48,
    alignItems: 'center',
    flex: 1,
    gap: 8,
  },
  input: {
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: 32,
  }
})