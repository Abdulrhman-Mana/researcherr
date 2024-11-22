// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
  provider: string
  providerId: string
}

export const models: Array<Model> = [
  {
    id: 'llama-3.2-90b-vision-preview',
    label: 'Meta',
    apiIdentifier: 'llama-3.2-90b-vision-preview',
    description: 'Description for GROQ Model 1',
    provider: 'Groq',
    providerId: 'groq'
  },
  {
    id: 'gemma2-9b-it',
    label: 'Google',
    apiIdentifier: 'gemma2-9b-it',
    description: 'Description for GROQ Model 2',
    provider: 'Groq',
    providerId: 'groq'
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'llama-3.2-90b-vision-preview'; // Set your default GROQ model