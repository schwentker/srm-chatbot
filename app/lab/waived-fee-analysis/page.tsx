"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Database,
  Users,
  Building,
  Clock,
  Shield,
  GitBranch,
  Play,
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Calendar,
  Upload,
  FileText,
  FileSpreadsheet,
  Download,
  Settings,
} from "lucide-react"
import { useRouter } from "next/navigation"

type AgentStatus = "idle" | "processing" | "complete"
type DepthLevel = "executive" | "workflow" | "implementation"

interface Agent {
  id: string
  name: string
  icon: any
  status: AgentStatus
  description: string
  tooltip: string
  currentTask?: string
}

const agents: Agent[] = [
  {
    id: "coordinator",
    name: "Primary Coordinator Agent",
    icon: GitBranch,
    status: "idle",
    description: "Orchestrates multi-agent analysis workflow",
    tooltip: "Orchestrates the entire multi-agent workflow and consolidates findings from all specialized agents.",
  },
  {
    id: "data-ingestion",
    name: "Data Ingestion Agent",
    icon: Database,
    status: "idle",
    description: "Processes fee waiver transaction data",
    tooltip:
      "Normalizes uploaded CSV exports and extracts structured data from PDF reports. Handles format validation and data quality checks.",
  },
  {
    id: "behavioral-pattern",
    name: "Behavioral Pattern Agent",
    icon: Users,
    status: "idle",
    description: "Analyzes staff waiver patterns and trends",
    tooltip:
      "Analyzes uploaded member demographic files to identify waiver patterns by member profile, tenure, and relationship depth.",
  },
  {
    id: "operational-pattern",
    name: "Operational Pattern Agent",
    icon: Building,
    status: "idle",
    description: "Identifies system and process inefficiencies",
    tooltip:
      "Processes staff directory and fee transaction exports to detect policy drift and inconsistent waiver practices by employee.",
  },
  {
    id: "temporal-pattern",
    name: "Temporal Pattern Agent",
    icon: Clock,
    status: "idle",
    description: "Detects time-based waiver anomalies",
    tooltip:
      "Analyzes time-stamped data from uploaded transaction files to identify seasonal patterns and unusual waiver frequency.",
  },
  {
    id: "policy-compliance",
    name: "Policy Compliance Agent",
    icon: Shield,
    status: "idle",
    description: "Validates waivers against current policies",
    tooltip:
      "Extracts policy parameters from uploaded documentation and compares against actual waiver practices found in transaction data.",
  },
]

const uploadSources = [
  {
    id: "core-banking",
    name: "Core Banking Fee Reports",
    description: "Monthly fee transaction exports (CSV)",
    sampleFile: "Fee_Income_Report_Q4_2024.csv",
    status: "uploaded",
    fileSize: "45.2 MB",
    recordCount: "573,429 transactions processed",
    acceptedFormats: ["CSV"],
    icon: FileSpreadsheet,
  },
  {
    id: "card-processor",
    name: "Card Processor Statements",
    description: "Monthly card fee & reversal reports (PDF)",
    sampleFile: "PSCU_Fee_Statement_Dec2024.pdf",
    status: "uploaded",
    fileSize: "8.7 MB",
    recordCount: "PDF parsed, 125,000 records extracted",
    acceptedFormats: ["PDF"],
    icon: FileText,
  },
  {
    id: "member-demographics",
    name: "Member Demographics Export",
    description: "Member profile data (Excel/CSV)",
    sampleFile: "Member_Demographics_Current.xlsx",
    status: "uploaded",
    fileSize: "3.1 MB",
    recordCount: "28,500 active members",
    acceptedFormats: ["Excel", "CSV"],
    icon: FileSpreadsheet,
  },
  {
    id: "staff-directory",
    name: "Staff Directory",
    description: "Employee roster with roles/locations (Excel)",
    sampleFile: "Staff_Directory_2024.xlsx",
    status: "uploaded",
    fileSize: "0.8 MB",
    recordCount: "145 active staff",
    acceptedFormats: ["Excel"],
    icon: FileSpreadsheet,
  },
  {
    id: "policy-docs",
    name: "Policy Documentation",
    description: "Current fee waiver policies (PDF)",
    sampleFile: "Fee_Waiver_Policy_v3.2.pdf",
    status: "uploaded",
    fileSize: "1.2 MB",
    recordCount: "Policy parameters extracted",
    acceptedFormats: ["PDF"],
    icon: FileText,
  },
]

