import {z} from "zod";

export const socialSignInDto = z.object({
    provider: z.enum(["google", "facebook"]),
    callbackURL: z.string().url().optional(),
    errorCallbackURL: z.string().url().optional(),
  });
  
  export type SocialSignInDTO = z.infer<typeof socialSignInDto>;
  