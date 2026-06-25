export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "This portfolio collects only the information you choose to submit through the contact form or newsletter field.",
      "Submitted details are used to respond to project inquiries, schedule calls, and improve the quality of future communication.",
      "No personal information is sold. If analytics are added later, they should be configured to respect privacy and collect only aggregate usage patterns."
    ]
  },
  terms: {
    title: "Terms of Service",
    body: [
      "The content on this site is provided for general portfolio and inquiry purposes.",
      "Project availability, timelines, and pricing are confirmed only after a written scope and agreement.",
      "All third-party marks, mockups, and placeholder names are used for demonstration and may be replaced in production."
    ]
  }
} as const;

export type LegalSlug = keyof typeof legalPages;
