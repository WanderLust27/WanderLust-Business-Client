import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Card } from "./ui/card"
import Logo from "./logo"

export default function LatestToolsSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-blue-400">Stay </span>
            <span className="text-gray-900">Updated</span>
            <br />
            <span className="text-purple-400">with </span>
            <span className="text-gray-900">SwiftPay's</span>
            <br />
            <span className="text-pink-400">Latest </span>
            <span className="text-gray-900">Tools</span>
          </h2>
          <p className="text-gray-600">
            SwiftPay's latest tool is the focus of this chart where users discuss its enhanced capabilities, including
            streamlined payroll needs.
          </p>
          <div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">Connect with Us</Button>
          </div>
        </div>

        <div className="relative">
          <Card className="rounded-2xl overflow-hidden shadow-lg border-0 bg-white p-4">
            <div className="flex items-center gap-2 border-b pb-3">
              <Logo variant="dashboard" />
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md text-sm font-medium">
                <span>Conversation</span>
              </div>
              <div className="ml-auto relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-3 pr-8 py-1 rounded-full bg-gray-100 text-sm w-24 focus:outline-none"
                />
              </div>
            </div>

            <div className="py-4">
              <div className="flex items-start gap-3 mb-6">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Michael Jordy</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">They've added new automation for tracking issues.</p>
                </div>
              </div>

              <div className="flex justify-end mb-6">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">
                    <span className="font-medium">Bernice Kelly</span>{" "}
                    <span className="text-xs text-gray-500">01:23 PM</span>
                  </p>
                  <p className="text-sm mt-1">
                    Wow, they rolled out some really cool features. The platform's playing a major role now, and they've
                    improved the benefits tracking.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="bg-yellow-50 rounded-lg p-3 flex items-center gap-2 max-w-xs">
                  <span className="text-yellow-500 text-xl">⭐</span>
                  <p className="text-sm">You've solved two automation issues today!</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
