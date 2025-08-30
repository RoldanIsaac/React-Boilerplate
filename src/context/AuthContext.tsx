// import { createContext, useContext, useEffect, useState } from "react";

// interface AuthContextType {
//   user: User | null;
//   loading: boolean;
//   logout: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   loading: true,
//   logout: async () => {},
// });

// export function AuhtProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const logout = async () => {
//     await signOut(auth);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
