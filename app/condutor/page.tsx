import { ArrowLeft, CreditCard, User, Microscope, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CondutorPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-900 text-white px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-800">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <span className="text-lg font-semibold">CONDUTOR</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* Driver Information Card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Informações do Condutor</h2>

            {/* Name */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-1">Nome</p>
              <p className="text-lg font-medium text-gray-900">Maria Luiza Espigiorin de Oliveira</p>
            </div>

            {/* CPF and Gender */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">CPF</p>
                <p className="text-base font-medium text-gray-900">928.456.069-14</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Sexo</p>
                <p className="text-base font-medium text-gray-900">Feminino</p>
              </div>
            </div>

            {/* Category and State */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Categoria</p>
                <p className="text-base font-medium text-gray-900">AB</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">UF de Emissão</p>
                <p className="text-base font-medium text-gray-900">PR</p>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Data de Validade</p>
                <p className="text-base font-medium text-gray-900">22/04/2034</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Data de Emissão</p>
                <p className="text-base font-medium text-gray-900">22/03/25</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Habilitação */}
          <Link href="/habilitacao">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-700 leading-tight">HABILITAÇÃO</p>
              </CardContent>
            </Card>
          </Link>

          {/* Cadastro Positivo */}
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <User className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-700 leading-tight">CADASTRO POSITIVO</p>
            </CardContent>
          </Card>

          {/* Exames Toxicológicos */}
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Microscope className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-700 leading-tight">
                EXAMES
                <br />
                TOXICOLÓGICOS
              </p>
            </CardContent>
          </Card>

          {/* Cursos Especializados */}
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-700 leading-tight">
                CURSOS
                <br />
                ESPECIALIZADOS
              </p>
            </CardContent>
          </Card>

          {/* Credencial de Estacionamento */}
          <Card className="hover:shadow-md transition-shadow cursor-pointer col-span-1">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">E</span>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-700 leading-tight">
                CREDENCIAL DE
                <br />
                ESTACIONAMENTO
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
