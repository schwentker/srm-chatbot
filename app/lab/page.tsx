"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FlaskConical, Clock, TrendingUp, DollarSign } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LabPage() {
  const router = useRouter()

  const handleBackToChat = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleBackToChat}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Chat
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <FlaskConical className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">SRM Corp AI Lab</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Experience Strategic Intelligence in Action</p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* NEW: Waived Fee Analysis Demo Card - First Position */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-gradient-to-br from-emerald-50/50 to-green-50/50 hover:from-emerald-100/60 hover:to-green-100/60 border-emerald-200/50">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-medium text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full">
                  AVAILABLE
                </span>
              </div>
              <CardTitle className="text-xl font-bold text-foreground group-hover:text-emerald-700 transition-colors">
                Waived Fee Analysis
              </CardTitle>
              <p className="text-sm text-muted-foreground font-medium">
                Pattern Detection & Policy Drift Identification
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                Discover hidden revenue leakage through AI-powered analysis of 12-24 months of fee waiver patterns.
                Identify staff behavior trends, system configuration issues, and legacy policy gaps that are eroding
                non-interest income.
              </p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-3">
                <p className="text-xs font-semibold text-emerald-800">
                  Typical ROI: 10-30% fee recovery within 8 weeks
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>4-minute tactical walkthrough</span>
              </div>

              <Button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white group-hover:shadow-md transition-all"
                onClick={() => router.push("/lab/waived-fee-analysis")}
              >
                Launch Demo
              </Button>
            </CardContent>
          </Card>

          {/* Existing Margin Analysis Demo Card - Second Position */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-gradient-to-br from-card to-card/80 hover:from-accent/5 hover:to-accent/10">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">AVAILABLE</span>
              </div>
              <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                AI-Powered Margin Analysis
              </CardTitle>
              <p className="text-sm text-muted-foreground font-medium">
                5-Phase Agentic Process for Credit Union Profitability
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                See how our AI agents transform your existing data exports into actionable margin improvement strategies
                through intelligent analysis and recommendations.
              </p>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>5-minute interactive walkthrough</span>
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-md transition-all"
                onClick={() => router.push("/lab/margin-analysis")}
              >
                Launch Demo
              </Button>
            </CardContent>
          </Card>

          {/* Vendor Risk Assessment - Third Position */}
          <Card className="opacity-60 border-dashed border-2 border-border bg-muted/20">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <FlaskConical className="w-5 h-5 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  COMING SOON
                </span>
              </div>
              <CardTitle className="text-xl font-bold text-muted-foreground">Vendor Risk Assessment</CardTitle>
              <p className="text-sm text-muted-foreground font-medium">AI-Driven Supplier Evaluation & Monitoring</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprehensive vendor analysis using machine learning to identify risks, opportunities, and optimization
                strategies.
              </p>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>Coming Q2 2025</span>
              </div>

              <Button disabled className="w-full">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          {/* Digital Transformation Planner - Fourth Position */}
          <Card className="opacity-60 border-dashed border-2 border-border bg-muted/20">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <FlaskConical className="w-5 h-5 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  COMING SOON
                </span>
              </div>
              <CardTitle className="text-xl font-bold text-muted-foreground">Digital Transformation Planner</CardTitle>
              <p className="text-sm text-muted-foreground font-medium">Strategic Technology Roadmap Generator</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-powered planning tool that creates customized digital transformation roadmaps based on your
                organization's current state and goals.
              </p>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>Coming Q3 2025</span>
              </div>

              <Button disabled className="w-full">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Explore the Future of Strategic Resource Management
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our AI Lab showcases cutting-edge demonstrations of how artificial intelligence can transform your
                business operations. Each demo provides hands-on experience with real-world scenarios and actionable
                insights you can implement immediately.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
