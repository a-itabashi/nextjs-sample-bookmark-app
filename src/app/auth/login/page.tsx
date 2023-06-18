'use client';
import { LoginButton } from '@/components/atoms/Button/LoginButton';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';

export default async function LoginPage() {
  const providers = await getProviders();

  const handleSubmit = (provider: ClientSafeProvider) => {
    signIn(provider.id, {
      callbackUrl: '/',
    });
  };

  return (
    <div className='flex flex-col items-center space-y-20 pt-40'>
      <Image src='/next.svg' width={150} height={150} alt='test' />
      <div className='text-center '>
        <div className='mx-auto max-w-3xl'>
          <div className='flexjustify-center'>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <div key={provider.name}>
                    <LoginButton onClick={() => handleSubmit(provider)}>
                      Sign in with {provider.name}
                    </LoginButton>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
