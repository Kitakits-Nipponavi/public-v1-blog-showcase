---

### Next-Auth Cheat Sheet

#### Installation
```bash
npm install next-auth
# or
yarn add next-auth
```

#### Basic Setup

1. **Create a `[...]nextauth.js` file in the `pages/api/auth` directory:**

   ```javascript
   // pages/api/auth/[...nextauth].js
   import NextAuth from 'next-auth';
   import Providers from 'next-auth/providers';

   export default NextAuth({
     providers: [
       Providers.Google({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
       }),
       // Add more providers here
     ],
     database: process.env.DATABASE_URL, // Optional: For storing sessions in a database
     callbacks: {
       async session(session, user) {
         session.user.id = user.id;
         return session;
       },
     },
   });
   ```

2. **Environment Variables:**

   Ensure you have the necessary environment variables set in your `.env.local` file:

   ```env
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   DATABASE_URL=your-database-url
   NEXTAUTH_URL=http://localhost:3000
   ```

#### Providers

- **Google:**

  ```javascript
  Providers.Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  })
  ```

- **GitHub:**

  ```javascript
  Providers.GitHub({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  })
  ```

- **Facebook:**

  ```javascript
  Providers.Facebook({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  })
  ```

- **Email:**

  ```javascript
  Providers.Email({
    server: process.env.EMAIL_SERVER, // SMTP server configuration
    from: process.env.EMAIL_FROM,
  })
  ```

#### Authentication Pages

- **Sign In:**

  ```javascript
  import { signIn } from 'next-auth/client';

  function SignIn() {
    return (
      <div>
        <button onClick={() => signIn('google')}>Sign in with Google</button>
        <button onClick={() => signIn('github')}>Sign in with GitHub</button>
      </div>
    );
  }

  export default SignIn;
  ```

- **Sign Out:**

  ```javascript
  import { signOut } from 'next-auth/client';

  function SignOut() {
    return (
      <div>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  export default SignOut;
  ```

#### Session Management

- **Getting the session:**

  ```javascript
  import { useSession } from 'next-auth/client';

  function Dashboard() {
    const [session, loading] = useSession();

    if (loading) return <p>Loading...</p>;
    if (!session) return <p>Not signed in</p>;

    return <p>Signed in as {session.user.email}</p>;
  }

  export default Dashboard;
  ```

- **Protecting pages:**

  ```javascript
  import { getSession } from 'next-auth/client';

  export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
      return {
        redirect: {
          destination: '/api/auth/signin',
          permanent: false,
        },
      };
    }

    return {
      props: { session },
    };
  }
  ```

#### Callbacks

- **Customizing session callback:**

  ```javascript
  callbacks: {
    async session(session, user) {
      session.user.id = user.id;
      session.user.role = user.role;
      return session;
    },
  },
  ```

- **Customizing JWT callback:**

  ```javascript
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  ```

#### API Routes

- **Protecting API routes:**

  ```javascript
  import { getSession } from 'next-auth/client';

  export default async (req, res) => {
    const session = await getSession({ req });

    if (!session) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    // Proceed with your logic
    res.status(200).json({ message: 'Success', session });
  };
  ```

---

For more detailed information and advanced configurations, refer to the [NextAuth.js documentation](https://next-auth.js.org/getting-started/introduction).
