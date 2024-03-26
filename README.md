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

