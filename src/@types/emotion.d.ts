import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      dominant: string;
      dominant50: string;
      accent: string;
      accent50: string;
      compliment: string;
    };
  }
}
