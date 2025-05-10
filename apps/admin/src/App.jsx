import React from "react";
import { Button } from "ui/components/button";

const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="container mx-auto p-4 text-center">
        <h1 className="mb-8 text-4xl font-bold">React Admin App</h1>
        <Button>Shadcn Button from UI Library</Button>
      </div>
    </div>
  );
};
export default App;
