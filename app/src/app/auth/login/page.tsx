import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { AUTH_TEXTS, PATHS } from "@/constants";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>{AUTH_TEXTS.login.title}</CardTitle>
            <CardDescription>{AUTH_TEXTS.login.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="username">
                    {AUTH_TEXTS.login.usernameLabel}
                  </FieldLabel>
                  <Input
                    id="username"
                    type="text"
                    placeholder={AUTH_TEXTS.login.usernamePlaceholder}
                    required
                  />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">
                      {AUTH_TEXTS.login.passwordLabel}
                    </FieldLabel>
                    <Link 
                      href={PATHS.app.auth.resetPassword} 
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      {AUTH_TEXTS.login.forgotPassword}
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder={AUTH_TEXTS.login.passwordPlaceholder}
                    required
                  />
                </Field>
                <Field>
                  <Button type="submit">{AUTH_TEXTS.login.submitButton}</Button>
                  <FieldDescription className="text-center">
                    {AUTH_TEXTS.login.signupPrompt}{" "}
                    <Link href={PATHS.app.auth.signup}>
                      {AUTH_TEXTS.login.signupLink}
                    </Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
