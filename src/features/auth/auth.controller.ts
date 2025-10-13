import { Request, Response } from "express";
import { signUpDto } from "./dto/signUpDto";
import { loginDto } from "./dto/loginDto";
import { authService } from "./auth.service";
import { socialSignInDto } from "./dto/socialSignIn";

export class AuthController {
  static async signup(req: Request, res: Response) {
    try {
      const payload = signUpDto.parse(req.body);
      console.log(payload);
      
      const { user, token } = await authService.signup(payload);
      res.status(201).json({ ok: true, user, token });
    } catch (err: any) {
      res.status(400).json({ ok: false, message: err && err.message});
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const payload = loginDto.parse(req.body);
      const { user, token } = await authService.login(payload);
      res.status(200).json({ ok: true, user, token });
    } catch (err: any) {
      res.status(400).json({ ok: false, message: err.message });
    }
  }

  static async signout(req: Request, res: Response) {
    try {
      const token = req.headers.authorization?.replace("Bearer ", "");
      const result = await authService.logout(token || "");
      res.status(200).json(result);
    } catch (err: any) {
      res.status(400).json({ ok: false, message: err.message });
    }
  }

  static async socialSignIn(req: Request, res: Response) {
    try {
      // Parse query parameters instead of body
      const parsed = socialSignInDto.parse(req.query);
      const provider = parsed.provider as "google" | "facebook";
  
      const result = await authService.signInSocial(provider, parsed.callbackURL, parsed.errorCallbackURL);
  
      if (result?.redirect && result.url) {
        return res.redirect(result.url);
      }
  
      return res.json({ ok: true, result });
    } catch (err: any) {
      console.error(err);
      return res.status(400).json({ ok: false, message: err?.message ?? "Bad request" });
    }
  }
  

}
