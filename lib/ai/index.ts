import { groq } from '@ai-sdk/groq';

export const customModel = (apiIdentifier: string) => {
  return {
    model: groq(apiIdentifier), // Use GROQ API
    // Add any necessary middleware or configurations for GROQ
  };
};