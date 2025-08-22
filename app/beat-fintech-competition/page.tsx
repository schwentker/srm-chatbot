"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  TrendingDown,
  Zap,
  Target,
  Shield,
  Users,
  Clock,
  MessageSquare,
  Smartphone,
  CreditCard,
  Building2,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function BeatFintechCompetition() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          setIsLoading(false)
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-96">
          <CardContent className="p-8 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
            <h2 className="text-xl font-semibold mb-4">Analyzing Competitive Landscape</h2>
            <Progress value={loadingProgress} className="mb-4" />
            <p className="text-sm text-muted-foreground">
              Processing fintech benchmarks and digital capability gaps...
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.push("/")} className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Chat
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Beat Fintech Competition</h1>
                <p className="text-sm text-muted-foreground">Digital Transformation Strategy Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Executive Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-700">Digital Gap Risk</p>
                  <p className="text-2xl font-bold text-red-800">High</p>
                  <p className="text-xs text-red-600 mt-1">23% member migration risk</p>
                </div>
                <TrendingDown className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-yellow-700">Competitive Position</p>
                  <p className="text-2xl font-bold text-yellow-800">Moderate</p>
                  <p className="text-xs text-yellow-600 mt-1">6-12 month window</p>
                </div>
                <Target className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700">Community Advantage</p>
                  <p className="text-2xl font-bold text-green-800">Strong</p>
                  <p className="text-xs text-green-600 mt-1">340% local lending edge</p>
                </div>
                <Shield className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Digital Capability Gaps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Digital Capability Gaps vs. Fintech Leaders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Mobile Deposit Speed vs. Chime</span>
                    <span className="text-sm text-red-600 font-semibold">2.3 seconds behind</span>
                  </div>
                  <Progress value={72} className="h-2" />
                  <p className="text-xs text-muted-foreground">Industry standard: 3.2s | Your CU: 5.5s</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Account Opening Time vs. SoFi</span>
                    <span className="text-sm text-red-600 font-semibold">4.2 minutes behind</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <p className="text-xs text-muted-foreground">Industry standard: 2.8min | Your CU: 7.0min</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Digital Loan Approval vs. Rocket Mortgage</span>
                    <span className="text-sm text-red-600 font-semibold">18 hours behind</span>
                  </div>
                  <Progress value={45} className="h-2" />
                  <p className="text-xs text-muted-foreground">Industry standard: 6hrs | Your CU: 24hrs</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">AI Chat Response vs. Bank of America</span>
                    <span className="text-sm text-yellow-600 font-semibold">Feature gap</span>
                  </div>
                  <Progress value={20} className="h-2" />
                  <p className="text-xs text-muted-foreground">No AI chat support currently deployed</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Member Experience Benchmarks */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Member Experience Benchmarks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                    <span className="font-medium text-blue-800">AI Chat Support Demand</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-900 mb-1">87%</p>
                  <p className="text-sm text-blue-700">of members want AI chat for basic transactions</p>
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <p className="text-xs text-blue-600">Priority: High | Timeline: 3-6 months</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-purple-600" />
                    <span className="font-medium text-purple-800">Real-Time Notifications</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-900 mb-1">74%</p>
                  <p className="text-sm text-purple-700">expect instant transaction alerts</p>
                  <div className="mt-3 pt-3 border-t border-purple-200">
                    <p className="text-xs text-purple-600">Priority: Medium | Timeline: 2-4 months</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="w-6 h-6 text-green-600" />
                    <span className="font-medium text-green-800">Digital Wallet Integration</span>
                  </div>
                  <p className="text-2xl font-bold text-green-900 mb-1">92%</p>
                  <p className="text-sm text-green-700">use Apple Pay or Google Pay regularly</p>
                  <div className="mt-3 pt-3 border-t border-green-200">
                    <p className="text-xs text-green-600">Priority: Critical | Timeline: 1-2 months</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Strategic Differentiation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Strategic Differentiation: Community Lending Advantage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-green-800">Cooperative Strengths</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="font-medium">Local Business Loan Approval Rate</span>
                    <span className="text-green-700 font-bold">340% higher</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="font-medium">Community Investment Ratio</span>
                    <span className="text-green-700 font-bold">89% local</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="font-medium">Member Satisfaction Score</span>
                    <span className="text-green-700 font-bold">4.7/5.0</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="font-medium">Fee Structure Advantage</span>
                    <span className="text-green-700 font-bold">67% lower</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 text-blue-800">Digital Transformation Roadmap</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-blue-900">Phase 1: Core Digital Services</span>
                      <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">Q1 2025</span>
                    </div>
                    <p className="text-sm text-blue-700">AI chat, mobile deposit optimization, real-time alerts</p>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-blue-900">Phase 2: Advanced Analytics</span>
                      <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">Q2 2025</span>
                    </div>
                    <p className="text-sm text-blue-700">Predictive lending, personalized financial insights</p>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-blue-900">Phase 3: Community Integration</span>
                      <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">Q3 2025</span>
                    </div>
                    <p className="text-sm text-blue-700">Local business partnerships, community impact tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
