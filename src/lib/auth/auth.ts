import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { OsuUser, SessionUser } from "../types";

// Define the osu! API response shape
interface OsuApiProfile {
  id: number;
  username: string;
  avatar_url: string;
  [key: string]: any; // For other properties we don't need to type explicitly
}

// Extend the Session type to include our custom fields
declare module "next-auth" {
  interface Session {
    user: SessionUser;
    accessToken?: string;
  }
}

// Extend the JWT type to include our custom fields
declare module "next-auth/jwt" {
  interface JWT {
    user?: SessionUser;
    accessToken?: string;
    accessTokenExpires?: number;
    refreshToken?: string;
    error?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "osu",
      name: "osu!",
      type: "oauth",
      wellKnown: "https://osu.ppy.sh/oauth",
      authorization: { 
        url: "https://osu.ppy.sh/oauth/authorize",
        params: { scope: "identify public" } 
      },
      token: "https://osu.ppy.sh/oauth/token",
      userinfo: "https://osu.ppy.sh/api/v2/me",
      clientId: process.env.OSU_CLIENT_ID!,
      clientSecret: process.env.OSU_CLIENT_SECRET!,
      profile(profile: OsuApiProfile) {
        return {
          id: profile.id.toString(),
          username: profile.username,
          avatar_url: profile.avatar_url,
          is_admin: false, // Default to false, will check against whitelist in callbacks
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Initial sign in
      if (account && profile) {
        const osuProfile = profile as OsuApiProfile;
        // Check if user is an admin (whitelist check)
        const isAdmin = await checkIfAdmin(osuProfile.id);
        
        token.user = {
          id: osuProfile.id,
          username: osuProfile.username,
          avatar_url: osuProfile.avatar_url,
          is_admin: isAdmin,
        };
        
        // Save the access token and expiration to the JWT
        token.accessToken = account.access_token;
        token.accessTokenExpires = account.expires_at ? account.expires_at * 1000 : undefined; // Convert to ms
        token.refreshToken = account.refresh_token;
      }

      // Return the previous token if it hasn't expired
      const now = Date.now();
      if (token.accessTokenExpires && token.accessTokenExpires > now) {
        return token;
      }

      // Access token has expired, refresh it
      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Mock admin check (would be replaced with actual DB lookup in production)
async function checkIfAdmin(userId: number): Promise<boolean> {
  // In production, this would check against a database of admin users
  const mockAdminIds = [1234, 5678]; // Replace with actual admin user IDs
  return mockAdminIds.includes(userId);
}

// Refresh the access token
async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    // Implement token refreshing logic using the refresh token
    // This would make a request to osu! API to get a new access token
    
    // For now, just return the token with an error flag
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
} 