# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Ilias Merigh | 330316 |
| Zhuofu Zhou | 370337|
| Han Miao| 358630|

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (29th March, 5pm)

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

Our primary focus is the `male_players` sub-dataset, which features detailed information on football players. Across all the years covered, this dataset includes nearly 60K different players, amounting to a total of 10M entries. It contains 110 attributes per player, but we will specifically concentrate on a select dozen that are most relevant to our analysis. This includes the player's _name_, _team_, _country_, _overall score_, and more.

Additionally, the `male_teams` complementary dataset encompasses over 1,000 different teams, documenting all the teams in the game. The team IDs in this dataset match those in the `male_players` dataset, facilitating data merging operations without any loss of information.

###### Data Cleaning and Preprocessing:

The datasets are dense and accurate, with minimal missing values for the chosen attributes, and includes URLs for players' faces. However, it lacks direct links to team logos, offering instead a pointer to each team's SoFIFA page. Given its precision and the minimal need for preprocessing, our main challenge for effective visualization will be to find a way to retrieve team logos from the provided URLs.

Although our study primarily focuses on male football players, we do not rule out the possibility of extending our findings to female players in the future. Despite the female datasets being 10 times smaller than their male counterparts, they still contain a significant amount of data.

Finally, as football enthusiasts and fans of the FIFA game, we have verified the reliability of the data on a sample basis.


### Problematic

###### Purpose of our Visualization:

In one sentence, this project is our attempt to visualize the engaging dynamic between a football player’s performance level and the team he is playing for throughout his career.

It's widely acknowledged that a footballer's choice of team is heavily influenced by the stage they're currently at in their career trajectory—be it the early, prime, or late stage before retirement. For example, a common pattern observed is that players often start in minor or smaller leagues, gradually making a name for themselves before eventually transitioning to larger clubs in major leagues. As they age and their competitive edge diminishes, many opt to retire with the team they have the deepest attachment to or sign with a club in a lesser-known league that offers handsome salaries.

Determining the precise phase of a player's career at any given time can be challenging. Yet, one method to assess this is by examining the player’s age and FIFA ratings, including age, overall level, and specific skills. Given that these factors are reliable indicators of a player's level, it is reasonable to argue that they also have a strong correlation with the player's progression in their club career. This is what we will attempt to make evident using the dataset at hand.

###### Overview, Motivation, and Target Audience:

Football, just like any other business, has certain patterns of career trajectories. This project is fascinating as it serves to provide newcomers to football with valuable context and insights into the sport. Moreover, it also verifies one of the common beliefs people have about football with real-life statistics and presents the results in vivid visualizations.

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

###### Why our Approach is Original:

The uniqueness of our project can be summarized in two key points:

- Utilizing **game data** to address questions about professional football in the **real world**.
- Employing datasets **from each version** of the game over a continuous nine-year period to analyze trends **over time**.

###### Source of Inspiration for Visualization:

