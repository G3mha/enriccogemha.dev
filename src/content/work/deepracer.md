---
title: AWS DeepRacer
summary: A reinforcement learning model for autonomous racing that placed 13th of 5,200 submissions.
status: archived
period: "2022"
role: Sole author.
featured: false
order: 10
stack:
  - Python
  - Reinforcement learning
  - AWS
img: /assets/aws-deepracer.jpg
img_alt: An AWS DeepRacer model car on a curved section of the competition track
---

13th out of 5,200 models in the 2022 season, awarded by AWS for reward-function and hyperparameter work.

Nearly all of the result came from the reward function rather than the model. The default reward pays the car for staying near the centre line, which produces a car that drives slowly and safely and loses. Paying instead for speed held through a corner exit, with a penalty curve steep enough to keep it on the track, produces a lap that is quicker and much more prone to failure. Most of the season was spent finding where between those two a model still finishes.