export default function WaivedFeeAnalysisDemo() {
  const router = useRouter()
  const [activeDepth, setActiveDepth] = useState<DepthLevel>("executive")
  const [agentStates, setAgentStates] = useState<Agent[]>(agents)
  const [isAnalysisRunning, setIsAnalysisRunning] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null)
  const [currentPhase, setCurrentPhase] = useState<string>("")
  const [processingProgress, setProcessingProgress] = useState<number>(0)
  const [processingLogs, setProcessingLogs] = useState<string[]>([])

  const handleBackToLab = () => {
    router.push("/lab")
  }

  const startAnalysis = () => {
    setIsAnalysisRunning(true)
    setShowResults(false)
    setProcessingProgress(0)
    setProcessingLogs([])

    setCurrentPhase("Phase 1: Data Ingestion")

    const phase1Tasks = [
      { delay: 2000, message: "Initializing file processing workflow...", agent: "data-ingestion", progress: 4 },
      {
        delay: 4000,
        message: "Processing uploaded file: Fee_Income_Report_Q4_2024.csv",
        agent: "data-ingestion",
        progress: 8,
      },
      { delay: 6000, message: "Validating CSV format and headers... ✓", agent: "data-ingestion", progress: 12 },
      { delay: 7000, message: "Extracting 573,429 fee transaction records", agent: "data-ingestion", progress: 16 },
      {
        delay: 9000,
        message: "Processing uploaded file: PSCU_Fee_Statement_Dec2024.pdf",
        agent: "data-ingestion",
        progress: 18,
      },
      {
        delay: 11000,
        message: "Parsing PDF tables and extracting structured data...",
        agent: "data-ingestion",
        progress: 20,
      },
      {
        delay: 13000,
        message: "Successfully extracted 125,000 card fee records",
        agent: "data-ingestion",
        progress: 22,
      },
      {
        delay: 14000,
        message: "Processing uploaded file: Member_Demographics_Current.xlsx",
        agent: "data-ingestion",
        progress: 23,
      },
      {
        delay: 15000,
        message: "Reading Excel worksheets and member profiles...",
        agent: "data-ingestion",
        progress: 24,
      },
      { delay: 16000, message: "Loaded 28,500 member records for analysis", agent: "data-ingestion", progress: 24 },
      {
        delay: 17000,
        message: "Processing uploaded file: Staff_Directory_2024.xlsx",
        agent: "data-ingestion",
        progress: 24,
      },
      {
        delay: 18000,
        message: "Mapping employee IDs and organizational structure...",
        agent: "data-ingestion",
        progress: 24,
      },
      {
        delay: 19000,
        message: "Processing uploaded file: Fee_Waiver_Policy_v3.2.pdf",
        agent: "data-ingestion",
        progress: 24,
      },
      {
        delay: 21000,
        message: "Extracting policy parameters and waiver thresholds...",
        agent: "data-ingestion",
        progress: 24,
      },
      {
        delay: 22000,
        message: "File processing complete: 99.4% data quality score ✓",
        agent: "data-ingestion",
        progress: 24,
      },
    ]

    const phase2Tasks = [
      { delay: 12000, message: "Phase 2: Parallel Pattern Analysis", phase: true, progress: 24 },
      {
        delay: 16000,
        message: "Segmenting members by tenure and balance...",
        agent: "behavioral-pattern",
        progress: 32,
      },
      {
        delay: 21000,
        message: "Analyzing waiver frequency by member profile...",
        agent: "behavioral-pattern",
        progress: 42,
      },
      {
        delay: 24000,
        message: "Detecting high-value member waiver patterns...",
        agent: "behavioral-pattern",
        progress: 48,
      },
      {
        delay: 27000,
        message: "Cross-referencing relationship depth scores...",
        agent: "behavioral-pattern",
        progress: 54,
      },

      {
        delay: 16000,
        message: "Mapping waivers by staff member and location...",
        agent: "operational-pattern",
        progress: 32,
      },
      {
        delay: 21000,
        message: "Identifying outlier waiver rates by employee...",
        agent: "operational-pattern",
        progress: 42,
      },
      {
        delay: 25000,
        message: "Analyzing channel distribution patterns...",
        agent: "operational-pattern",
        progress: 50,
      },
      {
        delay: 28000,
        message: "Detecting potential policy drift indicators...",
        agent: "operational-pattern",
        progress: 56,
      },

      { delay: 16000, message: "Scanning for time-based anomalies...", agent: "temporal-pattern", progress: 32 },
      { delay: 19000, message: "Analyzing end-of-month waiver spikes...", agent: "temporal-pattern", progress: 38 },
      { delay: 22000, message: "Detecting seasonal variation patterns...", agent: "temporal-pattern", progress: 44 },
      { delay: 25000, message: "Identifying unusual frequency clusters...", agent: "temporal-pattern", progress: 50 },

      {
        delay: 18000,
        message: "Loading current waiver policy parameters...",
        agent: "policy-compliance",
        progress: 36,
      },
      {
        delay: 22000,
        message: "Comparing actual vs documented thresholds...",
        agent: "policy-compliance",
        progress: 44,
      },
      { delay: 26000, message: "Scanning for legacy auto-waiver rules...", agent: "policy-compliance", progress: 52 },
      { delay: 30000, message: "Validating staff authorization levels...", agent: "policy-compliance", progress: 60 },
    ]

    const phase3Tasks = [
      { delay: 35000, message: "Phase 3: Coordinator Synthesis", phase: true, progress: 70 },
      { delay: 38000, message: "Cross-referencing pattern findings...", agent: "coordinator", progress: 76 },
      { delay: 41000, message: "Prioritizing opportunities by revenue impact...", agent: "coordinator", progress: 82 },
      { delay: 43000, message: "Generating actionable recommendations...", agent: "coordinator", progress: 86 },
      { delay: 45000, message: "Calculating projected impact scenarios...", agent: "coordinator", progress: 90 },
    ]

    const phase4Tasks = [
      { delay: 45000, message: "Phase 4: Output Generation", phase: true, progress: 90 },
      { delay: 47000, message: "Compiling executive summary...", agent: "coordinator", progress: 94 },
      { delay: 49000, message: "Preparing implementation roadmap...", agent: "coordinator", progress: 98 },
      { delay: 50000, message: "Finalizing impact projections...", agent: "coordinator", progress: 100 },
    ]

    const allTasks = [...phase1Tasks, ...phase2Tasks, ...phase3Tasks, ...phase4Tasks]

    setTimeout(() => {
      setAgentStates((prev) =>
        prev.map((agent) =>
          agent.id === "data-ingestion" ? { ...agent, status: "processing" as AgentStatus } : agent,
        ),
      )
    }, 2000)

    setTimeout(() => {
      setAgentStates((prev) =>
        prev.map((agent) =>
          ["behavioral-pattern", "operational-pattern", "temporal-pattern", "policy-compliance"].includes(agent.id)
            ? { ...agent, status: "processing" as AgentStatus }
            : agent,
        ),
      )
    }, 12000)

    setTimeout(() => {
      setAgentStates((prev) =>
        prev.map((agent) => (agent.id === "coordinator" ? { ...agent, status: "processing" as AgentStatus } : agent)),
      )
    }, 35000)

    allTasks.forEach((task) => {
      setTimeout(() => {
        if (task.phase) {
          setCurrentPhase(task.message)
        } else {
          setProcessingLogs((prev) => [...prev, task.message])
          if (task.agent) {
            setAgentStates((prev) =>
              prev.map((agent) => (agent.id === task.agent ? { ...agent, currentTask: task.message } : agent)),
            )
          }
        }
        setProcessingProgress(task.progress)
      }, task.delay)
    })

    setTimeout(() => {
      setAgentStates((prev) =>
        prev.map((agent) => ({ ...agent, status: "complete" as AgentStatus, currentTask: undefined })),
      )
      setIsAnalysisRunning(false)
      setShowResults(true)
      setCurrentPhase("Analysis Complete")
      setProcessingLogs((prev) => [...prev, "✅ Multi-agent analysis completed successfully"])
    }, 50000)
  }

  const getStatusColor = (status: AgentStatus) => {
    switch (status) {
      case "idle":
        return "bg-gray-400"
      case "processing":
        return "bg-yellow-400 animate-pulse"
      case "complete":
        return "bg-green-400"
    }
  }

  const getAgentBackgroundColor = (agentId: string) => {
    switch (agentId) {
      case "coordinator":
        return "bg-gradient-to-r from-primary/5 to-primary/10"
      case "data-ingestion":
        return "bg-gradient-to-r from-blue-50 to-blue-100/50"
      case "behavioral-pattern":
        return "bg-gradient-to-r from-green-50 to-green-100/50"
      case "operational-pattern":
        return "bg-gradient-to-r from-purple-50 to-purple-100/50"
      case "temporal-pattern":
        return "bg-gradient-to-r from-orange-50 to-orange-100/50"
      case "policy-compliance":
        return "bg-gradient-to-r from-red-50 to-red-100/50"
      default:
        return "bg-card"
    }
  }

  const getDepthContent = () => {
    if (isAnalysisRunning) {
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">Processing Analysis</h3>
            <div className="text-sm text-muted-foreground">{Math.round(processingProgress)}% Complete</div>
          </div>

          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-emerald-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${processingProgress}%` }}
            />
          </div>

          <div className="bg-muted/30 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">{currentPhase}</h4>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 max-h-80 overflow-y-auto">
            <h4 className="font-medium text-gray-100 mb-3 font-mono">Processing Log</h4>
            <div className="space-y-1 font-mono text-sm">
              {processingLogs.map((log, index) => (
                <div key={index} className="text-green-400">
                  <span className="text-green-500">[{new Date().toLocaleTimeString()}]</span> {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }

    if (showResults) {
      switch (activeDepth) {
        case "executive":
          return (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Executive Summary</h3>

              <div className="grid grid-cols-2 gap-4">
                <Card className="border-emerald-200 bg-emerald-50/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-800">Annual Fee Leakage Identified</span>
                    </div>
                    <div className="text-2xl font-bold text-emerald-700">$2.3M</div>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 bg-blue-50/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Recovery Potential</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-700">$1.6M (70%)</div>
                  </CardContent>
                </Card>
                <Card className="border-orange-200 bg-orange-50/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <span className="text-sm font-medium text-orange-800">Implementation Timeline</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-700">6-8 weeks</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Top 3 Findings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-red-50/50 border border-red-200 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-red-800">Staff Policy Drift</div>
                      <div className="text-sm text-red-700">23% of NSF waivers exceed documented thresholds</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-orange-50/50 border border-orange-200 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-orange-800">Legacy Auto-Waiver</div>
                      <div className="text-sm text-orange-700">$340K annually from outdated promotional rules</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-yellow-50/50 border border-yellow-200 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-yellow-800">Channel Inconsistency</div>
                      <div className="text-sm text-yellow-700">Phone waivers 3.2x higher than branch rates</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Wins</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-emerald-50/50 border border-emerald-200 rounded-lg">
                    <div>
                      <div className="font-medium text-emerald-800">Update 4 legacy system rules</div>
                      <div className="text-sm text-emerald-700">Immediate system configuration changes</div>
                    </div>
                    <div className="text-lg font-bold text-emerald-700">$340K</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50/50 border border-emerald-200 rounded-lg">
                    <div>
                      <div className="font-medium text-emerald-800">Retrain 8 high-waiver staff members</div>
                      <div className="text-sm text-emerald-700">Focused policy training program</div>
                    </div>
                    <div className="text-lg font-bold text-emerald-700">$280K</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50/50 border border-emerald-200 rounded-lg">
                    <div>
                      <div className="font-medium text-emerald-800">Adjust phone channel protocols</div>
                      <div className="text-sm text-emerald-700">Standardize call center procedures</div>
                    </div>
                    <div className="text-lg font-bold text-emerald-700">$190K</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        case "workflow":
          return (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Agent Workflow Results</h3>
              <div className="text-sm text-muted-foreground mb-4">
                Results from processing: Fee_Income_Report_Q4_2024.csv, PSCU_Fee_Statement_Dec2024.pdf,
                Member_Demographics_Current.xlsx, Staff_Directory_2024.xlsx, Fee_Waiver_Policy_v3.2.pdf
              </div>

              <div className="grid gap-4">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-600" />
                      Behavioral Pattern Agent Results
                      <FileText className="w-4 h-4 text-muted-foreground ml-auto" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">Member Segments</div>
                        <div className="text-xs text-muted-foreground">High-value: 2.3x waiver rate</div>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">Waiver Patterns</div>
                        <div className="text-xs text-muted-foreground">Tenure correlation: 4.1x rate</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Analysis of 28,500 member profiles revealed strong correlation between relationship depth and
                      waiver frequency patterns.
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Building className="w-5 h-5 text-purple-600" />
                      Operational Pattern Agent Results
                      <FileText className="w-4 h-4 text-muted-foreground ml-auto" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">Staff Variance</div>
                        <div className="text-xs text-muted-foreground">Top 10% staff: 8.2x avg rate</div>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">Policy Drift</div>
                        <div className="text-xs text-muted-foreground">23% exceed thresholds</div>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">Channel Analysis</div>
                        <div className="text-xs text-muted-foreground">Phone: 3.2x branch rates</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Clock className="w-5 h-5 text-orange-600" />
                      Temporal Pattern Agent Results
                      <FileText className="w-4 h-4 text-muted-foreground ml-auto" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">Month-End Spikes</div>
                        <div className="text-xs text-muted-foreground">Last 3 days: 2.8x normal volume</div>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">Time Patterns</div>
                        <div className="text-xs text-muted-foreground">Dec-Jan: 1.9x baseline rates</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Shield className="w-5 h-5 text-red-600" />
                      Policy Compliance Agent Results
                      <FileText className="w-4 h-4 text-muted-foreground ml-auto" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-red-50/50 border border-red-200 rounded-lg">
                        <div className="text-sm font-medium text-red-800">Uploaded vs Actual</div>
                        <div className="text-xs text-red-700">23% exceed documented limits</div>
                      </div>
                      <div className="p-3 bg-orange-50/50 border border-orange-200 rounded-lg">
                        <div className="text-sm font-medium text-orange-800">Policy Comparison</div>
                        <div className="text-xs text-orange-700">4 outdated auto-waiver configs</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )
        case "implementation":
          return (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Implementation Details</h3>

              <div className="space-y-4">
                <Card className="border-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Export Templates
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium">Fee_Analysis_Template.xlsx</span>
                      </div>
                      <button className="text-xs text-blue-600 hover:text-blue-800">Download</button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">Staff_Training_Checklist.pdf</span>
                      </div>
                      <button className="text-xs text-blue-600 hover:text-blue-800">Download</button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium">Policy_Update_Guide.docx</span>
                      </div>
                      <button className="text-xs text-blue-600 hover:text-blue-800">Download</button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Upload Schedules
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Monthly: Fee income reports (1st business day)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Quarterly: Member demographics refresh</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>As needed: Policy document updates</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Data Guidelines
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="font-medium text-foreground">File Format Requirements</div>
                      <div className="text-sm text-muted-foreground">
                        CSV for transaction data, PDF for policy documents, Excel for structured reports
                      </div>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="font-medium text-foreground">Data Quality Standards</div>
                      <div className="text-sm text-muted-foreground">
                        Minimum 95% completeness, standardized date formats, validated member IDs
                      </div>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <div className="font-medium text-foreground">Security Requirements</div>
                      <div className="text-sm text-muted-foreground">
                        Encrypted file transfer, access logging, data retention policies
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      Workflow Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-muted-foreground">// Integration with existing core banking system</div>
                      <div className="text-foreground">{"{"}</div>
                      <div className="text-foreground"> "api_endpoint": "/fee-analysis/upload",</div>
                      <div className="text-foreground"> "schedule": "monthly",</div>
                      <div className="text-foreground"> "notification_email": "ops@creditunion.com",</div>
                      <div className="text-foreground"> "auto_process": true</div>
                      <div className="text-foreground">{"}"}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )
      }
    }

    switch (activeDepth) {
      case "executive":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Waived Fee Analysis Demo</h3>

            <Card className="border-border bg-blue-50/30">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">This demonstration will:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium text-foreground">Import your uploaded files</div>
                      <div className="text-sm text-muted-foreground">
                        Process fee transaction exports, member data, and policy documents
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium text-foreground">Analyze waived fee patterns</div>
                      <div className="text-sm text-muted-foreground">
                        Deploy 5 specialized AI agents to detect revenue leakage across staff, member, and temporal
                        dimensions
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium text-foreground">Present recovery opportunities</div>
                      <div className="text-sm text-muted-foreground">
                        Generate actionable recommendations with projected impact and implementation timeline
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-emerald-50/50 border border-emerald-200 rounded-lg">
                  <div className="text-sm font-medium text-emerald-800 mb-1">Ready to Begin</div>
                  <div className="text-sm text-emerald-700">
                    Click "Start Analysis" below to begin the 50-second multi-agent workflow using your uploaded data
                    files.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "workflow":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Agent Workflow Process</h3>
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2">Phase 1: Data Collection</h4>
                <p className="text-sm text-muted-foreground">
                  Agents ingest 12-24 months of fee waiver transactions, staff logs, and policy documents
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2">Phase 2: Pattern Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Multi-dimensional analysis of behavioral, operational, and temporal patterns
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2">Phase 3: Policy Validation</h4>
                <p className="text-sm text-muted-foreground">
                  Cross-reference findings against current policies and regulatory requirements
                </p>
              </div>
            </div>
          </div>
        )
      case "implementation":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Implementation Roadmap</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-medium text-foreground">Week 1-2: Data Integration</h4>
                <p className="text-sm text-muted-foreground">Connect existing systems and validate data quality</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-foreground">Week 3-4: Analysis & Training</h4>
                <p className="text-sm text-muted-foreground">Run initial analysis and train staff on new processes</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-medium text-foreground">Week 5-8: Rollout & Optimization</h4>
                <p className="text-sm text-muted-foreground">Deploy recommendations and monitor results</p>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background">
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
            <div className="text-sm text-muted-foreground">Multi-Agent Fee Recovery Analysis</div>
          </div>
        </div>
      </header>

      <div className="border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex gap-1">
            {[
              { key: "executive", label: "Executive Summary" },
              { key: "workflow", label: "Agent Workflow" },
              { key: "implementation", label: "Implementation" },
            ].map(({ key, label }) => (
              <Button
                key={key}
                variant={activeDepth === key ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveDepth(key as DepthLevel)}
                className="text-sm"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Agent Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative">
                  <Card
                    className={`border-border ${getAgentBackgroundColor("coordinator")} cursor-pointer transition-all duration-200 hover:shadow-md`}
                    onMouseEnter={() => setHoveredAgent("coordinator")}
                    onMouseLeave={() => setHoveredAgent(null)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(agentStates[0].status)}`} />
                        <GitBranch className="w-5 h-5 text-primary" />
                        <div className="flex-1">
                          <div className="font-medium text-foreground text-sm">{agentStates[0].name}</div>
                          <div className="text-xs text-muted-foreground">{agentStates[0].description}</div>
                          {agentStates[0].currentTask && (
                            <div className="text-xs text-emerald-600 mt-1 font-mono">{agentStates[0].currentTask}</div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {hoveredAgent === "coordinator" && (
                    <div className="absolute z-10 left-full ml-2 top-0 w-64 bg-popover border border-border rounded-lg shadow-lg p-3">
                      <p className="text-xs text-popover-foreground">{agentStates[0].tooltip}</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-6 bg-border" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {agentStates.slice(1).map((agent, index) => {
                    const IconComponent = agent.icon
                    return (
                      <div key={agent.id} className="relative">
                        <Card
                          className={`border-border ${getAgentBackgroundColor(agent.id)} cursor-pointer transition-all duration-200 hover:shadow-md`}
                          onMouseEnter={() => setHoveredAgent(agent.id)}
                          onMouseLeave={() => setHoveredAgent(null)}
                        >
                          <CardContent className="p-3">
                            <div className="flex items-start gap-2">
                              <div className={`w-2.5 h-2.5 rounded-full mt-1 ${getStatusColor(agent.status)}`} />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <IconComponent className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                </div>
                                <div className="font-medium text-foreground text-xs leading-tight mb-1">
                                  {agent.name}
                                </div>
                                <div className="text-xs text-muted-foreground leading-tight">{agent.description}</div>
                                {agent.currentTask && (
                                  <div className="text-xs text-emerald-600 mt-1 font-mono leading-tight">
                                    {agent.currentTask}
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        {hoveredAgent === agent.id && (
                          <div className="absolute z-10 left-full ml-2 top-0 w-64 bg-popover border border-border rounded-lg shadow-lg p-3">
                            <p className="text-xs text-popover-foreground">{agent.tooltip}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                <Card className="border-border mt-6">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Data Sources Upload</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {uploadSources.map((source, index) => {
                        const IconComponent = source.icon
                        return (
                          <div
                            key={source.id}
                            className="border border-dashed border-border rounded-lg p-3 bg-muted/20"
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                                  <IconComponent className="w-4 h-4 text-emerald-600" />
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs font-medium text-foreground">{source.name}</span>
                                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                                </div>
                                <p className="text-xs text-muted-foreground mb-1">{source.description}</p>
                                <div className="text-xs text-emerald-600 font-medium mb-1">{source.sampleFile}</div>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-muted-foreground">{source.fileSize}</span>
                                  <span className="text-xs text-emerald-600">{source.recordCount}</span>
                                </div>
                                <div className="flex gap-1 mt-1">
                                  {source.acceptedFormats.map((format) => (
                                    <span
                                      key={format}
                                      className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded"
                                    >
                                      {format}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="mt-2 w-full bg-emerald-100 rounded-full h-1">
                              <div className="bg-emerald-500 h-1 rounded-full w-full" />
                            </div>
                          </div>
                        )
                      })}
                      <div className="text-center pt-2">
                        <Button variant="outline" size="sm" className="text-xs bg-transparent">
                          <Upload className="w-3 h-3 mr-1" />
                          Sample File Formats
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-3">
            <Card className="border-border h-full">
              <CardContent className="p-6 h-full">{getDepthContent()}</CardContent>
            </Card>
          </div>
        </div>

        {!showResults && (
          <div className="mt-12 pt-8 border-t border-border text-center">
            <Button
              size="lg"
              onClick={startAnalysis}
              disabled={isAnalysisRunning}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-base font-medium"
            >
              <Play className="w-5 h-5 mr-2" />
              {isAnalysisRunning ? "Analysis Running..." : "Start Analysis"}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
