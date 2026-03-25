import { useState } from 'react'
import axios from 'axios'

interface Message {
  role: 'user' | 'bot'
  text: string
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! I\'m the NestIQ assistant. Ask me anything about our platform.' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const send = async () => {
    if (!input.trim()) return
    const userMsg = { role: 'user' as const, text: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await axios.post('/api/chat', { message: input })
      setMessages(prev => [...prev, { role: 'bot', text: res.data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: 'Something went wrong. Try again.' }])
    }
    setLoading(false)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#f97316',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(249,115,22,0.4)',
          fontSize: '24px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}
      >
        {open ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {open && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '24px',
          width: '360px',
          background: '#1e293b',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
          zIndex: 1000,
          fontFamily: 'sans-serif'
        }}>
          {/* Header */}
          <div style={{
            background: '#f97316',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{
              width: '32px', height: '32px',
              background: 'white',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: '#f97316',
              fontSize: '13px'
            }}>N</div>
            <div>
              <div style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>
                NestIQ Assistant
              </div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px' }}>
                ● Online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            height: '300px',
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
              }}>
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '9px 13px',
                    borderRadius: msg.role === 'user'
                      ? '16px 16px 4px 16px'
                      : '16px 16px 16px 4px',
                    background: msg.role === 'user' ? '#f97316' : '#334155',
                    color: 'white',
                    fontSize: '13px',
                    lineHeight: '1.5'
                  }}
                  dangerouslySetInnerHTML={{
                    __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }}
                />
              </div>
            ))}
            {loading && (
              <div style={{ color: '#94a3b8', fontSize: '12px' }}>
                NestIQ is typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{
            padding: '12px',
            borderTop: '1px solid #334155',
            display: 'flex',
            gap: '8px'
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask about NestIQ..."
              style={{
                flex: 1,
                background: '#334155',
                border: 'none',
                borderRadius: '8px',
                padding: '9px 13px',
                color: 'white',
                fontSize: '13px',
                outline: 'none'
              }}
            />
            <button
              onClick={send}
              style={{
                background: '#f97316',
                border: 'none',
                borderRadius: '8px',
                padding: '9px 14px',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}