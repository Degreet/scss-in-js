const scss = {
  style(rules) {
    const el = document.createElement("style")
    let html = ``

    for (const selector in rules) {
      const rule = rules[selector]
      html += `${selector} {`
      for (const property in rule) {
        const value = rule[property]
        html += `${property}: ${value};`
      }
      html += `}`
    }

    el.innerHTML = html
    document.head.append(el)
  }
}

/*
  scss.style({
    "nav ul": {
      "color": "red",
      "li": {
        "text-align": "center"
      }
    }
  })
*/