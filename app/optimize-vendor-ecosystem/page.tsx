"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Building2, Shield, TrendingUp, AlertTriangle, CheckCircle, Clock, DollarSign } from "lucide-react"
import { useRouter } from "next/navigation"

export default function VendorEcosystemDashboard() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

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
            <Building2 className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
            <h3 className="text-lg font-semibold mb-2">Analyzing Vendor Ecosystem</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Processing 847 vendor relationships and compliance data...
            </p>
            <Progress value={loadingProgress} className="mb-2" />
            <p className="text-xs text-muted-foreground">{loadingProgress}% complete</p>
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
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Vendor Ecosystem Intelligence</h1>
                <p className="text-sm text-muted-foreground">Credit Union Technology & Compliance Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Executive Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-700">Total Vendors</p>
                  <p className="text-2xl font-bold text-blue-900">847</p>
                </div>
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700">NCUA Ready</p>
                  <p className="text-2xl font-bold text-green-900">94%</p>
                </div>
                <Shield className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-700">Cost Optimization</p>
                  <p className="text-2xl font-bold text-orange-900">$3.2M</p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-700">High Risk</p>
                  <p className="text-2xl font-bold text-red-900">23</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core System Modernization Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Core System Modernization Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* FIS */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">FIS Profile</h3>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">Recommended</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Migration Cost</span>
                    <span className="font-medium">$2.8M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Timeline</span>
                    <span className="font-medium">18 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">CU Market Share</span>
                    <span className="font-medium">34%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">NCUA Compliance</span>
                    <span className="font-medium text-green-600">Excellent</span>
                  </div>
                </div>
              </div>

              {/* Fiserv */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Fiserv DNA</h3>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-yellow-600">Consider</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Migration Cost</span>
                    <span className="font-medium">$3.4M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Timeline</span>
                    <span className="font-medium">24 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">CU Market Share</span>
                    <span className="font-medium">28%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">NCUA Compliance</span>
                    <span className="font-medium text-green-600">Strong</span>
                  </div>
                </div>
              </div>

              {/* Jack Henry */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Jack Henry</h3>
                  <div className="flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-red-600">Caution</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Migration Cost</span>
                    <span className="font-medium">$4.1M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Timeline</span>
                    <span className="font-medium">30 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">CU Market Share</span>
                    <span className="font-medium">22%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">NCUA Compliance</span>
                    <span className="font-medium text-yellow-600">Adequate</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* NCUA Compliance Vendor Scoring */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              NCUA Examination Readiness - Vendor Relationships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">23</div>
                  <div className="text-sm text-muted-foreground">Critical Vendors</div>
                  <div className="text-xs text-green-600">100% Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">156</div>
                  <div className="text-sm text-muted-foreground">High Risk Vendors</div>
                  <div className="text-xs text-blue-600">98% Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">342</div>
                  <div className="text-sm text-muted-foreground">Medium Risk</div>
                  <div className="text-xs text-yellow-600">94% Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600">326</div>
                  <div className="text-sm text-muted-foreground">Low Risk</div>
                  <div className="text-xs text-gray-600">87% Compliant</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Top Compliance Concerns</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                    <span className="text-sm">Outdated SOC 2 reports (12 vendors)</span>
                    <span className="text-xs text-red-600 font-medium">HIGH PRIORITY</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <span className="text-sm">Missing business continuity plans (8 vendors)</span>
                    <span className="text-xs text-yellow-600 font-medium">MEDIUM PRIORITY</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="text-sm">Contract renewal required (15 vendors)</span>
                    <span className="text-xs text-blue-600 font-medium">MONITOR</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technology ROI Modeling */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Digital Banking Platform Selection Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Member Acquisition Cost Analysis</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div>
                      <div className="font-medium">Current Platform</div>
                      <div className="text-sm text-muted-foreground">Legacy digital banking</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-700">$340</div>
                      <div className="text-xs text-green-600">per member</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div>
                      <div className="font-medium">Modern Platform</div>
                      <div className="text-sm text-muted-foreground">AI-powered digital experience</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-700">$180</div>
                      <div className="text-xs text-blue-600">per member</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div>
                      <div className="font-medium">Projected Savings</div>
                      <div className="text-sm text-muted-foreground">Annual member growth impact</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-700">$1.2M</div>
                      <div className="text-xs text-purple-600">yearly</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Platform Comparison Matrix</h4>
                <div className="space-y-2">
                  <div className="grid grid-cols-4 gap-2 text-xs font-medium text-muted-foreground">
                    <div>Platform</div>
                    <div>Setup Cost</div>
                    <div>Monthly Fee</div>
                    <div>CU Rating</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-sm p-2 bg-green-50 rounded border border-green-200">
                    <div className="font-medium">Alkami</div>
                    <div>$450K</div>
                    <div>$12K</div>
                    <div className="text-green-600">★★★★★</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-sm p-2 bg-blue-50 rounded border border-blue-200">
                    <div className="font-medium">Q2</div>
                    <div>$380K</div>
                    <div>$15K</div>
                    <div className="text-blue-600">★★★★☆</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-sm p-2 bg-yellow-50 rounded border border-yellow-200">
                    <div className="font-medium">Temenos</div>
                    <div>$620K</div>
                    <div>$18K</div>
                    <div className="text-yellow-600">★★★☆☆</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategic Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>Strategic Vendor Optimization Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-800 mb-2">Immediate Actions (0-3 months)</h4>
                <ul className="text-sm space-y-1 text-green-700">
                  <li>• Update 12 SOC 2 reports</li>
                  <li>• Consolidate payment processors</li>
                  <li>• Renegotiate top 5 vendor contracts</li>
                  <li>• Implement vendor risk dashboard</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">Strategic Initiatives (3-12 months)</h4>
                <ul className="text-sm space-y-1 text-blue-700">
                  <li>• Begin core system evaluation</li>
                  <li>• Digital banking platform RFP</li>
                  <li>• Vendor consolidation program</li>
                  <li>• NCUA examination prep</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-medium text-purple-800 mb-2">Long-term Vision (12+ months)</h4>
                <ul className="text-sm space-y-1 text-purple-700">
                  <li>• Complete core system migration</li>
                  <li>• Launch modern digital platform</li>
                  <li>• Achieve 95% vendor compliance</li>
                  <li>• Reduce vendor count by 30%</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
