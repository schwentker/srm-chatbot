"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, TrendingDown, TrendingUp, Users, Heart, Target, AlertTriangle, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function StopMemberAttrition() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Simulate loading intelligence data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleBackClick = () => {
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={handleBackClick}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Chat
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">S</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Member Retention Intelligence</h1>
                  <p className="text-sm text-muted-foreground">Analyzing cooperative member psychology</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
              <h2 className="text-xl font-semibold">Analyzing Member Behavior Patterns</h2>
              <p className="text-muted-foreground">
                Processing cooperative financial data and member psychology insights...
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={handleBackClick}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Chat
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Member Retention Intelligence</h1>
                <p className="text-sm text-muted-foreground">Cooperative Member Psychology Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Executive Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-red-700">High-Risk Attrition</p>
                  <p className="text-2xl font-bold text-red-900">31%</p>
                  <p className="text-xs text-red-600">Ages 25-34, Digital-First</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-700">Retention Boost</p>
                  <p className="text-2xl font-bold text-green-900">73%</p>
                  <p className="text-xs text-green-600">Cross-sell Mortgage</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-700">Community Impact</p>
                  <p className="text-2xl font-bold text-blue-900">12%</p>
                  <p className="text-xs text-blue-600">Deeper Relationships</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Churn Prediction Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-red-500" />
              Churn Prediction Intelligence
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">High-Risk Segments</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Ages 25-34 (Digital-First)</span>
                      <span className="text-red-600 font-bold">31% Risk</span>
                    </div>
                    <Progress value={31} className="h-2 bg-red-100" />
                    <p className="text-sm text-muted-foreground mt-2">
                      Expect mobile-first experience, frustrated with legacy systems
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">New Members (0-12 months)</span>
                      <span className="text-orange-600 font-bold">24% Risk</span>
                    </div>
                    <Progress value={24} className="h-2 bg-orange-100" />
                    <p className="text-sm text-muted-foreground mt-2">
                      Haven't established deep cooperative relationship yet
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Single-Product Users</span>
                      <span className="text-yellow-600 font-bold">19% Risk</span>
                    </div>
                    <Progress value={19} className="h-2 bg-yellow-100" />
                    <p className="text-sm text-muted-foreground mt-2">Limited engagement with cooperative benefits</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Cooperative Psychology Insights</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-medium mb-2">Community Connection Gap</h4>
                    <p className="text-sm text-muted-foreground">
                      Members don't understand ownership benefits vs. traditional banking
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-medium mb-2">Digital Expectation Mismatch</h4>
                    <p className="text-sm text-muted-foreground">
                      Younger members expect fintech-level digital experience
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium mb-2">Value Proposition Clarity</h4>
                    <p className="text-sm text-muted-foreground">Need better communication of cooperative advantages</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Retention Playbook */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-500" />
              Cooperative Retention Playbook
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">High-Impact Strategies</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="font-medium">Cross-sell Mortgage Products</span>
                    </div>
                    <p className="text-2xl font-bold text-green-700 mb-1">73% Retention Increase</p>
                    <p className="text-sm text-muted-foreground">
                      Home ownership creates deeper cooperative commitment
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">Member Education Program</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-700 mb-1">45% Retention Increase</p>
                    <p className="text-sm text-muted-foreground">Understanding cooperative ownership and benefits</p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="font-medium">Digital Experience Upgrade</span>
                    </div>
                    <p className="text-2xl font-bold text-purple-700 mb-1">38% Retention Increase</p>
                    <p className="text-sm text-muted-foreground">Mobile app and online banking improvements</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Implementation Timeline</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <h4 className="font-medium mb-2">Week 1-2: Quick Wins</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Launch member education email series</li>
                      <li>• Implement mortgage cross-sell campaigns</li>
                      <li>• Create cooperative benefits explainer</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <h4 className="font-medium mb-2">Month 1-3: Digital Improvements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Mobile app UX enhancements</li>
                      <li>• Online account opening optimization</li>
                      <li>• Digital onboarding experience</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <h4 className="font-medium mb-2">Month 3-6: Community Building</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Local partnership programs</li>
                      <li>• Member appreciation events</li>
                      <li>• Cooperative education workshops</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community Engagement Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              Community Engagement Intelligence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Local Partnership Impact</h3>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-3xl font-bold text-blue-700">12%</p>
                  <p className="text-sm font-medium text-blue-600">Deeper Member Relationships</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Local business partnerships create community connection
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>School district partnerships</span>
                    <span className="font-medium">+18% engagement</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Local business discounts</span>
                    <span className="font-medium">+15% engagement</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Community event sponsorship</span>
                    <span className="font-medium">+12% engagement</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Cooperative Education</h3>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-3xl font-bold text-green-700">67%</p>
                  <p className="text-sm font-medium text-green-600">Better Understanding</p>
                  <p className="text-xs text-muted-foreground mt-2">Members who understand ownership stay longer</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Annual meeting attendance</span>
                    <span className="font-medium">+23% retention</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Financial education workshops</span>
                    <span className="font-medium">+19% retention</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cooperative principles training</span>
                    <span className="font-medium">+16% retention</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Member Advocacy</h3>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-3xl font-bold text-purple-700">4.2x</p>
                  <p className="text-sm font-medium text-purple-600">Referral Rate</p>
                  <p className="text-xs text-muted-foreground mt-2">Engaged members become cooperative ambassadors</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Member referral program</span>
                    <span className="font-medium">+34% new members</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Social media advocacy</span>
                    <span className="font-medium">+28% reach</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Community testimonials</span>
                    <span className="font-medium">+22% trust</span>
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
