scss.style({
  "body": {
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "height": "100vh",
    "align-items": "center",
    "font-family": "Lato, Roboto, sans-serif"
  },

  "h1": {
    "font-size": 50
  },

  "a": {
    "background": "#4c4cda",
    "color": "#fff",
    "padding": "10px 20px",
    "text-decoration": "none",
    "border-radius": "3px",
    "transition": ".3s",

    "&:not(:first-child)": {
      "margin-left": "20px"
    },

    "&:hover": {
      "background": "#2e2e9c"
    }
  }
})