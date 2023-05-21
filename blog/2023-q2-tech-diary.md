---
slug: 2023-q2-tech-diary
title: Q2 2023 Tech diary
authors: agar
tags: [tech]
---

Thoughts from Q2 2023. 

# Backstage.io 

I've been investigating [backstage.io](https://backstage.io/), both self-hosted on AWS and via a SaaS solution like [roadie.io](https://roadie.io/). Long story short, the deployment and configuration of backstage is far from trivial. There is an initial amount of knowledge required in order to set it up even vaguely for production. The documentation is ok to get you started, but has a long way to go. Getting running locally is painless, but the next step to deploy and configure as production is much more involved and the documentation is not clear. Depending on your IT policy, access to the backstage community on Discord may or may not be accessible. 

Things you have to do yourself with Backstage include configuring an authentication provider, which doesn't stop users logging in, that's another thing you have to do. Creating roles and a permissions policy is another thing you have to do from scratch. Spotify have a plugin bundle in beta which will be a paid-for offering, one of the things they have is RBAC and GUI configuration. I'd rather it was IaC, but there is also value in providing a simple interface for user management too. 

# Productivity is an outcome, not a goal

Research like [this](https://queue.acm.org/detail.cfm?id=3595878) may be using the term `productivity` to get the attention of the c-suite, but the human factor matters more. Developer experience, and enablement is the goal for me. The [happiness advantage](https://www.ted.com/talks/shawn_achor_the_happy_secret_to_better_work) is real. I'm reminded of the Inner game of tennis again, why do we work? Is it mastery, as suggested in Drive by Daniel Pink? 
