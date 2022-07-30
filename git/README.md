# If you don't want to input username and password for every push, Run :
```
# You can also get rid of the 'cache --timeout 7200'
git config --global credential.helper store 'cache --timeout 7200'
```
# Add & Commit & Push
```
git add . && git commit -m "<message>" &&  git push 
```
# See branch all
```
git branch -a
```
# Switch branch
```
git checkout <branch>
```
# Show tags
```
git tag
```
# Add tag
```
git tag <tagname>
# If you want to add a message, run:
git tag -a <tagname> -m <message>
```
# Push tag
```
git push origin <tagname>
```
# Delete a local tag.
```
git tag -d <tagname>
```
# Delete a remote tag.
```
git push --delete origin <tagname>
```
