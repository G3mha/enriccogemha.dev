---
title: AWS DeepRacer
summary: A reinforcement learning model for autonomous racing that placed 37th of about 3,940 racers in AWS’s October 2022 Open qualifier.
status: archived
period: "2022"
role: Leader of Insper Dynamics’ DeepRacer team.
featured: false
logos: [deepracer]
order: 10
links:
  - label: Final standings (community archive of AWS’s leaderboard)
    href: https://github.com/aws-deepracer-community/deepracer-race-data/blob/a2cdeadf8b011769110bfece186c28f838355977/raw_data/leaderboards/arn:aws:deepracer:::leaderboard/3cd3f5fa-a1e8-434a-a099-e15ba5b426c4/FINAL.csv
stack:
  - Python
  - Reinforcement learning
  - AWS
img: /assets/aws-deepracer.jpg
img_alt: A rendered AWS DeepRacer car on a purple background, next to the AWS DeepRacer League logo
---

37th of about 3,940 racers in the October 2022 Open qualifier, under the name G3mha. That's the top 1%.

Nearly all of the result came from the reward function rather than the model. The default reward pays the car for staying near the centre line, which produces a car that drives slowly and safely and loses. Paying instead for speed held through a corner exit, with a penalty curve steep enough to keep it on the track, produces a lap that's quicker and much more prone to failure. Most of the 2022 season was spent finding where between those two a model still finishes.
