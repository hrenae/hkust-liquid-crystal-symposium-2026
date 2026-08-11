from __future__ import annotations

from base64 import b64encode
from pathlib import Path
import mimetypes
import re

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
CSS = ROOT / "styles.css"
JS = ROOT / "script.js"
OUTPUT = ROOT / "hkust_liquid_crystal_symposium_standalone.html"


def data_uri(relative_path: str) -> str:
    path = ROOT / relative_path
    mime, _ = mimetypes.guess_type(path.name)
    if path.suffix.lower() == ".svg":
        mime = "image/svg+xml"
    elif path.suffix.lower() == ".webp":
        mime = "image/webp"
    if not mime:
        raise ValueError(f"Unknown MIME type for {relative_path}")
    encoded = b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{encoded}"


html = INDEX.read_text(encoding="utf-8")
css = CSS.read_text(encoding="utf-8")
javascript = JS.read_text(encoding="utf-8")

asset_paths = sorted(set(re.findall(r"assets/[A-Za-z0-9_./-]+", html)), key=len, reverse=True)
for asset_path in asset_paths:
    html = html.replace(asset_path, data_uri(asset_path))

stylesheet_tag = '  <link rel="stylesheet" href="styles.css" />'
script_tag = '  <script src="script.js"></script>'
if stylesheet_tag not in html or script_tag not in html:
    raise RuntimeError("Expected stylesheet or script tag was not found in index.html")

html = html.replace(stylesheet_tag, f"  <style>\n{css}\n  </style>")
html = html.replace(script_tag, f"  <script>\n{javascript}\n  </script>")
html = html.replace("<!doctype html>", "<!doctype html>\n<!-- Generated from index.html, styles.css, script.js and production assets. -->", 1)

OUTPUT.write_text(html, encoding="utf-8", newline="\n")
print(f"Generated {OUTPUT} ({OUTPUT.stat().st_size:,} bytes; {len(asset_paths)} embedded assets)")
