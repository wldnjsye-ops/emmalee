'use client';

import React from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { getSupabaseBrowserClient, getSupabaseEnvError } from '@/lib/supabase/client';

type AuthContextValue = {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  errorMessage: string;
  signInWithGoogle: () => Promise<string | null>;
  signOut: () => Promise<string | null>;
};

const AuthContext = React.createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = React.useState<Session | null>(null);
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    const supabase = getSupabaseBrowserClient();

    if (!supabase) {
      setErrorMessage(getSupabaseEnvError() ?? 'Supabase 클라이언트 초기화에 실패했습니다.');
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    supabase.auth
      .getSession()
      .then(({ data, error }) => {
        if (!isMounted) {
          return;
        }

        if (error) {
          setErrorMessage(error.message);
        } else {
          setSession(data.session);
          setUser(data.session?.user ?? null);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);
      setErrorMessage('');
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signInWithGoogle = React.useCallback(async () => {
    const supabase = getSupabaseBrowserClient();

    if (!supabase) {
      const message = getSupabaseEnvError() ?? 'Supabase 클라이언트 초기화에 실패했습니다.';
      setErrorMessage(message);
      return message;
    }

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      return error.message;
    }

    setErrorMessage('');
    return null;
  }, []);

  const signOut = React.useCallback(async () => {
    const supabase = getSupabaseBrowserClient();

    if (!supabase) {
      const message = getSupabaseEnvError() ?? 'Supabase 클라이언트 초기화에 실패했습니다.';
      setErrorMessage(message);
      return message;
    }

    const { error } = await supabase.auth.signOut();

    if (error) {
      setErrorMessage(error.message);
      return error.message;
    }

    setErrorMessage('');
    return null;
  }, []);

  const value = React.useMemo(
    () => ({
      session,
      user,
      isLoading,
      errorMessage,
      signInWithGoogle,
      signOut,
    }),
    [session, user, isLoading, errorMessage, signInWithGoogle, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
