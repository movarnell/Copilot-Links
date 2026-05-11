#!/bin/zsh
set -eu

REPO_DIR="/Users/michaelvarnell/Documents/Copilot-Links"
LABEL="com.michaelvarnell.copilot-links-auto-push"
SOURCE_PLIST="$REPO_DIR/launchd/$LABEL.plist"
TARGET_PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"

mkdir -p "$HOME/Library/LaunchAgents" "$HOME/Library/Logs/Copilot-Links"
chmod +x "$REPO_DIR/scripts/push-copilot-links.sh"
cp "$SOURCE_PLIST" "$TARGET_PLIST"

launchctl bootout "gui/$(id -u)" "$TARGET_PLIST" 2>/dev/null || true
launchctl bootstrap "gui/$(id -u)" "$TARGET_PLIST"
launchctl enable "gui/$(id -u)/$LABEL"

echo "Installed $LABEL"
echo "Runs daily at 8:10 AM and 3:20 PM local time."
echo "Push log: $HOME/Library/Logs/Copilot-Links/auto-push.log"
