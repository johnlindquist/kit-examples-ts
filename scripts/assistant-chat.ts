/*
# Chat with Assistant

- Creates an AI assistant chatbot for interactive conversations
- Provides a chat interface where users can submit messages
- Streams AI responses in real-time, updating the chat display as text arrives
- Demonstrates assistant creation and text streaming capabilities
*/

// Name: Chat with Assistant
// Description: Interactive chat interface with AI assistant

import "@johnlindquist/kit"

const chatbot = assistant('You are a helpful assistant')

let currentMessage = ""
await chat({
    onSubmit: async (input) => {
        currentMessage = ""
        chatbot.stop()
        chat.addMessage({
            text: "...",
            position: "left"
        })

        chatbot.addUserMessage(input)

        for await (const chunk of chatbot.textStream) {
            currentMessage += chunk
            const markdownMessage = md(currentMessage)
            const messageIndex = (await chat.getMessages()).length - 1
            chat.setMessage(messageIndex, {
                text: markdownMessage,
            })
        }
    }
})