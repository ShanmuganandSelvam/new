import { LoginForm } from "@/components/auth/login-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b h-14 flex items-center px-4 justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-6 w-6" />
          <h1 className="text-lg font-bold">AttendEase</h1>
        </div>
        <ThemeToggle />
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <div className="text-sm text-muted-foreground text-center">
              Demo credentials: admin@example.com / password
            </div>
          </CardFooter>
        </Card>
      </main>
      <footer className="border-t py-4 px-6 text-center text-sm text-muted-foreground">
        <p>© 2023 AttendEase. All rights reserved.</p>
      </footer>
    </div>
  );
}
