import React from 'react'

export const flavors = {
    teal: {
      main: 'hsl(174, 74%, 55%)',
      button: 'hsl(152, 49%, 75%)'
    },
    lavender: {
      main: 'hsl(272, 93%, 73%)',
      button: 'hsl(252, 53%, 83%)',
    },
  };

  export const FlavorContext = React.createContext(
    flavors.teal // default value
  );