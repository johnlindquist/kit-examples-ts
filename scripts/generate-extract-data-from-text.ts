/*
# Extract Data from Text using AI

- Defines a Zod schema for user information (name, age, email)
- Uses AI to extract structured data from unstructured text
- Demonstrates the generate function with schema validation
- Displays the extracted data in JSON format within a markdown div
*/

// Name: Extract Data from Text
// Description: Extract structured user information from text using AI and Zod schemas

import "@johnlindquist/kit"

const userSchema = z.object({
    name: z.string(),
    age: z.number().optional(),
    email: z.string().email().optional(),
})

const extractUserInfo = async (text: string) => {
    return generate(
        `Extract user information from the text: ${text}`,
        userSchema
    )
}

const userInfo = await extractUserInfo(
    "My name is John Doe. I am 30 years old. You can reach me at john.doe@example.com"
)

await div(md(`
## User Info Extraction
**Text:** My name is John Doe. I am 30 years old. You can reach me at john.doe@example.com
**Result:**
\`\`\`json
${JSON.stringify(userInfo, null, 2)}
\`\`\`
`)) 