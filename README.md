# Seven Blocks — Landing & Portfolio

This repository contains the Seven Blocks landing page and my personal portfolio. 

## Quick start

1) Clone the repo

```bash
git clone https://github.com/thesevenblocks/webpage.git
cd webpage
```

2) Install dependencies

```bash
npm install
```

3) Start the dev server

```bash
npm run dev
```

4) Build and run in production

```bash
npm run build
npm start
```

## Edit content

- Theme & branding: `src/resources/once-ui.config.ts`
- Profile data & sections: `src/resources/content.tsx`
- Blog posts: add `.mdx` files under `src/app/blog/posts`
- Projects: add `.mdx` files under `src/app/work/projects`

## Requirements

- Node.js v18.17+

## Tech & credits

Built with [Next.js](https://nextjs.org) and [Once UI](https://once-ui.com). Based on the “Magic Portfolio” template. Docs: [docs.once-ui.com](https://docs.once-ui.com/docs/magic-portfolio/quick-start)

## License

CC BY-NC 4.0. See `LICENSE` for details.
