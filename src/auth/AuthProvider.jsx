import { useCallback, useEffect, useMemo, useState } from 'react';
import { SESSION_KEY } from '../db/localDb';
import { AuthContext } from './AuthContext';
import * as auth from './authService';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => auth.getCurrentUser());

  // Garde plusieurs onglets synchronisés (connexion / déconnexion)
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === SESSION_KEY || e.key === null) setUser(auth.getCurrentUser());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const register = useCallback(async (data) => {
    const u = await auth.registerUser(data);
    setUser(u);
    return u;
  }, []);

  const login = useCallback(async (data) => {
    const u = await auth.loginUser(data);
    setUser(u);
    return u;
  }, []);

  const logout = useCallback(() => {
    auth.logout();
    setUser(null);
  }, []);

  const deleteAccount = useCallback(() => {
    if (!user) return;
    auth.deleteAccount(user.id);
    setUser(null);
  }, [user]);

  const value = useMemo(
    () => ({ user, register, login, logout, deleteAccount }),
    [user, register, login, logout, deleteAccount],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}