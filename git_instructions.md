# GitHub Instructions

## Push Today's Changes to GitHub

To push all your changes to GitHub, you can execute the script I created:

1. Open a terminal (Command Prompt, PowerShell, or Git Bash)
2. Navigate to your project folder:
   ```
   cd C:\Users\ruoxi\Desktop\Becoming
   ```
3. Run the script:
   - If using Git Bash:
     ```
     ./push_to_github.sh
     ```
   - If using PowerShell:
     ```
     bash push_to_github.sh
     ```
   - If using Command Prompt:
     ```
     bash push_to_github.sh
     ```

## Common Git Commands

Here are some useful Git commands for reference:

### Basic Commands
- `git status` - Check the status of your repository
- `git add .` - Add all changes to staging
- `git commit -m "Your message here"` - Commit staged changes with a message
- `git push origin master` - Push commits to the GitHub repository

### Branch Commands
- `git branch` - List all local branches
- `git branch -r` - List all remote branches
- `git checkout -b branch-name` - Create and switch to a new branch
- `git checkout branch-name` - Switch to an existing branch
- `git merge branch-name` - Merge a branch into your current branch

### Remote Repository Commands
- `git remote -v` - View all remote repositories
- `git pull origin master` - Pull changes from the GitHub repository
- `git fetch` - Fetch changes from the remote without merging

### Other Useful Commands
- `git log` - View commit history
- `git diff` - View changes between commits, commit and working tree, etc.
- `git reset --hard HEAD` - Discard all local changes and reset to last commit (use with caution)
- `git stash` - Temporarily store changes that are not ready to be committed
- `git stash pop` - Apply the most recently stashed changes

## Troubleshooting

If you encounter authentication issues, you might need to:
1. Use a Personal Access Token (PAT) instead of a password
2. Set up SSH keys for GitHub
3. Use GitHub CLI or GitHub Desktop for easier authentication

For more help, visit the [GitHub documentation](https://docs.github.com/en/get-started/using-git/about-git).
