import React from 'react'

export const flavors = {
    teal: {
      main: 'hsl(174, 74%, 55%)',
      button: 'hsl(152, 49%, 75%)',
      pale: 'hsl(170, 61%, 75%)',
      bold: 'hsl(174, 74%, 55%)',
      bg: '#F6FFFD'
    },
    lavender: {
      main: 'hsl(272, 93%, 73%)',
      button: 'hsl(252, 53%, 83%)',
      pale: 'hsl(267, 65%, 70%)',
      bold: 'hsl(267, 74%, 55%)',
      bg: '#FBF6FF'
    },
  };

  export const FlavorContext = React.createContext(
    flavors.teal // default value
  );