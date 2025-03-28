import Link from "next/link"
import Image from "next/image"
import { Search, TrendingUp, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import AssetCard from "@/components/asset-card"
import CategoryCard from "@/components/category-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
              <div className="absolute inset-0 flex items-center justify-center text-primary-foreground font-bold">
                A
              </div>
            </div>
            <span className="text-xl font-bold">AssetVault</span>
          </Link>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search assets..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[200px]"
              />
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/fonts" className="text-sm font-medium hover:text-primary">
                Fonts
              </Link>
              <Link href="/textures" className="text-sm font-medium hover:text-primary">
                Textures
              </Link>
              <Link href="/graphics" className="text-sm font-medium hover:text-primary">
                Graphics
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary">
                About
              </Link>
            </nav>
          </div>
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Filter className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Free Design Assets<span className="text-primary"></span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Download premium fonts, textures, and graphic elements. No login required.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search fonts, textures, graphics..."
                    className="w-full pl-9 pr-4 py-6 text-base"
                  />
                </div>
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Assets
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"></div>
        </section>

        {/* Categories Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">Browse Categories</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <CategoryCard title="Fonts" icon="type" count={1240} color="bg-pink-500/10" textColor="text-pink-500" />
              <CategoryCard title="Textures" icon="grid" count={856} color="bg-blue-500/10" textColor="text-blue-500" />
              <CategoryCard
                title="Icons"
                icon="star"
                count={3420}
                color="bg-yellow-500/10"
                textColor="text-yellow-500"
              />
              <CategoryCard
                title="Patterns"
                icon="circle-dot"
                count={642}
                color="bg-green-500/10"
                textColor="text-green-500"
              />
              <CategoryCard
                title="3D Models"
                icon="cube"
                count={328}
                color="bg-purple-500/10"
                textColor="text-purple-500"
              />
              <CategoryCard
                title="Templates"
                icon="layout"
                count={975}
                color="bg-orange-500/10"
                textColor="text-orange-500"
              />
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold md:text-3xl">Trending Now</h2>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Updated daily</span>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="fonts">Fonts</TabsTrigger>
                <TabsTrigger value="textures">Textures</TabsTrigger>
                <TabsTrigger value="graphics">Graphics</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  <AssetCard
                    title="Neon Wave Font"
                    category="Font"
                    image="/placeholder.svg?height=400&width=400"
                    downloads={2345}
                    isNew={true}
                  />
                  <AssetCard
                    title="Marble Texture Pack"
                    category="Texture"
                    image="/placeholder.svg?height=400&width=400"
                    downloads={1872}
                  />
                  <AssetCard
                    title="Geometric Icons Set"
                    category="Graphics"
                    image="/placeholder.svg?height=400&width=400"
                    downloads={3421}
                  />
                  <AssetCard
                    title="Gradient Mesh Backgrounds"
                    category="Texture"
                    image="/placeholder.svg?height=400&width=400"
                    downloads={1568}
                    isNew={true}
                  />
                </div>
                <div className="flex justify-center">
                  <Button variant="outline" size="lg">
                    Load More
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="fonts" className="space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  <AssetCard
                    title="Neon Wave Font"
                    category="Font"
                    image="/placeholder.svg?height=400&width=400"
                    downloads={2345}
                    isNew={true}
                  />
                  <AssetCard
                    title="Brutalist Sans"
                    category="Font"
                    image="/placeholder.svg?height=400&width=400"
                    downloads={1245}
                  />
                  <AssetCard
                    title="Retro Script"
                    category="Font"
                    image="/placeholder.svg?height=400&width=400"
                    downloads={987}
                  />
                  <AssetCard
                    title="Minimal Mono"
                    category="Font"
                    image="/placeholder.svg?height=400&width=400"
                    downloads={1568}
                    isNew={true}
                  />
                </div>
              </TabsContent>

              <TabsContent value="textures">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  <AssetCard
                    title="Marble Texture Pack"
                    category="Texture"
                    image="/placeholder.svg?height=400&width=400"
                    downloads={1872}
                  />
                  <AssetCard
                    title="Gradient Mesh Backgrounds"
                    category="Texture"
                    image="/placeholder.svg?height=400&width=400"
                    downloads={1568}
                    isNew={true}
                  />
                </div>
              </TabsContent>

              <TabsContent value="graphics">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  <AssetCard
                    title="Geometric Icons Set"
                    category="Graphics"
                    image="/placeholder.svg?height=400&width=400"
                    downloads={3421}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured Assets */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">Featured Assets</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-xl border bg-background hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Featured font collection"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <Badge className="mb-2 bg-primary hover:bg-primary">Collection</Badge>
                  <h3 className="text-xl font-bold text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    Cyberpunk Font Collection
                  </h3>
                  <p className="text-white/80 mt-1 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-75">
                    10 futuristic fonts for your next project
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border bg-background hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Featured texture pack"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <Badge className="mb-2 bg-primary hover:bg-primary">New</Badge>
                  <h3 className="text-xl font-bold text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    Abstract Texture Pack
                  </h3>
                  <p className="text-white/80 mt-1 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-75">
                    25 high-resolution abstract textures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container">
            <div className="mx-auto max-w-2xl rounded-xl bg-background p-8 text-center shadow-sm">
              <h2 className="text-2xl font-bold md:text-3xl">Stay Updated</h2>
              <p className="mt-2 text-muted-foreground">Get notified when we add new assets to our collection.</p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-0">
                <Input type="email" placeholder="Enter your email" className="sm:rounded-r-none" />
                <Button className="sm:rounded-l-none">Subscribe</Button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">No spam, we promise. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
                  <div className="absolute inset-0 flex items-center justify-center text-primary-foreground font-bold">
                    A
                  </div>
                </div>
                <span className="text-xl font-bold">AssetVault</span>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                Free design assets. No login required.
              </p>
              <div className="mt-4 flex space-x-4">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Fonts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Textures
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Graphics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Templates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Licenses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} AssetVault. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

