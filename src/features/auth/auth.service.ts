import { auth } from "./auth"; // your BetterAuth setup
import { prisma } from "../../database";
import { PrivacyLevel } from "../../../generated/client";
import { SignUpDto } from "./dto/signUpDto";
import { LoginDTO } from "./dto/loginDto";


export class AuthService {
  async signup(payload: SignUpDto) {
    const result = await auth.api.signUpEmail({
      body: {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        image: payload.image,
      },
      asResponse: false, 
    });

    const { user, token } = result;

    if (!user) throw new Error("Failed to create account in BetterAuth");

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        birthday: payload.birthday,
        gender: payload.gender,
        age: payload.age,
        height: payload.height,
        privacyLevel: payload.privacyLevel as PrivacyLevel,
        timezone: payload.timezone,
      },
    });
    

    return { user, token };
  }

   async login(payload: LoginDTO) {
    const result = await auth.api.signInEmail({
      body: { email: payload.email, password: payload.password },
      asResponse: false, 
    });

    const { user, token } = result;
    if (!user || !token) throw new Error("Invalid email or password");

    return { user, token };
  }

  async logout(token: string) {
    if (!token) throw new Error("No token provided");

    const deleted = await prisma.session.deleteMany({
      where: { token },
    });

    if (deleted.count === 0) throw new Error("Session not found");

    return { ok: true, message: "Logged out successfully" };
  }

   async signInSocial(provider: "google" | "facebook", callbackURL?: string, errorCallbackURL?: string) {
    const res = await auth.api.signInSocial({
      body: {
        provider,
        callbackURL,
        errorCallbackURL,
      },
    });
    return res;
  }
}

export const authService = new AuthService()
