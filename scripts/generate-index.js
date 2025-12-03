/**
 * Generate index.html for GitHub Pages
 * Lists all slides with links to HTML, PDF, and PPTX versions
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const DIST_DIR = join(import.meta.dirname, "..", "dist");
const SLIDES_DIR = join(import.meta.dirname, "..", "slides");

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Extract title from Marp frontmatter or filename
 */
function getSlideTitle(baseName) {
  const mdPath = join(SLIDES_DIR, `${baseName}.md`);
  if (existsSync(mdPath)) {
    const content = readFileSync(mdPath, "utf-8");
    // Match title in frontmatter: title: "..." or title: '...' or title: ...
    const titleMatch = content.match(/^title:\s*["']?([^"'\n]+)["']?\s*$/m);
    if (titleMatch) {
      return titleMatch[1].trim();
    }
    // Fallback: use first # heading
    const headingMatch = content.match(/^#\s+(.+)$/m);
    if (headingMatch) {
      return headingMatch[1].trim();
    }
  }
  // Fallback: convert filename to title case
  return baseName.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Get all HTML slides (excluding index.html)
 */
function getSlides() {
  const files = readdirSync(DIST_DIR);
  const htmlFiles = files.filter(
    (f) => f.endsWith(".html") && f !== "index.html",
  );

  return htmlFiles.map((htmlFile) => {
    const baseName = basename(htmlFile, ".html");
    return {
      baseName,
      title: getSlideTitle(baseName),
      html: htmlFile,
      pdf: existsSync(join(DIST_DIR, `${baseName}.pdf`))
        ? `${baseName}.pdf`
        : null,
      pptx: existsSync(join(DIST_DIR, `${baseName}.pptx`))
        ? `${baseName}.pptx`
        : null,
    };
  });
}

/**
 * Generate HTML for index page
 */
function generateIndexHtml(slides) {
  const slideItems = slides
    .map((slide) => {
      const downloads = [];
      if (slide.pdf) {
        downloads.push(
          `<a href="${escapeHtml(slide.pdf)}" class="download pdf">PDF</a>`,
        );
      }
      if (slide.pptx) {
        downloads.push(
          `<a href="${escapeHtml(slide.pptx)}" class="download pptx">PPTX</a>`,
        );
      }
      const downloadLinks =
        downloads.length > 0
          ? `<span class="downloads">${downloads.join(" ")}</span>`
          : "";

      return `      <li>
        <a href="${escapeHtml(slide.html)}" class="slide-link">${escapeHtml(slide.title)}</a>
        ${downloadLinks}
      </li>`;
    })
    .join("\n");

  const now = new Date().toISOString().split("T")[0];

  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Marp Slides</title>
  <style>
    :root {
      --bg: #1a1a2e;
      --surface: #16213e;
      --primary: #0f3460;
      --accent: #e94560;
      --text: #eaeaea;
      --text-muted: #a0a0a0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      padding: 2rem;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      background: linear-gradient(135deg, var(--accent), #ff6b6b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .subtitle {
      color: var(--text-muted);
      margin-bottom: 2rem;
    }
    ul {
      list-style: none;
    }
    li {
      background: var(--surface);
      border-radius: 8px;
      padding: 1rem 1.5rem;
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.5rem;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    li:hover {
      transform: translateX(4px);
      box-shadow: -4px 0 0 var(--accent);
    }
    .slide-link {
      color: var(--text);
      text-decoration: none;
      font-weight: 500;
      flex: 1;
    }
    .slide-link:hover {
      color: var(--accent);
    }
    .downloads {
      display: flex;
      gap: 0.5rem;
    }
    .download {
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      text-decoration: none;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
    }
    .download.pdf {
      background: #c0392b;
      color: white;
    }
    .download.pptx {
      background: #d35400;
      color: white;
    }
    .download:hover {
      opacity: 0.8;
    }
    footer {
      margin-top: 3rem;
      text-align: center;
      color: var(--text-muted);
      font-size: 0.875rem;
    }
    footer a {
      color: var(--accent);
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Marp Slides</h1>
    <p class="subtitle">Markdown-based presentations powered by Marp</p>
    <ul>
${slideItems}
    </ul>
    <footer>
      <p>Last updated: ${now}</p>
      <p><a href="https://github.com/toku345/marp-slides">View on GitHub</a></p>
    </footer>
  </div>
</body>
</html>`;
}

// Main
const slides = getSlides();
console.log(`Found ${slides.length} slides:`);
for (const s of slides) {
  console.log(`  - ${s.title} (${s.baseName})`);
}

const indexHtml = generateIndexHtml(slides);
const outputPath = join(DIST_DIR, "index.html");
writeFileSync(outputPath, indexHtml);
console.log(`\nGenerated: ${outputPath}`);
