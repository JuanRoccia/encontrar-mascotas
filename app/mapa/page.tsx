"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PawPrint } from "lucide-react"

// Datos de ejemplo para el mapa
const mascotasPerdidas = [
  {
    id: 1,
    nombre: "Max",
    tipo: "perro",
    ubicacion: "Parque de Mayo, Bahía Blanca",
    lat: -38.7183,
    lng: -62.2661,
    fecha: "2023-12-15",
  },
  {
    id: 2,
    nombre: "Luna",
    tipo: "gato",
    ubicacion: "Barrio Universitario, Bahía Blanca",
    lat: -38.7003,
    lng: -62.2775,
    fecha: "2023-12-18",
  },
  {
    id: 3,
    nombre: "Toby",
    tipo: "perro",
    ubicacion: "Plaza Rivadavia, Bahía Blanca",
    lat: -38.7193,
    lng: -62.2721,
    fecha: "2023-12-20",
  },
]

const mascotasEncontradas = [
  {
    id: 1,
    tipo: "perro",
    ubicacion: "Avenida Alem, Bahía Blanca",
    lat: -38.7123,
    lng: -62.2581,
    fecha: "2023-12-16",
  },
  {
    id: 2,
    tipo: "gato",
    ubicacion: "Barrio Palihue, Bahía Blanca",
    lat: -38.7253,
    lng: -62.2821,
    fecha: "2023-12-19",
  },
]

export default function MapaPage() {
  const [activeTab, setActiveTab] = useState("todas")
  const [mapLoaded, setMapLoaded] = useState(false)

  // En una implementación real, aquí cargaríamos un mapa interactivo como Google Maps o Leaflet
  // Para este ejemplo, mostramos un mapa estático con marcadores simulados

  useEffect(() => {
    // Simular carga del mapa
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Mapa de Mascotas</CardTitle>
          <CardDescription>Visualiza en el mapa las mascotas perdidas y encontradas en Bahía Blanca.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="todas" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="todas">Todas</TabsTrigger>
              <TabsTrigger value="perdidas">Perdidas</TabsTrigger>
              <TabsTrigger value="encontradas">Encontradas</TabsTrigger>
            </TabsList>

            <div className="mt-6">
              <div className="relative w-full h-[500px] bg-muted rounded-lg overflow-hidden">
                {!mapLoaded ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <>
                    {/* Mapa simulado */}
                    <div className="absolute inset-0 bg-gray-200">
                      <img
                        src="/placeholder.svg?height=500&width=800&text=Mapa de Bahía Blanca"
                        alt="Mapa"
                        className="w-full h-full object-cover"
                      />

                      {/* Marcadores de mascotas perdidas */}
                      {(activeTab === "todas" || activeTab === "perdidas") &&
                        mascotasPerdidas.map((mascota) => (
                          <div
                            key={`perdida-${mascota.id}`}
                            className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2"
                            style={{
                              top: `${30 + Math.random() * 40}%`,
                              left: `${20 + Math.random() * 60}%`,
                            }}
                          >
                            <div className="relative group">
                              <div className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full">
                                <PawPrint className="h-4 w-4" />
                              </div>
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                <p className="font-semibold">{mascota.nombre}</p>
                                <p className="text-xs">{mascota.ubicacion}</p>
                                <p className="text-xs">Perdido desde: {new Date(mascota.fecha).toLocaleDateString()}</p>
                                <Badge className="mt-1">{mascota.tipo}</Badge>
                              </div>
                            </div>
                          </div>
                        ))}

                      {/* Marcadores de mascotas encontradas */}
                      {(activeTab === "todas" || activeTab === "encontradas") &&
                        mascotasEncontradas.map((mascota) => (
                          <div
                            key={`encontrada-${mascota.id}`}
                            className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2"
                            style={{
                              top: `${30 + Math.random() * 40}%`,
                              left: `${20 + Math.random() * 60}%`,
                            }}
                          >
                            <div className="relative group">
                              <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full">
                                <PawPrint className="h-4 w-4" />
                              </div>
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                <p className="font-semibold">Mascota Encontrada</p>
                                <p className="text-xs">{mascota.ubicacion}</p>
                                <p className="text-xs">Encontrado el: {new Date(mascota.fecha).toLocaleDateString()}</p>
                                <Badge className="mt-1">{mascota.tipo}</Badge>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>

                    <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-md">
                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                        <span className="text-xs">Mascotas Perdidas</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-md">
                        <div className="w-4 h-4 rounded-full bg-green-500"></div>
                        <span className="text-xs">Mascotas Encontradas</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Haz clic en los marcadores para ver más información sobre cada mascota.
                </p>
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

