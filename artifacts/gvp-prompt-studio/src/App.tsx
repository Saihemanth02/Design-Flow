import { useState } from "react";
import "./index.css";

const DESIGN_TYPES = [
  "Poster",
  "Thumbnail",
  "Instagram Post",
  "Reel Cover",
  "College Banner",
  "Logo Design",
];

const STYLE_PRESETS = [
  {
    id: "neon-gold",
    icon: "✦",
    name: "NEON GOLD",
    desc: "Navy & gold neon glow",
    style: "neon gold with dark navy backgrounds, molten gold neon outlines, electric metallic glows",
    colors: "#0A0E27 navy base, #D4AF37 gold neon, #FFE566 highlight, #1B4FFF cobalt accent",
  },
  {
    id: "cyberpunk",
    icon: "⬡",
    name: "CYBERPUNK",
    desc: "Purple & cyan grid world",
    style: "cyberpunk grid with deep purple, electric cyan, neon magenta, holographic overlays",
    colors: "#0D0020 dark purple, #00FFFF cyan, #FF00FF magenta, #7B2FFF violet",
  },
  {
    id: "cosmic",
    icon: "✧",
    name: "COSMIC",
    desc: "Space & stardust universe",
    style: "deep space with nebula gradients, stardust particles, cosmic blues and violets, aurora effects",
    colors: "#020512 void black, #4B0082 nebula violet, #00B4D8 star blue, #E0AAFF soft lilac",
  },
  {
    id: "luxury-marble",
    icon: "◈",
    name: "LUXURY MARBLE",
    desc: "White & rose gold premium",
    style: "luxury marble texture with rose gold foil accents, ivory whites, editorial sophistication",
    colors: "#FAFAFA ivory, #B76E79 rose gold, #D4AF37 champagne gold, #2C2C2C charcoal",
  },
  {
    id: "brutalist",
    icon: "▰",
    name: "BRUTALIST",
    desc: "Black & white bold impact",
    style: "brutalist design with extreme contrast, raw typography, bold black stripes, harsh whites",
    colors: "#000000 pure black, #FFFFFF pure white, #FF0000 impact red, #FFFF00 warning yellow",
  },
  {
    id: "desi-fest",
    icon: "❋",
    name: "DESI FEST",
    desc: "Saffron & festival energy",
    style: "Indian festival aesthetic with saffron orange, marigold yellow, jewel tones, ornamental patterns",
    colors: "#FF6600 saffron, #FFD700 marigold, #C41E3A festival red, #006400 sacred green",
  },
];

const SIZES = [
  { label: "1920×1080", value: "1920x1080", desc: "16:9 Landscape" },
  { label: "1080×1080", value: "1080x1080", desc: "1:1 Square" },
  { label: "1080×1920", value: "1080x1920", desc: "9:16 Portrait" },
  { label: "A4 Portrait", value: "2480x3508", desc: "Print Ready" },
];

