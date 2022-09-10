# Next.js tapu.com Frontend Case

[Figma Design](https://www.figma.com/file/DAFtQ25eGC1PwuIi42skBs/Tapucom-Frontend-Case?node-id=0%3A1)

this project is a frontend case for tapu.com

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Task List

- [x] Create a new Next.js app
- [x] use PWA
- [x] use Redux Toolkit
- [x] use Tailwind CSS
- [x] use TypeScript
- [x] use ESLint
- [x] use Prettier
- [x] i18n (English, Turkish)
- [x] use SWR
- [x] use React Hook Form
- [x] use fetch
- [x] lazy load images
- [x] next.js api

## Project Structure

```
.
├── components
│   ├── account
│   │   ├── sign-up.tsx
│   │   └── profile.ts
│   ├── list
│   │   ├── add-card-button.tsx
│   │   ├── list-item.tsx
│   │   └── total-card.ts
│   ├── UI
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── currency.tsx
│   │   ├── select.tsx
│   │   ├── star.tsx
│   │   └── title.tsx
│   ├── Header.tsx
│   ├── layout.tsx
│   ├── bottom-nav.tsx
│   └── bottom-nav-item.tsx
├── pages
│   ├── api
│   │   ├── auth
│   │   │   ├── login.ts
│   │   │   └── signup.ts
│   │   └── products
│   │       └── index.ts
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── list.tsx
│   └── account.tsx
├── store
│   ├── authSlice.ts
│   ├── cardSlice.ts
│   └── index.ts
├── styles
│   └── global.css
├── settings
│   └── site.settings.tsx
├── data
│   ├── users.ts
│   └── products.ts
└── types
    ├── api.model.ts
    ├── common.model.ts
    └── enum.ts
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
