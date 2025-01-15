import * as React from 'react';
import { type InputProps, type FieldValue } from '@strapi/strapi/admin';
type SimpleInputProps = InputProps & FieldValue & {
    labelAction?: React.ReactNode;
};
export declare const SimpleInput: React.ForwardRefExoticComponent<SimpleInputProps & React.RefAttributes<HTMLButtonElement>>;
export {};
