# CENG318 Human Computer Interaction

### **NeighborFood Group 11 Final Report**
#### Spring 2023 - July 5, 2023

**Group Members**

- Hasan Semih Selçuk & 270201056
- Tuğçe Türkmenler & 290201097
- Gözde Kurtulmuş & 280201105
- Gencay Turgut & 280201056
- Mustafa Kağan Yalım & 270201090
- Yusuf Emre Beskan & 270201005


## Abstract
The Neighborfood platform is a game changing project that enables the local trade of nutritious, home-cooked meals, promoting healthier lifestyles and creating economic opportunities. Built using technologies such as Node.js, React.js, NoSQL (MongoDB), Tailwind and Express, it offers a user-friendly interface and uses a thorough chef approval process for quality assurance. The platform has a unique focus on geographical proximity and cost effectiveness, which sets it apart from its competitors. User and chef interactions have been streamlined and feedback has led to continuous improvements in functionality, contributing to an increasingly efficient and user-friendly platform. Preliminary testing of the user interface and functionality has yielded positive results, demonstrating the platform’s potential for significant societal impact. This innovative approach to local food trading not only promotes healthier communities, but also provides an economic boost for home cooks.

## 1-  Introduction

Our web-based platform Neighborfood was created with the motto of ”komşuda pişer, bize de düşer” for its users. It offers an alternative solution for users who don’t want to eat ready-made meals or don’t have the chance to cook. By creating a user account, users can see approved chefs located near their area and order meals from their offered menu lists. This allows them to have access to healthier and more sustainable meals. In order to track the chef who makes delicious meals they’ve previously found, users can add their favorite chef to their favorites. Moreover, our platform also provides opportunities for users who want to become chefs. Chefs can become approved by filling out the ”Be Chef” form and going through the approval process. They can start serving users by editing their pages as they wish. Having to approve the orders they want also provides them with flexibility.

## 2- Literature Review

### 1. DoorDash

Although DoorDash is built with the slogan of ”getting food from your neighbor” just like our application, upon examining the website, it can be seen that it supports both local and global businesses. In other words, it is not different from classic applications like Yemeksepeti or Trendyol Yemek. As a result of this situation, consumers are mostly exposed to ready-made foods, regardless of whether the business type. The popular habit of consuming fast food or ready-made meals has a negative impact on body weight control and, consequently, it threatens the nutritional value of the consumer’s diet [3]. Our application, on the other hand, provides an opportunity for the local community who want to cook and sell food in their homes. Unlike our application, it also has a wider range of product sales, such as grocery shopping.

### 2. EatWith

EatWith is a platform that allows local hosts to offer unique dining experiences in their homes, ranging from cooking classes to dinner parties to travelers and locals while they make a business from their hobbies. But since Eatwith involves strangers inviting other strangers into their homes for a meal, there is a risk of harm or danger. Problematic Internet users, as compared to no pathological users, were more likely to use the Internet for meeting strangers [2]. Since our approach is to reduce the risk of danger and to increase the security of the customers, it is best for them to take away the order from their neighbor. This approach avoids the cost of the courier and provides a cheaper and more economical way. While the ”nearby experiences” section is an excellent attribute, it may not be optimal for users seeking prompt results.

### 3. CookUnity

CookUnity is an online platform that offers customers access to a wide range of chef-prepared meals that are de- livered straight to their door. Unlike our approach, this approach does not provide income for people who enjoy cooking and want to easily earn money from home. In addition, it does not have a suitable pricing policy for cus- tomers. On the user interface part, we have the commonality of using location for search results.

### 4. Getir, Yemeksepeti etc.

Online food ordering websites typically list the available restaurants in a given area and allow customers to order meals online. Many accessible dining options make it easier to eat fast food, which often has high quantities of calories, trans fat, sugar, simple carbs, and salt [1]. In addition, ”easy access to restaurants is a risk factor for childhood obesity by encouraging exposure to unhealthful food venues and hence the compensatory intake of unhealthy food option” [1]. Compared to this situation, our approach supports our customers to consume healthier, more nutritious homemade food so that they are not affected by these risks.

