# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Ilias Merigh | 330316 |
| Zhuofu Zhou | 370337|
| | |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (29th March, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset

For this project, we will be utilizing a comprehensive football player dataset from the FIFA console game, which is available at the following link: [https://www.kaggle.com/datasets/stefanoleone992/fifa-23-complete-player-dataset](https://www.kaggle.com/datasets/stefanoleone992/fifa-23-complete-player-dataset). 

This dataset encompasses 9 years of data, ranging from FIFA 15 to FIFA 23, and is divided into six sub-datasets totaling 5GB:

- `female_coaches.csv`
- `female_players.csv`
- `female_teams.csv`
- `male_coaches.csv`
- `male_players.csv`
- `male_teams.csv`

Our primary focus is the `male_players` sub-dataset, which features detailed information on football players. It contains more than 110 attributes per player, including name, club, nationality, overall rating, specific skill statistics, and more. Across all the years covered, this dataset includes nearly 60K different players, amounting to a total of 10M entries.

Additionally, the `male_teams` complementary dataset encompasses over 1,000 different teams, documenting all the teams in the game. The team IDs in this dataset match those in the `male_players` dataset, facilitating data merging operations without any loss of information.

The main dataset, `male_players`, boasts nearly 110 attributes, but we intend to use only a dozen that are of particular interest to us. The datasets are dense, with a minimal presence of missing values for the attributes of interest, and are rich with entries. Therefore, given the data's precision and comprehensiveness, no preprocessing or cleaning is necessary. 

Although our study primarily focuses on male football players, we do not rule out the possibility of extending our findings to female players in the future. Despite the female datasets being 10 times smaller than their male counterparts, they still contain a significant amount of data.

Finally, as football enthusiasts and fans of the FIFA game, we have verified the reliability of the data on a sample basis.


### Problematic

> Frame the general topic of your visualization and the main axis that you want to develop.
> - What am I trying to show with my visualization?
> - Think of an overview for the project, your motivation, and the target audience.

### Exploratory Data Analysis

> Pre-processing of the data set you chose
> - Show some basic statistics and get insights about the data

In the part, we're going to conduct the explanatory data analysis on the main dataset, which describe the full information of the players in different versions of fifa game. 

First we would like to give a brief statistical visualization on the overall score of the players in every fifa version, and compare the distribution with the normal distribution data on the same mean and volatility. The figure is shown below.


![The distribution of overall score](/figure/FIFA_score_distribution.png)

Easy to see that in almost all the fifa versions, the distribution of the overall score of the players are similar to a normal distribution. In this case, we can use this statistical character to identify the difference between average players and 'exceptional' players. 

Then we define the threadhold to categorize the skills of one player based on his or her overall score as "world-top player", "top player", "great player", "above-average player", "below-average player", "bad player". The threadshold is based on the assumption of the normal distribution of the overall score.

Then we take Kylian Mbappé and Luis Suárez as examples, to give us a glimpse on the career trajectories from the top football players in different period of their careers.

![Kylian Mbappé's career trajectory](/figure/mbappe.jpg)

From the evolvement of Kylian Mbappe, we can see that how does a top-tier football player's career rise from an average player. We also notice that as the skill class improve, he has transferred from Monaco to Paris Saint Germain --one of the best football teams in the world. Here he has obtained significant improvement on his overall score. 

![Luis Suárez's career trajectory](/figure/Suarez.jpg)

Then we also look into another counterpart example, the "El Pistolero"  Luis Suárez. He has been classified as a world-top player dyring his service in FC Barcelona, but as his age grows, his football skills have gradually decreased after his transfer to Atlético Madrid, before he decided to play for Nacional in US football league. In this two examples, we have seen how a rising star and a former gold striker plan his own career. From here, we try to find out in general how those players plan their own careers by moving among the top football teams.

After that, we explore the most improved players in this 8-year frame.

![Most improved players in overall score](/figure/Most_improved_players.png)

We can see only 3 players actually got the hugest leap in his 8-year football career, marking the most impressive improvement in the transfer market, namely M. Maignan, F. de Jong and T. Alexander-Arnold. In this 8 years, these 3 players actually rise from an below-average player to a world-top player. Along with other players who has class change, we are determine that it is feasible to focus on the these class change of these players, to show how does these players plan their career, and how those high-potential players are transferred in those elite football teams.

### Related work

###### Fiability of the data:

Although our data is derived from the FIFA game, our aim is to investigate real-world football phenomena. As demonstrated in [this behind-the-scenes video](https://www.youtube.com/watch?v=yCR6STInuqk&t=131s), player statistics are measured using sensors. Therefore, it can be asserted that the player statistics in the game are representative of reality, which lends credibility to our project. 

###### What others have already done with the data:

As seen on the [Kaggle page for this dataset](https://www.kaggle.com/datasets/stefanoleone992/fifa-23-complete-player-dataset/code), and on pages for previous versions like [this one up to FIFA 22](https://www.kaggle.com/datasets/stefanoleone992/fifa-22-complete-player-dataset/code), several projects have utilized this dataset. However, the vast majority of them focus on machine learning models for predicting player attributes. This makes existing projects different from ours, which is centered on visualization.

###### Why is our approach original:

The uniqueness of our project can be summarized in two key points:

- Utilizing **game data** to address questions about professional football in the **real world**.
- Employing datasets **from each version** of the game over a continuous nine-year period to analyze trends **over time**.

###### Source of inspiration for visualization:

- The datasets have been scrapped from the [SoFIFA](https://sofifa.com/) website. Naturally, this site served as our inspiration. However, our aim is to investigate real-world football phenomena, setting our project apart from the game-centric purpose of the source site.

- In [this Macro Polo project](https://macropolo.org/digital-projects/the-global-ai-talent-tracker/), there's an exceptional visualization graph depicting the career trajectories of leading AI researchers. This visualization can similarly highlight the transfer paths of improved players, providing the audience with a comprehensive overview of their career trajectories and transfers between clubs.

---

No member of the group has previously worked on a similar project. Therefore, the topic we are exploring is completely new to all group members.


## Milestone 2 (26th April, 5pm)

**10% of the final grade**


## Milestone 3 (31st May, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

