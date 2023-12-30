'use client';

import { Button } from 'flowbite-react';
import React from 'react';
import { signIn } from 'next-auth/react';

const LoginButton = () => {
  return (
    <Button
      outline
      onClick={() =>
        signIn('id-server', { callbackUrl: '/' }, { prompt: 'login' })
      }
    >
      Login
    </Button>
  );
};

export default LoginButton;
