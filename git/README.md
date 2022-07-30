# If you don't want to input username and password for every push, Run :
```
# You can also get rid of the 'cache --timeout 7200'
git config --global credential.helper store 'cache --timeout 7200'
```
# Add & Commit & Push
```
git add . && git commit -m "<message>" &&  git push 
```
# Show all branch
```
git branch -a
```
# Switch a branch
```
git checkout <branch>
```
# Switch create a branch & push
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
# Back to the specific HEAD
```
git reset --hard <HEAD>
```