- As said previously, the datasets have been scrapped from the [SoFIFA](https://sofifa.com/) website. Naturally, this site served as our inspiration. However, our aim is to investigate real-world football phenomena, setting our project apart from the game-centric purpose of the source site.

- In [this Macro Polo project](https://macropolo.org/digital-projects/the-global-ai-talent-tracker/), there's an exceptional visualization graph depicting the career trajectories of leading AI researchers. This visualization can similarly highlight the transfer paths of improved players, providing the audience with a comprehensive overview of their career trajectories and transfers between clubs.

---

No member of the group has previously worked on a similar project. Therefore, the topic we are exploring is completely new to all group members.


## Milestone 2 (26th April, 5pm)

### Website

Our website, coded in React, is accessible via the link: [http://tansiq.ma:3000/](http://tansiq.ma:3000/). The code source of the application running on the website is provided as a [zip file](/FootViz.zip).

The current workflow of the site is depicted in the figure below:
![Website Workflow](/figure/website_workflow.jpeg)


We have integrated several interactive visualizations; however, for the more challenging ones, we have currently embedded an image or GIF instead of the actual graph. Nevertheless, these images or graphs are our own creations.

### Visualizations

Each subsection will detail our visualizations. The tools needed to implement the features will be suggested, and the core (and potential extension) ideas will be discussed. 

###### 1. Player Profile:

- We display a player's development over time and categorize them into five skill levels. Currently, our website utilizes an [interactive linear chart from ApexCharts](https://apexcharts.com/javascript-chart-demos/line-charts/basic/), which allows us to showcase the overall rating and other relevant information for a particular year.

- Additionally, we highlight the clubs a player has been associated with, using an [interactive timeline chart from ApexCharts](https://apexcharts.com/javascript-chart-demos/timeline-charts/basic/). The advantage of this type of chart is that it makes it easier to see not only the teams the player has been part of, but it also provides a direct visualization of the duration of their stay (whether long or short). Furthermore, this is useful for visualizing players who have returned to their former clubs after playing elsewhere.

- Lastly, we enhanced the player's profile by showcasing their skills. We have currently employed an [interactive radar chart from ApexCharts](https://apexcharts.com/javascript-chart-demos/radar-charts/basic/) to display the specific skills of a player. Given that we have skills-data for each year, we are considering various options for presenting relevant information without cluttering the graph.

- We are considering the use of additional widgets later on, but they are not necessary at the moment. For example, a player's rating is bounded between 1 and 99, making it potentially interesting to display using an [interactive radial bar chart from ApexCharts](https://apexcharts.com/javascript-chart-demos/radialbar-charts/).

These widgets have been added to the website under "Player Evolution > [Click on a Player]". However, we still need to enhance them by adding logos for teams and countries.

###### 2. Sankey Diagram Showing Transfers Between Different Leagues:

We tracked the serving football leagues of 720 players from 2015 to 2023, and visualized their "transfer routes" using this Sankey Diagram. 

The players' career paths over this time span are thought to consist of three stages: early, middle, and late stage. So the Sankey diagram has three layers. The league showing for the early stage is simply the league the player is playing in 2015. The league showing for the late stage is the team the player is playing in 2023. The league showing for the mode stage is the league that he played in for the longest time during 2016~2022. This is of course a simplification, but it rules out complications from players who frequently change teams between different leagues during this time. 

The players are selected according to the following criteria: they need to be present in the game from FIFA 15 to FIFA 23; they need to be younger than 25 and older than 22 years old, so they are indeed in the early phase of their careers in 2015, and late phrase of their careers in 2023. 

The Sankey diagram is most appropriately implemented in D3.js. We will need the D3.js Sankey library, and the knowledge of marks, channels, and maps. 

Finally, we created the Sankey diagram as shown in the figure below. However, for now, only a GIF of the diagram is displayed on the website.

![Sankey Diagram](/figure/sankey2.gif)

###### 3. Interactive Map:

We also plan to incorporate an interactive map in the design of our website. The user can hover their mouse over the countries, and arrows will appear. 

We haven't decided about what data to use. One idea is to show the transfer route of a player with connected arrows, another idea is to show the transfers coming in and out of a country, and use the thickness or color of the arrows to signify the quantity. 

This can also be implemented in D3.js. We will need the knowledge of marks, channels, maps, and also Mercator projections. 

We were able to get a working template. In this version, the arrows are pointing at 5 randomly selected countries for demonstration purposes. However, we haven't added it to the website yet as its placement will depend on our data findings. It is shown in the figure below.

![Interactive Map](/figure/map.gif)

###### 4. Player Full Chart: 

Our goal is to visualize the career trajectories of both rising stars and aging superstars in FIFA history, similar to product displays on some online shopping websites. This will involve a time series display of each player's score growth.

The visualization will primarily consist of a line plot that includes the player's level, profile, teams they've been part of, overall score, value, and a link to their detailed profile, as shown in the provided sketch:

![Player Full Chart](/figure/player_full_chart.jpeg)

We'll use D3.js for this visualization, with plans to enhance it by adding dynamic slides that depict each player's career over time, updating annually to reflect changes like team transfers. This approach will give viewers a comprehensive view of each player's development throughout their career.

For now, we've created a static chart and added it as an image to the website.

### Final Note

Please note that this version of the website is primitive and serves as a basic skeleton for the visualizations/widgets. In addition to inserting the real data, we still need to refine elements like the color palette and margins to enhance the user interface.

## Milestone 3 (31st May, 5pm)

### Website

Our website, developed using React, can be accessed through the following link: [http://tansiq.ma:3000/](http://tansiq.ma:3000/).

### Project Structure

The project is organized as follows:

- `footviz.zip`: Source code of the React website.
- `video_presentation.mp4`: A video presentation that navigates through the website.
- `process_book.pdf`: A document detailing the process and decisions made leading to the final result.
- `notebooks` folder: Contains preprocessing notebooks that were used for website creation.
- `figure` folder: Holds figures to be included in the README.
- `old_visualizations` folder: Contains HTML files of old visualizations in D3.js before converting them into React widgets.
- `generated` folder: Contains some data generated by the notebooks, useful for visualizations on the website.
- `README.md`: A README file that explains the project and technical setup.

### Technical Setup

If you want to view the website, simply open the following link: [http://tansiq.ma:3000/](http://tansiq.ma:3000/).

To evaluate the project's code, please follow these steps:

- Unzip the file `footviz.zip` to access the source code of the application running on the website. Once unzipped, it includes a `README.md` that describes how to run the script, if needed.
- Explore the notebooks in the `notebooks` folder. These notebooks have been pre-run with outputs generated, so you do not need to run them again. However, if you wish to run them, please first download the required datasets from [this Kaggle link](https://www.kaggle.com/datasets/stefanoleone992/fifa-23-complete-player-dataset) and place them in the `data/` folder, structured as follows:

```
data/
  ├── male_players.csv
  └── male_teams.csv
```

Please note that the `male_players.csv` dataset is 5.64 GB in size, which is why it is not hosted on the repository as it exceeds the Git LFS quota.


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

