import NextAuth from "next-auth";
import Providers from 'next-auth/providers';
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/mongodb";

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                let { db } = await connectToDatabase();
                const adminUser = await db.collection('admin').findOne({ 'email': credentials.email });

                if (!adminUser) return;
        
                const isValid = await verifyPassword(credentials.password, adminUser.password);

                if (!isValid) return;

                return { email: adminUser.email };
            }
        })
    ]
});