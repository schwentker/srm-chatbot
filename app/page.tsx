"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, DollarSign, Zap, Users, FlaskConical, Calendar } from "lucide-react"
import { useNavigation } from "../hooks/useNavigation"

export default function ChatInterface() {
  const [message, setMessage] = useState("")
  const navigation = useNavigation()

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage("")
    }
  }

  const handleLabClick = () => {
    navigation.push("/lab")
  }

  const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">SRM Corp AI Assistant</h1>
                <p className="text-sm text-muted-foreground">Strategic Resource Management</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Action Buttons */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <DollarSign className="w-4 h-4" />
            Cost Savings
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <Zap className="w-4 h-4" />
            Digital Transformation
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <Users className="w-4 h-4" />
            Vendor Management
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground bg-transparent"
            onClick={handleLabClick}
          >
            <FlaskConical className="w-4 h-4" />
            Lab
          </Button>
          <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90">
            <Calendar className="w-4 h-4" />
            Book Consultation
          </Button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="max-w-4xl mx-auto px-4 pb-6">
        <div className="space-y-6">
          {/* AI Assistant Message */}
          <div className="flex gap-4">
            <Avatar className="w-10 h-10 bg-primary">
              <AvatarFallback className="bg-primary text-primary-foreground font-semibold">AI</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <p className="text-card-foreground leading-relaxed">
                    Hello! I'm the SRM Corp AI Assistant. I'm here to help you with cost savings, digital
                    transformation, vendor management, and more. How can I assist you today?
                  </p>
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground">{currentTime}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="mt-8 sticky bottom-4">
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <Input
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-background border-border focus:ring-2 focus:ring-ring"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={!message.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
