"""db.py — Google Sheets leaderboard for IE105000 Global Logistics Game.

Worksheet: "IE105000_1"

Streamlit secrets (.streamlit/secrets.toml):
    [gcp_service_account]
    type = "service_account"
    ...

    [sheet]
    id = "YOUR_GOOGLE_SHEET_ID"
"""
from __future__ import annotations
import json
from datetime import datetime, timezone

import gspread
import streamlit as st
from google.oauth2.service_account import Credentials

SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]
SHEET_NAME = "IE105000_1"

HEADERS = [
    "id", "submit_id", "student_id", "name",
    "profit", "units", "chain", "submitted_at",
]


@st.cache_resource
def _get_spreadsheet():
    if "gcp_json" in st.secrets:
        creds_info = json.loads(st.secrets["gcp_json"])
    else:
        creds_info = dict(st.secrets["gcp_service_account"])
    creds = Credentials.from_service_account_info(creds_info, scopes=SCOPES)
    client = gspread.authorize(creds)
    return client.open_by_key(st.secrets["sheet"]["id"])


def _ws():
    return _get_spreadsheet().worksheet(SHEET_NAME)


def init_db():
    sh = _get_spreadsheet()
    existing = [w.title for w in sh.worksheets()]
    if SHEET_NAME not in existing:
        ws = sh.add_worksheet(SHEET_NAME, rows=2000, cols=len(HEADERS))
        ws.append_row(HEADERS, value_input_option="RAW")
    else:
        ws = sh.worksheet(SHEET_NAME)
        if not ws.row_values(1):
            ws.append_row(HEADERS, value_input_option="RAW")


def _all_rows() -> list[dict]:
    return _ws().get_all_records()


def _next_id(rows: list[dict]) -> int:
    if not rows:
        return 1
    return max(int(r["id"]) for r in rows if str(r.get("id", "")).isdigit()) + 1


def has_submit_id(submit_id: str) -> bool:
    if not submit_id:
        return False
    rows = _all_rows()
    return any(str(r.get("submit_id", "")) == submit_id for r in rows)


def get_scores() -> list[dict]:
    """Return all rows sorted by profit DESC."""
    rows = _all_rows()
    rows_sorted = sorted(rows, key=lambda r: -int(r.get("profit", 0)))
    return rows_sorted


def upsert_score(name: str, profit: int, units: int, chain: str,
                 student_id: str = "", submit_id: str = "") -> None:
    if submit_id and has_submit_id(submit_id):
        return

    ws = _ws()
    rows = _all_rows()

    # If same student_id exists, update that row
    if student_id:
        all_vals = ws.get_all_values()  # includes header
        for sheet_row_idx, row in enumerate(all_vals[1:], start=2):
            if len(row) >= 3 and str(row[2]).strip() == student_id.strip():
                now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S")
                ws.update(f"A{sheet_row_idx}:H{sheet_row_idx}", [[
                    row[0], submit_id, student_id.strip(),
                    name.strip(), int(profit), int(units),
                    chain.strip(), now,
                ]], value_input_option="RAW")
                return

    # New row
    new_id = _next_id(rows)
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S")
    ws.append_row([
        new_id, submit_id, student_id.strip(),
        name.strip(), int(profit), int(units),
        chain.strip(), now,
    ], value_input_option="RAW")


def add_score(name: str, profit: int, units: int, chain: str,
              student_id: str = "", submit_id: str = "") -> None:
    upsert_score(name, profit, units, chain, student_id, submit_id)


def delete_score(row_id: int) -> None:
    ws = _ws()
    all_vals = ws.get_all_values()
    for sheet_row_idx, row in enumerate(all_vals[1:], start=2):
        if row and str(row[0]) == str(row_id):
            ws.delete_rows(sheet_row_idx)
            return


def update_score(row_id: int, name: str, profit: int, units: int, chain: str) -> None:
    ws = _ws()
    all_vals = ws.get_all_values()
    for sheet_row_idx, row in enumerate(all_vals[1:], start=2):
        if row and str(row[0]) == str(row_id):
            ws.update(f"D{sheet_row_idx}:G{sheet_row_idx}", [[
                name.strip(), int(profit), int(units), chain.strip()
            ]], value_input_option="RAW")
            return


def delete_all() -> None:
    ws = _ws()
    all_vals = ws.get_all_values()
    if len(all_vals) > 1:
        ws.delete_rows(2, len(all_vals))
