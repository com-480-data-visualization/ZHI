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

###### Dataset Content:

For this project, we will be utilizing a comprehensive football player dataset from the FIFA console game, which is available at the following link: [https://www.kaggle.com/datasets/stefanoleone992/fifa-23-complete-player-dataset](https://www.kaggle.com/datasets/stefanoleone992/fifa-23-complete-player-dataset). All data have been scrapped from the [SoFIFA](https://sofifa.com/) website.

This dataset encompasses 9 years of data, ranging from FIFA 15 to FIFA 23, and is divided into six sub-datasets totaling 5GB:

- `female_coaches.csv`
- `female_players.csv`
- `female_teams.csv`
- `male_coaches.csv`
- `male_players.csv`
- `male_teams.csv`

Our primary focus is the `male_players` sub-dataset, which features detailed information on football players. Across all the years covered, this dataset includes nearly 60K different players, amounting to a total of 10M entries. It contains 110 attributes per player, but we will specifically concentrate on a select dozen that are most relevant to our analysis. This includes the player's name, team, country, overall score, and more.

Additionally, the `male_teams` complementary dataset encompasses over 1,000 different teams, documenting all the teams in the game. The team IDs in this dataset match those in the `male_players` dataset, facilitating data merging operations without any loss of information.

###### Data Cleaning and Preprocessing:

The datasets are dense and accurate, with minimal missing values for the chosen attributes, and includes URLs for players' faces. However, it lacks direct links to team logos, offering instead a pointer to each team's SoFIFA page. Given its precision and the minimal need for preprocessing, our main challenge for effective visualization will be to find a way to retrieve team logos from the provided URLs.

Although our study primarily focuses on male football players, we do not rule out the possibility of extending our findings to female players in the future. Despite the female datasets being 10 times smaller than their male counterparts, they still contain a significant amount of data.

Finally, as football enthusiasts and fans of the FIFA game, we have verified the reliability of the data on a sample basis.


### Problematic

> Frame the general topic of your visualization and the main axis that you want to develop.
> - What am I trying to show with my visualization?
> - Think of an overview for the project, your motivation, and the target audience.

### Exploratory Data Analysis


First, we would like to present a brief statistical visualization of the overall scores of players in each FIFA version and compare the distribution with normal distribution data of the same mean and volatility. The figure is shown below.


![The distribution of overall score](/figure/FIFA_score_distribution.png)

It is evident that in almost all FIFA versions, the distribution of players' overall scores resembles a normal distribution. This statistical characteristic allows us to differentiate between players of varying levels.

For this purpose, we define thresholds to categorize a player's skill level based on his overall score into six categories: _"world-top player"_, _"top player"_, _"great player"_, _"above-average player"_, _"below-average player"_, and _"bad player"_. These thresholds are based on the assumption of a normal distribution for the overall scores.

Let's consider Kylian Mbappé and Luis Suárez as examples to provide insight into the career trajectories of top football players at different stages of their careers.

![Kylian Mbappé's career trajectory](/figure/mbappe.jpg)

Observing Kylian Mbappé's development, we see that with the improvement in his skill level, he transferred from Monaco to Paris Saint-Germain, one of the world's premier football teams. At Paris Saint-Germain, he achieved significant improvement in his overall score.

![Luis Suárez's career trajectory](/figure/Suarez.jpg)

We also examine another contrasting example, Luis Suárez. Classified as a world-top player during his time at FC Barcelona, his football skills have gradually declined with age, especially after his transfer to Atlético Madrid, and even more so when he chose to play for Nacional in the Uruguayan football league. These two examples showcase the career trajectories of a young rising star and a former top striker, illustrating how they navigate their careers by moving among top football teams. From this, we aim to generally understand how players plan their careers through transitions between leading football clubs.

Following this, we investigate the most improved players in our dataset over this nine-year period.

![Most improved players in overall score](/figure/Most_improved_players.png)

We observe that only three players have made the most significant leaps in their nine-year football careers, marking the most impressive improvements in the transfer market. These players are M. Maignan, F. de Jong, and T. Alexander-Arnold. Over these nine years, these three individuals rose from below-average players to world-top players. Along with other players who have experienced changes in their skill level, we will attempt to visualize the dynamic interaction between a football player's performance level and the team they play for throughout their career.

### Related work

###### Reliability of the Statistics:

Although our data is derived from the FIFA game, our aim is to investigate real-world football phenomena. As demonstrated in [this behind-the-scenes video](https://www.youtube.com/watch?v=yCR6STInuqk&t=131s), player statistics are measured using sensors. Therefore, it can be asserted that the player statistics in the game are representative of reality, which lends credibility to our project. 

###### What Others Have Already Done with the Data:

As seen on the [Kaggle page for this dataset](https://www.kaggle.com/datasets/stefanoleone992/fifa-23-complete-player-dataset/code), and on pages for previous versions like [this one up to FIFA 22](https://www.kaggle.com/datasets/stefanoleone992/fifa-22-complete-player-dataset/code), several projects have utilized this dataset. However, the vast majority of them focus on machine learning models for predicting player attributes. This makes existing projects different from ours, which is centered on visualization.

###### Why Our Approach Is Original:

The uniqueness of our project can be summarized in two key points:

- Utilizing **game data** to address questions about professional football in the **real world**.
- Employing datasets **from each version** of the game over a continuous nine-year period to analyze trends **over time**.

###### Source of Inspiration for Visualization:

- As said previously, the datasets have been scrapped from the [SoFIFA](https://sofifa.com/) website. Naturally, this site served as our inspiration. However, our aim is to investigate real-world football phenomena, setting our project apart from the game-centric purpose of the source site.

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

