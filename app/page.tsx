import { Bell, Menu, Car, Users, GraduationCap, QrCode } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-900 text-white px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-800">
              <Menu className="h-5 w-5" />
            </Button>
            <span className="text-lg font-semibold">CDT</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-800">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-sm font-semibold">
              C
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-4">
        {/* Condutor Card */}
        <Link href="/condutor">
          <Card className="bg-green-500 text-white border-0 overflow-hidden relative cursor-pointer hover:bg-green-600 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-1">CONDUTOR</h2>
                  <p className="text-green-100 text-sm">
                    Gerencia sua
                    <br />
                    <span className="font-semibold">habilitação</span>
                  </p>
                </div>
                <div className="text-white/80">
                  <Car className="h-12 w-12" />
                </div>
              </div>
              {/* Decorative lines */}
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-lg transform rotate-12"></div>
              <div className="absolute bottom-4 right-8 w-12 h-12 border-2 border-white/20 rounded-lg transform -rotate-12"></div>
            </CardContent>
          </Card>
        </Link>

        {/* Veículos Card */}
        <Card className="bg-yellow-400 text-gray-800 border-0 overflow-hidden relative">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-1">VEÍCULOS</h2>
                <p className="text-gray-700 text-sm">
                  Acesso ao <span className="font-semibold">CRLV-e</span>,<br />
                  <span className="font-semibold">venda digital</span>
                </p>
              </div>
              <div className="text-gray-600">
                <Car className="h-12 w-12" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-20 h-20 border-2 border-yellow-300/40 rounded-full"></div>
            <div className="absolute bottom-2 right-12 w-8 h-8 border-2 border-yellow-300/40 rounded-full"></div>
          </CardContent>
        </Card>

        {/* Infrações Card */}
        <Card className="bg-blue-600 text-white border-0 overflow-hidden relative">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-1">INFRAÇÕES</h2>
                <p className="text-blue-100 text-sm">
                  Visualize e pague infrações
                  <br />
                  com até <span className="font-semibold">40% de desconto</span>
                </p>
              </div>
              <div className="text-white/80 relative">
                <Car className="h-10 w-10" />
                <Users className="h-6 w-6 absolute -top-1 -right-1" />
              </div>
            </div>
            {/* Decorative wave */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M0,50 Q25,25 50,50 T100,50 L100,0 L0,0 Z" fill="currentColor" />
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Educação Card */}
        <Card className="bg-sky-400 text-white border-0 overflow-hidden relative">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-1">EDUCAÇÃO</h2>
                <p className="text-sky-100 text-sm">
                  Conheça nossas
                  <br />
                  <span className="font-semibold">campanhas</span> e <span className="font-semibold">projetos</span>
                </p>
              </div>
              <div className="text-white/80">
                <GraduationCap className="h-12 w-12" />
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-6 right-8 w-8 h-8 border border-white/20 rounded-full"></div>
          </CardContent>
        </Card>

        {/* QR Code Section */}
        <div className="flex justify-center pt-8 pb-4">
          <div className="w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center">
            <QrCode className="h-8 w-8 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
