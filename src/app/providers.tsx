'use client';
import AuthWrapper from '@/components/features/auth/AuthWrapper';
import { Header } from '@/components/organisms/Header';
import { SessionProvider } from 'next-auth/react';

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <AuthWrapper>
        <Header />
        {children}
      </AuthWrapper>
    </SessionProvider>
  );
};
