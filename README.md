# PROJECT ONLINE STORE APP

## Project Description

In this project I will try to apply all the knowledge acquired in my studies of Nextjs version 13. For this I will try to cover the most relevant aspects that we can normally find in an online store.

Some of the most important features are:

- Shopping Cart
  - Clean Cart
  - Add one product
  - Remove one product
  - Block product out of stock
- State Management
  - Shopping Cart
  - User Authentication
- Responsive Design
- Dark and Light Theme
- Language: English - Spanish

## Used technology

- Html 5
- CSS Module
- SASS (SCSS) version 1.58.2
- JavaScript
- TypeScript version 4.9.5
- React version 18.2.0
- React Dom version 18.2.0
- Nextjs version 13.1.6
- Prisma version 4.10.1
- React Loading Skeleton version 3.1.1
- PNPM version 7.27.0

## Resources and documentation used

- Nextjs V13: https://beta.nextjs.org/docs
- Nextjs V13.2: https://nextjs.org/blog
- RLS: https://www.npmjs.com/package/react-loading-skeleton
- Sass: https://sass-lang.com/

## Developers: Requirements

- Web Browser
- Code editor
- Nodejs: https://nodejs.org/en/

## Developers: Installation

1. Clone the repository: https://github.com/newmanferrer/project-170223-store-app.git
2. Another option is to download the repository using ZIP format.
3. Install the dependencies using the command "pnpm install", from the terminal console.
4. From the terminal console, execute the “pnpm dev” command, to run the development server.

---

## The New In Next.js 13.2 (February 23rd 2023)

### Route Handlers in folder "app" using "route.ts" or "route.js" file.

- Link: https://nextjs.org/blog/next-13-2#custom-route-handlers

### EXAMPLES

### 1.- Generate static HTML (Static Route Handlers)

- In nextjs 13.2 by default when using the GET method with the Response or NextResponse object.
- It is equivalent to the old "getStaticProps()" in Nextjs 12.
- It is equivalent to the parameter: "{ cache: 'force-cache' }", in Nextjs 13.

```js
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { method } = request
  console.log('hello method: ', method)

  try {
    return new NextResponse('GET: Hello, Next.js!', { status: 200, statusText: 'GET OK' })
  } catch (error) {
    return NextResponse.json(error, { status: 500, statusText: 'GET ERROR: Internal Server Error' })
  }
}
```

```js
import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  });

  const data = await res.json();

  return Response.json({ data })
  or
  return NextResponse.json({ data }) -> for TypeScript error
}
```

### 2.- Generate Dynamic HTML (Dynamic Route Handlers)

Route handlers are evaluated dynamically when:

- 2.1.- Using the "Request object" with the GET method.
- 2.2.- Using any of the other HTTP methods (POST, PUT, DELETE, HEAD, OPTIONS).
- 2.3.- Using Dynamic Functions like cookies and headers.

```js
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const { method } = request
  console.log('hello method: ', method)

  try {
    return NextResponse.json(
      { response: 'POST: Hello, Next.js!' },
      { status: 201, statusText: 'POST Created' }
    )
  } catch (error) {
    return NextResponse.json(error, { status: 500, statusText: 'GET ERROR: Internal Server Error' })
  }
}
```

```js
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY
    }
  })

  const product = await res.json()

  return Response.json({ product })
}
```

```js
export async function POST() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      method: 'POST',
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY
    },
    body: JSON.stringify({ time: new Date().toISOString() })
  })

  const data = await res.json()

  return Response.json(data)
}
```

### 3.- Generate Increment HTML (Revalidating Static Data)

```js
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      next: { revalidate: 60 }
    })
    const posts = await response.json()
    return NextResponse.json(posts, { status: 200, statusText: 'GET OK' })
  } catch (error) {
    return NextResponse.json(error, { status: 500, statusText: 'GET ERROR: Internal Server Error' })
  }
}
```

```js
export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    next: { revalidate: 60 }
  })
  const data = await res.json()

  return Response.json({ data })
}
```

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Author: Newman Ferrer

newmanferrer@gmail.com

🌞 Maracaibo - Venezuela 🌞

Practice date: 17/02/2023
