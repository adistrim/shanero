export const HOME = {
  header: {
    badge: "Coming soon",
    title: "Shanero",
    subtitle: "An experiment in slower, credit-based social interaction."
  },
  sections: {
    premise: {
      title: "The premise",
      paragraphs: [
        "Most social platforms optimize for engagement. More scrolling, more posts, more time spent. This is an experiment in the opposite direction.",
        "Every action costs credits. Credits refresh daily at 6 AM. When they run out, access stops. If you have a legitimate reason to continue, you can request a brief unlock from an AI agent. The agent evaluates your reasoning and may grant one or two minutes of access."
      ]
    },
    credits: {
      title: "Why credits",
      paragraphs: [
        "Credits introduce friction. Friction encourages intention. The hypothesis is that a credit system might lead to more deliberate interactions.",
        "Contributing meaningful content could earn credits back. Passive scrolling burns through them. It's a simple mechanic to test whether constraint changes behavior."
      ]
    },
    gatekeeper: {
      title: "The AI checkpoint",
      paragraphs: [
        "When credits run out, an AI agent acts as a checkpoint. You explain why you need access. If the reasoning sounds legitimate, it grants a controlled time window.",
        "No permanent unlocks. No unlimited overrides. Just brief, conditional access."
      ]
    },
    textFirst: {
      title: "Text-first by design",
      paragraphs: [
        "The feed prioritizes text. Images are supported but cost more credits. The idea is to slow down consumption and reduce visual noise.",
        "Whether this makes conversations better is something to discover."
      ]
    }
  },
  closing: {
    statement: "Not every platform needs to compete for your time. Some can explore protecting it."
  },
  footer: {
    title: "Shanero",
    description: "Credit-based slow social. Coming soon.",
    badge: "Coming soon"
  }
} as const;
