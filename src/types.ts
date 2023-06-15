import { ReactNode } from 'react';

export type AuthLayoutProps = {
  children: ReactNode;
};

export type ButtonType = {
  type: string;
  title: string;
  callback: () => void;
};

export type InputProps = {
  name: string;
  type: string;
  placeholder: string;
};
