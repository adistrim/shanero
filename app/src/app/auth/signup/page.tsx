import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { AUTH_TEXTS, PATHS } from "@/constants";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-linear-to-br from-background to-muted/20">
      <div className="w-full max-w-md space-y-6">
        {/* Main Signup Card */}
        <Card className="shadow-lg">
          <CardHeader className="space-y-3 text-center pb-6">
            <CardTitle className="text-3xl font-bold tracking-tight">
              {AUTH_TEXTS.signup.title}
            </CardTitle>
            <CardDescription className="text-base">
              {AUTH_TEXTS.signup.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 px-8 pb-4">
            <form className="space-y-5">
              {/* Name and Username Row */}
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="name" className="text-sm font-medium">
                    {AUTH_TEXTS.signup.nameLabel}
                  </FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder={AUTH_TEXTS.signup.namePlaceholder}
                    className="h-11"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="username" className="text-sm font-medium">
                    {AUTH_TEXTS.signup.usernameLabel}
                  </FieldLabel>
                  <Input
                    id="username"
                    type="text"
                    placeholder={AUTH_TEXTS.signup.usernamePlaceholder}
                    className="h-11"
                    required
                  />
                </Field>
              </div>

              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email" className="text-sm font-medium">
                  {AUTH_TEXTS.signup.emailLabel}
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder={AUTH_TEXTS.signup.emailPlaceholder}
                  className="h-11"
                  required
                />
              </Field>

              {/* Password Fields */}
              <div className="space-y-4">
                <Field>
                  <FieldLabel htmlFor="password" className="text-sm font-medium">
                    {AUTH_TEXTS.signup.passwordLabel}
                  </FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder={AUTH_TEXTS.signup.passwordPlaceholder}
                    className="h-11"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="confirmPassword" className="text-sm font-medium">
                    {AUTH_TEXTS.signup.confirmPasswordLabel}
                  </FieldLabel>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder={AUTH_TEXTS.signup.confirmPasswordPlaceholder}
                    className="h-11"
                    required
                  />
                </Field>
              </div>

              {/* Verification Notice */}
              <div className="rounded-lg bg-muted/50 p-4 border border-border/50">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {AUTH_TEXTS.signup.verificationNotice}
                </p>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full h-11 text-base font-semibold">
                {AUTH_TEXTS.signup.submitButton}
              </Button>
            </form>
            <p className="text-center text-sm">
              {AUTH_TEXTS.signup.loginPrompt}{" "}
              <Link 
                href={PATHS.app.auth.login}
                className="font-semibold text-primary hover:underline"
              >
                {AUTH_TEXTS.signup.loginLink}
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
