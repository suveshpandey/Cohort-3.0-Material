import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "suvesh@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const username = credentials?.username;
                const password = credentials?.password;
                
                //db check call

                const user = { 
                    id: "1", 
                    name: "J Smith", 
                    email: "jsmith@example.com" 
                }
            
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } 
                else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),
        GoogleProvider({
            clientId: "suvesh",
            clientSecret: "secret"
        }),
        GitHubProvider({
            clientId: "suvesh",
            clientSecret: "secret"
        })
    ]
})

export { handler as GET, handler as POST }