"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HabilitacaoPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-blue-900 text-white px-4 py-3 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/condutor">
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-800">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <span className="text-lg font-semibold">HABILITAÇÃO</span>
        </div>
      </div>

      {/* CNH Image Container - Takes almost all remaining space */}
      <div className="flex-1 flex flex-col p-2">
        {/* CNH Image - Much larger, taking most of the page */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/XBrbsCsj/ff31db8c-0408-4f85-87f0-3e2a518bf637.jpg"
            alt="Carteira Nacional de Habilitação"
            className="w-full h-full object-contain rounded-lg shadow-lg border border-gray-300 transform rotate-90"
            style={{
              transformOrigin: "center center",
              maxHeight: "calc(100vh - 120px)", // Subtract header height and space for indicators
            }}
          />
        </div>

        {/* Carousel Indicators - Small space at bottom */}
        <div className="flex items-center justify-center gap-2 py-3">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
