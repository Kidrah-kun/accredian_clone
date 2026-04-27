# Accredian Enterprise Page Clone

This project is a high-fidelity clone of the Accredian Enterprise landing page, built for a Full Stack Developer Intern assignment. The goal was to recreate the page with a focus on clean code, responsive design, and functional lead capture.

## 🚀 Links

* **Live Site**: [https://accredian-clone-rouge.vercel.app/](https://accredian-clone-rouge.vercel.app/)
* **GitHub Repository**: [https://github.com/Kidrah-kun/accredian_clone](https://github.com/Kidrah-kun/accredian_clone)

---

## 📦 Submission Criteria Checklist

As per the assignment requirements, the following features have been fully implemented:

- [x] **Lead Capture Form**: Implemented a professional, multi-field modal matching the production site's "Enquire Now" experience.
- [x] **API Integration**: Included an asynchronous mock handler in the form to demonstrate data lifecycle (Loading -> Success).
- [x] **Performance Optimization**: Optimized LCP (Largest Contentful Paint) using Next.js Image priority and eager loading strategies.
- [x] **SEO Improvements**: Configured custom metadata, OpenGraph tags, and semantic HTML for search engine readiness.
- [x] **Animations**: Integrated smooth Framer Motion transitions, including discrete paged sliders and modal entry/exit effects.

---

## 🛠️ Tech Stack

* **Next.js (App Router)**: For fast, server-side rendering and routing.
* **Tailwind CSS**: For responsive, utility-first styling.
* **Framer Motion**: For controlled paged animations and interactive UI elements.
* **Lucide React**: For modern, consistent iconography.

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Kidrah-kun/accredian_clone.git
cd accredian_clone
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

---

## 🧠 Approach

* **Component-Based**: I organized the UI into reusable components to keep the code clean and easy to maintain.
* **Mobile-First**: I ensured the site is fully responsive, with a focus on custom mobile sliders for Testimonials and Course Segments.
* **Visual Parity**: I paid close attention to the original site's spacing, colors, and thin borders to ensure a consistent look.
* **Functional Logic**: The "Enquire Now" modal features production-accurate fields (Phone, Domain, Candidates, Location) and a mock API handler.
* **Discrete Animations**: Refactored sliders to use controlled paging logic, ensuring users view one focused card at a time.

---

## 🤖 AI Usage & Refinement

In line with the assignment guidelines, I used **Antigravity** and **Claude** to assist in development while maintaining full ownership of the logic.

### Where AI Helped
* **Initial Layout**: Helped generate the base structure of several sections.
* **Troubleshooting**: Assisted in resolving TypeScript module resolution issues and Next.js configuration errors.
* **Drafting Logic**: Helped outline the basic swipe logic for mobile sliders.

### Manual Refinements
* **Code Optimization**: I refactored the AI-generated components to make the logic more readable and stable.
* **Interaction Polish**: I personally refactored the swipe logic to ensure it felt "controlled" rather than a simple scroll.
* **UI Fine-Tuning**: I spent significant time manually adjusting colors, shadows, and spacing to match the reference site 1:1.

---

## 👤 Author

**Hardik Hathwal**  
[Portfolio](https://www.hardikhathwal.dev/) | [Email](mailto:hardikhathwal.work@gmail.com)
