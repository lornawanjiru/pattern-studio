# Pattern Studio ✂️

Pattern Studio is an open-source tool for drafting sewing patterns. You can draft from a client's own body measurements (made to measure) or from a standard size between **S and XL**. It turns measurements into pattern pieces with ease and seam allowance added, so you can print them or cut from them.

I'm also using it to practise **React** (frontend) and **LangChain** (AI engineering). The build is done in public, one small step at a time.

> **Status:** Early development. The first piece is a basic skirt calculator. See the [Roadmap](#roadmap) for what's coming next.

---

## Why

Drafting a pattern by hand means doing the same arithmetic over and over: quarter waists, dart intake, ease, seam allowance. It also means redoing all of it for every client. Pattern Studio aims to:

- **Do the maths reliably.** Pattern calculations are plain, tested functions, so the numbers are always the same for the same input.
- **Support both workflows.** Enter a client's measurements for a custom fit, or pick a standard size to grade a range.
- **Explain the draft.** An AI assistant built with LangChain can walk through why each line is drawn where it is. It can also take measurements in plain language ("waist 72, hips 98, I want a knee-length A-line").

---

## Features

### Available now
- [x] Skirt calculations: length, waist and quarter waist

### Planned
- [ ] Measurement form for a client's own measurements (waist, hip, bust, lengths, and so on)
- [ ] Standard size selector (S–XL) that fills the form in from a size chart
- [ ] Ease and seam allowance settings
- [ ] Pattern blocks: bodice → straight skirt → A-line skirt → trousers
- [ ] Pattern pieces drawn as SVG on screen, at real size
- [ ] Export to PDF, tiled for printing on A4
- [ ] Saved client profiles
- [ ] AI drafting assistant (see [AI features](#ai-features-langchain))
- [ ] Switch between inches and cm

---

## Sizing

Measurements are in **inches** by default. Standard sizes use the Zanira Clothing chart, stored in [`src/data/sizeChart.js`](src/data/sizeChart.js).

| Size | UK | Bust | Waist | Hips |
|------|----|------|-------|------|
| S | 6–8 | 34–36 | 27–28 | 38–39 |
| M | 8–10 | 37–38 | 28–30 | 40–41 |
| L | 12–14 | 39–40 | 32–34 | 43–44 |
| XL | 14–16 | 42–43 | 35–36 | 45–46 |

Patterns are drafted at the **middle** of each range.

### Made-to-measure

For a custom fit, the client's own measurements replace the size chart values. The same drafting functions run either way. The only thing that changes is where the input comes from.

### Drafting guides

- [Bodice](docs/bodice.md): the formulas, why we divide by 2 and 4, armhole methods, neckline, and values per size

---

## Tech stack

| Area            | Tools                                              |
|-----------------|----------------------------------------------------|
| Frontend        | React 19, Vite                                     |
| Linting         | ESLint (react-hooks, react-refresh)                |
| Pattern drawing | SVG *(planned)*                                    |
| AI              | LangChain.js + an LLM provider *(planned)*         |
| Backend         | Small Node API for the AI calls, so API keys stay off the client *(planned)* |

---

## AI features (LangChain)

The plan is to use LangChain for:

1. **Reading measurements from plain language.** The user describes a client or garment, and the model returns structured data (`{ waist: 72, hip: 98, style: "a-line", length: "knee" }`) that is checked against a schema.
2. **Tool calling for the maths.** The LLM never calculates a measurement itself. It calls the project's deterministic drafting functions as tools, so the numbers can always be trusted and tested.
3. **Explaining the draft.** "Why is the back dart longer than the front?" is answered from the actual draft values.
4. **Fit troubleshooting (stretch goal).** The user describes a problem, such as "gaping at the back waist", and gets suggested pattern adjustments.

Design rule: **the AI assists and the code calculates.**

---

## Getting started

### Prerequisites
- Node.js 20+
- npm

### Install and run
```bash
git clone https://github.com/lornawanjiru/pattern-studio.git
cd pattern-studio
npm install
npm run dev
```

Then open the local URL that Vite prints (usually http://localhost:5173).

### Scripts
| Command           | What it does                     |
|-------------------|----------------------------------|
| `npm run dev`     | Start the dev server with HMR    |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview the production build     |
| `npm run lint`    | Run ESLint                       |

---

## Project structure

```
pattern-studio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SkirtInfo.jsx     # skirt measurement calculations
│   │   └── Footer.jsx
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── vite.config.js
```

---

## Roadmap

**Phase 1: React fundamentals**
- Components and props (Header, Footer, SkirtInfo) ✅
- State: a controlled measurement form
- Lifting state up: size selector + form
- Pull the drafting maths out into pure functions in `src/lib/`

**Phase 2: Drafting**
- Front bodice block drawn as SVG ([guide](docs/bodice.md))
- Ease and seam allowance
- Printing at real size and PDF export

**Phase 3: AI**
- Node API with LangChain.js
- Structured output for measurement intake
- Drafting functions exposed to the LLM as tools
- A chat panel in the UI

**Phase 4: Polish**
- Tests (Vitest) for the drafting functions
- Saved client profiles
- Deployment

---

## What I'm learning

| Skill                          | Where it shows up in this project               |
|--------------------------------|-------------------------------------------------|
| React components and props     | Layout and reusable measurement displays        |
| State and controlled forms     | Measurement input, size selection               |
| Derived state                  | Pattern values computed from measurements       |
| SVG rendering                  | Drawing pattern pieces                          |
| LangChain structured output    | Turning plain-language input into measurements  |
| LangChain tool calling         | The LLM calls the deterministic drafting maths  |
| Prompt design and guardrails   | Keeping the AI's answers based on real values   |

---

## Contributing

Contributions are welcome, especially from people who know pattern making and sewing.

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes
4. Open a pull request

Good first issues: adding pattern formulas, correcting the size chart, and improving the UI.

---

## License

MIT *(add a `LICENSE` file to make this official)*

---

Made with ❤️ in Kenya
