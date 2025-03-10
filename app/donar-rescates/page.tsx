import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, DollarSign } from "lucide-react"

export default function DonarRescates() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Heart className="h-12 w-12 text-red-500" />
          </div>
          <CardTitle>Donar para Rescates</CardTitle>
          <CardDescription>
            Tu donación ayuda a financiar rescates, alimentos y atención veterinaria para mascotas en situación de
            calle.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium mb-2">¿Cómo se utilizan las donaciones?</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Alimentos para mascotas rescatadas</li>
              <li>Atención veterinaria de emergencia</li>
              <li>Medicamentos y tratamientos</li>
              <li>Transporte para rescates</li>
              <li>Elementos para cuidado temporal (mantas, correas, etc.)</li>
            </ul>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <Label>Selecciona el monto a donar</Label>
              <RadioGroup defaultValue="500">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="500" id="r1" />
                    <Label htmlFor="r1" className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      $500
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1000" id="r2" />
                    <Label htmlFor="r2" className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      $1.000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2000" id="r3" />
                    <Label htmlFor="r3" className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      $2.000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5000" id="r4" />
                    <Label htmlFor="r4" className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      $5.000
                    </Label>
                  </div>
                </div>
              </RadioGroup>

              <div className="pt-2">
                <Label htmlFor="custom">Otro monto</Label>
                <div className="flex items-center mt-1.5">
                  <span className="bg-muted flex items-center justify-center h-10 w-10 rounded-l-md border border-r-0">
                    <DollarSign className="h-4 w-4" />
                  </span>
                  <Input id="custom" type="number" placeholder="Ingresa otro monto" className="rounded-l-none" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre (opcional)</Label>
              <Input id="nombre" placeholder="Tu nombre" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email (opcional, para recibo)</Label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensaje">Mensaje (opcional)</Label>
              <Input id="mensaje" placeholder="Deja un mensaje de apoyo" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Donar con Mercado Pago</Button>
          <div className="text-center text-sm text-muted-foreground">
            <p>También puedes donar directamente a través de transferencia bancaria:</p>
            <p className="font-medium mt-1">CBU: 0000000000000000000000</p>
            <p className="font-medium">Alias: RESCATE.MASCOTAS.BB</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

