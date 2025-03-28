import Link from "next/link"
import { Type, Grid, Star, CircleDot, CuboidIcon as Cube, Layout } from "lucide-react"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  title: string
  icon: string
  count: number
  color: string
  textColor: string
}

export default function CategoryCard({ title, icon, count, color, textColor }: CategoryCardProps) {
  const getIcon = (iconName: string) => {
    const props = { className: cn("h-6 w-6", textColor) }

    switch (iconName) {
      case "type":
        return <Type {...props} />
      case "grid":
        return <Grid {...props} />
      case "star":
        return <Star {...props} />
      case "circle-dot":
        return <CircleDot {...props} />
      case "cube":
        return <Cube {...props} />
      case "layout":
        return <Layout {...props} />
      default:
        return <Star {...props} />
    }
  }

  return (
    <Link
      href={`/category/${title.toLowerCase()}`}
      className="group flex flex-col items-center rounded-lg border bg-background p-4 text-center transition-all hover:shadow-md"
    >
      <div className={cn("mb-3 flex h-12 w-12 items-center justify-center rounded-full", color)}>{getIcon(icon)}</div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{count.toLocaleString()} items</p>
    </Link>
  )
}

