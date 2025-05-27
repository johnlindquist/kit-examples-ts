/*
# AI Translation

- Uses the AI helper to translate text to French
- Demonstrates basic AI function usage with a simple translation task
- Displays the original English text and translated French text in a markdown format
*/

// Name: AI Translation
// Description: Translate text to French using AI

import "@johnlindquist/kit"

const translateToFrench = ai("Translate to French")

const frenchText = await translateToFrench("Hello, how are you today?")

await div(md(`
## AI Translation
**English:** Hello, how are you today?

**French:** ${frenchText}
`))