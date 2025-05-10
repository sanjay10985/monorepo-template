import { Button } from "ui/components/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="container mx-auto p-4 text-center">
        <h1 className="mb-8 text-4xl font-bold">Documentation Site</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Built with Next.js in a monorepo structure
        </p>
        <Button>Shared Button Component</Button>
      </div>
    </div>
  );
}
