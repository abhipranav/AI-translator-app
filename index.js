import OpenAI from "openai"

const translateBtn = document.getElementById('translate')
const startOverBtn = document.getElementById("start-over")

const inputText = document.getElementById('input-text')
const mainText = document.getElementById("main-text")
const outputText = document.getElementById("output-text")

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY, // ✅ Use Vite's env variable format
    dangerouslyAllowBrowser: true
})

translateBtn.addEventListener('click', async function(e) {
    e.preventDefault()
    translateBtn.disabled = true
    translateBtn.textContent = 'Translating...'

    try {
        
        const selectedLang = document.querySelector('input[name="lang"]:checked')
        if (!selectedLang) {
            alert('Please select a language')
            return
        }
        if (!inputText.value) {
            alert('Please enter the text.')
            return
        }
        const formValue = selectedLang.id

        const messages = [
            {
                role: 'system',
                content: 'You are an expert translator and can accurately translate any language to the language requested by user. If the requested language does not have english alphabets, then write them in english phonetically as well with the original text. Dont use any extra text than necessary.'
            },
            {
                role: 'user',
                content: `Translate "${inputText.value}" to ${formValue}` 
            }
        ]

        const response = await openai.chat.completions.create({
            model: 'gpt-4.1-nano-2025-04-14', 
            messages: messages,
            // temperature: 1.2,
            max_completion_tokens: 1000
        })

        const translation = response.choices[0]?.message?.content?.trim()
        if(!translation) {
            throw new Error('Empty translation')
        }

        console.log(response.usage.total_tokens)
        console.log(response)
        console.log(response.choices[0].message.content)

        document.getElementById("input").style.display = "none"
        document.getElementById("result").style.display = "block"

        mainText.value = inputText.value
        outputText.value = response.choices[0].message.content

    } catch (err) {
        console.error(err)
        alert('Translation failed. Please try again later')
    } finally {
        translateBtn.disabled = false
        translateBtn.textContent = 'Translate'
    }
    
    

    
})

startOverBtn.addEventListener('click', function() {
    document.getElementById("input").style.display = "block"
    document.getElementById("result").style.display = "none"
    
    mainText.value = ''
    outputText.value = ''
    inputText.value = ''

})

