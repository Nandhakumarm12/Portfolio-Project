"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, X, Send, Bot, User } from "lucide-react"
import { ChatMessage } from "@/types"

const predefinedResponses: { [key: string]: string } = {
  "skills": "Nandhakumar specializes in AI/ML (TensorFlow, PyTorch, LLMs), Software Development (Python, React, Node.js), and Cybersecurity (Penetration Testing, Threat Intelligence). Check out the Skills section for more details!",

  "experience": "He has experience as a Research Assistant at Nottingham Trent University (2025) and SDE-II at AppViewX (2023-2024), where he built enterprise security platforms and AI solutions.",

  "education": "Nandhakumar is pursuing MSc in Cybersecurity at Nottingham Trent University and holds a BE in Mechanical Engineering (Gold Medalist) from Anna University.",

  "projects": "His key projects include AI-powered malware detection (93% accuracy), Enterprise Domain Security Platform, and AI Genie workflow automation. View all projects in the Projects section!",

  "contact": "You can reach him at samynandhakumar82@gmail.com or +447553688243. He's based in Nottingham, UK.",

  "ai": "He has extensive experience in AI/ML including LLMs, LangChain, TensorFlow, PyTorch, and Agentic AI. Check his blog for AI-related articles!",

  "cybersecurity": "His cybersecurity expertise includes Ethical Hacking, Penetration Testing, Digital Forensics, and Secure System Design. He's currently pursuing a Master's in Cybersecurity.",

  "hello": "Hello! I'm Nandhakumar's AI assistant. I can tell you about his skills, experience, projects, education, or help you get in touch. What would you like to know?",

  "hi": "Hi there! How can I help you learn more about Nandhakumar today?",

  "help": "I can answer questions about: Skills, Experience, Education, Projects, AI expertise, Cybersecurity background, or Contact information. What interests you?"
}

function getResponse(input: string): string {
  const lowerInput = input.toLowerCase()

  for (const [key, response] of Object.entries(predefinedResponses)) {
    if (lowerInput.includes(key)) {
      return response
    }
  }

  if (lowerInput.includes("thank")) {
    return "You're welcome! Feel free to ask if you have any other questions."
  }

  if (lowerInput.includes("bye")) {
    return "Goodbye! Have a great day!"
  }

  return "I can tell you about Nandhakumar's skills, experience, projects, education, or help you contact him. What would you like to know?"
}

export default function ChatComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi! I'm here to help you learn about Nandhakumar. Ask me about his skills, experience, projects, or anything else!",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: ChatMessage = {
      role: "user",
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(input)
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: response,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageSquare className="h-6 w-6" />
          )}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <div className="bg-background border rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Portfolio Assistant</h3>
                    <p className="text-xs text-white/80">Ask about Nandhakumar</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="h-80 p-4" ref={scrollRef}>
                <div className="space-y-4">
                  {messages.map((message, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2 ${
                        message.role === "user" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div className={`p-2 rounded-full shrink-0 ${
                        message.role === "user" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted"
                      }`}>
                        {message.role === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-none"
                          : "bg-muted rounded-tl-none"
                      }`}>
                        {message.content}
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-2"
                    >
                      <div className="p-2 rounded-full bg-muted">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="bg-muted p-3 rounded-2xl rounded-tl-none">
                        <div className="flex gap-1">
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="w-2 h-2 bg-foreground/50 rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                            className="w-2 h-2 bg-foreground/50 rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-foreground/50 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t bg-muted/50">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 rounded-full bg-background border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  <Button 
                    size="icon" 
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="rounded-full shrink-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Try: "skills", "experience", "projects", "contact"
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
