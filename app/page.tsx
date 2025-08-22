"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, UserMinus, Zap, Network, FlaskConical, Users } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ChatInterface() {
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage("")
    }
  }

  const handleLabClick = () => {
    router.push("/lab")
  }

  const handleStopAttritionClick = () => {
    router.push("/stop-member-attrition")
  }

  const handleBeatFintechClick = () => {
    router.push("/beat-fintech-competition")
  }

  const handleVendorEcosystemClick = () => {
    router.push("/optimize-vendor-ecosystem")
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
                <h1 className="text-xl font-bold text-foreground">SRMcorp's Credit Union Strategic Agent</h1>
                <p className="text-sm text-muted-foreground">Cooperative Financial Institution Intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Strategic Action Buttons */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground bg-transparent font-medium"
            onClick={handleStopAttritionClick}
          >
            <UserMinus className="w-4 h-4" />
            Stop Member Attrition
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground bg-transparent font-medium"
            onClick={handleBeatFintechClick}
          >
            <Zap className="w-4 h-4" />
            Beat Fintech Competition
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground bg-transparent font-medium"
            onClick={handleVendorEcosystemClick}
          >
            <Network className="w-4 h-4" />
            Optimize Vendor Ecosystem
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground bg-transparent font-medium"
            onClick={handleLabClick}
          >
            <FlaskConical className="w-4 h-4" />
            Lab
          </Button>
          <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90 font-medium">
            <Users className="w-4 h-4" />
            Strategic Board Session
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
                  <p className="text-card-foreground leading-relaxed mb-4">
                    Hello! I'm SRMcorp's Credit Union Strategic Agent - an AI that understands cooperative financial
                    institution challenges, regulatory environment, and member-owner dynamics.
                  </p>
                  <p className="text-card-foreground leading-relaxed mb-4">
                    <strong>Every credit union needs an agent that thinks like a cooperative</strong> - balancing member
                    satisfaction over customer metrics, community impact through CRA compliance, and sustainable growth
                    amid industry consolidation pressures while navigating NCUA examination cycles.
                  </p>
                  <p className="text-card-foreground leading-relaxed mb-4">
                    I understand the complexities of shared branching networks, CO-OP service optimization, field of
                    membership expansion strategies, and the unique member-owner relationship that differentiates
                    cooperatives from traditional banking institutions.
                  </p>
                  <p className="text-card-foreground leading-relaxed mb-4">
                    Whether you're facing regulatory examination preparation, community development financial
                    institution opportunities, or strategic positioning against fintech challengers, I provide insights
                    rooted in cooperative principles and credit union operational realities.
                  </p>
                  <p className="text-card-foreground leading-relaxed">
                    <em>
                      This is how SRMcorp delivers strategy to credit unions - through an agent that understands your
                      cooperative mission, regulatory environment, and the balance between serving members and
                      sustaining growth.
                    </em>
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
