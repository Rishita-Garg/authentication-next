import {
  Bell,
  Building2,
  ChevronDown,
  Home,
  LogOut,
  Settings,
  User,
  Activity,
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  Calendar,
  FileText,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo and App Name */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">SecureApp</h1>
              <p className="text-xs text-slate-500">Professional Dashboard</p>
            </div>
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 px-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-blue-100 text-blue-600">JD</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-slate-900">John Doe</p>
                    <p className="text-xs text-slate-500">john@example.com</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Shield className="mr-2 h-4 w-4" />
                  Security
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:pt-20 bg-white border-r border-slate-200">
          <div className="flex-1 flex flex-col min-h-0 pt-6">
            <nav className="flex-1 px-4 space-y-2">
              <a
                href="#"
                className="bg-blue-50 text-blue-700 group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
              >
                <Home className="mr-3 h-5 w-5" />
                Dashboard
              </a>
              <a
                href="#"
                className="text-slate-600 hover:bg-slate-50 hover:text-slate-900 group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
              >
                <BarChart3 className="mr-3 h-5 w-5" />
                Analytics
              </a>
              <a
                href="#"
                className="text-slate-600 hover:bg-slate-50 hover:text-slate-900 group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
              >
                <Users className="mr-3 h-5 w-5" />
                Team
              </a>
              <a
                href="#"
                className="text-slate-600 hover:bg-slate-50 hover:text-slate-900 group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
              >
                <FileText className="mr-3 h-5 w-5" />
                Reports
              </a>
              <a
                href="#"
                className="text-slate-600 hover:bg-slate-50 hover:text-slate-900 group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Calendar
              </a>
              <a
                href="#"
                className="text-slate-600 hover:bg-slate-50 hover:text-slate-900 group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:pl-64">
          <div className="px-6 py-8">
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, John! 👋</h2>
              <p className="text-slate-600">Here's what's happening with your account today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-600 mb-1">Total Revenue</p>
                      <p className="text-2xl font-bold text-blue-900">$45,231</p>
                      <p className="text-xs text-blue-600 flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +20.1% from last month
                      </p>
                    </div>
                    <div className="bg-blue-600 p-3 rounded-full">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-600 mb-1">Active Users</p>
                      <p className="text-2xl font-bold text-green-900">2,350</p>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +180.1% from last month
                      </p>
                    </div>
                    <div className="bg-green-600 p-3 rounded-full">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-600 mb-1">Sales</p>
                      <p className="text-2xl font-bold text-purple-900">12,234</p>
                      <p className="text-xs text-purple-600 flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +19% from last month
                      </p>
                    </div>
                    <div className="bg-purple-600 p-3 rounded-full">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-orange-600 mb-1">Active Now</p>
                      <p className="text-2xl font-bold text-orange-900">573</p>
                      <p className="text-xs text-orange-600 flex items-center mt-1">
                        <Activity className="h-3 w-3 mr-1" />
                        +201 since last hour
                      </p>
                    </div>
                    <div className="bg-orange-600 p-3 rounded-full">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity and Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity Card */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-900">Recent Activity</CardTitle>
                  <CardDescription>Your latest account activities and updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900">Profile updated successfully</p>
                      <p className="text-xs text-slate-500">2 hours ago</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Profile
                    </Badge>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <DollarSign className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900">Payment of $2,400 received</p>
                      <p className="text-xs text-slate-500">4 hours ago</p>
                    </div>
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                      Payment
                    </Badge>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <FileText className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900">New report generated</p>
                      <p className="text-xs text-slate-500">6 hours ago</p>
                    </div>
                    <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">
                      Report
                    </Badge>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Settings className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900">Security settings updated</p>
                      <p className="text-xs text-slate-500">1 day ago</p>
                    </div>
                    <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                      Security
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions Card */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-900">Quick Actions</CardTitle>
                  <CardDescription>Frequently used actions and shortcuts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start h-12 bg-blue-600 hover:bg-blue-700 text-white">
                    <FileText className="mr-3 h-5 w-5" />
                    Generate New Report
                  </Button>

                  <Button variant="outline" className="w-full justify-start h-12 border-slate-200 hover:bg-slate-50">
                    <Users className="mr-3 h-5 w-5" />
                    Invite Team Members
                  </Button>

                  <Button variant="outline" className="w-full justify-start h-12 border-slate-200 hover:bg-slate-50">
                    <Settings className="mr-3 h-5 w-5" />
                    Account Settings
                  </Button>

                  <Button variant="outline" className="w-full justify-start h-12 border-slate-200 hover:bg-slate-50">
                    <BarChart3 className="mr-3 h-5 w-5" />
                    View Analytics
                  </Button>

                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-500 mb-3">Need help?</p>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                    >
                      <Shield className="mr-3 h-4 w-4" />
                      Contact Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
