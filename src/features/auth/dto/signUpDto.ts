import { z } from "zod";

export const signUpDto = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  image: z.string().url().optional(),
  birthday: z.preprocess(
    (arg) => (typeof arg === "string" ? new Date(arg) : arg),
    z.date().optional()
  ),
  gender: z.enum(["male", "female", "unisex", "prefer_not_to_say"]).optional(),
  age: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
  privacyLevel: z.enum(["minimal", "standard", "enhanced"]).optional(),
  timezone: z.string().optional(),
});

export type SignUpDto = z.infer<typeof signUpDto>;
