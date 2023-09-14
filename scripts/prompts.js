const prompts = require('prompts')

async function getPrompts(templates = []) {
  const result = await prompts([
    {
      type: 'select',
      name: 'template',
      message: 'Pick your template',
      choices: templates.map((t) => ({ title: t, value: t }))
    }
  ])
  return result
}

module.exports = { getPrompts }
