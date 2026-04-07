"""Redirect shim — Streamlit Cloud entry point.

The app was reorganised to learningmaterials/IE105000_1_globalSCM/.
This file re-executes the real leaderboard.py from that location so
all Path(__file__).parent references resolve correctly.
"""
import os, sys
from pathlib import Path

_target = Path(__file__).parent.parent / "IE105000_1_globalSCM"
os.chdir(_target)
sys.path.insert(0, str(_target))

_src = (_target / "leaderboard.py").read_text(encoding="utf-8")
exec(compile(_src, str(_target / "leaderboard.py"), "exec"),
     {"__file__": str(_target / "leaderboard.py"), "__name__": "__main__"})
