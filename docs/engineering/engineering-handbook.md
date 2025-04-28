# Engineering Handbook

Companies build the machines. Engineers build the machines which build the machine. The company succeeds if the machine is successful. The engineers succeed if their life is happy.

Ideas from the [GitLab Handbook](https://handbook.gitlab.com/handbook/values/iteration-examples/spacex/)

## Onboarding levels

* Level 1 - How do we survive here?
    Basics, logging on, installing software, getting setup, lunch, holidays, timesheets, booking time off, benefits, pay and pension, etc.
* Level 2 - How do we operate?
    How do things get delivered, where does the work come from, what needs to be done, how do we do it, how do we deliver it downstream to our customers, how do we get feedback, what teams do I interface with, how do I contact them, who do I need to know, what do I need to know?
* Level 3 - How do I get my ideas done?
    What needs to happen to take my idea round the loop of getting something committed, in progress, delivered, feedback and iterate?
* Level 4 - How do I change the way we operate?
    Who are the decision-makers, what information would they need to make a decision which changes how we work?

Level 1 - Worthless. If I can't get help on this fundamental level I am being fundamentally mis-treated. Some teams operate to provide services entirely at this level. The impact of what they do and how they do it should not be underestimated. It can undermine the higher levels.
Level 2 - Cog. I am a cog in a machine, a potentially crucial but ultimately replaceable part. I have a clear function but no part to play in the organisation or value outsie of this limited function. 
Level 3 - Valued. I feel valued for my individual contribution, my ideas matter, people listen to me and I can get things done. It is worthwhile to enagage with this company.
Level 4 - Empowered. I can make things better for everyone. I can change the system and not be beaten by it. 

These levels should not be sequential although they often are, and often stop before getting to level 3.
Chris Hadfield had a dream from childhood of being an astronaut, yet he didn't feel complete even after he went to space fo rthe first time, as he felt he hadn't contributed (from An astronaut's guide to life on earth, Pre-launch, The trip takes a lifetime). 

## Core principles

* Psychological Safety, above ALL else.

## THINK

Think before you speak.

* T - is it True?
* H - is it Helpful?
* I - is it Inspiring?
* N - is it Necessary?
* K - is it Kind?

## Fix the next one

Don't start off trying to fix everything, or change things in flight. Build the machine that builds the machine, aim to fix the next one. 

## Solve the generic problem

Resolving a specific problem or bug is mostly worthless, if the same class of problem will come up again. From experience at Rapha, fixing individual orders was far less important than resolving the underlying cause. Back in the day I would often forget my access pass when going to work. Resolving the issue wasn't about going to reception to get a temporary pass, it was about working out a system whereby I would not forget my access pass again. I made a habit of putting my pass in my work shoes whenever I got home, and I never forgot my pass again.    

This is closely related to the principle of staying on top of tech debt as a routine process, and optimising for the mid to long term. 
This is a counter to the anti-pattern of low hanging fruit, which may be easy but are they necessarily valuable? 

## Document appropriately

Don't make engineers think about documentation more than necessary. Create templates for key doc types, which lead the author to creating useful content. Define a structure or tagging mechanism, so that any docs which need to be updated are easy to find. If it's not worth the time to keep any given document up-to-date, don't write it in the first place.

See <https://www.writethedocs.org/videos/eu/2017/the-four-kinds-of-documentation-and-why-you-need-to-understand-what-they-are-daniele-procida/>

## Batch size

There is a limit to any process, where at it's most efficient it has a maximum throughput. Always seek out ways to lower the cost of delivering valuable changes quickly, or "better software, faster" as Dave Farley puts it. No-one will complain about a build on a commit taking an hour or more when the cost of getting two code reviews and an external review takes two weeks. 

## Pull the Andon cord

Please, please, please, pull the cord. It must be safe. It must be explicitly and repeatedly communicated in advance and by experience that pulling the cord is the not only ok but encouraged. It only takes one incident, one bad experience where someone is put in their place for doing something, that they will never do it again (at the same company). The cost of losing someone's trust in the safely of their environmnet is unaccptably high.  

## 5 levels of delegation

* `Level 1: Do as I say.` This means to do exactly what I have asked you to do. Don’t deviate from my instructions. I have already researched the options and determined what I want you to do.
* `Level 2: Research and report.` This means to research the topic, gather information, and report what you discover. We will discuss it, and then I will make the decision and tell you what I want you to do.
* `Level 3: Research and recommend.` This means to research the topic, outline the options, and bring your best recommendation. Give me the pros and cons of each option, then tell me what you think we should do. If I agree with your decision, I will authorize you to move forward.
* `Level 4: Decide and inform.` This means to make a decision and then tell me what you did. I trust you to do the research, make the best decision you can, and then keep me in the loop. I don’t want to be surprised by someone else.
* `Level 5: Act independently.` This means to make whatever decision you think is best. No need to report back. I trust you completely. I know you will follow through. You have my full support.

## Engineering Levels

Not an exhaustive list, more like general characteristics. Engineers should typically perform most activities at the right level.

### Junior Engineer

None of these are criticisms of junior engineers per say, everyone starts somewhere. This list is more driven by my experience with mid and seniors who do these things when they should know better.

* Needs to be shown what to do.
* Complains about security.
* Blocks tickets instead of following them up.
* Does not create documentation.
* Does not create diagrams.
* Scripts functionality instead of learning how to use tools
* Unfamiliar with branching strategies.
* Leaves hanging branches in repositories.
* No opinions on how things should be done.
* Does not contribute to team discussions.
* Requires significant assistance with troubleshooting tasks.
* No knowledge or experience with any scripting languages or development tools.

### Mid level Engineer

The inverse of the things a junior doesn't/won't/can't do, plus:

* Will pro-actively learn. Self-starter.
* Owns tickets through to Done.
* Creates good documentation.
* Updates content created by others, demonstrating awareness of what is and isn;t correct. Owns it.
* Engages with other teams. Volunteers to own issues.
* Writes good code to fill in gaps in automation.
* Creates secure infrastructure.
* Understands H/A, DR, scalability, cost, resilience, 5 well architected pillars, etc.
* Good understanding of IaC tools.
* Confident in asking for help or saying they don't understand something.

### Senior Engineer

All of the Mid level points, plus:

* Can and does teach others.
* Can architect solutions with diagrams and documentation.
* Pro-actively takes on and fixes problems.
* Creates templates for others to use and follow.
* Identifies and follows up on organisational issues and things outside of their immediate team's domain.
* Engages with senior management and other teams. Develpos relationships and contacts.
* Writes frameworks to simplify coding for others. 
* Lowers overall cognitive load.
* Implements secure patterns for others to follow. 
* Creates TF/CDK modules, python/node/ts packages, GitHub Actions, etc.

