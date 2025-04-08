@echo off
echo Current Git Status:
git status

echo.
echo Adding all changes...
git add .

echo.
echo Committing changes...
git commit -m "Update on %date% %time%"

echo.
echo Pushing to GitHub...
git push origin master

echo.
echo Completed! All changes have been pushed to GitHub.
pause
