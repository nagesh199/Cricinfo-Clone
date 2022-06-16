const data=[]

function News(id,image, Title, shortdec, time) {
  this.id=id
  this.image = image;
  this.Title = Title;
  this.shortdec = shortdec;
  this.time = time;
  
}

const ld1=["New Zealand allrounder James Neesham has decided to move on from Wellington Firebirds after a four-year career in an amicable mutual decision. The 31-year-old turned out for Otago for seven years before joining Wellington in the 2018-19 season, and has now said he will be seeking an opportunity with Auckland.","Having done seven years at Otago and now four years at Wellington, it's now come to the point where I am sort of looking for a bit more settled summer at home, I guess and returning to Auckland is what makes the sense for that, Neesham said.Weve had a lot of conversations with Wellington over the last three or four weeks, going around making it work and in the end it sort of became apparent to all of us that it was a bit too hard.","I have had discussions with the (Auckland) Aces as well around being involved with their squad in a sort of training capacity. The season is still a long, long way off so what that means a playing aspect is little bit unclear but we will be having those discussions moving forward with respect to trying to represent New Zealand as much as I can with my base in Auckland.","Neesham was left out of the New Zealand central contract list for the 2022-23 season, and currently does not have a domestic contract as well for the upcoming season.","[I am] looking forward to the T20 World Cup and then the ODI World Cup as well, next year. The nature of the cricket I play at the moment, there are going to be no shortage of opportunities to prove that I am playing well, whether it be in New Zealand or overseas. I have made it very clear to NZC that my goal is to represent New Zealand going forward in the white-ball cricket formats.","Neesham, having contemplated giving up the game altogether a few years ago, reignited his career after signing up with Wellington for the 2018-19 season. He played a key role in taking the side to their first Ford Trophy win that season, scoring 503 runs in 12 matches at an average of 62.87 and taking 13 wickets.","We've had some serious fun and experienced some serious success, and I know that the most successful era of Wellington cricket isn't over yet, so I wish the team all the best for the future.","Neesham is currently with Northamptonshire in the T20 Vitality Blast. He was also part of the Rajasthan Royals side that reached the final of IPL 2022. More recently, Neesham has put himself forward for the wildcard draft at the Hundred competition."]


const d1 = new News(1,"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/281400/281469.10.jpg",
"James Neesham calls time on Wellington career, reaffirms commitment to New Zealand","The allrounder was left out of the NZC central contract list for the 2022-23 season and currently does not have a domestic contract","4 hrs ago");

const d2=new News(2,"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/337700/337787.10.jpg","Back injury sidelines Yasir Ali from West Indies Tests ","The batter sustained the injury during Bangladesh's practice match against CWI President's XI","4 hrs ago")

const d3=new News(3,"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/327000/327044.10.jpg","Dave Houghton appointed Zimbabwe head coach"
,"He takes over from Lalchand Rajput, who will now work with the side as technical director","3 hrs ago")

const d4=new News(4,"	https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/337700/337787.10.jpg","Back injury sidelines Yasir Ali from West Indies Tests","The batter sustained the injury during Bangladesh's practice match against CWI President's XI","8 hrs ago ")

const d5=new News(5,"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/340900/340965.10.jpg","Unchanged South Africa bowl in bid to win the series against India","The hosts too went in with the same XI, in Visakhapatnam, despite their lack of a win so far","9 hrs ago")

const d6= new News(6,"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/340900/340970.10.jpg","England hopes resting on Ben Stokes, Jonny Bairstow ","Pair put on 46 runs to tea with England needing 160 more, NZ six wickets in final session","11 hrs ago")

const d7=new News(7,"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/340900/340933.10.jpg","Former South African bowler Pumelela Matshikwe convicted in 2015 Ram Slam fixing case","Dawson, Gubbins and Brown all pass fifty but visitors hold 203-run lead heading into third day","13 hrs ago")

const d8=new News(8,"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_480/lsci/db/PICTURES/CMS/338300/338370.4.jpg","Toby Roland-Jones reminds Derbyshire of frailties in five-star display at Chesterfield","Masood and Madsen show the way before Middlesex turn up the heat","11 hrs ago")

const d9=new News(9,"	https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_480/lsci/db/PICTURES/CMS/340900/340931.4.jpg","Kent fight back via fifties to Daniel Bell-Drummond and Ben Compton","Hosts three down trailing Gloucestershire by 206 runs after Ollie Price half-century","12 hours ago")

const d10=new News(10,"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_480/lsci/db/PICTURES/CMS/340800/340809.4.jpg","'Plan was to hit three boundaries an over in the last three overs' - Dasun Shanaka on Pallekele miracle","The SL captain helped his side smash a record 59 runs off the last three overs in the third T20I, in front of an euphoric crowd","12 hours ago")

const d11=new News(11,"https://www.crichashtag.com/uploads/news/340909.6.jpg","Rory Burns turns a few necks to leave Somerset feeling twitchy","Somerset fledglings ruffled as Surrey take command at Taunton","13 hours ago")

const d12=new News(12,"https://a2.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1319338_1296x729.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg","Babar Azam: Pakistan 'are playing proactive, positive cricket","People said we couldn't chase 350. We did [against Australia], and our bowling also defended totals","14 hours ago")

const d13=new News(13,"https://a3.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1315460_900x798.jpg&w=570&format=jpg","Dale Steyn: 'More confident' Bhuvneshwar Kumar has found the missing ingredient","When we got to the IPL, he seemed to have upped his pace. He was operating between 133 and 137, sometimes touching 140","14 hours ago")

const d14=new News(14,"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_480/lsci/db/PICTURES/CMS/340700/340736.4.jpg","Pooran: 'We definitely need to buff up on ourselves, myself especially'","He admitted the team's shortcomings, but found poisitives in Hosein's all-round game and the players' character","15 hours ago")

const d15=new News(15,"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/340800/340861.10.jpg","Resourceful South Africa look to seal series with two to play","India's shortcomings with the ball in the first two matches makes visitors favourites despite uncertainty over de Kock's availability","16 hours ago")

const d16=new News(16,"https://a1.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1319468_1296x729.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg","England benefit from New Zealand's self-destructive tendencies","Tourists in need of some Mitchell magic with last day in the balance","17 hours ago")

const d17=new News(17,"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F995761_900x506.jpg&w=900&h=506&scale=crop&cquality=80&location=origin&format=jpg","Sitanshu Kotak, Sairaj Bahutule, Munish Bali to assist VVS Laxman in Ireland","The trio will be part of the support staff during India's two-T20I tour","18 hours ago")

const d18= new News(18,"https://a.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1318837_1296x729.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg","England bring in Mark Alleyne, Neil Killeen as part of coaching team for Netherlands tour","Pair drafted in for new white-ball coach Matthew Mott's first engagement","19 hours ago")

const d19=new News(19,"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_480/lsci/db/PICTURES/CMS/340800/340863.4.jpg","Kyle Jamieson sent for back scan, ruled out of remainder of innings","Fast bowler experiences 'sharp pain' in lower back during wicketless outing at Trent Bridge","20 hours ago")

data.push(d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19)
module.exports=data