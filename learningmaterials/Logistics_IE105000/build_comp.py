"""
Run this script after editing game.js / style.css / config.js to
rebuild _comp/index.html (the pre-inlined component served by Streamlit).

Usage:
    python build_comp.py
"""
from pathlib import Path

src = Path(__file__).parent
out = src / "_comp" / "index.html"
out.parent.mkdir(exist_ok=True)

html = (src / "index.html").read_text(encoding="utf-8")
html = html.replace(
    '<link rel="stylesheet" href="style.css" />',
    "<style>" + (src / "style.css").read_text(encoding="utf-8") + "\nbody{height:680px!important;}</style>",
)
html = html.replace(
    '<script src="config.js"></script>',
    "<script>" + (src / "config.js").read_text(encoding="utf-8") + "</script>",
)
html = html.replace(
    '<script src="game.js"></script>',
    "<script>" + (src / "game.js").read_text(encoding="utf-8") + "</script>",
)
out.write_text(html, encoding="utf-8")
print(f"Built {out}  ({len(html):,} bytes)")
