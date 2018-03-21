---
title: Product vs. Engineering? How to organize your teams to get the best out of them.
date: "2018-03-22"
layout: post
path: "/how-to-organize-teams-to-get-the-best-results/"
lang: en
draft: true
---

Today I would like to share my thoughts on how different companies structure their departments and teams. I will also show how to improve communication, collaboration, commitment and pride of work done. It might require reorganization of the structure, loosen up your micromanagement aspirations and to give your people more independence and trust in their skills.

### Function oriented teams

Traditional split of departments and teams is by role and specialization. You can still find companies with teams like Frontend, Backend, Design, Infrastructure, Systems Operations, Support, QA etc. Each of them has its own project manager and her role is to coordinate work between teams. People in this structure rarely talk with other teams directly, often push responsibility outside of their group and keep tightly to their own, narrow area of expertise. They work on tasks delegated by their non-technical managers. Project managers prepare roadmaps and specifications of features to be built, split them between teams and coordinate journey of work from team to team. Design prepares mockups without knowledge of existing frontend components, Backend is providing API endpoints to unknown user interface. Frontend is building UI according to design specifications, which never reuse existing elements. Frontend is built on mocked data as specified in a task, but they don't know if it works till Backend handover its API. When implementation is done, then it's time for QA. You know how does it always end. Tasks are reopened and it's hard to figure out which team should fix which bug. In the end sysadmins have to run all of the code on production. Without the knowledge of the app beside what was written by managers in the task. Good luck with that.

### Path to product oriented teams

Next step in a team structure evolution are product oriented teams. A team consists of a few frontend and backend developers, UX designer, devOp and product manager. They could be assisted by data analyst or people with other skills, depending of a product they are developing. This is a big step in the right direction, still, it's rarely executed properly.

First of all doing a transition from a function oriented to a product oriented team is hard. I've seen it done badly. Imagine that for many years you were told what to do. You received a task, implemented it good enough that QA won't reopen it, and you forgot. You didn't care who will work with your code in the future. You also never cared about product or features as no one expected you to think outside of your box. Now you are responsible for your product. If you write ugly code today, you will need to fix it tomorrow. Other people in your team rely on you. You finally see that there are real users on the other side. Who are happy with what you have built. Or maybe they are angry, or disappointed with your latest release.

The transformation is hard. You need to prepare your people, sell them on new responsibilities, teach them how to work as a team. They might not want to do that, or feel completely lost with new structure. If you are going through this right now, contact me. I'm happy to help.

### Pseudo-product teams

Some companies claim that they have product oriented teams but still use top-down style of management. This way they are not using the full power of their people. I will get back to it later. In those pseudo-product teams people are still treated as execution labor force, but flow of tasks is easier to manage. People with different skills cooperate more. Frontend developers agrees on API directly with backend developers. Designer is aware of UI components available inside a team, and frontend can easily ask for adjustments if design is not reasonably easy to implement. Team spirit begins to get shape.

The problem lays on management side. Instead of cooperating with a team, Product Managers think that their job is only to add more tasks to the backlog. Of course team uses one of Agile methodologies to organize work. Tickets are agreed on before a sprint starts, they are estimated etc. What is missing is a feedback loop from the team back to the product and to the manager.

People in pseudo-product teams are still not part of a product development research and feature planning phases. Engineers are not asked if a feature makes sense from technical point of view, or maybe there is an easier solution. Engineers don't understand product and users as they don't have access to any data or user feedback. From the other side managers don't understand complexity behind every new feature they want to add. They only care about their backlogs and KPIs.

In one of companies I've worked for, there was a very clear split between product and engineering. Product department was the head. They were preparing new features, defining KPIs, delegating tasks. Engineering was the hands. We were executing every idea coming from the head. You might think this is an efficient way of developing software. Engineers are not disturbed with product decision making, we can focus on delivering more and more features. We decide on all technical aspects so software should be of a good quality. There is some truth in that. Engineering was top level in that company. It was enabling product team to experiment a lot. Average technical team wouldn't have handled it.

Despite all of it I still believe we can do better. Here are some issues I've seen with that approach:

* product decides on KPI for the next quarter. In example: we want 100k more users to use certain feature per month. Very well. But if KPI is decided by Product, communicated to the team without any negotiation, then Product Managers decide how to reach the KPI, so what is the role of the rest of the team? Just implement what they are told to do. Let's think about it. If you are not personally involved on any stage of defining or achieving goals for your team... why should you care?
* software was full of forgotten experiments and feature flags. Product was running a lot of A/B tests. Tests and new features were controlled by feature flags. That is great. You cannot get your product right from the first iteration. You need to adjust it for real user needs and usage. The problem was that every experiment and temporary switch in your code has to be cleaned up. Otherwise you are just creating legacy code. Software grows bigger but big part of it is never used. Product Managers were aware of it, but not much was done about it. You cannot give too much power over software to people who don't understand software. Technical team cannot be top-down managed by non-technical people. Unless your technical team is bad. Then you shouldn't work with them anyway.
* my definition of a team in that company was: "a bunch of people sitting in the same room". Doesn't sound good, does it? But that's how I felt. Because PM delegated tasks directly to every single person, there was not much of a team spirit. Every developer worked separately on her own individual task.

### Introducing: Product Engineer

To address all issues I mentioned before I would like to introduce a role of Product Engineer. I'm sure I'm not the first to write about it, but you don't meet many of them. In most of the companies carrier development path is focused either on technical, product or management skills. It's not possible to mix them inside one role. And that is what I'm missing the most. Product Engineer is someone who understands product and business ideas behind it, who understands user needs and how to fulfill them. From the other side they are solid engineers. They not only come up with a feature idea but also implement it. Because they know the system from inside, they see way more opportunities for improvement. They introduce fixes fast, without all management overhead. They are product oriented so they tweak the UX on the way. You don't need to write them long specifications. Give them problems to solve and let them do their best.

### True product team

My advice to all engineers is to learn about product development. My advice to all project and product managers is to learn some basic of engineering. Only with skill reaching outside of your defined role you can deliver great results.

Imagine a true product team. It consists of product engineers. Some of them are better with frontend, some better with backend, some are experts in UX and some are more interested in coordination. That doesn't really matter as each of them can easily jump in other role. All of them live their product. They chat with their users every day. Time from an idea to delivery is instant. They are all fulfilled and proud of their work. They are coming to work on Monday full with energy and ideas to build this week. Their goals are the same as the company. You don't need to manage them as they created self sustained group.

Would you like to have such teams in your organization?

---

If you agree with me or not, let me know either way! You can find me on [Twitter](https://twitter.com/krzysu) or comment on [Medium]().
