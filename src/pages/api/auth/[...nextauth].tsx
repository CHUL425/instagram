import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID         as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      checks: "nonce"                                  ,
    }),
    // ...add more providers here
  ],

  //secret: jwt생성시 사용됨.
  secret: `${process.env.GITHUB_SECRET}`
}
export default NextAuth(authOptions)