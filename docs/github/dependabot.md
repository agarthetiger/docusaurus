# Dependabot

Dependabot can assist with patching packages for both security updates and general package updates. It is quite configurable to allow things like a cool-down period for package updates which helps to defend against supply-chain attacks which seem to be getting more frequent. 

See <https://github.com/dependabot/dependabot-core/blob/main/.github/dependabot.yml> For Dependabot's own dependabot configuration, dog-food-ing at it's finest :D

## Version bumps

If you have a workflow for pull requests which checks the version nunmber in package.json has been incremented, you may want to also add a workflow like the one suggested at <https://github.com/orgs/community/discussions/149185#discussioncomment-11836983> to automatically bump the version so the pull request workflow can run and provide as much confidence that the package updates are as safe to include as your automated tests can confirm.
