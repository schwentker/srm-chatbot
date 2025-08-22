"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, TrendingUp, Building2, Users, Zap, DollarSign, Target, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UnlockHiddenValueDashboard() {
  const router = useRouter()
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    // Simulate real-time analysis loading
    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          setShowResults(true)
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.push("/")} className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Command Center
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Strategic Value Intelligence</h1>
                <p className="text-sm text-muted-foreground">Proprietary Procurement Analytics Engine</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {!showResults ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Analyzing Procurement Landscape</h2>
              <p className="text-muted-foreground">
                SRMcorp Intelligence Engine processing 847 vendor relationships...
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <Progress value={analysisProgress} className="h-2" />
              <p className="text-sm text-center text-muted-foreground">{analysisProgress}% Complete</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Executive Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-green-800">Total Opportunity</p>
                      <p className="text-2xl font-bold text-green-900">$4.7M</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Target className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-blue-800">Quick Wins</p>
                      <p className="text-2xl font-bold text-blue-900">$2.3M</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-8 h-8 text-orange-600" />
                    <div>
                      <p className="text-sm font-medium text-orange-800">Vendor Optimization</p>
                      <p className="text-2xl font-bold text-orange-900">847→340</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-8 h-8 text-purple-600" />
                    <div>
                      <p className="text-sm font-medium text-purple-800">Implementation</p>
                      <p className="text-2xl font-bold text-purple-900">6-8 weeks</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Procurement Category Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Procurement Category Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Logistics Optimization</h3>
                    <p className="text-2xl font-bold text-green-700 mb-1">12% savings opportunity</p>
                    <p className="text-sm text-green-600">$890K annual impact</p>
                    <div className="mt-3 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Route optimization</span>
                        <span className="font-medium">$340K</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Carrier consolidation</span>
                        <span className="font-medium">$290K</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Fuel efficiency</span>
                        <span className="font-medium">$260K</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2">IT Services</h3>
                    <p className="text-2xl font-bold text-blue-700 mb-1">18% savings opportunity</p>
                    <p className="text-sm text-blue-600">$1.2M annual impact</p>
                    <div className="mt-3 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>License optimization</span>
                        <span className="font-medium">$480K</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Cloud migration</span>
                        <span className="font-medium">$420K</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Support consolidation</span>
                        <span className="font-medium">$300K</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-2">Professional Services</h3>
                    <p className="text-2xl font-bold text-orange-700 mb-1">15% savings opportunity</p>
                    <p className="text-sm text-orange-600">$760K annual impact</p>
                    <div className="mt-3 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Consulting optimization</span>
                        <span className="font-medium">$320K</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Legal services</span>
                        <span className="font-medium">$240K</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Audit efficiency</span>
                        <span className="font-medium">$200K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vendor Consolidation Scenarios */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Vendor Consolidation Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Strategic Consolidation Scenario</h3>
                      <p className="text-gray-600">Reducing suppliers from 847 to 340 vendors</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-green-600">$2.3M</p>
                      <p className="text-sm text-gray-600">Annual savings</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="font-semibold">Administrative Efficiency</p>
                      <p className="text-2xl font-bold text-blue-600">$890K</p>
                      <p className="text-xs text-gray-500">Reduced overhead</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="font-semibold">Volume Leverage</p>
                      <p className="text-2xl font-bold text-green-600">$980K</p>
                      <p className="text-xs text-gray-500">Better pricing</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="font-semibold">Process Optimization</p>
                      <p className="text-2xl font-bold text-purple-600">$430K</p>
                      <p className="text-xs text-gray-500">Streamlined operations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Real-time Cost Levers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Real-time Cost Lever Identification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div>
                        <p className="font-semibold text-red-900">IT Facilities - Immediate Action Required</p>
                        <p className="text-sm text-red-700">3 contracts expiring in 30 days, 23% above market rate</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-red-600">$340K</p>
                      <p className="text-xs text-red-500">Potential savings</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                      <div>
                        <p className="font-semibold text-yellow-900">Professional Services - Optimization Ready</p>
                        <p className="text-sm text-yellow-700">Legal spend 40% higher than industry benchmark</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-yellow-600">$280K</p>
                      <p className="text-xs text-yellow-500">Potential savings</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div>
                        <p className="font-semibold text-green-900">Logistics - Quick Win Available</p>
                        <p className="text-sm text-green-700">Route optimization algorithm ready for deployment</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">$190K</p>
                      <p className="text-xs text-green-500">Immediate impact</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Center */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ready to Execute Strategic Recommendations?</h3>
                    <p className="text-blue-100">
                      SRMcorp Intelligence Engine has identified $4.7M in optimization opportunities
                    </p>
                  </div>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                    Generate Implementation Roadmap
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
