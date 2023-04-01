import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-bt8LIqo1WTeZottaKrzuyBIG",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export async function miServicio(promptString) {
    console.log(promptString)
    const result = await openai.createChatCompletion({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Hola"},
        {"role": "assistant", "content": "Hola buenos dias!"},
        {"role": "user", "content": "quisiera consultarle por el valor de los verduleros"},
        {"role": "assistant", "content": "son 15000 bella"},
        {"role": "user", "content": promptString}
    ]
      });
    console.log(JSON.stringify(result));
    
    console.log(JSON.stringify(result.data.choices[0].message.content));

    return result.data.choices[0].message.content;
}