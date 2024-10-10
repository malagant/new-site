import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Code, Server } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Michael Johann</h1>
        <p className="text-xl mb-8">Full Stack Developer & Platform Engineering Expert</p>
        <Button asChild>
          <Link href="/blog">Check out my blog</Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Terminal className="mr-2" /> Full Stack Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Expertise in building robust and scalable web applications using modern technologies.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code className="mr-2" /> Kubernetes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Professional experience in deploying and managing containerized applications with Kubernetes.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Server className="mr-2" /> Platform Engineering
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Designing and implementing efficient, scalable, and maintainable infrastructure solutions.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
        <p className="mb-8">Check out my latest thoughts and tutorials on tech.</p>
        <Button asChild variant="outline">
          <Link href="/blog">View All Posts</Link>
        </Button>
      </section>
    </div>
  )
}