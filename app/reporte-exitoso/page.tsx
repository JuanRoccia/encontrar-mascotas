"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ReporteExitoso() {
  const searchParams = useSearchParams()
  const tipo = searchParams.get("tipo") || "perdida"

  const esPerdida = tipo === "perdida"

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <Card className="text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle>¡Reporte Enviado con Éxito!</CardTitle>
          <CardDescription>
            {esPerdida
              ? "Tu reporte de mascota perdida ha sido registrado correctamente."
              : "Tu reporte de mascota encontrada ha sido registrado correctamente."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            {esPerdida
              ? "Hemos registrado los datos de tu mascota perdida. Te notificaremos si alguien reporta haberla encontrado."
              : "Gracias por reportar esta mascota encontrada. Esperamos que pronto pueda reunirse con su familia."}
          </p>
          <p className="text-muted-foreground text-sm">
            Recuerda revisar periódicamente la plataforma para ver si hay actualizaciones.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Link href="/" className="w-full">
            <Button className="w-full">Volver al Inicio</Button>
          </Link>
          <Link href="/buscar" className="w-full">
            <Button variant="outline" className="w-full">
              {esPerdida ? "Buscar Mascotas Encontradas" : "Buscar Mascotas Perdidas"}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

