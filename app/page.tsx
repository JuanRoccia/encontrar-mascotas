import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Heart, PawPrint, Coffee } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <div className="flex justify-center mb-4">
          <PawPrint className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Reencuentro de Mascotas</h1>
        <p className="mt-2 text-xl text-muted-foreground">
          Ayudando a reunir mascotas perdidas con sus familias en Bahía Blanca
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Reportar Mascota Perdida</CardTitle>
            <CardDescription>
              ¿Perdiste a tu mascota? Reporta los detalles para que otros puedan ayudarte a encontrarla.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Mascota perdida"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
          </CardContent>
          <CardFooter>
            <Link href="/reportar-perdida" className="w-full">
              <Button className="w-full">Reportar Mascota Perdida</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Reportar Mascota Encontrada</CardTitle>
            <CardDescription>
              ¿Encontraste una mascota? Reporta los detalles para ayudar a reunirla con su familia.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Mascota encontrada"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
          </CardContent>
          <CardFooter>
            <Link href="/reportar-encontrada" className="w-full">
              <Button className="w-full">Reportar Mascota Encontrada</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Buscar Mascotas</CardTitle>
            <CardDescription>Busca entre las mascotas reportadas como perdidas o encontradas.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Buscar mascotas"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
          </CardContent>
          <CardFooter>
            <Link href="/buscar" className="w-full">
              <Button className="w-full">Buscar Mascotas</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Mapa de Mascotas
            </CardTitle>
            <CardDescription>Visualiza en un mapa las mascotas perdidas y encontradas en tu zona.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] bg-muted rounded-lg flex items-center justify-center">
              <Link href="/mapa">
                <Button variant="outline" size="lg">
                  Ver Mapa Interactivo
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Donar para Rescates
            </CardTitle>
            <CardDescription>
              Ayuda a financiar rescates y alimentos para mascotas en situación de calle.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/donar-rescates">
              <Button className="w-full" variant="secondary">
                Donar para Rescates
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-amber-600" />
              Apoyar a los Desarrolladores
            </CardTitle>
            <CardDescription>
              Ayúdanos a mantener esta plataforma con una donación a través de Cafecito.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="https://cafecito.app/" target="_blank" rel="noopener noreferrer">
              <Button className="w-full" variant="outline">
                Invitarnos un Cafecito
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}