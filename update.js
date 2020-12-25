const { JSDOM } = require("jsdom")
const axios = require("axios")
const fs = require("fs")

  !(async () => {
    const window = await axios.get("https://getsileo.app")
      .then(e => new JSDOM(e.data))
      .then(({ window }) => window)

    fs.writeFileSync(__dirname + "/src/data/team.json", JSON.stringify([...window.document.querySelectorAll("#team .members > *")].map(item => ({
      url: item.querySelector("a").getAttribute("href"),
      avatar: item.querySelector("img").getAttribute("src"),
      name: item.querySelector("h3").textContent,
      type: item.querySelector("p").textContent
    }))))

    fs.writeFileSync(__dirname + "/src/data/frequently.json", JSON.stringify([...window.document.querySelectorAll("#collapsible > #about > div > *")].map(item => {
      if (item.tagName == "BR") {
        return ""
      } else {
        return {
          tagName: item.tagName,
          html: item.innerHTML
        }
      }
    })))

  })()