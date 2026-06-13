import { LegalPage } from "@/types";

export const legalPages: LegalPage[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    lastUpdated: "March 2026",
    content: `
Montgomery Place LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website montgomeryplacellc.com.

## Information We Collect

**Personal Information**: When you fill out our contact form or subscribe to our newsletter, we collect information you voluntarily provide, including your name, email address, phone number, and message content.

**Automatically Collected Information**: We may automatically collect certain information about your device and usage patterns, including your IP address, browser type, operating system, referring URLs, and pages visited.

## How We Use Your Information

We use the information we collect to:
- Respond to your inquiries and contact requests
- Send newsletter updates if you have opted in
- Improve our website and user experience
- Comply with legal obligations

## Data Storage and Security

Your personal information is stored securely using industry-standard encryption and security practices. We use Supabase as our data infrastructure provider, which maintains SOC 2 Type II compliance.

## Healthcare Data & App Privacy

**No Health Data Collection on this Website**: Montgomery Place does not collect, store, or process personal health information (PHI), medical records, or physiological monitoring data via this website (montgomeryplacellc.com). Any information submitted through our contact forms is treated as general commercial inquiry data and is not used for medical analysis or clinical purposes.

**Future Connected Ecosystem Privacy**: Certain concepts on our product roadmap (such as GlowSafe or CareDock) are designed to integrate with home respiratory monitoring devices. When these products transition from prototyping to active release, they will operate under a dedicated, HIPAA-compliant privacy framework. This will include:
- Explicit opt-in consent for any health-related data transmission.
- End-to-end encryption for all real-time status updates between devices and dashboards.
- Zero sharing of medical or usage telemetry with unauthorized third parties.

## Your Rights

You have the right to:
- Access the personal information we hold about you
- Request correction of inaccurate information
- Request deletion of your personal information
- Opt out of marketing communications at any time

## Contact Us

For questions about this Privacy Policy, contact us at marketplace@montgomeryplacellc.com.

## Changes to This Policy

We may update this Privacy Policy from time to time. We encourage you to review this page periodically for any changes.
    `,
  },
  {
    slug: "terms",
    title: "Terms of Service",
    lastUpdated: "March 2026",
    content: `
Welcome to montgomeryplacellc.com. By accessing or using our website, you agree to be bound by these Terms of Service.

## Use of Website

This website is provided by Montgomery Place LLC for informational purposes. The content on this site is intended to provide general information about our products and services. It is not intended to constitute medical advice.

## Intellectual Property

All content on this website, including text, graphics, logos, product names (including OxiSureTech, GlowSafe, ReelAir, FlexCannula, SleepFlow, AirVista, BreatheActive, GoOxi, and CareDock), images, and software, is the property of Montgomery Place LLC and is protected by applicable intellectual property laws.

## User Submissions

When you submit information through our contact form or newsletter signup, you grant us permission to use that information for the purposes described in our Privacy Policy.

## Disclaimer of Warranties

This website and its content are provided "as is" without warranties of any kind, either express or implied. Montgomery Place LLC does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.

## Limitation of Liability

Montgomery Place LLC shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of or inability to use this website.

## Governing Law

These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.

## Contact

For questions about these Terms, contact us at marketplace@montgomeryplacellc.com.
    `,
  },
  {
    slug: "medical-disclaimer",
    title: "Medical Disclaimer",
    lastUpdated: "March 2026",
    content: `
## Important Medical Information

The information provided on montgomeryplacellc.com is for general informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.

## Not Medical Advice

Nothing on this website should be construed as medical advice. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition, respiratory therapy, or oxygen supplementation.

## Product Information

Product descriptions, features, and specifications presented on this website are for informational purposes. Respiratory therapy products, including oxygen delivery systems and related accessories, should only be used under the guidance and prescription of qualified healthcare professionals.

## Do Not Disregard Professional Advice

Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor, go to the nearest emergency department, or call 911 immediately.

## No Doctor-Patient Relationship

Use of this website does not create a doctor-patient or therapist-patient relationship between you and Montgomery Place LLC or any of its employees, contractors, or affiliates.

## Individual Results May Vary

The experiences and outcomes described on this website are not guaranteed. Individual results may vary depending on your specific health condition, prescribed therapy, and other factors.

## Contact Your Healthcare Provider

For specific questions about whether Montgomery Place products are appropriate for your needs, please consult with your prescribing physician or respiratory therapist.

## Contact Us

For general product questions, contact us at marketplace@montgomeryplacellc.com.
    `,
  },
];

export function getLegalPage(slug: string): LegalPage | undefined {
  return legalPages.find((p) => p.slug === slug);
}