### 5. Komsuyemegi.com

It was established in 2014 with the aim of preventing the uniformisation of food habits, keeping traditional tastes that are about to disappear alive and offering an alternative to ’fast and ready-to-eat’ consumption. Although it is very similar to this project, the main difference is that Neighborfood enables people to access healthy home-cooked meals at a cheaper price and cooks to contribute to the home economy. Komsuyemegi’ s patent application was rejected in 2022 due to lack of documentation and there is currently no access to their website.

## 3 Methodology

**Step 1:** In the region where we live, especially as students, we were complaining about the high cost of food.

**Step 2:** At the same time, we could not access quality home-cooked food, and most of us don’t have either the time or the proper place to cook. We didn’t trust the hygiene of the food we ate out. By doing so, we not only created a platform for individuals who already cook at home to earn extra income but also ensured that students like us have access to healthy meals while being away.

**Step 3:** During the discussion of this platform, we recognized the significance of privacy, validity, and reliability. Our primary objective was to deliver optimal performance and user experience. The generality of anticipated features for our methodology, considering the mentioned
characteristics, are as follows:

**Customer**: Customers who want to become members can sign up using the ”Sign In” option. On the other hand if they are already registered they can use ” Login” button.
After logging in, customers can select their current location on the homepage and continue shopping accordingly. They can also list available chefs in their area. Users can click on desired chef to view their profiles and menus, create orders, leave comments for chefs, and add them to their favorites for easy access in the ”My Favorites” section. After creating an order, customers can enter the order page to check whether the chef has accepted the order and view their past orders. When they are ready to make payment, they can select their preferred payment option and proceed with the payment.

**Chef**: Those who wish to open a chef account can fill out the ”Be Chef” form and wait for approval. Once approved, they can create their accounts and start selling their products. Chefs can edit their chef pages as desired,including menus and profile pictures. They can view comments received, check their ratings, and see customer reviews. Upon receiving an order, chefs will receive a notification, allowing them to view and confirm the order.

## 3.1 User Interfaces

![](CENG318_Project_Proposal/Aspose.Words.4f67c8db-bcd6-4fea-936f-bbbc604cf861.002.png)

Figure 1: Main Page

![](CENG318_Project_Proposal/Aspose.Words.4f67c8db-bcd6-4fea-936f-bbbc604cf861.003.png)

Figure 2: Search Page

![](CENG318_Project_Proposal/Aspose.Words.4f67c8db-bcd6-4fea-936f-bbbc604cf861.004.png)

Figure 3: Sign up Page

![](CENG318_Project_Proposal/Aspose.Words.4f67c8db-bcd6-4fea-936f-bbbc604cf861.005.png) 

Figure 4: Login Page 

![](CENG318_Project_Proposal/Aspose.Words.4f67c8db-bcd6-4fea-936f-bbbc604cf861.007.png)!

Figure 5: Orders Page

![](CENG318_Project_Proposal/Aspose.Words.4f67c8db-bcd6-4fea-936f-bbbc604cf861.008.png)

Figure 6: ProfilePage

![](CENG318_Project_Proposal/Aspose.Words.4f67c8db-bcd6-4fea-936f-bbbc604cf861.009.png)

Figure 7: Review

![](CENG318_Project_Proposal/Aspose.Words.4f67c8db-bcd6-4fea-936f-bbbc604cf861.010.png)

Figure 8: Settings Page

![](CENG318_Project_Proposal/Aspose.Words.4f67c8db-bcd6-4fea-936f-bbbc604cf861.006.png)

Figure 9: Be Chef Page

![](CENG318_Project_Proposal/Aspose.Words.4f67c8db-bcd6-4fea-936f-bbbc604cf861.011.png)

Figure 10: Menu Confirmation Page

![](CENG318_Project_Proposal/Aspose.Words.4f67c8db-bcd6-4fea-936f-bbbc604cf861.012.png)

