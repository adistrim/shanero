export const AUTH_TEXTS = {
  login: {
    title: "Log in to your Shanero account",
    description: "Enter your username and password below",
    usernameLabel: "Username",
    usernamePlaceholder: "Enter your username",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
    forgotPassword: "Forgot your password?",
    submitButton: "Log in",
    signupPrompt: "Don't have an account?",
    signupLink: "Sign up"
  },
  signup: {
    title: "Create your Shanero account",
    description: "Fill in your details to get started",
    usernameLabel: "Username",
    usernamePlaceholder: "Choose a username",
    emailLabel: "Email",
    emailPlaceholder: "Enter your email",
    nameLabel: "Name",
    namePlaceholder: "Enter your full name",
    passwordLabel: "Password",
    passwordPlaceholder: "Create a password",
    confirmPasswordLabel: "Confirm Password",
    confirmPasswordPlaceholder: "Re-enter your password",
    submitButton: "Sign up",
    verificationNotice: "After signing up, you'll need to verify your email before you can use the platform.",
    loginPrompt: "Already have an account?",
    loginLink: "Log in"
  },
  resetPassword: {
    title: "Hey there",
    description: "Password reset is still cooking. You can try signing in again or swing back a little later when this feature is ready.",
    backToLoginButton: "Back to Log in"
  }
} as const;
