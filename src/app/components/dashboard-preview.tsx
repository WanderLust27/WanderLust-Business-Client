import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ChevronDown, ChevronRight, MoreHorizontal, Plus, RefreshCw, Search } from "lucide-react"
import Logo from "./logo"

export default function DashboardPreview() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[hsl(var(--secondary)_/_0.3)] via-[hsl(var(--primary)_/_0.2)] to-transparent rounded-[40rem] blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[hsl(var(--primary)_/_0.2)] via-[hsl(var(--secondary)_/_0.2)] to-transparent rounded-[40rem] blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Dashboard Preview */}
      <div className="relative max-w-6xl mx-auto">
        <div className="bg-[hsl(var(--background)_/_0.8)] backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden border border-[hsl(var(--border)_/_0.5)]">
          {/* Dashboard Header */}
          <div className="p-6 border-b border-[hsl(var(--border)_/_0.5)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <h2 className="text-xl font-semibold">Manage your employee</h2>
                <Button variant="outline" size="sm" className="text-sm rounded-full">
                  Total Employee
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[hsl(var(--muted-foreground))]" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 rounded-full bg-[hsl(var(--muted)_/_0.5)] text-sm w-64 focus:outline-none border border-[hsl(var(--border)_/_0.5)]"
                  />
                </div>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Employee
                </Button>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-6 mb-6">
              {/* Total Employees */}
              <Card className="p-6 relative overflow-hidden rounded-3xl">
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold mb-1">1,200</h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">Total Employees</p>
                  <div className="mt-4 flex items-center gap-4">
                    <Badge variant="secondary" className="bg-[hsl(var(--primary)_/_0.1)] text-[hsl(var(--primary))] rounded-full">
                      +15%
                    </Badge>
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">vs last month</span>
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-[hsl(var(--primary)_/_0.1)] to-transparent rounded-[10rem] opacity-50"></div>
              </Card>

              {/* Administrative */}
              <Card className="p-6 rounded-3xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-3xl font-bold">1,000</p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">Administrative</p>
                  </div>
                  <Badge variant="secondary" className="bg-[hsl(var(--secondary)_/_0.1)] text-[hsl(var(--secondary))] rounded-full">
                    52
                  </Badge>
                </div>
                <div className="h-2 bg-[hsl(var(--muted)_/_0.5)] rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full"></div>
                </div>
              </Card>

              {/* Part-time */}
              <Card className="p-6 rounded-3xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-3xl font-bold">100</p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">Part-time</p>
                  </div>
                  <Badge variant="secondary" className="bg-[hsl(var(--primary)_/_0.1)] text-[hsl(var(--primary))] rounded-full">
                    38
                  </Badge>
                </div>
                <div className="h-2 bg-[hsl(var(--muted)_/_0.5)] rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full"></div>
                </div>
              </Card>

              {/* Rate Planning */}
              <Card className="p-6 rounded-3xl">
                <h3 className="text-sm font-medium text-[hsl(var(--muted-foreground))] mb-4">Rate Planning</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 bg-[hsl(var(--muted)_/_0.5)] rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">32</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 bg-[hsl(var(--muted)_/_0.5)] rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">28</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 bg-[hsl(var(--muted)_/_0.5)] rounded-full overflow-hidden">
                      <div className="h-full w-1/4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">16</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Employee Table */}
            <Card className="rounded-3xl overflow-hidden">
              <Tabs defaultValue="attendance" className="w-full">
                <div className="flex items-center justify-between p-4 border-b border-[hsl(var(--border)_/_0.5)]">
                  <TabsList className="rounded-full">
                    <TabsTrigger value="attendance" className="rounded-full">Attendance</TabsTrigger>
                    <TabsTrigger value="progress" className="rounded-full">Progress</TabsTrigger>
                    <TabsTrigger value="performance" className="rounded-full">Performance</TabsTrigger>
                  </TabsList>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <TabsContent value="attendance" className="p-4">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-xs text-[hsl(var(--muted-foreground))] border-b border-[hsl(var(--border)_/_0.5)]">
                          <th className="py-3 px-4 text-left font-medium">Employee ID</th>
                          <th className="py-3 px-4 text-left font-medium">Name</th>
                          <th className="py-3 px-4 text-left font-medium">Department</th>
                          <th className="py-3 px-4 text-left font-medium">Status</th>
                          <th className="py-3 px-4 text-left font-medium">Check-in</th>
                          <th className="py-3 px-4 text-left font-medium">Check-out</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2, 3].map((i) => (
                          <tr key={i} className="border-b last:border-0 border-[hsl(var(--border)_/_0.5)]">
                            <td className="py-3 px-4 text-sm">EMP-{i}001</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8 rounded-full">
                                  <AvatarImage src={`/placeholder-${i}.jpg`} />
                                  <AvatarFallback>U{i}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="text-sm font-medium">User Name</p>
                                  <p className="text-xs text-[hsl(var(--muted-foreground))]">user@email.com</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <Badge variant="outline" className="bg-[hsl(var(--primary)_/_0.1)] text-[hsl(var(--primary))] rounded-full">
                                Marketing
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <Badge variant="outline" className="bg-[hsl(var(--secondary)_/_0.1)] text-[hsl(var(--secondary))] rounded-full">
                                Active
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-sm">09:00 AM</td>
                            <td className="py-3 px-4 text-sm">05:00 PM</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
