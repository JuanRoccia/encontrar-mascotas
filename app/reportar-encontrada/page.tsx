"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Upload } from "lucide-react"

export default function ReportarEncontrada() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const [isUploading, setIsUploading] = useState(false);

  // Función para carga de imágenes
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Mostrar estado de carga
      setIsUploading(true);
      
      const uploadedUrls = [];
      
      // Procesar cada archivo
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        const formData = new FormData();
        formData.append('file', file);
        
        try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
          
          if (!response.ok) {
            throw new Error(`Error al subir imagen: ${response.statusText}`);
          }
          
          const data = await response.json();
          if (data.url) {
            uploadedUrls.push(data.url);
          } else {
            console.error('No se recibió URL de la imagen:', data);
          }
        } catch (error) {
          console.error('Error al subir imagen:', error);
        }
      }
      
      // Actualizar el estado con las URLs de las imágenes subidas
      if (uploadedUrls.length > 0) {
        setImages([...images, ...uploadedUrls]);
      }
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío de datos
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redireccionar a una página de confirmación
    router.push("/reporte-exitoso?tipo=encontrada")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Reportar Mascota Encontrada</CardTitle>
          <CardDescription>
            Completa el formulario con los detalles de la mascota que encontraste para ayudar a reunirla con su familia.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo de mascota</Label>
                <Select required>
                  <SelectTrigger id="tipo">
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="perro">Perro</SelectItem>
                    <SelectItem value="gato">Gato</SelectItem>
                    <SelectItem value="ave">Ave</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="raza">Raza (si la conoces)</Label>
                <Input id="raza" placeholder="Ej: Labrador" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="color">Color</Label>
                <Input id="color" placeholder="Ej: Negro con manchas blancas" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tamano">Tamaño</Label>
                <Select required>
                  <SelectTrigger id="tamano">
                    <SelectValue placeholder="Seleccionar tamaño" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pequeno">Pequeño</SelectItem>
                    <SelectItem value="mediano">Mediano</SelectItem>
                    <SelectItem value="grande">Grande</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ubicacion">Ubicación donde se encontró</Label>
              <Input id="ubicacion" placeholder="Ej: Parque Central, Bahía Blanca" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fecha">Fecha en que se encontró</Label>
              <Input id="fecha" type="date" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="estado">Estado de la mascota</Label>
              <Textarea
                id="estado"
                placeholder="Ej: Se encuentra bien de salud, parece tener hambre, tiene una herida en la pata"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="caracteristicas">Características distintivas</Label>
              <Textarea
                id="caracteristicas"
                placeholder="Ej: Tiene collar azul, parece ser un perro entrenado, responde a ciertos comandos"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contacto">Información de contacto</Label>
              <Input id="contacto" placeholder="Teléfono o WhatsApp" required />
            </div>

            <div className="space-y-2">
              <Label>Fotos de la mascota</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                {images.map((img, index) => (
                  <div key={index} className="relative aspect-square rounded-md overflow-hidden bg-muted">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`Imagen ${index + 1}`}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-md flex items-center justify-center aspect-square relative overflow-hidden">
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    onChange={handleImageUpload}
                  />
                  <div className="flex flex-col items-center justify-center text-muted-foreground">
                    <Upload className="h-8 w-8 mb-2" />
                    <span className="text-sm">Subir fotos</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting || isUploading}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando reporte...
                </>
              ) : isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subiendo imágenes...
                </>
              ) : (
                "Enviar Reporte"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
