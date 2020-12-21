scss.style({
  "body": {
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "height": "100vh",
    "align-items": "center",
    "font-family": "Lato, Roboto, sans-serif",
    "overflow": "hidden"
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

scss.adapt(850, {
  "h1": {
    "text-align": "center",
    "padding": "0, 30px",
    "font-size": 37
  }
})

scss.adapt(550, {
  "body div": {
    "display": "flex",
    "flex-direction": "column",

    "a:not(:first-child)": {
      "margin-left": "unset",
      "margin-top": 10
    }
  }
})