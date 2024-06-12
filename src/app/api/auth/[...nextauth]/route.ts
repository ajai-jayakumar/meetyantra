import NextAuth from 'next-auth/next';
import AzureADProvider from 'next-auth/providers/azure-ad';
import GoogleProvider from 'next-auth/providers/google';

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, AZURE_AD_CLIENT_ID, AZURE_AD_CLIENT_SECRET, AZURE_AD_TENANT_ID } =
  process.env;

if (!GOOGLE_CLIENT_ID) throw new Error('Invalid env variable: GOOGLE_CLIENT_ID');

if (!GOOGLE_CLIENT_SECRET) throw new Error('Invalid env variable: GOOGLE_CLIENT_SECRET');

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    AzureADProvider({
      clientId: AZURE_AD_CLIENT_ID as string,
      clientSecret: AZURE_AD_CLIENT_SECRET as string,
      tenantId: AZURE_AD_TENANT_ID as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access token to the token right after sign-in
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access token from a provider
      session.accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
