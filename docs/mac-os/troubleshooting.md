# Troubleshooting issues on Mac OS

## Yarn

Symptom: Running any yarn command yields the following error.

``` bash
$ yarn --version
env: node: No such file or directory
```

Problem: Not sure, Stack Overflow indicates this could be a node package installed with Windows line endings, but I don't see how this could have happened. Running nvm or npm seems fine. 

I suspect this is linked to installing yarn with homebrew when a different node version was active via nvm, and now some path in yarn to where node lives has changed. I've had this with brew installed tools based on python and also brew installing python. When python gets updated via brew, the path to python changes and other tools, virtual environments etc all break. This is why I use pipx and don't rely on brew for anything related to python anymore, especially for python itself.

Solution: Run the following commands to relink yarn.

```bash
$ brew link --overwrite yarn
Warning: Already linked: /opt/homebrew/Cellar/yarn/1.22.19
To relink, run:
  brew unlink yarn && brew link yarn

$ brew unlink yarn && brew link yarn
Unlinking /opt/homebrew/Cellar/yarn/1.22.19... 2 symlinks removed.
Linking /opt/homebrew/Cellar/yarn/1.22.19... 2 symlinks created.

$ which yarn
/opt/homebrew/bin/yarn

$ yarn -h
# Normal yarn operation resumes here...
```

Follow ups: 

* See whether switching node versions via nvm breaks yarn...

