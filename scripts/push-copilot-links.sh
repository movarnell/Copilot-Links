#!/bin/zsh
set -u

REPO_DIR="/Users/michaelvarnell/Documents/Copilot-Links"
LOG_DIR="$HOME/Library/Logs/Copilot-Links"
LOG_FILE="$LOG_DIR/auto-push.log"
LOCK_DIR="/tmp/copilot-links-auto-push.lock"

mkdir -p "$LOG_DIR"

log() {
  printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S %Z')" "$*" >> "$LOG_FILE"
}

if ! mkdir "$LOCK_DIR" 2>/dev/null; then
  log "Another push job is already running; exiting."
  exit 0
fi
trap 'rmdir "$LOCK_DIR" 2>/dev/null || true' EXIT

if [ ! -d "$REPO_DIR/.git" ]; then
  log "Repository not found at $REPO_DIR."
  exit 1
fi

cd "$REPO_DIR" || exit 1

CURRENT_BRANCH="$(git branch --show-current 2>> "$LOG_FILE")"
if [ -z "$CURRENT_BRANCH" ]; then
  log "Could not determine current branch."
  exit 1
fi

log "Starting auto-push for $REPO_DIR on branch $CURRENT_BRANCH."

git status --short --branch >> "$LOG_FILE" 2>&1

if git diff --quiet && git diff --cached --quiet; then
  log "No uncommitted changes detected."
else
  log "Uncommitted changes exist; pushing committed work only."
fi

if git push origin "$CURRENT_BRANCH" >> "$LOG_FILE" 2>&1; then
  log "Push succeeded for branch $CURRENT_BRANCH."
  git status --short --branch >> "$LOG_FILE" 2>&1
else
  EXIT_CODE=$?
  log "Push failed for branch $CURRENT_BRANCH with exit code $EXIT_CODE."
  exit "$EXIT_CODE"
fi
