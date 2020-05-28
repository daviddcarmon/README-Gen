function generateMarkdown(allData) {
  return `
# ${allData.project}
## ${allData.description}
### Dependencies: ${allData.dependence}
#### What to know about repo: ${allData.repo}
#### How to contribute: ${allData.contribute}
[![Generic badge](https://img.shields.io/badge/-Photo-<COLOR>.svg)](${allData.data.avatar_url})

[![Generic badge](https://img.shields.io/badge/-Github-<COLOR>.svg)](${allData.data.html_url})

###### Copy Right ${allData.username}
`;
}

module.exports = generateMarkdown;
