# Kamiar Sohafi — Portfolio

Personal portfolio for Kamiar Sohafi, Cybersecurity & AI Engineer.
Built with TanStack Start, React, TypeScript and Tailwind CSS v4.

## Replacing the portrait

The hero shows an elegant placeholder frame until a real photo is added.

1. Export the photo as a tall crop — about **4:5** (e.g. 960 × 1200 px), JPG or WebP.
2. Save it as `public/portrait.jpg`.
3. Open `src/content/site.ts` and set:

   ```ts
   portrait: {
     src: "/portrait.jpg",
     alt: "Portrait of Kamiar Sohafi",
   },
   ```

The photo is displayed exactly as supplied — it is only cropped to fill the frame
(`object-cover`, anchored to the top). No filters or colour changes are applied.
If the crop cuts off the head, adjust the photo itself or change `object-top` in
`src/components/site/Portrait.tsx`.

## Editing content

All copy lives in plain TypeScript data files in `src/content/`:

| File | What it controls |
| --- | --- |
| `site.ts` | Name, headline, intro, email, social links, location, portrait, SEO text, navigation |
| `expertise.ts` | Expertise areas, focus points, tools (list only tools you have used), linked evidence |
| `projects.ts` | Case studies — each one becomes a page at `/work/<slug>` |
| `credentials.ts` | Certificates and training |
| `path.ts` | Learning path / experience timeline |

### Projects

- `featured: true` shows a large image block on the home page; otherwise the project appears in "Further work".
- `label` is the honest scope badge (e.g. "Dataset-based lab", "Experimental ML project").
- Add `links` only when they really exist (GitHub repo, write-up). Do not add demo URLs you cannot verify.
- Empty `stack` or `outcomes` render a neutral "to be documented" / "on request" note.
- To add an image, place it in `src/assets/`, import it at the top of `projects.ts`, and set `image` and `imageAlt`.

### Credentials

- `kind: "certificate"` — a certificate you hold.
- `kind: "training"` — a course you completed. This does **not** claim the vendor exam was passed.
- Fill in `issuer`, `date`, `credentialId` and `url` when known. If all are empty the site shows
  "Credential details available on request".

### Learning path

Add `period` (e.g. `"2023 — 2024"`) and `organisation` only when accurate; otherwise entries show as numbered phases.

## Design system

Colours, fonts and motion are defined in `src/styles.css` (charcoal ground, warm off-white type,
silver secondary text, one cool-blue accent, warm "paper" sections). Fonts: Instrument Serif (display),
Geist (text) and Geist Mono (labels), loaded in `src/routes/__root.tsx`.
Motion respects `prefers-reduced-motion`.

## Development

```sh
bun install
bun run dev
bun run test
```
