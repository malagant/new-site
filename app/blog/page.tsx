import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// This is a mock function. In a real application, you would fetch this data from your Strapi backend.
const getBlogPosts = async () => {
  return [
    {
      id: 1,
      title: "Introduction to Kubernetes",
      description: "Learn the basics of container orchestration with Kubernetes",
      date: "2023-05-15",
      slug: "intro-to-kubernetes"
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      description: "Explore advanced patterns for building scalable React applications",
      date: "2023-06-02",
      slug: "advanced-react-patterns"
    },
    {
      id: 3,
      title: "Microservices Architecture",
      description: "Understanding the principles and benefits of microservices",
      date: "2023-06-20",
      slug: "microservices-architecture"
    }
  ]
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/blog/${post.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}