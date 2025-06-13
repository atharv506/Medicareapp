"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Hospital,
  Users,
  Calendar,
  FileText,
  Search,
  Bell,
  LogOut,
  Activity,
  UserPlus,
  Stethoscope,
  ClipboardList,
  TrendingUp,
} from "lucide-react"

export default function HospitalDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")

  const patients = [
    {
      id: "P-2024-001",
      name: "John Smith",
      age: 34,
      bloodType: "O+",
      lastVisit: "2024-01-15",
      condition: "Hypertension",
      status: "Stable",
      doctor: "Dr. Sarah Wilson",
    },
    {
      id: "P-2024-002",
      name: "Emily Johnson",
      age: 28,
      bloodType: "A+",
      lastVisit: "2024-01-14",
      condition: "Diabetes",
      status: "Monitoring",
      doctor: "Dr. Michael Brown",
    },
    {
      id: "P-2024-003",
      name: "Robert Davis",
      age: 45,
      bloodType: "B-",
      lastVisit: "2024-01-13",
      condition: "Heart Disease",
      status: "Critical",
      doctor: "Dr. Emily Davis",
    },
    {
      id: "P-2024-004",
      name: "Sarah Wilson",
      age: 52,
      bloodType: "AB+",
      lastVisit: "2024-01-12",
      condition: "Arthritis",
      status: "Stable",
      doctor: "Dr. James Miller",
    },
  ]

  const appointments = [
    {
      id: "A001",
      patient: "John Smith",
      doctor: "Dr. Sarah Wilson",
      time: "09:00 AM",
      date: "2024-01-16",
      type: "Follow-up",
      status: "Scheduled",
    },
    {
      id: "A002",
      patient: "Emily Johnson",
      doctor: "Dr. Michael Brown",
      time: "10:30 AM",
      date: "2024-01-16",
      type: "Consultation",
      status: "Confirmed",
    },
    {
      id: "A003",
      patient: "Robert Davis",
      doctor: "Dr. Emily Davis",
      time: "02:00 PM",
      date: "2024-01-16",
      type: "Emergency",
      status: "Urgent",
    },
  ]

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-green-600 p-2 rounded-lg">
              <Hospital className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Hospital Management</h1>
              <p className="text-sm text-gray-500">Central Medical Center</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>DR</AvatarFallback>
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
              variant={activeTab === "patients" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("patients")}
            >
              <Users className="mr-2 h-4 w-4" />
              Patients
            </Button>
            <Button
              variant={activeTab === "appointments" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("appointments")}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Appointments
            </Button>
            <Button
              variant={activeTab === "reports" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("reports")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Medical Records
            </Button>
            <Button
              variant={activeTab === "analytics" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("analytics")}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Analytics
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hospital Overview</h2>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Users className="h-8 w-8 text-blue-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Patients</p>
                        <p className="text-2xl font-bold text-gray-900">{patients.length}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Calendar className="h-8 w-8 text-green-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
                        <p className="text-2xl font-bold text-gray-900">{appointments.length}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Stethoscope className="h-8 w-8 text-purple-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Active Doctors</p>
                        <p className="text-2xl font-bold text-gray-900">12</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <ClipboardList className="h-8 w-8 text-red-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Critical Patients</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {patients.filter((p) => p.status === "Critical").length}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Patients */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Patients</CardTitle>
                  <CardDescription>Latest patient admissions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patients.slice(0, 3).map((patient) => (
                      <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback>
                              {patient.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">{patient.name}</p>
                            <p className="text-sm text-gray-500">
                              {patient.id} • {patient.condition}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            patient.status === "Critical"
                              ? "destructive"
                              : patient.status === "Monitoring"
                                ? "secondary"
                                : "default"
                          }
                        >
                          {patient.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "patients" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Patient Management</h2>
                <Button>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Patient
                </Button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search patients by name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Patients List */}
              <div className="space-y-4">
                {filteredPatients.map((patient) => (
                  <Card key={patient.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>
                              {patient.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                            <p className="text-sm text-gray-600">
                              {patient.id} • Age: {patient.age} • Blood Type: {patient.bloodType}
                            </p>
                            <p className="text-sm text-gray-500">
                              Condition: {patient.condition} • Doctor: {patient.doctor}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge
                            variant={
                              patient.status === "Critical"
                                ? "destructive"
                                : patient.status === "Monitoring"
                                  ? "secondary"
                                  : "default"
                            }
                          >
                            {patient.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "appointments" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
                <Button>
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Appointment
                </Button>
              </div>

              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <Card key={appointment.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Calendar className="h-5 w-5 text-blue-600" />
                            <h3 className="font-semibold text-gray-900">{appointment.patient}</h3>
                            <Badge
                              variant={
                                appointment.status === "Urgent"
                                  ? "destructive"
                                  : appointment.status === "Confirmed"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {appointment.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">Doctor: {appointment.doctor}</p>
                          <p className="text-sm text-gray-600 mb-1">Type: {appointment.type}</p>
                          <p className="text-sm text-gray-500">
                            {appointment.date} at {appointment.time}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button size="sm">Start Consultation</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Records</h2>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Medical Records Management</h3>
                    <p className="text-gray-500 mb-4">
                      Access and manage patient medical records, test results, and treatment history.
                    </p>
                    <Button>
                      <FileText className="h-4 w-4 mr-2" />
                      Browse Records
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hospital Analytics</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Patient Status Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Stable</span>
                        <span className="text-sm font-medium">
                          {patients.filter((p) => p.status === "Stable").length} patients
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Monitoring</span>
                        <span className="text-sm font-medium">
                          {patients.filter((p) => p.status === "Monitoring").length} patients
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Critical</span>
                        <span className="text-sm font-medium">
                          {patients.filter((p) => p.status === "Critical").length} patients
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Department Workload</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Cardiology</span>
                        <span className="text-sm font-medium">8 patients</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Internal Medicine</span>
                        <span className="text-sm font-medium">12 patients</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Emergency</span>
                        <span className="text-sm font-medium">5 patients</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
