"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),h=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=h(n),u=o,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var h=2;h<r;h++)s[h]=n[h];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=n(7462),o=(n(7294),n(3905));const r={},s="MKDocs",a={unversionedId:"python/mkdocs",id:"python/mkdocs",title:"MKDocs",description:"This site is built with MKDocs, hosted on GitHub Pages and automatically published on commit to master from Travis CI.",source:"@site/docs/python/mkdocs.md",sourceDirName:"python",slug:"/python/mkdocs",permalink:"/docusaurus/docs/python/mkdocs",draft:!1,editUrl:"https://github.com/agarthetiger/docusaurus/tree/main/docs/python/mkdocs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Bluetooth with Python",permalink:"/docusaurus/docs/python/bluetooth"},next:{title:"Python Packages",permalink:"/docusaurus/docs/python/packages"}},l={},h=[{value:"Travis CI Enhancements",id:"travis-ci-enhancements",level:2}],c={toc:h};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mkdocs"},"MKDocs"),(0,o.kt)("p",null,"This site is built with MKDocs, hosted on GitHub Pages and automatically published on commit to master from Travis CI. "),(0,o.kt)("p",null,"Good documentation is vital for any enterprise IT team to publish shared practices or software components. To empower other teams and allow them to easily consume the output is key, in order to alleviate the publishing team from becoming yet-another-enterprise-bottleneck. MKDocs and GitHub Pages allows teams to publish documentation without having to worry about site hosting, and the documentation can be easily written in markdown. "),(0,o.kt)("h1",{id:"ci-deployments-to-github-pages-with-travis-ci"},"CI deployments to GitHub Pages with Travis-CI"),(0,o.kt)("p",null,"To publish from master onto the site served from the gh-pages branch I've used Travis CI for this open source site. I based my .travis.yml file on ",(0,o.kt)("a",{parentName:"p",href:"https://derekweitzel.com/2017/02/08/deploying-docs-on-github-with-travisci/"},"Derek Weitzel's blog post"),". As this was my first time using Travis I didn't initally understand what every line was for. A little piece of me dies whenever I see people cutting and pasting from the internet and executing code, or worse just \"curl bash piping\", especially in an enterprise organisation when they have no idea what code they are running. I've seen that happen way more times than I'd like. Anyway, here is my breakdown of the original script, followed by my enhancements. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"env:\n  global:\n  - GIT_NAME: \"'Markdown autodeploy'\"\n  - GIT_EMAIL: djw8605@gmail.com\n  - GH_REF: git@github.com:opensciencegrid/security.git\nlanguage: python\n")),(0,o.kt)("p",null,"Set some environment variables to use later in the job. Setting the language to python tells Travis CI to run this job on a docker container with python and pip pre-installed. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"before_script:\n- pip install mkdocs\n- pip install MarkdownHighlight\n")),(0,o.kt)("p",null,"This before_script phase will run prior to the (build) script section running. In the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.travis-ci.com/user/job-lifecycle"},"Job lifecycle")," Travis CI provides an install phase for installing dependencies which should be used instead. With this script there may be no practical difference between running these steps under the install or before_script phases, however I believe following the patterns intended by the tools is often an easier path to travel in the long term. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"script:\n- openssl aes-256-cbc -K $encrypted_1d262b48bc9b_key -iv $encrypted_1d262b48bc9b_iv -in deploy-key.enc -out deploy-key -d\n- chmod 600 deploy-key\n- eval `ssh-agent -s`\n- ssh-add deploy-key\n")),(0,o.kt)("p",null,"MKDocs needs to be able to commit and push to the gh-pages branch in the git repository. The openssl command decrypts the private ssh deploy key, then we limit the permissions and add the key to the running ssh agent. Restricting permissions is required otherwise ssh-add will refuse to add the overly permissive private key file. The eval statement is required to set the apropriate environment variables for the current shell instance so that you can connect to it with ssh-add.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'- git config user.name "Automatic Publish"\n- git config user.email "djw8605@gmail.com"\n- git remote add gh-token "${GH_REF}";\n- git fetch gh-token && git fetch gh-token gh-pages:gh-pages;\n')),(0,o.kt)("p",null,"These steps are required in order for mkdocs to push to the GitHub gh-pages branch. In order to understand why, we need to look at the build log which shows Travis CI running something like the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone --depth=50 --branch=master https://github.com/agarthetiger/mkdocs.git agarthetiger/mkdocs\nCloning into 'agarthetiger/mkdocs'...\n$ cd agarthetiger/mkdocs\n$ git checkout -qf cffa8d732d907f62a08262db229ee5899e2fc795\n")),(0,o.kt)("p",null,"There would be two issues with trying to run ",(0,o.kt)("inlineCode",{parentName:"p"},"mkdocs gh-deploy")," without the bulk of code in this script phase. First off, the ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-clone#git-clone---depthltdepthgt"},"--depth option on git clone implies --single-branch"),". If you add ",(0,o.kt)("inlineCode",{parentName:"p"}," git branch -r")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"git remote show origin")," as steps into the script you can see that there is apparently no gh-pages branch in the remote. This behaviour can be changed by specifying git.depth: false in .travis.yml which will cause Travis CI to drop the --depth option and the clone will then fetch all branches. This can also be changed by ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/17714159/how-do-i-undo-a-single-branch-clone"},"telling git to clone all branches")," but there is still one more issue. "),(0,o.kt)("p",null,"The other issue is that we haven't provided a GitHub token or credentials to authenticate to the https GitHub remote with, so even if we add the branch to the origin we still can't push. The clone operation works as this is a public GitHub repository. Using a deploy key and ssh is preferable because any exposure of the credentials in this case would only compromise one repository via the deploy key, rather than compromising all repositories if using a GitHub token."),(0,o.kt)("p",null,"Back to the original script, and adding a 2nd remote allows the additional branches to be cloned over ssh and also to be pushed to using the decrypted key added to the ssh agent earlier for authentication. The fetch command can be simplified from the example because the initial ",(0,o.kt)("inlineCode",{parentName:"p"},"git fetch gh-token")," fetches all branches. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'- if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then echo "Pushing to github"; PYTHONPATH=src/ mkdocs gh-deploy -v --clean --remote-name gh-token; git push gh-token gh-pages; fi;\n')),(0,o.kt)("p",null,"This line first checks to see whether the build was triggered from a Pull Request. Technically this could be avoided, because what we're doing here is building and deploying the website. We could build the site in the script phase of the .travis.yml file and then have all this ssh, git and deploy code running from the deploy phase. This is because the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.travis-ci.com/user/deployment/#pull-requests"},"deploy phase is always skipped for Pull Requests"),". The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.travis-ci.com/user/deployment/script/"},"script provider")," for deployments requires the script be defined in an external file, which is executed with bash. I've refactored this in my version, as the script example from the blog post is essentially individual bash commands in a yaml dictionary it was quick to translate into a file. Adding ",(0,o.kt)("inlineCode",{parentName:"p"},"set -e")," to the file also allows the script to fail fast and terminate on the first non-zero exit code from a command. Failing fast on error is possibly but ugly to accomplish in the .travis.yml file, requiring every line to append ",(0,o.kt)("inlineCode",{parentName:"p"},"|| travis_terminate 1")," and even this approach has ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/travis-ci/travis-ci/issues/1066#issuecomment-425757599"},"problems"),"."),(0,o.kt)("h2",{id:"travis-ci-enhancements"},"Travis CI Enhancements"),(0,o.kt)("p",null,"My yaml file looks like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'language: python\nbranches:\n  only:\n  - master\ngit:\n  depth: 1\ninstall:\n- pip install mkdocs\n- pip install mkdocs-material\nscript:\n- if [[ $TRAVIS_PULL_REQUEST == "false" ]]; then mkdocs build --strict; fi;\ndeploy: \n  skip_cleanup: true\n  provider: script\n  script: bash travis-ci/deploy-to-gh-pages.sh\n  on:\n    branch: master \n')),(0,o.kt)("p",null,"I kept the --depth option to still shallow clone the repo with a single branch for the build. Using the branches whitelist I could remove the requirement to check the branch name later in the script, and using a deploy phase meant no additional logic is required to check for pull requests or the branch in the shell script travis-ci/deploy-to-gh-pages.sh. deploy.skip_cleanup stops Travis from stashing changes in the workspace between the (build) script and deploy phases."))}p.isMDXComponent=!0}}]);