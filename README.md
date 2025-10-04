# Lifestyles

Lifestyles is a React + TypeScript dashboard for browsing random user profiles.  
It demonstrates clean UI patterns like search, filtering, pagination, maps, and state persistence.

---

## Features

- **Random User Fetching** – integrates with [randomuser.me API](https://randomuser.me).
- **Search (Client-side Filtering)** – search by **name, email, or location** within the currently loaded users.
  - Instant UI updates.
  - Limited to loaded results because the API does **not** support `?search` queries.
- **Filter by Gender** – fetch only male or female users using API filters.
- **Pagination** – move across pages of user results.
- **User Preview Modal** – view profile picture, email, and location in a pop-up modal.
- **Google Maps Integration** – visualize user locations on an interactive map powered by **Google Maps API**.
- **Local Storage Persistence** – search term, filters, and current page are saved for session continuity.
- **Responsive UI** – mobile-friendly layouts using Tailwind CSS.

---

## Search Functionality

- Currently implemented as **client-side filtering**:
  - App fetches a batch of users → applies filter locally → renders updated list.
- For **server-side search**:
  - Normally you’d call an API endpoint with `?search=keyword`.
  - Since **randomuser.me doesn’t support this**, client-side filtering was chosen.
  - In production with a custom API, server-side search could replace the filter.

---

## Tech Stack

- React 18 + Hooks
- TypeScript
- Tailwind CSS
- Vite
- randomuser.me API
- Google Maps API

---

## 📂 Structure
