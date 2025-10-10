import { z } from "zod";

export const loginSchema = z.object({
  loginId: z
    .string({
      error: (iss) => iss.input === undefined ? "아이디는 필수 입력값입니다." : "Invalid input."
    })
    // .nonempty('아이디는 필수입력항목입니다.')
    .min(5, { message: '아이디는 최소 5글자 이상이어야 합니다.' })
    .max(20, { message: '아이디는 최대 20글자까지만 가능합니다.' })
    .regex(/^[a-z0-9]+$/, { message: '아이디는 영소문자, 숫자만 사용할 수 있습니다.' })
  ,
  password: z
    .string({
      error: (iss) => iss.input === undefined ? "비밀번호는 필수 입력값입니다." : "Invalid input."
    })
    .min(8, { message: '비밀번호는 최소 8글자 이상이어야 합니다.' })
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/, {
      message: '비밀번호는 영문과 숫자를 모두 포함해야 합니다.',
    }),
});