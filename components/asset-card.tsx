import Image from "next/image"
import { Download, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface AssetCardProps {
  title: string
  category: string
  image: string
  downloads: number
  isNew?: boolean
}

export default function AssetCard({ title, category, image, downloads, isNew = false }: AssetCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>

      {isNew && <Badge className="absolute right-3 top-3 bg-primary hover:bg-primary">New</Badge>}

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Download className="mr-1 h-3 w-3" />
            {downloads.toLocaleString()}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" className="w-full">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button size="sm" className="w-full">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
    </div>
  )
}

