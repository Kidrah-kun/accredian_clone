# Accredian Enterprise - Pixel-Perfect Re-engineering

A high-performance, enterprise-grade landing page clone of [Accredian Enterprise](https://enterprise.accredian.com/), meticulously re-engineered with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Built for the Full Stack Developer Intern assignment.

---

## 🚀 Vision & Key Features

This project focuses on **clean code architecture, extreme UI fidelity, and professional lead capture logic**.

- **Pixel-Perfect Fidelity:** Replicated the production site's aesthetic, including complex multi-layered shadows and brand-specific typography.
- **Responsive Architecture:** Fully optimized for all device sizes (Mobile, Tablet, Desktop).
- **Lead Capture System (Bonus):** A comprehensive, validated contact modal integrated with a Next.js API route.
- **Industry-Standard Code:** Modular components, strict TypeScript typing, and organized folder structure.

---

## 🛠 Tech Stack & Architecture

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (Custom Design System)
- **Language:** TypeScript
- **Icons:** Lucide React
- **Infrastructure:** Atomic component structure in `src/components`.

---

## ⚡ Setup & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Launch Development Environment:**
   ```bash
   npm run dev
   ```
   Access the portal at `http://localhost:3000`.

---

## 🧠 Approach & Thought Process

1. **Hierarchy Analysis:** Analyzed the original site's DOM to extract content priority and design tokens.
2. **Component Atomization:** Broke the layout into 9+ distinct sections to ensure high reusability and maintainability.
3. **Design Polish:** Manually fine-tuned Tailwind's spacing and elevation scales to match the "floating" feel of the enterprise design.
4. **Functional Integration:** Implemented the bonus lead capture form with a mock API handler to demonstrate full-stack readiness.

---

## 🤖 AI Usage Explanation (Requirement)

This project was developed with the assistance of **Antigravity** (Advanced Agentic Coding Assistant).

### Where AI (Antigravity) Helped:
- **Structural Scaffolding:** Antigravity was used to generate initial boilerplate for complex sections like the FAQ accordion and the Testimonial grid.
- **Content Parsing:** Leveraged AI to extract text content and image metadata from the production bundle, ensuring accuracy.
- **Logic Drafting:** Assisted in drafting the initial validation regex for the contact form and the basic Next.js API route structure.

### What Was Modified/Improved Manually:
- **Pixel-Perfect Refinement:** Manually overrode generated Tailwind classes to implement specific, non-standard shadows and HSL color values found on the original site.
- **UX & Interaction:** Hand-crafted the smooth-scroll behavior, glassmorphism icon effects, and the "Contact Us" button's elevation states.
- **Type Safety & Hydration:** Manually refactored generated code to resolve TypeScript interface gaps and ensure clean React hydration.
- **Vertical Rhythm:** Adjusted section-wide margins and paddings to create a tighter, more cohesive vertical flow.

---

## 🔮 Future Roadmap (Improvements)

1. **Persistent Database:** Integrate Prisma/PostgreSQL to store lead data permanently.
2. **Automated Emails:** Add Resend/SendGrid integration for instant lead notifications.
3. **Entrance Animations:** Implement Framer Motion for high-impact scroll interactions.
4. **E2E Testing:** Add Playwright tests to verify the lead capture funnel.

---

## 📄 License
This project is licensed under the MIT License.