Figure 11: Payment

![](CENG318_Project_Proposal/Aspose.Words.4f67c8db-bcd6-4fea-936f-bbbc604cf861.013.png)

Figure 12: Notifications

## 4 Experimental Results

**General User Interface Testing:**

In the first version of the platform, we asked a group of potential users to interact with the system and perform basic tasks. These tasks included registering, logging in, and browsing chef profiles. The purpose of the experiment was to test usability and understand user preferences. We
also gathered feedback from users regarding the functionalities to be added. Results showed that users found the overall interface to be straightforward and liked the design, but they also recommended some improvements to the functioning of the menu search and navigation.
Based on the feedback, we developed the current version of the platform. To facilitate user access not only through computer screens but also through other devices,
responsive design was added. To make menu exploration
easier, the navigation has been streamlined, and an effective search feature has been included. Users can now create accounts, browse chef profiles, view menu listings, add their favorite chefs to their favorites, place orders, and enjoy various additional functionalities.

**Chef Approval Process:**
A preliminary experiment was conducted to test the chef approval process. The experiment aimed to assess the efficiency of the approval process, identify any bottlenecks, and evaluate the quality of the submitted information. Results showed that the initial approval process was not effective enough and need improvement. The most current version of the chef approval process includes an improved ”Be Chef” form with clearer instructions and additional fields for chef approval. Chefs are required to provide comprehensive information. And then they are directed to the Approval Comittee.

**Feature Functionality Testing:**
Due to the website’s detailed structure and the multitude of features it contains, whenever we added a new feature, we asked a group of potential users to use these features. Thus, we were able to detect any parts that were inconvenient for users in terms of functionality, which we
might have missed.
In the revised version of the project, we evaluated the
feedback we received to make the features more userfriendly. As an example, we made changes to the payment section and the orders section to improve their usability

## 5 Conclusions and Future Works

In conclusion, our platform aims to protect people
from the influence of fast food and guide them towards
a healthier diet. Additionally, it provides customers with
more affordable access to meals and contributes to the
household economy for chefs. While implementing this
methodology, we consistently received input and ideas
from our target customers (students) at every step. We
also continued conducting experiments with the chefs as
well. Efforts were made to ensure user trustworthiness
and privacy within the project. As the project evolved, we
added more features and addressed identified shortcomings, resulting in a well-developed project. In the future,
we are considering adding features such as user surveys
and monthly controls of chefs to enhance user trustworthiness.Furthermore, the system can be expanded to include
many new features such as online payment, tracking order
location, etc. to ensure user convenience.
The emergence of ready-made and fast food concepts poses a significant threat to people’s health. If this
project spreads in a wide area, it can greatly contribute
to reducing unhealthy eating habits and the resulting obesity. Customers will be able to consume food that meets
the required nutritional value. Additionally, the advantage of home-cooked meals being more delicious and less
monotonous should not be overlooked.Another advantage
of this project is creating a separate marketplace for individuals who aspire to enter the food industry but lack
sufficient resources to open their own shops

## 6 Weekly Schedule/Project Plan

![](CENG318_Project_Proposal/Aspose.Words.4f67c8db-bcd6-4fea-936f-bbbc604cf861.014.png)



## 7 References

[1]Jia, P., M.Luo, Y.Li, J.Zheng, Q.Xiao, andJ.Luo (2021). Fast-food restaurant, unhealthy eating, and child- hood obesity: A systematic review and meta-analysis: Se- mantic scholar. Obesity Reviews 22.

2. J.Morahan-Martin and P.Schumacher (2000). In-

cidence and correlates of pathological internet use among college students. Computers in Human Behavior 16, 13–29.

3. Alkerwi, A., Crichton, G. E., Hebert,´ J. R. (2014).

Consumption of ready-made meals and increased risk of obesity: Findings from the observation of cardiovascu- lar risk factors in Luxembourg (ORISCAV-Lux). British Journal of Nutrition.
7
