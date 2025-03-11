import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PawPrint, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Reencuentro de Mascotas - Bahía Blanca",
  description: "Plataforma para ayudar a reunir mascotas perdidas con sus familias en Bahía Blanca",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <Link href="/" className="flex items-center gap-2">
                  <PawPrint className="h-6 w-6" />
                  <span className="font-bold">Reencuentro de Mascotas</span>
                </Link>
                <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-4">
                  <nav className="flex items-center space-x-2">
                    <Link href="/reportar-perdida">
                      <Button variant="ghost">Reportar Perdida</Button>
                    </Link>
                    <Link href="/reportar-encontrada">
                      <Button variant="ghost">Reportar Encontrada</Button>
                    </Link>
                    <Link href="/buscar">
                      <Button variant="ghost">Buscar</Button>
                    </Link>
                    <Link href="/mapa">
                      <Button variant="ghost">Mapa</Button>
                    </Link>
                    <Link href="/donar-rescates">
                      <Button variant="default">Donar</Button>
                    </Link>
                  </nav>
                </div>
                <div className="flex md:hidden flex-1 justify-end">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                      <div className="flex flex-col space-y-4 mt-8">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                          <PawPrint className="h-6 w-6" />
                          <span className="font-bold">Reencuentro de Mascotas</span>
                        </Link>
                        <Link href="/reportar-perdida">
                          <Button variant="ghost" className="w-full justify-start">
                            Reportar Perdida
                          </Button>
                        </Link>
                        <Link href="/reportar-encontrada">
                          <Button variant="ghost" className="w-full justify-start">
                            Reportar Encontrada
                          </Button>
                        </Link>
                        <Link href="/buscar">
                          <Button variant="ghost" className="w-full justify-start">
                            Buscar
                          </Button>
                        </Link>
                        <Link href="/mapa">
                          <Button variant="ghost" className="w-full justify-start">
                            Mapa
                          </Button>
                        </Link>
                        <Link href="/donar-rescates">
                          <Button variant="default" className="w-full justify-start">
                            Donar
                          </Button>
                        </Link>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © 2023 Reencuentro de Mascotas - Bahía Blanca. Todos los derechos reservados.
                </p>
                <div className="flex items-center gap-4">
                  <Link href="/terminos" className="text-sm text-muted-foreground underline underline-offset-4">
                    Términos
                  </Link>
                  <Link href="/privacidad" className="text-sm text-muted-foreground underline underline-offset-4">
                    Privacidad
                  </Link>
                  <Link href="/contacto" className="text-sm text-muted-foreground underline underline-offset-4">
                    Contacto
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}