function generatePrompt(
  designType: string,
  topic: string,
  titleText: string,
  style: (typeof STYLE_PRESETS)[0],
  size: (typeof SIZES)[0]
): string {
  const topicText = topic || "[Your Topic]";
  const titleTextFinal = titleText || "[Your Title Text]";

  const typeSpecific: Record<string, string> = {
    "Poster":
      "• Dominant hero image/illustration occupying 60–70% of canvas\n• Bold typographic hierarchy with title as largest element\n• Clear focal point with strong visual depth",
    "Thumbnail":
      "• High contrast, bold colors for scroll-stopping impact\n• Large readable text visible at small sizes (100px)\n• Dramatic visual or expressive face/emotion if applicable",
    "Instagram Post":
      "• Square-optimized with centered or 3-column grid composition\n• Brand-consistent color story throughout\n• Space for caption hook and engagement",
    "Reel Cover":
      "• Vertical 9:16 format with bold central visual\n• Top 30% safe zone for title overlay text\n• High energy, high-contrast thumbnail appeal",
    "College Banner":
      "• Wide horizontal panoramic composition\n• Institutional credibility with prestigious visual language\n• Balance between academic tradition and modern design",
    "Logo Design":
      "• Versatile across white and dark backgrounds\n• Simple, memorable, scalable mark with clear meaning\n• Monochrome version must work perfectly",
  };

  return `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 GVP PROMPT STUDIO — MASTER PROMPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

▌ ROLE & EXPERTISE
You are a world-class graphic designer and visual artist with 20 years of elite experience at agencies like BBDO, Pentagram, and Apple. You specialize in ${designType.toLowerCase()} design with mastery of visual hierarchy, typographic precision, and cinematic composition.

▌ OBJECTIVE
Create a stunning, professional ${designType} design for Gayatri Vidya Parishad (GVP) College on the topic: "${topicText}". This design must achieve a 10/10 rating and be competition-ready.

▌ TITLE TEXT
Primary Headline: "${titleTextFinal}"
Institution: Gayatri Vidya Parishad College (GVP)

▌ DESIGN STYLE SYSTEM
Style Direction: ${style.style}
Visual Mood: ${style.name} — ${style.desc}
Aesthetic: Apple product launch meets luxury creative studio meets ${style.name.toLowerCase()} design sensibility

▌ COLOR PALETTE
${style.colors}
Always prioritize contrast, legibility, and visual harmony. No clashing colors.

▌ TYPOGRAPHY SYSTEM
• Primary Display Font: Orbitron or Cinzel Bold — for main titles and headings
• Secondary Font: Rajdhani SemiBold — for subheadings and labels
• Body Font: Inter or Poppins Light — for supporting text
• Hierarchy Rule: 3 levels max — Hero Title > Subheading > Body/Caption

▌ VISUAL EFFECTS & TEXTURE
• Layer glow effects on key text and borders (neon-style outer glow)
• Apply subtle grain/noise texture overlay at 3–5% opacity for premium feel
• Use depth layers: background elements at 20% opacity, mid-ground at 60%, foreground at 100%
• Add bokeh/particle effects in background if appropriate to style
• Apply chromatic aberration or light leak effects sparingly for cinematic quality

▌ GVP LOGO INSTRUCTIONS
• Include GVP badge in corner — hexagonal or rectangular shape
• Badge style: dark navy background (#0A0E27) with molten gold border (#D4AF37)
• Letters "GVP" in Orbitron Bold Gold inside badge
• Below badge: "Gayatri Vidya Parishad" in Cinzel Small Caps, tiny gold text
• Badge placement: Top-right or bottom-left corner with subtle drop shadow
• Badge size: proportional — approximately 8–10% of canvas width
• Add subtle outer glow on badge: rgba(212,175,55,0.3)

▌ LAYOUT COMPOSITION
Design Type: ${designType}
Canvas Size: ${size.value} pixels (${size.desc})
• Apply the Golden Ratio or Rule of Thirds for composition
• Visual Flow: Z-pattern or F-pattern eye movement
• Safe Zone: Keep critical content 5–8% inset from all edges
• Breathing Space: Generous whitespace, never cluttered
• Focal Hierarchy: 1 hero element > 2 supporting elements > background texture

▌ ${designType.toUpperCase()}-SPECIFIC DESIGN RULES
${typeSpecific[designType] || "• Follow best practices for this design type"}

▌ QUALITY REQUIREMENTS
• Every element must feel intentional and purposeful
• Test design at 50% scale — all text must remain legible
• Check contrast ratio: minimum 4.5:1 for body text, 3:1 for large text
• Shadows and glows must feel earned, not decorative noise
• Overall impression: "How did they make this look so good?"

▌ OUTPUT SPECIFICATION
Format: Adobe Illustrator / Photoshop ready (fully layered)
Resolution: ${size.value} pixels at 300 DPI
Color Mode: RGB for digital / CMYK for print
Deliverables: PSD/AI source + PNG export (transparent) + JPG preview
Layer Groups: Background | Textures/Effects | Layout Grid | Typography | GVP Badge | Final Overlay

▌ QUALITY STANDARD
This design must be: Awe-inspiring · Professional · Unique · Ready to publish
Target audience: Students, faculty, and academic community of GVP College.
Standard: Portfolio-worthy, award-eligible, client-approved on first presentation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✦ Generated by GVP Prompt Studio | Claude Optimized ✦
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
}

export default function App() {
  const [selectedType, setSelectedType] = useState("Poster");
  const [topic, setTopic] = useState("");
  const [titleText, setTitleText] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(STYLE_PRESETS[0]);
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedPrompt("");
    setTimeout(() => {
      const prompt = generatePrompt(selectedType, topic, titleText, selectedStyle, selectedSize);
      setGeneratedPrompt(prompt);
      setIsGenerating(false);
      setTimeout(() => {
        document.getElementById("output-box")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 700);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
    } catch {
      const el = document.createElement("textarea");
      el.value = generatedPrompt;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="bokeh-orb" />
      <div className="bokeh-orb" />
      <div className="bokeh-orb" />
      <div className="bokeh-orb" />
      <div className="bokeh-orb" />

      <div className="app-container">
        {/* ── Header ── */}
        <header className="header">
          <div className="gvp-badge">
            <div className="gvp-letters">GVP</div>
            <div className="gvp-fullname">Gayatri<br />Vidya<br />Parishad</div>
          </div>
          <div className="header-text">
            <h1>GVP PROMPT STUDIO</h1>
            <p className="subtitle">Generate 10/10 Claude optimized design prompts</p>
          </div>
        </header>

        {/* ── Design Type ── */}
        <section>
          <div className="section-label">01 — Select Design Type</div>
          <div className="chip-group">
            {DESIGN_TYPES.map((type) => (
              <button
                key={type}
                className={`chip ${selectedType === type ? "active" : ""}`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </section>

        {/* ── Topic + Title ── */}
        <section>
          <div className="section-label">02 — Enter Details</div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="topic">Topic</label>
              <input
                id="topic"
                type="text"
                placeholder="e.g. Annual Tech Fest 2025"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="title">Title Text</label>
              <input
                id="title"
                type="text"
                placeholder="e.g. TECHNOVA — Where Minds Meet"
                value={titleText}
                onChange={(e) => setTitleText(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* ── Style Presets ── */}
        <section>
          <div className="section-label">03 — Choose Style Preset</div>
          <div className="style-grid">
            {STYLE_PRESETS.map((preset) => (
              <div
                key={preset.id}
                className={`style-card ${selectedStyle.id === preset.id ? "active" : ""}`}
                onClick={() => setSelectedStyle(preset)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedStyle(preset)}
              >
                <div className="card-icon">{preset.icon}</div>
                <div className="card-name">{preset.name}</div>
                <div className="card-desc">{preset.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Size Chips ── */}
        <section>
          <div className="section-label">04 — Select Canvas Size</div>
          <div className="chip-group" style={{ marginBottom: "32px" }}>
            {SIZES.map((size) => (
              <button
                key={size.value}
                className={`chip ${selectedSize.value === size.value ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size.label}
              </button>
            ))}
          </div>
        </section>

        {/* ── Generate Button ── */}
        <button
          className="generate-btn"
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? "GENERATING MASTER PROMPT..." : "⚡ GENERATE MASTER PROMPT"}
        </button>

        {/* ── Output Box ── */}
        {generatedPrompt && (
          <div className="output-box" id="output-box">
            <div className="output-header">
              <span className="output-title">✦ MASTER PROMPT</span>
              <button
                className={`copy-btn ${copied ? "copied" : ""}`}
                onClick={handleCopy}
              >
                {copied ? "✓ COPIED" : "⎘ COPY"}
              </button>
            </div>
            <pre className="output-content">{generatedPrompt}</pre>
          </div>
        )}
      </div>
    </>
  );
}
