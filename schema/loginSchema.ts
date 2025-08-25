import { z } from "zod";

export const loginSchema = z.object({
   loginId: z.string().min(4, { message: '아이디는 4글자 이상이어야 합니다.' }),
  password: z.string().min(8, { message: '비밀번호는 8글자 이상이어야 합니다.' }),
});