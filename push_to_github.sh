#!/bin/bash

# Change to the project directory
cd "$(dirname "$0")"

# Check current status
echo "Current Git Status:"
git status

# Add all changes
echo -e "\nAdding all changes..."
git add .

# Commit changes with timestamp
echo -e "\nCommitting changes..."
git commit -m "Update on $(date +'%Y-%m-%d %H:%M:%S')"

# Push to GitHub
echo -e "\nPushing to GitHub..."
git push origin master

echo -e "\nCompleted! All changes have been pushed to GitHub."
