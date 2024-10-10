import { notFound } from 'next/navigation'

// This is a mock function. In a real application, you would fetch this data from your Strapi backend.
const getBlogPost = async (slug: string) => {
  const posts = {
    "intro-to-kubernetes": {
      title: "Introduction to Kubernetes",
      content: `
# Introduction to Kubernetes

Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.

## Key Concepts

1. **Pods**: The smallest deployable units in Kubernetes.
2. **Services**: An abstract way to expose an application running on a set of Pods.
3. **Deployments**: Describe the desired state for your application.

## Basic Architecture

\`\`\`
+------------------+
|   Control Plane  |
|  +-----------+   |
|  | API Server|   |
|  +-----------+   |
|  | Scheduler |   |
|  +-----------+   |
|  |  etcd     |   |
|  +-----------+   |
+------------------+
        |
+------------------+
|    Worker Node   |
|  +-----------+   |
|  | kubelet   |   |
|  +-----------+   |
|  | Container |   |
|  | Runtime   |   |
|  +-----------+   |
+------------------+
\`\`\`

This diagram shows a simplified view of the Kubernetes architecture, including the control plane and a worker node.

## Getting Started

To get started with Kubernetes, you can use Minikube for local development:

\`\`\`bash
# Install Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Start a cluster
minikube start

# Deploy a sample application
kubectl create deployment hello-node --image=k8s.gcr.io/echoserver:1.4

# Expose the application
kubectl expose deployment hello-node --type=LoadBalancer --port=8080

# Access the application
minikube service hello-node
\`\`\`

This is just the beginning of your Kubernetes journey. As you dive deeper, you'll discover its power in managing complex, distributed systems.
      `,
      date: "2023-05-15"
    },
    "advanced-react-patterns": {
      title: "Advanced React Patterns",
      content: `
# Advanced React Patterns

React is a powerful library for building user interfaces. As your applications grow in complexity, you'll need to leverage advanced patterns to keep your code maintainable and efficient.

## 1. Compound Components

Compound components allow you to create flexible and reusable component APIs.

\`\`\`jsx
const Toggle = ({ children }) => {
  const [on, setOn] = React.useState(false);
  return React.Children.map(children, child =>
    React.cloneElement(child, { on, toggle: () => setOn(!on) })
  );
};

Toggle.On = ({ on, children }) => (on ? children : null);
Toggle.Off = ({ on, children }) => (on ? null : children);
Toggle.Button = ({ on, toggle }) => (
  <button onClick={toggle}>{on ? 'on' : 'off'}</button>
);

// Usage
<Toggle>
  <Toggle.On>The button is on</Toggle.On>
  <Toggle.Off>The button is off</Toggle.Off>
  <Toggle.Button />
</Toggle>
\`\`\`

## 2. Render Props

Render props is a technique for sharing code between React components using a prop whose value is a function.

\`\`\`jsx
const Mouse = ({ render }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
};

// Usage
<Mouse render={({ x, y }) => (
  <h1>The mouse position is ({x}, {y})</h1>
)}/>
\`\`\`

## 3. Higher-Order Components (HOCs)

HOCs are functions that take a component and return a new component with additional props or behavior.

\`\`\`jsx
const withLogger = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(\`Component \${WrappedComponent.name} mounted\`);
    }
    
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Usage
const MyComponent = ({ name }) => <div>Hello, {name}!</div>;
const EnhancedComponent = withLogger(MyComponent);
\`\`\`

These patterns help in creating more flexible and reusable React components. As you build more complex applications, you'll find these patterns invaluable in managing component logic and state.
      `,
      date: "2023-06-02"
    },
    "microservices-architecture": {
      title: "Microservices Architecture",
      content: `
# Microservices Architecture

Microservices architecture is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API.

## Key Principles

1. **Decentralization**: Each service is independent and can be developed, deployed, and scaled separately.
2. **Modularity**: Services are organized around business capabilities.
3. **Flexibility**: Different services can use different technologies and data storage solutions.

## Architecture Overview

\`\`\`
+-------------+  +-------------+  +-------------+
|   Service A |  |   Service B |  |   Service C |
|  +-------+  |  |  +-------+  |  |  +-------+  |
|  |  API  |  |  |  |  API  |  |  |  |  API  |  |
|  +-------+  |  |  +-------+  |  |  +-------+  |
|    | DB |   |  |    | DB |   |  |    | DB |   |
+-------------+  +-------------+  +-------------+
        |                |                |
        |                |                |
+------------------------------------------+
|              Message Broker              |
+------------------------------------------+
        |                |                |
+------------------------------------------+
|            API Gateway / Load Balancer   |
+------------------------------------------+
                    |
              +----------+
              |  Client  |
              +----------+
\`\`\`

This diagram illustrates a basic microservices architecture with multiple independent services, a message broker for inter-service communication, and an API gateway.

## Advantages

1. **Scalability**: Services can be scaled independently based on demand.
2. **Flexibility**: Different technologies can be used for different services.
3. **Resilience**: Failure in one service doesn't bring down the entire system.
4. **Ease of Deployment**: Smaller codebases are easier to understand and deploy.

## Challenges

1. **Distributed System Complexity**: Managing a distributed system can be challenging.
2. **Data Consistency**: Maintaining data consistency across services requires careful design.
3. **Testing**: Integration testing becomes more complex.

## Implementation Example

Here's a simple example of a microservice in Node.js:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/users', (req, res) => {
  // In a real application, this would fetch data from a database
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

app.listen(port, () => {
  console.log(\`User service listening at http://localhost:\${port}\`);
});
\`\`\`

This example demonstrates a simple user service that could be part of a larger microservices architecture.

Microservices architecture offers many benefits, but it's important to carefully consider whether it's the right approach for your specific use case. It's particularly well-suited for large, complex applications that need to scale and evolve rapidly.
      `,
      date: "2023-06-20"
    }
  };

  if (!posts[slug]) {
    notFound()
  }

  return posts[slug];
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}