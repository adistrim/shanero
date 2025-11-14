import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AUTH_TEXTS } from "@/constants";
import { PATHS } from "@/constants/path";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>{AUTH_TEXTS.resetPassword.title}</CardTitle>
            <CardDescription>
              {AUTH_TEXTS.resetPassword.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" asChild>
              <a href={PATHS.app.auth.login}>{AUTH_TEXTS.resetPassword.backToLoginButton}</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
