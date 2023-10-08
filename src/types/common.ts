import { Dispatch, SetStateAction } from 'react';

export type Field = {
  label: string;
  fieldName: string;
  type: string;
  defaultValue?: string;
  placeholder?: string;
  column?: number;
  classNames?: {
    label: string;
    input: string;
  };
  options?: Record<string, string>[];
  isRequire?: boolean;
  regExp?: RegExp;
};
export type ObjectType = Record<string, any>;

export type ResponseAttributes = {
  status: string | number;
  data?: any;
  error?: any;
};
export type Falsy = false | 0 | '' | null | undefined;
export type SetValue<T> = Dispatch<SetStateAction<T>>;
