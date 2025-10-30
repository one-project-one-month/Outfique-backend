import { betterAuth } from 'better-auth';
import { PrismaClient } from '../../../generated/client';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { sendEmail } from './email';

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: 'postgresql' }),
  baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3000',

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
  },

  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      await sendEmail({
        to: user.email,
        subject: 'Verify your email address',
        text: `Click the link to verify your email: ${url}`,
      });
    },
  },

  socialProviders: {
    google: {
      enabled: true,
      // prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      redirectURI: process.env.BETTER_AUTH_URL + '/api/auth/callback/google',
    },
    // facebook: {
    //   clientId: process.env.FACEBOOK_CLIENT_ID as string,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    //   redirectURI: `${process.env.BETTER_AUTH_URL || "http://localhost:3000"}/api/auth/callback/facebook`,
    // },
  },
  trustedOrigins: ['http://localhost:5174'],
});

console.log('🔐 Better Auth Configuration:');
console.log('   baseURL:', process.env.BETTER_AUTH_URL || 'http://localhost:3000');
console.log('   Google Client ID:', process.env.GOOGLE_CLIENT_ID ? '✅ Set' : '❌ Not Set');
console.log('   Google Client Secret:', process.env.GOOGLE_CLIENT_SECRET ? '✅ Set' : '❌ Not Set');
console.log('   Resend', process.env.RESEND_API_KEY ? '✅ Set' : '❌ Not Set');
