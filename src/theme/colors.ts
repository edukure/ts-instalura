export interface Colors {
    background: {
        light: {
            color: string
        },
        main: {
            color: string
        },
    };
    borders: {
        main: {
            color: string
        },
    };
    primary: {
        main: {
            color: string
            contrastText: string
        },
    };
    secondary: {
        main: {
            color: string
            contrastText: string
        },
    };
    tertiary: {
        main: {
            color: string
            contrastText: string
        },
        light: {
            color: string
            contrastText: string
        },
    };
    modes: {
        dark: {},
    },
}

export const colors: Colors = {
  background: {
      light: {
          color: '#FFFFFF',
      },
      main: {
          color: '#F2F2F2',
      },
  },
  borders: {
      main: {
          color: '#F1F1F1',
      },
  },
  primary: {
      main: {
          color: '#D7385E',
          contrastText: '#fff',
      },
  },
  secondary: {
      main: {
          color: '#FB7B6B',
          contrastText: '#fff',
      },
  },
  tertiary: {
      main: {
          color: '#070C0E',
          contrastText: '#fff',
      },
      light: {
          color: '#88989E',
          contrastText: '#fff',
      },
  },
  modes: {
      dark: {},
  },
};