const scss = {
  style(rules) {
    const el = document.createElement("style")
    const html = handleRules(rules)

    el.innerHTML = html
    document.head.append(el)
  },

  adapt(on, rules) {
    const el = document.createElement("style")
    const html = `@media (max-width: ${typeof on == 'number' ? `${on}px` : on}) { ${handleRules(rules)} }`

    el.innerHTML = html
    document.head.append(el)
  }
}

function handleRules(rules) {
  let html = ""
  const temp = []

  for (const selector in rules) {
    const rule = rules[selector]
    html += `${selector} {`
    for (const property in rule) {
      const value = rule[property]
      if (typeof value != "object") {
        html += `${property}: ${typeof value == "number" ?
          `${value}px` : value};`
      } else {
        temp.push(handleRules({
          [`${selector}${property.includes("&") ? `${property.replace("&", "")}` : ` ${property}`}`]: value
        }))
      }
    }
    html += `}`
  }

  if (temp.length) {
    temp.forEach(css => {
      html += css
    })
  }

  return html
}