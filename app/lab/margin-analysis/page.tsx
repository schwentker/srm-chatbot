"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CheckCircle, Database, Brain, Flag, Calculator, Users } from "lucide-react"
import { useNavigation } from "../../../hooks/useNavigation"

const steps = [
  {
    id: 1,
    title: "Data Pull (Non-Disruptive)",
    icon: Database,
    description: "AI agents securely access your existing data exports without disrupting operations",
    content: {
      type: "data",
      data: `LOAN_PORTFOLIO_EXPORT_Q4_2024.csv
Product_Type,Outstanding_Balance,Avg_Rate,Avg_Term_Months,Loss_Rate_12M
Auto_New,24500000,6.25,60,0.8
Auto_Used,18200000,7.15,54,1.2
Mortgage_Primary,145600000,4.85,360,0.3
HELOC,8900000,8.75,120,0.6
Credit_Cards,3400000,12.50,N/A,2.1

DEPOSIT_PORTFOLIO_EXPORT_Q4_2024.csv
Product_Type,Balance,Current_Rate,Avg_Balance_Per_Account
Share_Savings,89500000,0.25,2400
Money_Market,34200000,1.85,15600
Share_Certificates_12M,28900000,3.25,8500
Checking,67800000,0.10,3200`,
    },
  },
  {
    id: 2,
    title: "Agentic Margin Analysis",
    icon: Brain,
    description: "AI agents analyze spread relationships and identify margin compression patterns",
    content: {
      type: "analysis",
      insights: [
        "Auto loan margins: 4.2% average spread vs industry 4.8%",
        "Deposit cost optimization opportunity: $2.1M annually",
        "HELOC pricing 15bp below optimal rate corridor",
        "Credit card portfolio underperforming by 180bp",
      ],
    },
  },
  {
    id: 3,
    title: "Opportunity Flagging",
    icon: Flag,
    description: "System identifies high-impact opportunities ranked by potential ROI",
    content: {
      type: "opportunities",
      flags: [
        { priority: "High", opportunity: "Repricing HELOC portfolio", impact: "$890K annual" },
        { priority: "High", opportunity: "Money market rate optimization", impact: "$650K annual" },
        { priority: "Medium", opportunity: "Auto loan rate adjustment", impact: "$420K annual" },
        { priority: "Low", opportunity: "Certificate term restructuring", impact: "$180K annual" },
      ],
    },
  },
  {
    id: 4,
    title: "Impact Modeling",
    icon: Calculator,
    description: "Predictive models simulate outcomes and member retention scenarios",
    content: {
      type: "modeling",
      scenarios: [
        { scenario: "Conservative Approach", netIncome: "+$1.2M", memberRetention: "98.5%", timeframe: "12 months" },
        { scenario: "Balanced Strategy", netIncome: "+$1.8M", memberRetention: "97.2%", timeframe: "12 months" },
        { scenario: "Aggressive Optimization", netIncome: "+$2.4M", memberRetention: "95.8%", timeframe: "12 months" },
      ],
    },
  },
  {
    id: 5,
    title: "Human Review & Action",
    icon: Users,
    description: "Strategic recommendations delivered to leadership with implementation roadmap",
    content: {
      type: "recommendations",
      actions: [
        { phase: "Immediate (30 days)", action: "Implement HELOC rate adjustment", impact: "Quick wins" },
        { phase: "Short-term (90 days)", action: "Launch deposit rate optimization", impact: "Member communication" },
        { phase: "Medium-term (6 months)", action: "Auto loan portfolio repricing", impact: "Competitive positioning" },
        {
          phase: "Long-term (12 months)",
          action: "Full margin optimization rollout",
          impact: "Strategic transformation",
        },
      ],
    },
  },
]

export default function MarginAnalysisDemo() {
  const navigation = useNavigation()
  const [currentStep, setCurrentStep] = useState(1)

  const handleBackToLab = () => {
    navigation.push("/lab")
  }

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentStepData = steps.find((step) => step.id === currentStep)
  const IconComponent = currentStepData?.icon || Database

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleBackToLab}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Lab
            </Button>
            <div className="text-sm text-muted-foreground">
              Step {currentStep} of {steps.length}
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-muted/30">
        <div
          className="h-1 bg-primary transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Step Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold text-foreground">{currentStepData?.title}</h1>
              <p className="text-muted-foreground">{currentStepData?.description}</p>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <Card className="mb-8">
          <CardContent className="p-8">
            {currentStepData?.content.type === "data" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">Sample Data Files Processed</h3>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-pre-wrap text-foreground">{currentStepData.content.data}</pre>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Data successfully imported and validated</span>
                </div>
              </div>
            )}

            {currentStepData?.content.type === "analysis" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">AI Analysis Results</h3>
                <div className="grid gap-3">
                  {currentStepData.content.insights?.map((insight, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <Brain className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStepData?.content.type === "opportunities" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">Identified Opportunities</h3>
                <div className="space-y-3">
                  {currentStepData.content.flags?.map((flag, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            flag.priority === "High"
                              ? "bg-red-100 text-red-700"
                              : flag.priority === "Medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                          }`}
                        >
                          {flag.priority}
                        </span>
                        <span className="text-foreground font-medium">{flag.opportunity}</span>
                      </div>
                      <span className="text-primary font-semibold">{flag.impact}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStepData?.content.type === "modeling" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">Impact Scenarios</h3>
                <div className="grid gap-4">
                  {currentStepData.content.scenarios?.map((scenario, index) => (
                    <Card key={index} className="border-border">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">{scenario.scenario}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Net Income Impact</span>
                            <div className="font-semibold text-green-600">{scenario.netIncome}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Member Retention</span>
                            <div className="font-semibold text-foreground">{scenario.memberRetention}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Timeframe</span>
                            <div className="font-semibold text-foreground">{scenario.timeframe}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {currentStepData?.content.type === "recommendations" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">Implementation Roadmap</h3>
                <div className="space-y-4">
                  {currentStepData.content.actions?.map((action, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg"
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-primary text-sm mb-1">{action.phase}</div>
                        <div className="text-foreground font-medium mb-1">{action.action}</div>
                        <div className="text-muted-foreground text-sm">{action.impact}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous Step
          </Button>

          <div className="flex items-center gap-2">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`w-3 h-3 rounded-full transition-colors ${
                  step.id === currentStep ? "bg-primary" : step.id < currentStep ? "bg-primary/60" : "bg-muted"
                }`}
              />
            ))}
          </div>

          {currentStep < steps.length ? (
            <Button onClick={handleNextStep} className="flex items-center gap-2">
              Next Step
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button onClick={handleBackToLab} className="flex items-center gap-2">
              Complete Demo
              <CheckCircle className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
