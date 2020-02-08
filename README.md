# kta-19e_tund1

tund1 stuff!

## tools required
 
 * https://nodejs.org/en/download/
 * https://git-scm.com/downloads
 * https://code.visualstudio.com/ 

## testing framework

 * https://jestjs.io/docs/en/getting-started

##  git commands

```bash
# set your name/email in git
git config --global user.name "John Doe"
git config --global user.email "johndoe@example.com"

# use vs code as default editor
git config --global core.editor "code --wait"
```

  * nice git UI -> https://www.sourcetreeapp.com/

# git remote hard reset

```sh
# list git repo remotes
git remote -v

# add new remote
# name=ops
# location=https://github.com/eritikass/kta-19e_tund1.git
git remote add ops https://github.com/eritikass/kta-19e_tund1.git

## each time you want to reset

# fetch info from ops remote
git fetch ops

# reset local to ops remote master branch 
git reset --hard ops/master
```