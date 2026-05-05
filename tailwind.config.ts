import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === ZOOMMA OFFICIAL PALETTE ===
        ink: {
          DEFAULT: "#0A0A0A",
          50: "#F7F7F7",
          900: "#0A0A0A",
          950: "#050505",
        },
        graphite: "#212121",
        snow: "#FFFFFF",
        electric: {
          DEFAULT: "#6491F3",
          glow: "rgba(100,145,243,0.18)",
        },
        alert: "#FA192F",
        magenta: "#FF68CB",
        mint: "#01E291",
        glass: {
          surface: "rgba(255,255,255,0.04)",
          surface2: "rgba(255,255,255,0.06)",
          border: "rgba(255,255,255,0.08)",
          borderHi: "rgba(100,145,243,0.20)",
        },

        // === SHADCN BRIDGE ===
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        destructive: "var(--destructive)",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
        sora: ["var(--font-sora)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "700" }],
        "display-lg": ["clamp(2.25rem, 5.5vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "700" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "600" }],
        "eyebrow": ["0.75rem", { lineHeight: "1", letterSpacing: "0.18em", fontWeight: "500" }],
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
        "4xl": "2rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(100,145,243,0.18)",
        "glow-sm": "0 0 24px rgba(100,145,243,0.12)",
        "glow-magenta": "0 0 48px rgba(255,104,203,0.16)",
        "glow-mint": "0 0 48px rgba(1,226,145,0.14)",
        glass: "0 1px 0 rgba(255,255,255,0.06) inset, 0 24px 48px -12px rgba(0,0,0,0.4)",
        "glass-lg": "0 1px 0 rgba(255,255,255,0.08) inset, 0 40px 80px -16px rgba(0,0,0,0.55)",
      },
      backdropBlur: {
        xs: "4px",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-orb":
          "radial-gradient(circle at center, rgba(100,145,243,0.25) 0%, rgba(100,145,243,0.05) 40%, transparent 70%)",
        "gradient-electric":
          "linear-gradient(135deg, #6491F3 0%, #FF68CB 100%)",
        "gradient-mint":
          "linear-gradient(135deg, #6491F3 0%, #01E291 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        crisp: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
