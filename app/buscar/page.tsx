"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Calendar, Phone } from "lucide-react"
import Link from "next/link"

// Datos de ejemplo
const mascotasPerdidas = [
  {
    id: 1,
    nombre: "Max",
    tipo: "perro",
    raza: "Golden Retriever",
    color: "Dorado",
    ubicacion: "Parque de Mayo, Bahía Blanca",
    fecha: "2023-12-15",
    imagen: "/placeholder.svg?height=300&width=300&text=Max",
    contacto: "11-1234-5678",
  },
  {
    id: 2,
    nombre: "Luna",
    tipo: "gato",
    raza: "Siamés",
    color: "Blanco y marrón",
    ubicacion: "Barrio Universitario, Bahía Blanca",
    fecha: "2023-12-18",
    imagen: "/placeholder.svg?height=300&width=300&text=Luna",
    contacto: "11-8765-4321",
  },
  {
    id: 3,
    nombre: "Toby",
    tipo: "perro",
    raza: "Mestizo",
    color: "Negro con manchas blancas",
    ubicacion: "Plaza Rivadavia, Bahía Blanca",
    fecha: "2023-12-20",
    imagen: "/placeholder.svg?height=300&width=300&text=Toby",
    contacto: "11-2468-1357",
  },
]

const mascotasEncontradas = [
  {
    id: 1,
    tipo: "perro",
    raza: "Caniche",
    color: "Blanco",
    ubicacion: "Avenida Alem, Bahía Blanca",
    fecha: "2023-12-16",
    imagen: "/placeholder.svg?height=300&width=300&text=Caniche",
    contacto: "11-1357-2468",
  },
  {
    id: 2,
    tipo: "gato",
    raza: "Desconocida",
    color: "Atigrado",
    ubicacion: "Barrio Palihue, Bahía Blanca",
    fecha: "2023-12-19",
    imagen: "/placeholder.svg?height=300&width=300&text=Gato",
    contacto: "11-8642-1357",
  },
]

export default function BuscarMascotas() {
  const [, setActiveTab] = useState("perdidas")
  const [filteredPerdidas, setFilteredPerdidas] = useState(mascotasPerdidas)
  const [filteredEncontradas, setFilteredEncontradas] = useState(mascotasEncontradas)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // En una implementación real, aquí se realizaría la búsqueda en la base de datos
    // Para este ejemplo, simplemente devolvemos todos los datos
    setFilteredPerdidas(mascotasPerdidas)
    setFilteredEncontradas(mascotasEncontradas)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Buscar Mascotas</CardTitle>
          <CardDescription>Busca entre las mascotas reportadas como perdidas o encontradas.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo de mascota</Label>
                <Select>
                  <SelectTrigger id="tipo">
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="perro">Perro</SelectItem>
                    <SelectItem value="gato">Gato</SelectItem>
                    <SelectItem value="ave">Ave</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="color">Color</Label>
                <Input id="color" placeholder="Ej: Negro, Blanco, Marrón" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ubicacion">Ubicación</Label>
                <Input id="ubicacion" placeholder="Ej: Bahía Blanca" />
              </div>

              <div className="flex items-end">
                <Button type="submit" className="w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Buscar
                </Button>
              </div>
            </div>
          </form>

          <div className="mt-8">
            <Tabs defaultValue="perdidas" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="perdidas">Mascotas Perdidas</TabsTrigger>
                <TabsTrigger value="encontradas">Mascotas Encontradas</TabsTrigger>
              </TabsList>

              <TabsContent value="perdidas" className="mt-6">
                {filteredPerdidas.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPerdidas.map((mascota) => (
                      <Card key={mascota.id} className="overflow-hidden">
                        <div className="aspect-square relative">
                          <Image
                            src={mascota.imagen || "/placeholder.svg"}
                            alt={mascota.nombre || "Mascota perdida"}
                            className="object-cover"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <Badge className="absolute top-2 right-2">{mascota.tipo}</Badge>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold">{mascota.nombre}</h3>
                          <div className="mt-2 space-y-2 text-sm">
                            <p>
                              {mascota.raza} - {mascota.color}
                            </p>
                            <p className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                              {mascota.ubicacion}
                            </p>
                            <p className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                              {new Date(mascota.fecha).toLocaleDateString()}
                            </p>
                            <p className="flex items-center">
                              <Phone className="h-4 w-4 mr-1 text-muted-foreground" />
                              {mascota.contacto}
                            </p>
                          </div>
                          <div className="mt-4">
                            <Link href={`/mascota/perdida/${mascota.id}`}>
                              <Button variant="outline" className="w-full">
                                Ver Detalles
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No se encontraron mascotas perdidas con esos criterios.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="encontradas" className="mt-6">
                {filteredEncontradas.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEncontradas.map((mascota) => (
                      <Card key={mascota.id} className="overflow-hidden">
                        <div className="aspect-square relative">
                          <Image
                            src={mascota.imagen || "/placeholder.svg"}
                            alt={"Mascota encontrada"}
                            className="object-cover"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <Badge className="absolute top-2 right-2">{mascota.tipo}</Badge>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold">Mascota Encontrada</h3>
                          <div className="mt-2 space-y-2 text-sm">
                            <p>
                              {mascota.raza} - {mascota.color}
                            </p>
                            <p className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                              {mascota.ubicacion}
                            </p>
                            <p className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                              {new Date(mascota.fecha).toLocaleDateString()}
                            </p>
                            <p className="flex items-center">
                              <Phone className="h-4 w-4 mr-1 text-muted-foreground" />
                              {mascota.contacto}
                            </p>
                          </div>
                          <div className="mt-4">
                            <Link href={`/mascota/encontrada/${mascota.id}`}>
                              <Button variant="outline" className="w-full">
                                Ver Detalles
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No se encontraron mascotas encontradas con esos criterios.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
