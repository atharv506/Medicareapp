"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, FileText, Pill, TestTube, CreditCard, Download, Bell, LogOut, Activity } from "lucide-react"

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const patientData = {
    name: "John Smith",
    id: "P-2024-001",
    age: 34,
    bloodType: "O+",
    phone: "+1 (555) 123-4567",
    email: "john.smith@email.com",
  }

  const reports = [
    {
      id: "R001",
      type: "Blood Test",
      date: "2024-01-15",
      doctor: "Dr. Sarah Wilson",
      status: "Normal",
      file: "blood-test-jan-2024.pdf",
    },
    {
      id: "R002",
      type: "X-Ray Chest",
      date: "2024-01-10",
      doctor: "Dr. Michael Brown",
      status: "Normal",
      file: "xray-chest-jan-2024.pdf",
    },
    {
      id: "R003",
      type: "ECG",
      date: "2024-01-05",
      doctor: "Dr. Emily Davis",
      status: "Abnormal",
      file: "ecg-jan-2024.pdf",
    },
  ]

  const prescriptions = [
    {
      id: "P001",
      medication: "Lisinopril 10mg",
      dosage: "Once daily",
      duration: "30 days",
      prescribedBy: "Dr. Sarah Wilson",
      date: "2024-01-15",
      status: "Active",
    },
    {
      id: "P002",
      medication: "Metformin 500mg",
      dosage: "Twice daily",
      duration: "90 days",
      prescribedBy: "Dr. Michael Brown",
      date: "2024-01-10",
      status: "Active",
    },
    {
      id: "P003",
      medication: "Aspirin 81mg",
      dosage: "Once daily",
      duration: "Ongoing",
      prescribedBy: "Dr. Emily Davis",
      date: "2024-01-05",
      status: "Completed",
    },
  ]

  const bills = [
    {
      id: "B001",
      description: "Consultation & Blood Test",
      amount: 250,
      date: "2024-01-15",
      status: "Paid",
      dueDate: "2024-01-30",
    },
    {
      id: "B002",
      description: "X-Ray Examination",
      amount: 180,
      date: "2024-01-10",
      status: "Pending",
      dueDate: "2024-01-25",
    },
    {
      id: "B003",
      description: "ECG Test",
      amount: 120,
      date: "2024-01-05",
      status: "Overdue",
      dueDate: "2024-01-20",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Patient Portal</h1>
              <p className="text-sm text-gray-500">Welcome back, {patientData.name}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon" asChild>
              <a href="/">
                <LogOut className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
          <nav className="space-y-2">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("overview")}
            >
              <Activity className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button
              variant={activeTab === "reports" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("reports")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Medical Reports
            </Button>
            <Button
              variant={activeTab === "prescriptions" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("prescriptions")}
            >
              <Pill className="mr-2 h-4 w-4" />
              Prescriptions
            </Button>
            <Button
              variant={activeTab === "tests" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("tests")}
            >
              <TestTube className="mr-2 h-4 w-4" />
              Test Reports
            </Button>
            <Button
              variant={activeTab === "billing" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("billing")}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Billing
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Health Overview</h2>
              </div>

              {/* Patient Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Patient Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Patient ID</p>
                      <p className="font-medium">{patientData.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Age</p>
                      <p className="font-medium">{patientData.age} years</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Blood Type</p>
                      <p className="font-medium">{patientData.bloodType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{patientData.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{patientData.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Reports</p>
                        <p className="text-2xl font-bold text-gray-900">{reports.length}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Pill className="h-8 w-8 text-green-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Active Prescriptions</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {prescriptions.filter((p) => p.status === "Active").length}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <TestTube className="h-8 w-8 text-purple-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Pending Tests</p>
                        <p className="text-2xl font-bold text-gray-900">2</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <CreditCard className="h-8 w-8 text-red-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Pending Bills</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {bills.filter((b) => b.status !== "Paid").length}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Reports</h2>
              </div>
              <div className="space-y-4">
                {reports.map((report) => (
                  <Card key={report.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <FileText className="h-5 w-5 text-blue-600" />
                            <h3 className="font-semibold text-gray-900">{report.type}</h3>
                            <Badge variant={report.status === "Normal" ? "default" : "destructive"}>
                              {report.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">Doctor: {report.doctor}</p>
                          <p className="text-sm text-gray-500">Date: {report.date}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "prescriptions" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Prescriptions</h2>
              </div>
              <div className="space-y-4">
                {prescriptions.map((prescription) => (
                  <Card key={prescription.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Pill className="h-5 w-5 text-green-600" />
                            <h3 className="font-semibold text-gray-900">{prescription.medication}</h3>
                            <Badge variant={prescription.status === "Active" ? "default" : "secondary"}>
                              {prescription.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">Dosage: {prescription.dosage}</p>
                          <p className="text-sm text-gray-600 mb-1">Duration: {prescription.duration}</p>
                          <p className="text-sm text-gray-500">Prescribed by: {prescription.prescribedBy}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">{prescription.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "tests" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Test Reports</h2>
              </div>
              <div className="space-y-4">
                {reports.map((report) => (
                  <Card key={report.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <TestTube className="h-5 w-5 text-purple-600" />
                            <h3 className="font-semibold text-gray-900">{report.type}</h3>
                            <Badge variant={report.status === "Normal" ? "default" : "destructive"}>
                              {report.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">Conducted by: {report.doctor}</p>
                          <p className="text-sm text-gray-500">Date: {report.date}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Results
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing & Payments</h2>
              </div>
              <div className="space-y-4">
                {bills.map((bill) => (
                  <Card key={bill.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CreditCard className="h-5 w-5 text-blue-600" />
                            <h3 className="font-semibold text-gray-900">{bill.description}</h3>
                            <Badge
                              variant={
                                bill.status === "Paid"
                                  ? "default"
                                  : bill.status === "Overdue"
                                    ? "destructive"
                                    : "secondary"
                              }
                            >
                              {bill.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">Amount: ${bill.amount}</p>
                          <p className="text-sm text-gray-500">Due Date: {bill.dueDate}</p>
                        </div>
                        <div className="flex gap-2">
                          {bill.status !== "Paid" && <Button size="sm">Pay Now</Button>}
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Invoice
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
