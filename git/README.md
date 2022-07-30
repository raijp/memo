# If you don't want to enter username and password for every push, Run :
```
# You can also get rid of the 'cache --timeout 7200'
git config --global credential.helper store 'cache --timeout 7200'
```
# Add & Commit & Push
```
git add . && git commit -m "<message>" &&  git push 
```
# Push to a branch
```
git push origin <branch>
```
# Delete a branch
```
git push --remove origin <branch>
```
# Show all branch
```
git branch -a
```
# Switch a branch
```
git checkout <branch>
```
# Create a branch then push
```
git checkout -b <branch>
git push --set-upstream <branch>
```
# Show tags
```
git tag
```
# Add a tag
```
git tag <tag>
# If you want to add a message, run:
git tag -a <tag> -m <message>
```
# Push a tag
```
git push origin <tag>
```
# Delete a local tag
```
git tag -d <tag>
```
# Delete a remote tag
```
git push --delete origin <tag>
```
# Show logs
```
git log
# oneline
git log --oneline
```
# Revert to an HEAD
```
git reset --hard <HEAD>
# Of course, you can specify a directory or file path.
# Basically, the following command is recommended for undoing, as it will be logged.
git checkout <HEAD> <Path>
```
# How to add an empty directory
```
mkdir tmp
touch tmp/.gitignore
git add tmp
echo '*' > tmp/.gitignore
git commit -m 'Empty directory' tmp
```
