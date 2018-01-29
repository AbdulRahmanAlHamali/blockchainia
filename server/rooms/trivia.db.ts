
const DATABASE = [
    {
        question: 'In S1E1 "Pilot": Who started their first day at Dunder Mifflin Scranton?',
        options: ['Jim Halpert', 'Ryan Howard', 'Michael Scott', 'Erin Hannon'],
        answer: 1
    },
    {
        question: 'In S1E2 "Diversity Day": What famous comedian\'s stand up routine does Michael imitate?',
        options: ['Chris Rock', 'Richard Pryor', 'Robin Williams', 'George Carlin'],
        answer: 0
    },
    {
        question: 'In S1E3 "Health Care": Which of these is NOT one of Jim and Pam\'s made up diseases?',
        options: ['Killer nanorobots', 'Hot dog fingers', 'Spontaneous dental hydroplosion', 'Hair cancer'],
        answer: 3
    },
    {
        question: 'In S1E4 "The Alliance": How much money does Michael donate to Oscar\'s nephew\'s charity, not realizing it is a walk-a-thon and the amount is per mile?',
        options: ['$40', '$10', '$25', '$100'],
        answer: 2
    },
    {
        question: 'In S1E5 "Basketball": What small appliance of Pam\'s breaks down? (It was given to her at her engagement party three years earlier)',
        options: ['Toaster', 'Microwave', 'Blender', 'Toaster Oven'],
        answer: 3
    },
    {
        question: 'In S1E6 "Hot Girl" What is the Hot Girl\'s name?',
        options: ['Amy', 'Christy', 'Kelly', 'Katy'],
        answer: 3
    },
    {
        question: 'In S2E1 "The Dundies": What Dundie award does Phyllis take home?',
        options: ['The Busiest Beaver Dundie', 'The Bushiest Beaver Dundie', 'Spicy Curry Dundie', 'Whitest Sneakers Dundie'],
        answer: 1
    },
    {
        question: 'In S2E2 "Sexual Harassment": What is on Todd Packer\'s vanity license plate?',
        options: ['LUVMKR', 'WLHUNG', 'TODPKR', 'BGDADY'],
        answer: 1
    },
    {
        question: 'In S2E3 "Office Olympics": What does Pam name "Box of paper snowshoe racing"?',
        options: ['Flonkerton', 'Icelandic Snowshoe Racing', 'Bixing', 'Pegerhosen'],
        answer: 0
    },
    {
        question: 'In S2E4 "The Fire": What are Meredith\'s five DVD choices for the game "Desert Island"?',
        options: ['The Shawshank Redemption, 40 Year Old Virgin, Gentlemen Prefer Blondes, Disney\'s Sleeping Beauty, Life of Pi', 'Gone With The Wind, The Burbs, Clerks II, Sense & Sensibility, Chronicles of Riddick', 'Legends of the Fall, Legally Blonde, Bridges of Madison County, My Big Fat Greek Wedding, Ghost (but just that one scene)', 'Fargo, Edward Scissor-hands, The Breakfast Club, Dazed and Confused, The Princess Bride'],
        answer: 2
    },
    {
        question: 'In S2E5 "Halloween": What is Jim\'s costume?',
        options: ['"Dave"', 'Bookface', 'Three Hole Punch Jim', 'Rational Consumer'],
        answer: 2
    },
    {
        question: 'In S2E6 "The Fight": What is Dwight\'s Sensei\'s name?',
        options: ['Ira', 'George', 'Stuart', 'Mr. Miyagi'],
        answer: 0
    },
    {
        question: 'In S2E7 "The Client": Where do Jan and Michael take Christian, the Lackawanna County rep?',
        options: ['Applebee\'s', 'Olive Garden', 'Poor Richard\'s', 'Chili\'s'],
        answer: 3
    },
    {
        question: 'In S2E8 "Performance Review": Who does Michael quickly dismiss saying "You were totally satisfactory this year"?',
        options: ['Oscar', 'Angela', 'Kevin', 'Dwight'],
        answer: 1
    },
    {
        question: 'In S2E9 "E-Mail Surveillance" Who hosts a barbecue that is Michael NOT invited to?',
        options: ['Pam', 'Andy', 'Jim', 'Stanley'],
        answer: 2
    },
    {
        question: 'In S2E10 "Christmas Party": Who ends up with the Video iPod at the end of the episode?',
        options: ['Dwight', 'Pam', 'Ryan', 'Michael'],
        answer: 0
    },
    {
        question: 'In S2E11 "Booze Cruise": Who breaks up?',
        options: ['Pam and Roy', 'Jim and Katy', 'Kelly and Ryan', 'Phyllis and Bob'],
        answer: 1
    },
    {
        question: 'In S2E12 "The Injury": What is Michael\'s injury?',
        options: ['He gets his head stuck in a stair railing', 'He crashes his car into a telephone pole', 'He\'s run over by a co-worker', 'He burns his foot on a George Foreman Grill'],
        answer: 3
    },
    {
        question: 'In S2E13 "The Secret": What are Michael\'s reasons for liking Hooters?',
        options: ['The girls and the grub', 'Boobs and booze', 'Boobs and hot wings', 'They sing to him every time he goes'],
        answer: 2
    },
    {
        question: 'In S2E14 "The Carpet": Who is responsible for Michael\'s foul smelling carpet?',
        options: ['Dwight', 'Todd Packer', 'Jim', 'Pam'],
        answer: 1
    },
    {
        question: 'In S2E15 "Boys and Girls": What does Jan encourage Pam to pursue?',
        options: ['A corporate receptionist job in New York', 'A Sales position', 'Michael\'s job', 'A design training program in New York'],
        answer: 3
    },
    {
        question: 'In S2E16 "Valentine\'s Day": Who rocked the house and got their lover the best gift they\'d ever received?',
        options: ['Angela', 'Kelly', 'Pam', 'Dwight'],
        answer: 0
    },
    {
        question: 'In S2E17 "Dwight\'s Speech": What infamous dictator\'s speech does Jim trick Dwight into giving at the sales conference?',
        options: ['Adolf Hitler', 'Kim Jong Il', 'Joseph Stalin', 'Benito Mussolini'],
        answer: 3
    },
    {
        question: 'In S2E18 "Take Your Daughter to Work Day": What is Toby\'s daughter\'s name?',
        options: ['Sasha', 'Melissa', 'Abby', 'Sammy'],
        answer: 0
    },
    {
        question: 'In S2E19 "Michael\'s Birthday": Who has a cancer scare?',
        options: ['Angela', 'Dwight', 'Kevin', 'Michael'],
        answer: 2
    },
    {
        question: 'In S2E20 "Drug Testing": Who, in Dwight\'s mind, is a potential drug mule?',
        options: ['Meredith', 'Creed', 'Jim', 'Oscar'],
		answer: 3
    },
    {
        question: 'In S2E21 "Conflict Resolution": Who complained about Pam planning her wedding on company time?',
        options: ['Toby', 'Jim', 'Angela', 'Dwight'],
		answer: 1
    },
    {
        question: 'In S2E22 "Casino Night" Who has two dates?',
        options: ['Michael', 'Jim', 'Pam', 'Creed'],
		answer: 0
    },
    {
        question: 'In S3E1 "Gay Witch Hunt": What is Andy\'s nickname for Jim?',
        options: ['Jimbo', 'Fat Halpert', 'Jimothy', 'Big Tuna'],
		answer: 3
    },
    {
        question: 'In S3E2 "The Convention" What does Angela say "Looks like someone took the slow train from Philly" is code for in her family?',
        options: ['Check out the idiot', 'Check out the slut', 'Check out the tramp', 'Check out the moron'],
		answer: 1
    },
    {
        question: 'In S3E3 "The Coup" What 90\'s movie does Michael show for Movie Monday?',
        options: ['Never Been Kissed', 'Batman Returns', 'Can\'t Hardly Wait', 'Varsity Blues'],
		answer: 3
    },
    {
        question: 'In S3E4 "Grief Counseling": Whose death is Michael grieving?',
        options: ['Michael Jackson\'s', 'Ed Truck\'s', 'Bob Vance\'s', 'Whitney Houston\'s'],
		answer: 1
    },
    {
        question: 'In S3E5 "Initiation" What song does Jim sing to annoy Karen?',
        options: ['Lovefool by The Cardigans', 'Kiss Me by Six Pence None the Richer', 'Barbie Girl by Aqua', 'Macarena by Los Del Rio'],
		answer: 0
    },
    {
        question: 'In S3E6 "Diwali" What does Michael mistakenly believe Diwali is?',
        options: ['Hindu Hannukah', 'Hindu Christmas', 'Hindu Halloween', 'Hindu Flag Day'],
		answer: 2
    },
    {
        question: 'In S3E7 "Branch Closing" Who was Jan\'s first choice for running Dunder Mifflin Northeast?',
        options: ['Josh', 'Michael', 'Jim', 'Andy'],
		answer: 0
    },
    {
        question: 'In S3E8 "The Merger" Who from Stamford quits on their first day in Scranton, only to be fired a minute later?',
        options: ['Hannah', 'Andy', 'Tony', 'Karen'],
		answer: 2
    },
    {
        question: 'In S3E9 "The Convict": Which of these things does Prison Mike NOT claim to have been busted for?',
        options: ['I stole', 'I robbed', 'I killed Dumbledore', 'I kidnapped the President\'s son'],
		answer: 2
    },
    {
        question: 'In S3E10 "A Benihana Christmas" Who takes gifts OUT of the toy donation box?',
        options: ['Dwight', 'Michael', 'Meredith', 'Creed'],
		answer: 3
    },
    {
        question: 'In S3E11 "Back from Vacation" At what resort do we find out Michael and Jan spent their Christmas together?',
        options: ['Sandals', 'Club Med', 'Disneyworld', 'Carnival Cruise'],
		answer: 0
    },
    {
        question: 'In S3E12 "Traveling Salesmen": Who reluctantly partners up with Ryan?',
        options: ['Dwight', 'Stanley', 'Phyllis', 'Karen'],
		answer: 1
    },
    {
        question: 'In S3E13 "The Return" What office supply chain has Dwight begun working for?',
        options: ['OfficeMax', 'Staples', 'Office Depot', 'Comp USA'],
		answer: 1
    },
    {
        question: 'In S3E14 "Ben Franklin" Jim hires a Ben Franklin impersonator, why?',
        options: ['To prank Dwight', 'For an inspiring speech', 'In lieu of a stripper for Phyllis\'s bachlorette party', 'To prank Pam'],
		answer: 2
    },
    {
        question: 'In S3E15 "Phyllis\' Wedding" Who breaks etiquette and wears white to the wedding as a guest?',
        options: ['Kelly', 'Angela', 'Pam', 'Karen'],
		answer: 0
    },
    {
        question: 'In S3E16 "Business School" Who is back together?',
        options: ['Jim and Karen', 'Dwight and Angela', 'Michael and Jan', 'Pam and Roy'],
		answer: 3
    },
    {
        question: 'In S3E17 "Cocktails" Who gets stuck in a straight jacket?',
        options: ['Dwight', 'Michael', 'Meredith', 'Creed'],
		answer: 1
    },
    {
        question: 'In S3E18 "The Negotiation": What gift does Jim try to give Dwight after Dwight saves him from being attacked by Roy, but Dwight refuses to accept?',
        options: ['Bobblehead', 'Pitchfork', 'Champagne', 'Glass display case for his bobblehead'],
		answer: 3
    },
    {
        question: 'In S3E19 "Safety Training" Michael yells "Dwight, you ignorant slut!" from the rooftop of Dunder Mifflin.  What classic comedy show is he ripping off?',
        options: ['Mary Tyler Moore', 'Saturday Night Live', 'In Living Color', 'The Tonight Show with Johnny Carson'],
		answer:1
    },
    {
        question: 'In S3E20 "Product Recall" who does Michael assign to train the Accounting department in customer service, much to Angela\'s chagrin?',
        options: ['Toby', 'Pam', 'Kelly', 'Kevin'],
		answer: 2
    },
    {
        question: 'In S3E21 "Women\'s Appreciation" Who gets flashed in the parking lot?',
        options: ['Meredith', 'Pam', 'Phyllis', 'Creed'],
		answer: 2
    },
    {
        question: 'In S3E22 "Beach Games" Who gets abandoned in the lake wearing a sumo costume?',
        options: ['Andy', 'Stanley', 'Dwight', 'Angela'],
		answer: 0
    },
    {
        question: 'In S3E23 "The Job" Whose job are Jim, Karen and Michael interviewing for at corporate?',
        options: ['Ryan\'s', 'David Wallace\'s', 'Hunter\'s', 'Jan\'s'],
		answer: 3
    },
    {
        question: 'In S4E1 "Fun Run" Dwight mercy kills Angela\'s cat.  Name that cat.',
        options: ['Sprinkles', 'Bandit', 'Garbage', 'Fluffy'],
		answer: 0
    },
    {
        question: 'In S4E2 "Dunder Mifflin Infinity" Who fakes a pregnancy?',
        options: ['Creed', 'Pam', 'Angela', 'Kelly'],
		answer: 3
    },
    {
        question: 'In S4E3 "Launch Party" What is the preferred Pizza place among The Office staff?',
        options: ['Pizza by Alfredo', 'Alfredo\'s Pizza Cafe', 'Domino\'s', 'Pizza Hut'],
		answer: 1
    },
    {
        question: 'In S4E4 "Money" When Creed gets into financial trouble, who does he say he transfers his debt to?',
        options: ['Michael Scott', 'Creed Bratton', 'William Charles Schneider', 'Stanley Hudson'],
		answer: 2
    },
    {
        question: 'In S4E5 "Local Ad" Who designs the computer animation sequence for Michael\'s commercial?',
        options: ['Ryan', 'Pam', 'The commercial crew', 'Jim'],
		answer: 1
    },
    {
        question: 'In S4E6 "Branch Wars" Why did Jim agree to wear a costume and a moustache?',
        options: ['To calm Michael down', 'To impress Pam', 'To disguise himself from Karen', 'To keep Dwight from blowing anything up'],
		answer: 3
    },
    {
        question: 'In S4E7 "Survivor Man" Whose birthdays fall all in the same month?',
        options: ['Creed, Oscar and Meredtih', 'Andy, Kelly and Pam', 'Creed, Phyllis and Kevin', 'Phyllis, Stanley and Toby'],
		answer: 0
    },
    {
        question: 'In S4E8 "The Deposition" Who is being deposed?',
        options: ['Michael', 'Jan', 'Mr. Schneider', 'Toby'],
		answer: 0
    },
    {
        question: 'In S4E9 "Dinner Party": How many vasectomies does Michael claim to have had?',
        options: ['One', 'Two', 'Three', 'Four'],
		answer: 2
    },
    {
        question: 'In S4E10 "Chair Model" Who are the Five Families of Scranton?',
        options: ['The Five Companies of Scranton Business Park', 'The Schrutes, The Halperts, The Beeslys, The Martins and The Brattons', 'The Hudsons, The Vances, The Scotts, The Palmers and The Howards', 'The Kapoors, The Levinson-Goulds, The Hannons, The Bernards and The Fillipellis'],
		answer: 0
    },
    {
        question: 'In S4E11 "Night Out": What is the security guard\'s name?',
        options: ['Eddie', 'Hank', 'Edgar', 'Elliot'],
		answer: 1
    },
    {
        question: 'In S4E12 "Did I Stutter?" Who asks the episode title: "Did I stutter?"',
        options: ['Meredith', 'Michael', 'Stanley', 'Toby'],
		answer: 2
    },
    {
        question: 'In S4E13 "Job Fair" At whose former high school are Michael, Pam and Darryl visiting?',
        options: ['Andy\'s', 'Pam\'s', 'Darryl\'s', 'Michael\'s'],
		answer: 1
    },
    {
        question: 'In S4E14 "Goodbye Toby" Where is Toby moving to?',
        options: ['Costa Rica', 'Belize', 'Peru', 'Panama'],
		answer: 0
    },
    {
        question: 'In S5E1 "Weight Loss" Where does Jim propose to Pam?',
        options: ['A romantic restaurant', 'At The Office!', 'In the parking lot', 'A gas station'],
		answer: 3
    },
    {
        question: 'In S5E2 "Business Ethics" What was the YouTube video Michael said he viewed about a thousand times?',
        options: ['Christian the Lion', 'Talking Goat', 'Bill O\'Reilly\'s "Do it Live"', 'Cookie Monster sings Chocolate Rain'],
		answer: 3
    },
    {
        question: 'In S5E3 "Baby Shower" What is Jan\'s baby\'s name?',
        options: ['Astrid', 'Asturd', 'Sofia', 'Jan Jr.'],
		answer: 0
    },
    {
        question: 'In S5E4 "Crime Aid" Who finds out Michael and Holly are dating at the end of the episode?',
        options: ['Jan', 'The Office', 'David Wallace', 'A.J.'],
		answer: 2
    },
    {
        question: 'In S5E5 "Employee Transfer" Who drives Michael and Holly to Nashua?',
        options: ['Jim', 'Darryl', 'Dwight', 'Pam'],
		answer: 1
    },
    {
        question: 'In S5E6 "Customer Survey" What fake name does Jim use to rattle Dwight during their customer service training with Michael?',
        options: ['Mike Roin', 'William M. Buttlicker', 'Phillip McCrack', 'Haywood Jablome'],
		answer: 1
    },
    {
        question: 'In S5E7 "Business Trip" Where is Michael\'s international business trip destination?',
        options: ['Toronto', 'London', 'Mexico City', 'Winnipeg'],
		answer: 3
    },
    {
        question: 'In S5E8 "Frame Toby" What does Michael buy from the warehouse guys thinking it is marijuana?',
        options: ['Oregano', 'Caprese Salad', 'Sage', 'Pencil Shavings'],
		answer: 1
    },
    {
        question: 'In S5E9 "The Surplus" Who\'s gunning for new chairs?',
        options: ['Jim', 'Pam', 'Dwight', 'Stanley'],
		answer: 1
    },
    {
        question: 'In S5E10 "Moroccan Christmas" Phyllis is in charge of the Party Planning Committee and Angela doesn\'t have a say.  Why?',
        options: ['Michael put Phyllis in charge', 'Angela let her have the role', 'Phyllis is blackmailing Angela', 'Angela doesn\'t want to plan the Christmas party'],
		answer: 2
    },
    {
        question: 'In S5E11 "The Duel" Why is there a new speed radar gun on the pole outside The Office?',
        options: ['Creed installed it', 'Angela called 911 too many times complaining about cars driving too fast.', 'It was put up following Michael\'s accident when he ran over Meredith with his car', 'No reason, it\'s just there'],
		answer: 1
    },
    {
        question: 'In S5E12 "Prince Family Paper" Which actress\'s hotness are The Office debating?',
        options: ['Julia Roberts', 'Meryl Streep', 'Glenn Close', 'Hillary Swank'],
		answer: 3
    },
    {
        question: 'In S5E13 "Stress Relief" Who has a heart attack?',
        options: ['Stanley', 'Dwight', 'Michael', 'Phyllis'],
		answer: 0
    },
    {
        question: 'In S5E14 "Lecture Circuit Part One" Which coworker do we find out previously did some time in Juvy?',
        options: ['Meredith', 'Kelly', 'Creed', 'Ryan'],
		answer: 1
    },
    {
        question: 'In S5E15 "Lecture Circuit Part Two" What is Holly\'s new boyfriend\'s name?',
        options: ['Michael', 'B.J.', 'A.J.', 'Tom'],
		answer: 2
    },
    {
        question: 'In S5E16 "Blood Drive" What Office couple has a not-so-secret romp in a public restroom?',
        options: ['Phyllis and Bob', 'Jim and Pam', 'Dwight and Angela', 'Angela and Andy'],
		answer: 0
    },
    {
        question: 'In S5E17 "Golden Ticket" Who slaps Michael?',
        options: ['Pam', 'Jim', 'Holly', 'Dwight'],
		answer: 3
    },
    {
        question: 'In S5E18 "New Boss" Who is the new boss?',
        options: ['Andy', 'David Wallace', 'Ryan', 'Charles Miner'],
		answer: 3
    },
    {
        question: 'In S5E19  "Two Weeks" What is Michael\'s signature cocktail?',
        options: ['Orange Vodjuiceka', 'Gin and Tonic', 'Scotch and Splenda', 'Cosmpolitan'],
		answer: 2
    },
    {
        question: 'In S5E20 "Dream Team" Michael Scott Paper Company meets with an investor.  Who is it?',
        options: ['Michael\'s Grandma', 'Michael\'s Mom', 'Pam\'s Mom', 'David Wallace'],
		answer: 0
    },
    {
        question: 'In S5E21 "Michael Scott Paper Company" What pop song is playing in the background when Michael pulls up and says: "It\'s Britney, bitch."?',
        options: ['Oops I Did it Again', 'Hit Me Baby One More Time', 'Just Dance', 'Hips Don\'t Lie'],
		answer: 2
    },
    {
        question: 'In S5E22 "Heavy Competition": What does Dwight find out Michael wrote on the back of his Rolodex entry for "Schrute, Dwight"?',
        options: ['Great salesmen, better friend.', 'Tall. Beets.', 'Assistant (to the) Regional Manager, Dunder Mifflin Scranton.', 'Dog-like obedience to authority.'],
		answer: 1
    },
    {
        question: 'In S5E23 "Broke" What is David Wallace\'s first offer to buy out Michael Scott Paper Company?',
        options: ['We don\'t know, Michael didn\'t let him say it.', '$12,000', '$60,000', 'Michael, Ryan and Pam can all have their old jobs back.'],
		answer: 0
    },
    {
        question: 'In S5E24 "Casual Friday" Who plays chess together in this episode?',
        options: ['Jim & Pam', 'Pam & Kelly', 'Michael & Dwight', 'Jim & Creed'],
		answer: 3
    },
    {
        question: 'In S5E25 "Cafe Disco" Pam and Jim almost got married.  Where were they planning on going?',
        options: ['Ohio', 'New York', 'Vermont', 'Florida'],
		answer: 0
    },
    {
        question: 'In S5E26 "Company Picnic" What award winning movie do Michael & Holly parody during their presentation?',
        options: ['Titanic', 'The Departed', 'Juno', 'Slumdog Millionaire'],
		answer: 3
    },
    {
        question: 'In S6E1 "Gossip" Someone is rumored to be, and wonders if they might actually be, gay.  Who was it?',
        options: ['Jim', 'Dwight', 'Andy', 'Michael'],
		answer: 2
    },
    {
        question: 'In S6E2 "The Meeting" Who do we learn handed out jello shots at the 23rd mile of the Steamtown Marathon?',
        options: ['Meredith', 'Michael', 'Creed', 'Todd Packer'],
		answer: 1
    },
    {
        question: 'In S6E3 "The Promotion" What two Office characters give a hint that they have previously "done it"?',
        options: ['Stanley & Phyllis', 'Ryan & Erin', 'Andy & Meredith', 'Creed & Meredith'],
		answer: 3
    },
    {
        question: 'In S6E4 "Niagara" What is Pam\'s Grandmother\'s name who almost doesn\'t come to the wedding?',
        options: ['Meemaw', 'Sylvia', 'Althia', 'Cynthia'],
		answer: 1
    },
    {
        question: 'In S6E5 "Mafia" Where are Jim and Pam Honeymooning?',
        options: ['Jamacia', 'Puerto Rico', 'Mexico', 'Hawaii'],
		answer: 1
    },
    {
        question: 'In S6E6 "The Lover" Who has Michael been secretly sleeping with?',
        options: ['Pam\'s mom Helene', 'Jan', 'Donna', 'Holly'],
		answer: 0
    },
    {
        question: 'In S6E7 "Koi Pond" Who had sex with a terrorist?',
        options: ['Dwight', 'Angela', 'Creed', 'Meredith'],
		answer: 3
    },
    {
        question: 'In S6E8 "Double Date" What winter sport makes Michael question his relationship with Helene?',
        options: ['Skiing', 'Bobsledding', 'Ice Skating', 'Snowboarding'],
		answer: 3
    },
    {
        question: 'In S6E9 "Murder" "There\'s been a murder in..." Where?',
        options: ['Scranton', 'Atlanta', 'New York', 'Savannah'],
		answer: 3
    },
    {
        question: 'In S6E10 "Shareholder Meeting" Dwight dresses up as a character for Earth Day.  Name that character.',
        options: ['The Green Machine', 'The Solar Son', 'Energy Man', 'Recyclops'],
		answer: 3
    },
    {
        question: 'In S6E11 "Scott\'s Tots" How many years have passed since Michael promised to pay for the Scott\'s Tots college educations?',
        options: ['5', '15', '10', '25'],
		answer: 2
    },
    {
        question: 'In S6E12 "Secret Santa" Who gave Erin the 12 Days of Christmas?',
        options: ['Jim', 'Dwight', 'Andy', 'Michael'],
		answer: 2
    },
    {
        question: 'In S6E13 "The Banker" Who, in this episode, is Dunder Mifflin\'s highest ranking employee?',
        options: ['Ryan', 'Holly', 'David Wallace', 'Michael'],
		answer: 3
    },
    {
        question: 'In S6E14 "Sabre" What famous actor is featured as himself in the Sabre orientation video?',
        options: ['Christian Slater', 'Johnny Depp', 'Tom Hanks', 'Steve Carell'],
		answer: 0
    },
    {
        question: 'In S6E15 "Manager and Salesman" What actress plays Sabre CEO Jo Bennett?',
        options: ['Roseanne Barr', 'Kathy Bates', 'Glenn Close', 'Betty White'],
		answer: 1
    },
    {
        question: 'In S6E16 "The Delivery" What do Jim and Pam name their baby girl?',
        options: ['Cecelia Marie Halpert', 'Cynthia Janine Halpert', 'Sylvia Meemaw Halpert', 'Sissy Amanda Halpert'],
		answer: 0
    },
    {
        question: 'In S6E17 "St. Patrick\'s Day" What song does Dwight sing trying to guilt Jim about being back from his Paternity leave?',
        options: ['Papa was a Rolling Stone', 'Cats in the Cradle', 'Papa\'s Got a Brand New Bag', 'Big Poppa'],
		answer: 1
    },
    {
        question: 'In S6E18 "New Leads" Who does Michael mistakenly believe lives in his condo complex?',
        options: ['Ryan Gossling', 'Johnny Depp', 'Bruce Willis', 'Adam Levine'],
		answer: 1
    },
    {
        question: 'In S6E19 "Happy Hour" What clothing item transforms Michael into Date Mike?',
        options: ['A backwards golf cap', 'A bandana', 'A sumo suit', 'A sequined glove'],
		answer: 0
    },
    {
        question: 'In S6E20 "Secretary\'s Day" Erin finds out Andy had a relationship in the past with a coworker that he\'d never told her about.  Who with?',
        options: ['Pam', 'Meredith', 'Angela', 'Kelly'],
		answer: 2
    },
    {
        question: 'In S6E21 "Body Language" The episode begins with Michael trying to learn a foreign language.  Which?',
        options: ['German', 'French', 'Mandarin Chinese', 'Spanish'],
		answer: 3
    },
    {
        question: 'In S6E22 "The Cover-Up" Someone pranks Andy into believing there is a corporate conspiracy involving Sabre\'s smoking printers.  Who was the pranker?',
        options: ['Jim', 'Darryl', 'Dwight', 'Gabe'],
		answer: 1
    },
    {
        question: 'In S6E23 "The Chump" Michael claims that if he had a gun with two bullets and found himself in a room with two infamous figures and Toby, he would shoot Toby twice.  Who are those figures?',
        options: ['Hitler & Bin Laden', 'Stalin & Mussolini', 'Hitler & Stalin', 'Kim Jong Il & Saddam Hussein'],
		answer: 0
    },
    {
        question: 'In S6E24 "Whistleblower" What new company is David Wallace involved in?',
        options: ['Suck it', 'Staples', 'Enron', 'McDonald\'s'],
		answer: 0
    },
    {
        question: 'In S7E1 "Nepotism" Who went to minority executive training over the summer?',
        options: ['Darryl', 'Oscar', 'Kelly', 'Stanley'],
		answer: 2
    },
    {
        question: 'In S7E2 "Counseling" Michael says he was probed.  By whom?',
        options: ['Toby', 'Alf', 'His mom', 'Himself'],
		answer: 1
    },
    {
        question: 'In S7E3 "Andy\'s Play" What musical is Andy starring in?',
        options: ['Les Miserables', 'Grease', 'Dreamgirls', 'Sweeney Todd'],
		answer: 3
    },
    {
        question: 'In S7E4 "Sex Ed" Someone in The Office thinks they have herpes.  Who is it?',
        options: ['Phyllis', 'Dwight', 'Michael', 'Meredith'],
		answer: 2
    },
    {
        question: 'In S7E5 "The Sting" What actor guest stars as Danny Cordray?',
        options: ['Timothy Olyphant', 'Josh Duhamel', 'Johnny Knoxville', 'Ryan Reynolds'],
		answer: 0
    },
    {
        question: 'In S7E6 "Costume Contest" Who wins the costume contest?',
        options: ['Oscar', 'Kelly', 'Dwight', 'Pam'],
		answer: 0
    },
    {
        question: 'In S7E7 "Christening" What two Office members decide to join a church group headed for Mexico, but later change their minds?',
        options: ['Michael & Andy', 'Michael & Dwight', 'Andy & Erin', 'Jim & Pam'],
		answer: 0
    },
    {
        question: 'In S7E8 "Viewing Party" The Office collects at Gabe\'s house to watch a hit TV show.  Name that show.',
        options: ['American Idol', 'Glee', 'Lost', 'Dexter'],
		answer: 1
    },
    {
        question: 'In S7E9 "WUPHF.com" Who is the proprietor of WUPHF.com?',
        options: ['Andy', 'Michael', 'Creed', 'Ryan'],
		answer: 3
    },
    {
        question: 'In S7E10 "China" Michael says this: "My whole life I believed America was number one.  Not America is number two.  England is number two.  China should be like ___" Finish the quote.',
        options: ['Three', 'Five', 'Eight', 'Twelve'],
		answer: 2
    },
    {
        question: 'In S7E11 "Classy Christmas" Kelly chooses the gift from corporate to everyone in The Office.  What did she pick?',
        options: ['Personalized coffee mugs', 'Shot glasses', 'Robes', 'Hello Kitty laptop sleeves'],
		answer: 3
    },
    {
        question: 'In S7E12 "Ultimatum" What is Creed\'s New Year\'s resolution?',
        options: ['To read more books', 'To gain 15 lbs', 'To become a pop star', 'To accomplish the perfect cartwheel'],
		answer: 3
    },
    {
        question: 'In S7E13 "The Seminar" Who does Andy call a "brilliant little bitch"?',
        options: ['Michael', 'Gabe', 'Pam', 'Kelly'],
		answer: 3
    },
    {
        question: 'In S7E14 "The Search" Where do Michael and Holly have their reunion kiss?',
        options: ['At a hot dog stand', 'In the Office', 'On the roof of a building', 'At a Chinese restaurant'],
		answer: 2
    },
    {
        question: 'In S7E15 "PDA" What does Dwight say would be his perfect Valentine\'s Day?',
        options: ['Flowers, candy, violinist, diamonds...', 'Pizza, soda, the moon, someone to share it with', 'A night with Angela', 'Sitting at home with his 3 cell phones, fielding desperate calls from people who want to buy one of the 50 restaurant reservations he\'d made 6 months prior'],
		answer: 3
    },
    {
        question: 'In S7E16 "Threat Level Midnight" Who is Michael Scarn\'s late wife?',
        options: ['Catherine Zeta Jones', 'Eva Longoria', 'Pam', 'Teri Hatcher'],
		answer: 0
    },
    {
        question: 'In S7E17 "Todd Packer" What Office rivals join forces to prank and get rid of Todd Packer?',
        options: ['Michael & Toby', 'Angela & Pam', 'Angela & Kevin', 'Jim & Dwight'],
		answer: 3
    },
    {
        question: 'In S7E18 "Garage Sale" Who gets engaged?',
        options: ['Ryan & Kelly', 'Pam & Jim', 'Michael & Holly', 'Dwight & Angela'],
		answer: 2
    },
    {
        question: 'In S7E19 "Training Day" Who plays DeAngelo Vickers?',
        options: ['Jimmy Fallon', 'Will Ferrell', 'Conan O\'Brien', 'Dan Aykroyd'],
		answer: 1
    },
    {
        question: 'In S7E20 "Michael\'s Last Dundies" The Office sings Michael a goodbye parody version of a song from what famous musical?',
        options: ['Rent', 'Grease', 'Cats', 'Sweeney Todd'],
		answer: 0
    },
    {
        question: 'In S7E21 "Goodbye Michael" What is Michael Scott\'s very last audible joke?',
        options: ['I actually don\'t understand deathbeds. I mean, who would buy that?', 'That\'s what she said.', 'Goodbyes Stink.', 'Catch you guys on the flippity flip.'],
		answer: 0
    },
    {
        question: 'In S7E22 "The Inner Circle" DeAngelo gets injured at the end of the episode doing what?',
        options: ['Playing with the bailer', 'He\'s hit by a car in the parking lot', 'He gets shot by Dwight', 'Playing basketball in the warehouse'],
		answer: 3
    },
    {
        question: 'In S7E23 "Dwight K. Schrute, (Acting) Manager" Dwight fires a gun in the Office near one of his coworkers, causing some minor hearing damage.  Name that coworker.',
        options: ['Stanley', 'Andy', 'Erin', 'Jim'],
		answer: 1
    },
    {
        question: 'In S7E24 "Search Committee" Who is the manager of the Scranton branch in the beginning of the episode?',
        options: ['Dwight', 'Jim', 'Stanley', 'Creed'],
		answer: 3
    },
    {
        question: 'In S8E1 "The List" Whose new catch phrase is "And shove it up your butt!"?',
        options: ['Gabe', 'Robert California', 'Stanley', 'Creed'],
		answer: 2
    },
    {
        question: 'In S8E2 "The Incentive" Who gets a tattoo?',
        options: ['Andy', 'Jim', 'Erin', 'Kelly'],
		answer: 0
    },
    {
        question: 'In S8E3 "Lotto" What does Darryl say he\'s allergic to?',
        options: ['Andy', 'Soy', 'Peanuts', 'Eggs'],
		answer: 1
    },
    {
        question: 'In S8E4 "Garden Party" Pam is pregnant and reveals what her and Jim are going to name their new baby.  What\'s the name?',
        options: ['Michael Scott', 'Phillip', 'CeCe', 'Jim Jr.'],
		answer: 1
    },
    {
        question: 'In S8E5 "Spooked" What is Creed afraid of?',
        options: ['Robert California', 'Ferris Wheels', 'Beans', 'Snakes'],
		answer: 3
    },
    {
        question: 'In S8E6 "Doomsday" Andy plays a song at the end of each day.  Name that song.',
        options: ['Hello, Goodbye', 'Closing Time', 'Goodbye, My Lover', 'Jump Around'],
		answer: 1
    },
    {
        question: 'In S8E7 "Pam\'s Replacement" Who is Pam\'s replacement?',
        options: ['Katy', 'Cathy', 'Clark', 'Pete'],
		answer: 1
    },
    {
        question: 'In S8E8 "Gettysburg" What color are the "DM does GB" hats everyone wears?',
        options: ['Pink', 'Blue', 'Green', 'Yellow'],
		answer: 0
    },
    {
        question: 'In S8E9 "Mrs. California" What actress plays Mrs. California?',
        options: ['Diane Lane', 'Maura Tierney', 'Sarah Jessica Parker', 'Brooke Shields'],
		answer: 1
    },
    {
        question: 'In S8E10 "Christmas Wishes" Who had scoliosis as a child?',
        options: ['Dwight', 'Andy', 'Val', 'Erin'],
		answer: 3
    },
    {
        question: 'In S8E11 "Trivia" What team won the trivia contest?',
        options: ['The Einsteins', 'A-Team', 'The Backups', 'Aesop\'s Foibles'],
		answer: 0
    },
    {
        question: 'In S8E12 "Pool Party" Who is the first to get naked?',
        options: ['Meredith', 'Andy', 'Robert California', 'Creed'],
		answer: 2
    },
    {
        question: 'In S8E13 "Jury Duty" Who has jury duty?',
        options: ['Stanley', 'Jim', 'Andy', 'Pam'],
		answer: 1
    },
    {
        question: 'In S8E14 "Special Project" Who is plotting to break up Jim and Pam\'s marriage?',
        options: ['Dwight', 'Cathy', 'Andy', 'Angela'],
		answer: 1
    },
    {
        question: 'In S8E15 "Tallahassee" Who\'s got "Nine lives and a nine inch-"...?',
        options: ['Robert California', 'Gabe', 'Andy', 'Todd Packer'],
		answer: 3
    },
    {
        question: 'In S8E16 "After Hours" What, according to Dwight, is English peoples\' main use today?',
        options: ['Giving something for America to look up to', 'Judging American talent', 'Caving in to the U.N.', 'Making shepherd\'s pie'],
		answer: 1
    },
    {
        question: 'In S8E17 "Test the Store" What is the new Sabre tablet device called?',
        options: ['The Triangle', 'The Sabre Tooth', 'The Pyramid', 'The sPad'],
		answer: 2
    },
    {
        question: 'In S8E18 "Last Day in Florida" What two Office dads compete for Kevin\'s cookie business?',
        options: ['Jim & Darryl', 'Jim & Toby', 'Toby & Darryl', 'Stanley & Jim'],
		answer: 2
    },
    {
        question: 'In S8E19 "Get the Girl" Who briefly raced a formula one car, for the slowest three laps ever recorded?',
        options: ['Andy', 'Nellie', 'Robert California', 'Erin'],
		answer: 1
    },
    {
        question: 'In S8E21 "Angry Andy" Which of these are NOT one of the 12 cliches Phyllis says every time it rains?',
        options: ['"Nobody knows how to drive in the rain"', '"The plants are going to love this"', '"It\'s really coming down out there"', '"I actually sleep better when it\'s raining"'],
		answer: 2
    },
    {
        question: 'In S8E22 "Fundraiser" What common food item had Nellie never eaten before?',
        options: ['Hot Dogs', 'Hamburgers', 'Popcorn', 'Tacos'],
		answer: 3
    },
    {
        question: 'In S8E23 "Turf War" What does Robert California compare shaping a company to?',
        options: ['Training a Geisha', 'Attending Burning Man', 'Learning to use nunchucks', 'Making love to a woman'],
		answer: 0
    },
    {
        question: 'In S8E24 "Free Family Portrait Studio" Andy convinces someone to buy back Dunder Mifflin from Sabre.  Who?',
        options: ['Michael', 'Jan', 'David Wallace', 'His parents'],
		answer: 2
    },
    {
        question: 'In S9E1 "New Guys" Where have Kelly & Ravi (and Ryan) moved?',
        options: ['Miami, Florida', 'Miami University in Ohio', 'Philidelphia', 'New York'],
		answer: 1
    },
    {
        question: 'In S9E2 "Roy\'s Wedding" What does Creed say is "the worst"?',
        options: ['Justin Beiber', 'Michael being gone', 'The Taliban', 'Can openers'],
		answer: 2
    },
    {
        question: 'In S9E3 "Andy\'s Ancestry" What was the first name of Jim and Pam\'s asian actor friend who pretended to be Jim one morning as a prank on Dwight?',
        options: ['Steve', 'John', 'Joe', 'Matthew'],
		answer: 0
    },
    {
        question: 'In S9E4 "Work Bus" What kind of pies does Pam NOT like?',
        options: ['Apple', 'Blueberry', 'Cherry', 'Rhubarb'],
		answer: 3
    },
    {
        question: 'In S9E5 "Here Comes Treble" What comedian played Broccoli Rob?',
        options: ['John Stewart', 'Steven Colbert', 'Conan O\'Brien', 'Craig Ferguson'],
		answer: 1
    },
    {
        question: 'In S9E6 "The Boat" Andy\'s family is in trouble because his dad took off with a younger woman leaving the Bernards in financial ruin.  Where did his dad go?',
        options: ['Greece', 'The Bahanamas', 'Argentina', 'South Africa'],
		answer: 2
    },
    {
        question: 'In S9E7 "The Whale" Who becomes Jan\'s new assistant in exchange for her giving Dunder Mifflin the Scranton White Pages\' business?',
        options: ['Pete', 'Clark', 'Hunter', 'Nate'],
		answer: 1
    },
    {
        question: 'In S9E8 "The Target" Angela figures out that someone has been sleeping with her husband, the Senator.  Who?',
        options: ['Meredith', 'Kevin', 'Erin', 'Oscar'],
		answer: 3
    },
    {
        question: 'In S9E9 "Dwight Christmas" What Christmas movie does Pete have memorized line for line?',
        options: ['A Christmas Story', 'Home Alone', 'Die Hard', 'Christmas Vacation'],
		answer: 2
    },
    {
        question: 'In S9E10 "Lice" Who shaves their head?',
        options: ['Jan', 'Pete', 'Creed', 'Meredith'],
		answer: 3
    },
    {
        question: 'In S9E11 "Suit Warehouse" What is the name of Jim\'s new company that Darryl is interviewing for?',
        options: ['Athlead', 'Sports R Us', 'Philly Sports Management', 'PBJ Sports Marketing'],
		answer: 0
    },
    {
        question: 'In S9E12 "Customer Loyalty" Who comforts Pam when she cries after having a fight with Jim?',
        options: ['Jim', 'Andy', 'Kevin', 'Brian the boom guy'],
		answer: 3
    },
    {
        question: 'In S9E13 "Junior Salesmen" Who, by the end of the episode, becomes Pam\'s new desk mate?',
        options: ['Andy', 'Rolf', 'Erin', 'Clark'],
		answer: 3
    },
    {
        question: 'In S9E14 "Vandalism" Pam\'s warehouse mural is defaced.  Who did it?',
        options: ['Nate', 'Frank', 'Brian the boom guy', 'Jim'],
		answer: 1
    },
    {
        question: 'In S9E15 "Couple\'s Discount" Who comes back after a long absence?',
        options: ['Michael', 'Jan', 'David Wallace', 'Andy'],
		answer: 3
    },
    {
        question: 'In S9E16 "Moving On" What is the name of the company Pam interviews for?',
        options: ['Simon Realty', 'Saul Goodman Associates', 'Dunder Mifflin, Philidelphia', 'Scranton White Pages'],
		answer: 0
    },
    {
        question: 'In S9E17 "The Farm" Whose funeral has Dwight\'s family gathered for?',
        options: ['Mose\'s', 'Aunt Shirley\'s', 'Michael Scott\'s', 'Grandpa Heinrich\'s'],
		answer: 1
    },
    {
        question: 'In S9E18 "Promos" Who is TexasPoonTappa?',
        options: ['Nellie', 'Some random internet person', 'Andy', 'Toby'],
		answer: 0
    },
    {
        question: 'In S9E19 "Stairmageddon" Who shoots Stanley with a tranquilizer dart at the END of the episode?',
        options: ['Dwight', 'Clark', 'Stanley', 'Mose'],
		answer: 2
    },
    {
        question: 'In S9E20 "Paper Airplanes" What does Creed throw during the paper airplane contest?',
        options: ['A Paper Airplane', 'Himself', 'A nickle', 'A melon'],
		answer: 3
    },
    {
        question: 'In S9E21 "Livin\' The Dream" How does Andy burn his final bridge with Dunder Mifflin, allowing him to pursue his dream of stardom?',
        options: ['He flips off David Wallace', 'He gropes Toby\'s weiner', 'He defecates on David Wallace\'s car', 'He steals from Creed'],
		answer: 2
    },
    {
        question: 'In S9E22 "A.A.R.M." Who becomes the Assistant to the Assistant to the Regional Manager?',
        options: ['Dwight', 'Clark', 'Erin', 'Jim'],
		answer: 0
    },
    {
        question: 'In S9E23 "Finale" Who retired and moved to Florida?',
        options: ['Creed', 'Phyllis', 'Stanley', 'Jim & Pam'],
		answer: 2
    },
];

export class TriviaDb {

}