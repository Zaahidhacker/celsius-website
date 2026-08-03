"""Generate OpenGraph image (1200x630) and favicon from Celsius logo."""
from PIL import Image, ImageDraw, ImageFont
import os

LOGO_PATH = "/home/z/my-project/public/celsius-logo-navy.png"
PUBLIC_DIR = "/home/z/my-project/public"

# Brand colors
NAVY = (10, 29, 63)        # #0a1d3f
AMBER = (245, 166, 35)     # #f5a623
WHITE = (255, 255, 255)
GRAY = (120, 130, 145)

# ---------- OG IMAGE (1200x630) ----------
W, H = 1200, 630
img = Image.new("RGB", (W, H), NAVY)
draw = ImageDraw.Draw(img)

# Subtle radial gradient overlay (warm amber top-right)
overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
odraw = ImageDraw.Draw(overlay)
for r in range(600, 0, -8):
    alpha = int(60 * (1 - r / 600))
    odraw.ellipse([W - 100 - r * 2, -200 - r * 2, W - 100 + r * 2, -200 + r * 2],
                  fill=(245, 166, 35, alpha))
img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
draw = ImageDraw.Draw(img)

# Dot grid pattern (subtle)
for x in range(0, W, 32):
    for y in range(0, H, 32):
        draw.point([x, y], fill=(255, 255, 255, 10) if False else (20, 40, 80))

# Load logo
logo = Image.open(LOGO_PATH).convert("RGBA")
# Resize logo to height 100px, preserve aspect
logo_ratio = logo.width / logo.height
logo_h = 100
logo_w = int(logo_h * logo_ratio)
logo = logo.resize((logo_w, logo_h), Image.LANCZOS)

# Paste logo top-left
img.paste(logo, (80, 90), logo)

# Eyebrow text
try:
    font_eye = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 18)
    font_h = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 84)
    font_p = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 28)
    font_meta = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 22)
except Exception:
    font_eye = ImageFont.load_default()
    font_h = ImageFont.load_default()
    font_p = ImageFont.load_default()
    font_meta = ImageFont.load_default()

# Eyebrow
eyebrow_y = 230
draw.rounded_rectangle([80, eyebrow_y, 80 + 320, eyebrow_y + 36], radius=18,
                       fill=(245, 166, 35, 30), outline=AMBER, width=1)
draw.text((94, eyebrow_y + 8), "EXCELLENCE IN COOLING SINCE 2019", fill=AMBER, font=font_eye)

# Main headline
draw.text((80, 290), "Precision cooling,", fill=WHITE, font=font_h)
draw.text((80, 380), "engineered.", fill=AMBER, font=font_h)

# Subtitle
draw.text((80, 490), "AC supply, install & service — domestic, commercial, industrial.",
          fill=(180, 195, 220), font=font_p)

# Bottom meta strip
draw.line([(80, 570), (1120, 570)], fill=(60, 90, 140), width=1)
draw.text((80, 585), "celsius-lk.vercel.app", fill=AMBER, font=font_meta)
draw.text((400, 585), "Colombo, Sri Lanka  ·  +94 777 136 560", fill=GRAY, font=font_meta)

# Save OG image
img.save(os.path.join(PUBLIC_DIR, "og-image.png"), "PNG", optimize=True)
print(f"OG image saved: {os.path.join(PUBLIC_DIR, 'og-image.png')} ({img.size})")

# ---------- Favicon (32x32 + 16x16 ico) ----------
# Use a square crop of the logo on navy background
fav_size = 256
fav = Image.new("RGBA", (fav_size, fav_size), NAVY + (255,))
# Center the logo in the square
logo_h2 = 140
logo_w2 = int(logo_h2 * (logo.width / logo.height))
logo2 = Image.open(LOGO_PATH).convert("RGBA").resize((logo_w2, logo_h2), Image.LANCZOS)
fav.paste(logo2, ((fav_size - logo_w2) // 2, (fav_size - logo_h2) // 2), logo2)

# Save as favicon.ico (multiple sizes)
fav_small = fav.resize((32, 32), Image.LANCZOS)
fav_small.save(os.path.join(PUBLIC_DIR, "favicon.ico"), format="ICO", sizes=[(32, 32), (16, 16)])
fav.resize((180, 180), Image.LANCZOS).save(os.path.join(PUBLIC_DIR, "apple-touch-icon.png"), "PNG")
fav.resize((192, 192), Image.LANCZOS).save(os.path.join(PUBLIC_DIR, "icon-192.png"), "PNG")
fav.resize((512, 512), Image.LANCZOS).save(os.path.join(PUBLIC_DIR, "icon-512.png"), "PNG")
print("Favicon + apple-touch-icon + PWA icons saved")

print("Done.")
