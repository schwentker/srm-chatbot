"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, MessageCircle, TrendingDown, Zap, Users, Calendar } from "lucide-react"
import Image from "next/image"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

export default function SRMChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm the SRM Corp AI Assistant. I'm here to help you with cost savings, digital transformation, vendor management, and more. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const quickActions = [
    { icon: TrendingDown, label: "Cost Savings", color: "text-emerald-600" },
    { icon: Zap, label: "Digital Transformation", color: "text-blue-600" },
    { icon: Users, label: "Vendor Management", color: "text-purple-600" },
    { icon: Calendar, label: "Book Consultation", color: "text-orange-600" },
  ]

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Thank you for your message. Our team of experts will analyze your request and provide tailored recommendations for your business needs.",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const handleQuickAction = (action: string) => {
    const actionMessage: Message = {
      id: messages.length + 1,
      text: `I'd like to learn more about ${action}`,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, actionMessage])

    // Simulate bot response based on action
    setTimeout(() => {
      let response = ""
      switch (action) {
        case "Cost Savings":
          response =
            "Great! Our cost optimization strategies have helped clients reduce operational expenses by up to 30%. We analyze your current spending patterns and identify areas for improvement."
          break
        case "Digital Transformation":
          response =
            "Digital transformation is key to staying competitive. We help businesses modernize their processes, implement new technologies, and improve efficiency across all departments."
          break
        case "Vendor Management":
          response =
            "Effective vendor management can significantly impact your bottom line. We help streamline vendor relationships, negotiate better contracts, and ensure optimal service delivery."
          break
        case "Book Consultation":
          response =
            "I'd be happy to help you schedule a consultation with our experts. Please provide your preferred date and time, and we'll arrange a meeting to discuss your specific needs."
          break
        default:
          response = "I'm here to help with any questions you have about our services."
      }

      const botResponse: Message = {
        id: messages.length + 2,
        text: response,
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-navy-900 text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-3">
          <Image
            src="/images/srm-logo.png"
            alt="SRM Corp Logo"
            width={40}
            height={40}
            className="rounded-full bg-white p-1"
          />
          <div>
            <h1 className="text-xl font-semibold">SRM Corp AI Assistant</h1>
            <p className="text-navy-200 text-sm">Strategic Resource Management</p>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 bg-white border-r border-gray-200 p-6 hidden lg:block">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Quick Actions
          </h2>
          <div className="space-y-3">
            {quickActions.map((action) => (
              <Button
                key={action.label}
                variant="outline"
                className="w-full justify-start gap-3 h-12 text-left hover:bg-gray-50 border-gray-200 bg-transparent"
                onClick={() => handleQuickAction(action.label)}
              >
                <action.icon className={`w-5 h-5 ${action.color}`} />
                <span className="text-gray-700">{action.label}</span>
              </Button>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg border border-teal-100">
            <h3 className="font-semibold text-gray-800 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Our AI assistant is powered by advanced analytics to provide you with actionable insights.
            </p>
            <Button size="sm" className="w-full bg-teal-600 hover:bg-teal-700">
              Learn More
            </Button>
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                    message.isBot ? "bg-blue-600 text-white rounded-bl-sm" : "bg-gray-200 text-gray-800 rounded-br-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-2 ${message.isBot ? "text-blue-100" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Quick Actions */}
          <div className="lg:hidden px-6 py-3 border-t border-gray-200 bg-white">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {quickActions.map((action) => (
                <Button
                  key={action.label}
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap flex-shrink-0 bg-transparent"
                  onClick={() => handleQuickAction(action.label)}
                >
                  <action.icon className={`w-4 h-4 mr-2 ${action.color}`} />
                  {action.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-200">
            <div className="flex gap-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 px-4"
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 px-6 py-3 text-center text-sm">
        <p>Powered by SRM Corp Strategic Resource Management</p>
      </footer>
    </div>
  )
}
