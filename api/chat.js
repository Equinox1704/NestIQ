import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message } = req.body

  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a helpful support agent for NestIQ, 
          an AI-powered property management platform for India.
          Answer questions about features, pricing, and how the 
          platform works. Be friendly, concise, and professional.
          If asked anything unrelated to NestIQ, politely redirect.
          
          Key info:
          - Starter plan: Free
          - Growth plan: ₹999/month  
          - Pro plan: ₹2499/month
          - Features: AI listing generator, automated lead follow-up,
            smart tenant matching, one-click lease management`
        },
        { role: 'user', content: message }
      ]
    })

    res.status(200).json({ reply: response.choices[0].message.content })
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}