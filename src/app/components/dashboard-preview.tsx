import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ChevronDown, ChevronRight, MoreHorizontal, Plus, RefreshCw, Search } from "lucide-react"
import Logo from "./logo"

export default function DashboardPreview() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 mb-24">
      <div className="max-w-6xl mx-auto rounded-[2rem] overflow-hidden bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 shadow-xl">
        <div className="p-6 sm:p-8">
          {/* Dashboard Header */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center gap-4">
                <Logo variant="dashboard" />
                <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md text-sm font-medium">
                  <span>Candidates</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm w-64 focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>MP</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">Mauricio P.</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6">
              {/* User greeting and date selector */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500">Hi Mauricio P.</p>
                  <h1 className="text-2xl font-bold">Manage your employee</h1>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="flex items-center gap-2 text-sm">
                    <span>Wednesday, 12 February 2024</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 text-sm">
                    <span>English UK</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Dashboard metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Total employees chart */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-500">Total Employees</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Monthly</span>
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <svg className="w-48 h-48" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#f0f0f0"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeDasharray="251.2"
                        strokeDashoffset="50"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-3xl font-bold">1,200</span>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-500">Total Employees</span>
                        <Badge className="bg-green-500 text-white text-xs px-1">+4%</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 text-center mt-2">Last update: May 2024</div>
                </div>

                {/* Employee metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Full-time employees */}
                  <Card className="p-4 border">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      </div>
                      <span className="text-sm text-gray-500">Full-time Employees</span>
                    </div>
                    <p className="text-2xl font-bold">1,000</p>
                  </Card>

                  {/* Part-time employees */}
                  <Card className="p-4 border">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      </div>
                      <span className="text-sm text-gray-500">Part-time Employees</span>
                    </div>
                    <p className="text-2xl font-bold">100</p>
                  </Card>

                  {/* Contract employees */}
                  <Card className="p-4 border">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span className="text-sm text-gray-500">Contract Employees</span>
                    </div>
                    <p className="text-2xl font-bold">52</p>
                  </Card>

                  {/* Internship employees */}
                  <Card className="p-4 border">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      </div>
                      <span className="text-sm text-gray-500">Internship Employees</span>
                    </div>
                    <p className="text-2xl font-bold">38</p>
                  </Card>
                </div>

                {/* Role demographics */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-500">Role Demographics</h3>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mb-2">
                    <p className="text-2xl font-bold">32</p>
                    <p className="text-sm text-gray-500">Roles</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-pink-500 rounded-full"></div>
                    <div className="w-3/4 h-2 bg-blue-500 rounded-full"></div>
                    <div className="w-1/2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-1/3 h-2 bg-orange-500 rounded-full"></div>
                    <div className="w-1/4 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      <span>Management</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>IT & Security</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Human Resources</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>Sales & Marketing</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>Others</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add employee button */}
              <div className="flex justify-center mb-6">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  <span>Add Employee</span>
                </Button>
              </div>

              {/* Attendance table */}
              <div>
                <Tabs defaultValue="attendance">
                  <div className="flex items-center justify-between mb-4">
                    <TabsList className="bg-gray-100">
                      <TabsTrigger
                        value="attendance"
                        className="data-[state=active]:bg-black data-[state=active]:text-white"
                      >
                        Attendance
                      </TabsTrigger>
                      <TabsTrigger value="progress">Progress</TabsTrigger>
                      <TabsTrigger value="performance">Performance</TabsTrigger>
                      <TabsTrigger value="day-off">Day-off request</TabsTrigger>
                    </TabsList>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <TabsContent value="attendance" className="mt-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-xs text-gray-500 border-b">
                            <th className="py-3 px-4 text-left">Employee ID</th>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Department</th>
                            <th className="py-3 px-4 text-left">Status</th>
                            <th className="py-3 px-4 text-left">Check-in time</th>
                            <th className="py-3 px-4 text-left">Check-out time</th>
                            <th className="py-3 px-4 text-left">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[1, 2, 3, 4, 5].map((i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4 text-sm">11{i}82</td>
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>AL</AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm">Ahmed Lutfi</span>
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                                  Marketing
                                </Badge>
                              </td>
                              <td className="py-3 px-4">
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                  Active
                                </Badge>
                              </td>
                              <td className="py-3 px-4 text-sm">11:00 AM</td>
                              <td className="py-3 px-4 text-sm">05:30 PM</td>
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <ChevronRight className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
