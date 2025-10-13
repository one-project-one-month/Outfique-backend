import {z} from "zod";

export const loginDto = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password is required"),
  });
  
  export type LoginDTO = z.infer<typeof loginDto>;