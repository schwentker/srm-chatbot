"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, CheckCircle, Play } from "lucide-react"
import { useRouter } from "next/navigation"

export default function MarginAnalysisDemo() {
  const router = useRouter()
  const [activeDepth, setActiveDepth] = useState("Executive Summary")
  const [isAnalysisRunning, setIsAnalysisRunning] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [processingLogs, setProcessingLogs] = useState<string[]>([])
  const [currentPhase, setCurrentPhase] = useState("")
  const [progress, setProgress] = useState(0)

  const [agentStatus, setAgentStatus] = useState({
    coordinator: "Idle",
    assetProfitability: "Idle",
    liabilityCost: "Idle",
    rateEnvironment: "Idle",
    memberBehavior: "Idle",
    almOptimization: "Idle",
  })

  const handleBackToLab = () => {
    router.push("/lab")
  }

  const startAnalysis = async () => {
    setIsAnalysisRunning(true)
    setShowResults(false)
    setProcessingLogs([])
    setProgress(0)

    const logs = [
      "[2:47:23 PM] Initializing margin optimization workflow...",
      "[2:47:23 PM] Processing ALM_Report_Dec2024.xlsx",
      "[2:47:23 PM] Validating asset-liability positions... ✓",
      "[2:47:23 PM] Extracting 45,000 loan records with yield data",
      "[2:47:23 PM] Processing Product_Margins_Q4_2024.csv",
      "[2:47:23 PM] Parsing product-level profitability metrics...",
      "[2:47:23 PM] Calculating risk-adjusted net interest margins",
      "[2:47:23 PM] Processing Rate_Elasticity_Analysis_2024.xlsx",
      "[2:47:23 PM] Analyzing member rate sensitivity patterns...",
      "[2:47:23 PM] Modeling retention probability curves",
      "[2:47:23 PM] Processing CUNA_Rate_Survey_Dec2024.pdf",
      "[2:47:23 PM] Extracting competitive rate benchmarks...",
      "[2:47:23 PM] Identifying market positioning gaps",
      "[2:47:23 PM] Processing Treasury_Yield_Data_2024.csv",
      "[2:47:23 PM] Mapping yield curve movements and fed policy...",
      "[2:47:24 PM] Data quality validation: 98.7% complete ✓",
      "[2:47:24 PM] Detecting duration mismatch exposures...",
      "[2:47:24 PM] Analyzing auto loan repricing opportunities...",
      "[2:47:24 PM] Evaluating certificate ladder optimization...",
      "[2:47:24 PM] Calculating member churn risk by rate scenario...",
    ]

    // Phase 1: File Processing (0-12s)
    setCurrentPhase("Phase 1: File Processing & Data Extraction")
    setAgentStatus((prev) => ({ ...prev, coordinator: "Processing" }))

    for (let i = 0; i < 10; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setProcessingLogs((prev) => [...prev, logs[i]])
      setProgress((i + 1) * 2)
    }

    // Phase 2: Parallel Analysis (12-35s)
    setCurrentPhase("Phase 2: Multi-Agent Margin Analysis")
    setAgentStatus((prev) => ({
      ...prev,
      assetProfitability: "Processing",
      liabilityCost: "Processing",
      rateEnvironment: "Processing",
      memberBehavior: "Processing",
      almOptimization: "Processing",
    }))

    for (let i = 10; i < 16; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setProcessingLogs((prev) => [...prev, logs[i]])
      setProgress(20 + (i - 9) * 4)
    }

    // Phase 3: Synthesis (35-45s)
    setCurrentPhase("Phase 3: Coordinator Synthesis")
    setAgentStatus((prev) => ({
      ...prev,
      assetProfitability: "Complete",
      liabilityCost: "Complete",
      rateEnvironment: "Complete",
      memberBehavior: "Complete",
      almOptimization: "Complete",
    }))

    for (let i = 16; i < 20; i++) {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setProcessingLogs((prev) => [...prev, logs[i]])
      setProgress(44 + (i - 15) * 8)
    }

    // Phase 4: Final Output (45-50s)
    setCurrentPhase("Phase 4: Results Generation")
    setAgentStatus((prev) => ({ ...prev, coordinator: "Complete" }))
    setProgress(100)

    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsAnalysisRunning(false)
    setShowResults(true)
  }

  const depthOptions = ["Executive Summary", "Agent Workflow", "Implementation"]

  const agents = [
    {
      name: "Primary Coordinator",
      description: "Orchestrates multi-agent margin optimization workflow",
      status: agentStatus.coordinator,
      color: "bg-blue-50 border-blue-200",
    },
    {
      name: "Asset Profitability Agent",
      description: "Analyzes loan portfolio yields and risk-adjusted returns",
      status: agentStatus.assetProfitability,
      color: "bg-green-50 border-green-200",
    },
    {
      name: "Liability Cost Agent",
      description: "Evaluates deposit rates and funding cost efficiency",
      status: agentStatus.liabilityCost,
      color: "bg-purple-50 border-purple-200",
    },
    {
      name: "Rate Environment Agent",
      description: "Monitors fed funds, yield curve, and competitive positioning",
      status: agentStatus.rateEnvironment,
      color: "bg-orange-50 border-orange-200",
    },
    {
      name: "Member Behavior Agent",
      description: "Predicts rate sensitivity and retention patterns",
      status: agentStatus.memberBehavior,
      color: "bg-pink-50 border-pink-200",
    },
    {
      name: "ALM Optimization Agent",
      description: "Identifies asset-liability mismatches and duration gaps",
      status: agentStatus.almOptimization,
      color: "bg-teal-50 border-teal-200",
    },
  ]

  const dataSources = [
    {
      name: "ALM Portfolio Reports",
      description: "Monthly asset-liability management exports (Excel)",
      filename: "ALM_Report_Dec2024.xlsx",
      size: "12.4 MB",
      records: "45,000 loan records processed",
      icon: "📊",
      status: "uploaded",
    },
    {
      name: "Product Profitability Analysis",
      description: "Quarterly margin analysis by product line (CSV)",
      filename: "Product_Margins_Q4_2024.csv",
      size: "3.8 MB",
      records: "28 product categories analyzed",
      icon: "📈",
      status: "uploaded",
    },
    {
      name: "Member Rate Sensitivity Study",
      description: "Historical rate change impact data (Excel)",
      filename: "Rate_Elasticity_Analysis_2024.xlsx",
      size: "2.1 MB",
      records: "31,500 member behaviors tracked",
      icon: "📋",
      status: "uploaded",
    },
    {
      name: "Competitive Rate Survey",
      description: "Weekly market rate intelligence (PDF)",
      filename: "CUNA_Rate_Survey_Dec2024.pdf",
      size: "1.9 MB",
      records: "127 credit union rates benchmarked",
      icon: "📄",
      status: "uploaded",
    },
    {
      name: "Fed Funds & Yield Curve Data",
      description: "Daily rate environment data (CSV)",
      filename: "Treasury_Yield_Data_2024.csv",
      size: "0.7 MB",
      records: "365 days of rate movements",
      icon: "📊",
      status: "uploaded",
    },
  ]

  const getDepthContent = () => {
    if (!showResults) {
      return (
        <div className="space-y-6">
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Credit Union Margin Analysis Demo</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              This demonstration shows how our AI agents analyze your credit union's net interest margin performance and
              identify optimization opportunities across your asset-liability portfolio.
            </p>
            <div className="bg-muted/30 rounded-lg p-6 max-w-2xl mx-auto">
              <h4 className="font-semibold text-foreground mb-3">What You'll See:</h4>
              <ul className="text-left text-muted-foreground space-y-2">
                <li>• Multi-agent analysis of loan and deposit portfolios</li>
                <li>• Rate environment impact on margin compression</li>
                <li>• Member behavior modeling for retention scenarios</li>
                <li>• Asset-liability optimization recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    if (activeDepth === "Executive Summary") {
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-red-700">87bp</div>
                <div className="text-sm text-red-600">Net Interest Margin Gap</div>
                <div className="text-xs text-muted-foreground mt-1">below peer median</div>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-700">$3.4M</div>
                <div className="text-sm text-green-600">Annual Income Recovery</div>
                <div className="text-xs text-muted-foreground mt-1">optimization potential</div>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-700">&lt;2%</div>
                <div className="text-sm text-blue-600">Member Retention Risk</div>
                <div className="text-xs text-muted-foreground mt-1">with balanced approach</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top 3 Findings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <div className="font-semibold text-foreground">HELOC Rate Corridor</div>
                <div className="text-sm text-muted-foreground">23bp below optimal pricing vs. prime + margin</div>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <div className="font-semibold text-foreground">Certificate Ladder Mismatch</div>
                <div className="text-sm text-muted-foreground">$1.2M locked in below-market 12-month CDs</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="font-semibold text-foreground">Auto Loan Yield Compression</div>
                <div className="text-sm text-muted-foreground">Promotional rates 45bp below sustainable levels</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Wins</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-start p-3 bg-green-50 border border-green-200 rounded-lg">
                <div>
                  <div className="font-semibold text-green-800">Adjust HELOC pricing floor</div>
                  <div className="text-sm text-green-600">Prime + 50bp minimum vs. current prime + 27bp</div>
                </div>
                <div className="text-lg font-bold text-green-700">$840K</div>
              </div>
              <div className="flex justify-between items-start p-3 bg-green-50 border border-green-200 rounded-lg">
                <div>
                  <div className="font-semibold text-green-800">Restructure promotional auto rates</div>
                  <div className="text-sm text-green-600">New member rates aligned to risk-based pricing</div>
                </div>
                <div className="text-lg font-bold text-green-700">$620K</div>
              </div>
              <div className="flex justify-between items-start p-3 bg-green-50 border border-green-200 rounded-lg">
                <div>
                  <div className="font-semibold text-green-800">Optimize money market tiers</div>
                  <div className="text-sm text-green-600">Reduce high-balance rate premiums by 25bp</div>
                </div>
                <div className="text-lg font-bold text-green-700">$390K</div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }

    if (activeDepth === "Agent Workflow") {
      return (
        <div className="space-y-6">
          {agents.slice(1).map((agent, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${agent.status === "Complete" ? "bg-green-500" : "bg-gray-300"}`}
                  />
                  {agent.name} Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                {agent.name === "Asset Profitability Agent" && (
                  <div className="space-y-3">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="font-semibold text-red-800">Yield Compression Detected</div>
                      <div className="text-sm text-red-600">Auto loans: 4.2% vs. peer median 4.8%</div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <div className="font-semibold text-yellow-800">HELOC Underpricing</div>
                      <div className="text-sm text-yellow-600">Current: Prime + 27bp | Optimal: Prime + 50bp</div>
                    </div>
                  </div>
                )}
                {agent.name === "Liability Cost Agent" && (
                  <div className="space-y-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="font-semibold text-green-800">Money Market Optimization</div>
                      <div className="text-sm text-green-600">High-balance tiers 25bp above competitive necessity</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="font-semibold text-blue-800">Certificate Strategy</div>
                      <div className="text-sm text-blue-600">$1.2M in below-market 12-month terms</div>
                    </div>
                  </div>
                )}
                {agent.name === "Rate Environment Agent" && (
                  <div className="space-y-3">
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                      <div className="font-semibold text-purple-800">Fed Policy Impact</div>
                      <div className="text-sm text-purple-600">Rising rate environment favors asset repricing</div>
                    </div>
                  </div>
                )}
                {agent.name === "Member Behavior Agent" && (
                  <div className="space-y-3">
                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
                      <div className="font-semibold text-pink-800">Retention Modeling</div>
                      <div className="text-sm text-pink-600">Rate increases &lt;50bp show minimal churn risk</div>
                    </div>
                  </div>
                )}
                {agent.name === "ALM Optimization Agent" && (
                  <div className="space-y-3">
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
                      <div className="font-semibold text-teal-800">Duration Analysis</div>
                      <div className="text-sm text-teal-600">Asset-liability mismatch: +2.3 years average</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )
    }

    if (activeDepth === "Implementation") {
      return (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Export Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">Rate Adjustment Worksheet</div>
                    <div className="text-sm text-muted-foreground">HELOC and auto loan pricing updates</div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-medium">Member Communication Templates</div>
                    <div className="text-sm text-muted-foreground">Rate change notification scripts</div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Implementation Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <div className="font-semibold text-foreground">Week 1-2: HELOC Rate Adjustment</div>
                <div className="text-sm text-muted-foreground">Update pricing floor to Prime + 50bp minimum</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="font-semibold text-foreground">Week 3-4: Auto Loan Repricing</div>
                <div className="text-sm text-muted-foreground">Implement risk-based promotional rates</div>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="font-semibold text-foreground">Month 2: Money Market Optimization</div>
                <div className="text-sm text-muted-foreground">Reduce high-balance tier premiums</div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleBackToLab}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Lab
            </Button>
            <h1 className="text-xl font-semibold text-foreground">Credit Union Margin Analysis</h1>
            {!isAnalysisRunning && !showResults && (
              <Button
                onClick={startAnalysis}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 text-sm font-medium"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Analysis
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      {isAnalysisRunning && (
        <div className="w-full bg-muted/30">
          <div className="h-1 bg-primary transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Panel - Agent Architecture */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Agent Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {agents.map((agent, index) => (
                  <div key={index} className={`p-3 rounded-lg border-2 ${agent.color} group relative`}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{agent.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{agent.description}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            agent.status === "Processing"
                              ? "bg-yellow-500 animate-pulse"
                              : agent.status === "Complete"
                                ? "bg-green-500"
                                : "bg-gray-300"
                          }`}
                        />
                        <span className="text-xs font-medium">{agent.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Sources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dataSources.map((source, index) => (
                  <div key={index} className="p-3 border border-border rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">{source.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm">{source.name}</div>
                        <div className="text-xs text-muted-foreground mb-1">{source.description}</div>
                        <div className="text-xs font-mono text-blue-600">{source.filename}</div>
                        <div className="text-xs text-muted-foreground">
                          {source.size} • {source.records}
                        </div>
                      </div>
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Processing Analysis */}
            {isAnalysisRunning && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      Processing Analysis
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div className="text-sm font-normal text-muted-foreground">{Math.round(progress)}% Complete</div>
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">{currentPhase}</div>
                  <div className="w-full bg-muted/30 rounded-full h-2 mt-2">
                    <div
                      className="h-2 bg-green-500 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-4 h-64 overflow-y-auto font-mono text-sm">
                    {processingLogs.map((log, index) => (
                      <div key={index} className="text-green-400 mb-1">
                        {log}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Depth Toggle */}
            <div className="flex gap-2 p-1 bg-muted rounded-lg">
              {depthOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setActiveDepth(option)}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeDepth === option
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Dynamic Content */}
            <div className="min-h-96">{getDepthContent()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
