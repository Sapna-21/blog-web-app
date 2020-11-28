import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface BlogPost {
  title      : string
  introLine  : string
  content    : string
  imageUrl   : string
  author     : string
  dateOfPost : string
  authorImg  : string
}

@Component({
  selector: 'app-blog-lists',
  templateUrl: './blog-lists.component.html',
  styleUrls: ['./blog-lists.component.scss']
})

export class BlogListsComponent implements OnInit {

  title = 'blog-web-app'  

  blogPosts : BlogPost[] = [
    {
      title      : '20 things most people learn too late in life',
      introLine  : 'Life is a journey of twists and turns, peaks and valleys, mountains to climb and oceans to explore.',
      imageUrl   : '../assets/images/image11.jpeg',
      author     : 'Blair Woldorf',
      dateOfPost : 'Nov 20',
      authorImg  : '../assets/images/authorImg.jpeg',
      content    : `The day has already begun to lessen. It has shrunk considerably, but yet will still allow a goodly space of time if one rises, so to speak, with the day itself. We are more industrious, and we are better men if we anticipate the day and welcome the dawn.” — Seneca

      The Stoics believed in rising with the sun. As Seneca states, we are more productive and better people when we wake up in time to greet the sun. This also allows more time for the morning practices that will follow, as well as the stillness that only the early morning can provide, to ensure you are well set up for a day lived well.
      Gratitude
      
      We must always remind ourselves of the privilege of being alive, and be grateful for all that we have been given. Remind yourself of this when you wake up. Marcus Aurelius said,
      
          “When you arise in the morning, think of what a precious privilege it is to be alive — to breathe, to think, to enjoy, to love.”
      
      If we view each day as a bonus day — to live, to love, to do the things we love — we can’t help but experience gratitude. Viewing each day in this way will ensure that you live your day well.
      Meditation
      
      The Stoics were big on meditation, although not the standard practice we are accustomed to today. It is important in the morning to be able to sit or go for a walk in silence, listen to what is going on in your body and mind, gather your thoughts, and reflect on the day ahead.
      
      It is important to regularly have this time alone with your thoughts — to find stillness and reset. Marcus Aurelius says,
      
          “People look for retreats for themselves, in the country, by the coast, or in the hills. There is nowhere that a person can find a more peaceful and trouble-free retreat than in his own mind. . . . So constantly give yourself this retreat, and renew yourself.”
      
      Walking
      
      Walking was important for the Stoics:
      
          “We should take wandering outdoor walks so that the mind might be nourished and refreshed by the open air and deep breathing.” — Seneca
      
      Not only does walking provide physical exercise, but Seneca suggests that it shines a light on the soul:
      
          “Birds that are being prepared for the banquet, that they may be easily fattened through lack of exercise, are kept in darkness; and similarly, if men vegetate without physical activity, their idle bodies are overwhelmed with flesh, and in their self-satisfied retirement the fat of indolence grows upon them…But this, to my thinking, would be among the least of their evils. How much more darkness there is in their souls! Such a man is internally dazed.”
      
    
      The Stoics borrowed a practice from the Pythagoreans, of walking at dawn and witnessing the stars going down and the sun coming up. This humbled them at the start of their day, reminding them of how small their place in the world is. It also reminds one of the workings of the cosmos, and the universe, and therefore sympatheia — our connection with the universe and everything in it. It reminds us to pass over our control to what the universe has in store for us — our place within the bigger plan.
      
      In Meditations, 6.38, Marcus Aurelius says,
      
          “Meditate often on the interconnectedness and mutual interdependence of all things in the universe.”
      
      Ryan Holiday further explains,
      
          “Sympatheia is an invitation to us to take a step back, zoom out and see life from a higher vantage point than our own. It changes our value judgments, weakens the power that luxury and temptation have over us, reduces the seemingly insurmountable differences between people and races and turns the worries of daily life from anxiety attacks to absurdities.”
      
      Sympatheia reminds us that we are all one, and therefore helps us to treat others with respect and in a non-judgmental way. We must look out for one another and care about each other, and therefore we must be patient and accepting of others. This view also puts things in perspective — our problems are so tiny among the vastness of the cosmos.
      `
    },
    {
      title      : 'How to use Kaggle to Master Data Science',
      introLine  : 'Kaggle is one of the world’s largest community of data scientists and machine learning specialists.',
      imageUrl   : '../assets/images/image12.jpeg',
      author     : 'Serena Woodsen',
      dateOfPost : 'Oct 29',
      authorImg  : '../assets/images/authorImg2.jpeg',
      content    : `The day has already begun to lessen. It has shrunk considerably, but yet will still allow a goodly space of time if one rises, so to speak, with the day itself. We are more industrious, and we are better men if we anticipate the day and welcome the dawn.” — Seneca

      The Stoics believed in rising with the sun. As Seneca states, we are more productive and better people when we wake up in time to greet the sun. This also allows more time for the morning practices that will follow, as well as the stillness that only the early morning can provide, to ensure you are well set up for a day lived well.
      Gratitude
      
      We must always remind ourselves of the privilege of being alive, and be grateful for all that we have been given. Remind yourself of this when you wake up. Marcus Aurelius said,
      
          “When you arise in the morning, think of what a precious privilege it is to be alive — to breathe, to think, to enjoy, to love.”
      
      If we view each day as a bonus day — to live, to love, to do the things we love — we can’t help but experience gratitude. Viewing each day in this way will ensure that you live your day well.
      Meditation
      
      The Stoics were big on meditation, although not the standard practice we are accustomed to today. It is important in the morning to be able to sit or go for a walk in silence, listen to what is going on in your body and mind, gather your thoughts, and reflect on the day ahead.
      
      It is important to regularly have this time alone with your thoughts — to find stillness and reset. Marcus Aurelius says,
      
          “People look for retreats for themselves, in the country, by the coast, or in the hills. There is nowhere that a person can find a more peaceful and trouble-free retreat than in his own mind. . . . So constantly give yourself this retreat, and renew yourself.”
      
      Walking
      
      Walking was important for the Stoics:
      
          “We should take wandering outdoor walks so that the mind might be nourished and refreshed by the open air and deep breathing.” — Seneca
      
      Not only does walking provide physical exercise, but Seneca suggests that it shines a light on the soul:
      
          “Birds that are being prepared for the banquet, that they may be easily fattened through lack of exercise, are kept in darkness; and similarly, if men vegetate without physical activity, their idle bodies are overwhelmed with flesh, and in their self-satisfied retirement the fat of indolence grows upon them…But this, to my thinking, would be among the least of their evils. How much more darkness there is in their souls! Such a man is internally dazed.”
      
    
      The Stoics borrowed a practice from the Pythagoreans, of walking at dawn and witnessing the stars going down and the sun coming up. This humbled them at the start of their day, reminding them of how small their place in the world is. It also reminds one of the workings of the cosmos, and the universe, and therefore sympatheia — our connection with the universe and everything in it. It reminds us to pass over our control to what the universe has in store for us — our place within the bigger plan.
      
      In Meditations, 6.38, Marcus Aurelius says,
      
          “Meditate often on the interconnectedness and mutual interdependence of all things in the universe.”
      
      Ryan Holiday further explains,
      
          “Sympatheia is an invitation to us to take a step back, zoom out and see life from a higher vantage point than our own. It changes our value judgments, weakens the power that luxury and temptation have over us, reduces the seemingly insurmountable differences between people and races and turns the worries of daily life from anxiety attacks to absurdities.”
      
      Sympatheia reminds us that we are all one, and therefore helps us to treat others with respect and in a non-judgmental way. We must look out for one another and care about each other, and therefore we must be patient and accepting of others. This view also puts things in perspective — our problems are so tiny among the vastness of the cosmos.
      `
    },
    {
      title      : 'How to Structure Your Day Like a Stoic',
      introLine  : 'The Stoics believed in rising with the sun. As Seneca states, we are more productive and better people when we wake up in time to greet the sun.',
      imageUrl   : '../assets/images/image13.jpeg',
      author     : 'Nate Archibald',
      dateOfPost : 'Jun 26',
      authorImg  : '../assets/images/authorImg3.jpeg',
      content    : `The day has already begun to lessen. It has shrunk considerably, but yet will still allow a goodly space of time if one rises, so to speak, with the day itself. We are more industrious, and we are better men if we anticipate the day and welcome the dawn.” — Seneca

      The Stoics believed in rising with the sun. As Seneca states, we are more productive and better people when we wake up in time to greet the sun. This also allows more time for the morning practices that will follow, as well as the stillness that only the early morning can provide, to ensure you are well set up for a day lived well.
      Gratitude
      
      We must always remind ourselves of the privilege of being alive, and be grateful for all that we have been given. Remind yourself of this when you wake up. Marcus Aurelius said,
      
          “When you arise in the morning, think of what a precious privilege it is to be alive — to breathe, to think, to enjoy, to love.”
      
      If we view each day as a bonus day — to live, to love, to do the things we love — we can’t help but experience gratitude. Viewing each day in this way will ensure that you live your day well.
      Meditation
      
      The Stoics were big on meditation, although not the standard practice we are accustomed to today. It is important in the morning to be able to sit or go for a walk in silence, listen to what is going on in your body and mind, gather your thoughts, and reflect on the day ahead.
      
      It is important to regularly have this time alone with your thoughts — to find stillness and reset. Marcus Aurelius says,
      
          “People look for retreats for themselves, in the country, by the coast, or in the hills. There is nowhere that a person can find a more peaceful and trouble-free retreat than in his own mind. . . . So constantly give yourself this retreat, and renew yourself.”
      
      Walking
      
      Walking was important for the Stoics:
      
          “We should take wandering outdoor walks so that the mind might be nourished and refreshed by the open air and deep breathing.” — Seneca
      
      Not only does walking provide physical exercise, but Seneca suggests that it shines a light on the soul:
      
          “Birds that are being prepared for the banquet, that they may be easily fattened through lack of exercise, are kept in darkness; and similarly, if men vegetate without physical activity, their idle bodies are overwhelmed with flesh, and in their self-satisfied retirement the fat of indolence grows upon them…But this, to my thinking, would be among the least of their evils. How much more darkness there is in their souls! Such a man is internally dazed.”
      
    
      The Stoics borrowed a practice from the Pythagoreans, of walking at dawn and witnessing the stars going down and the sun coming up. This humbled them at the start of their day, reminding them of how small their place in the world is. It also reminds one of the workings of the cosmos, and the universe, and therefore sympatheia — our connection with the universe and everything in it. It reminds us to pass over our control to what the universe has in store for us — our place within the bigger plan.
      
      In Meditations, 6.38, Marcus Aurelius says,
      
          “Meditate often on the interconnectedness and mutual interdependence of all things in the universe.”
      
      Ryan Holiday further explains,
      
          “Sympatheia is an invitation to us to take a step back, zoom out and see life from a higher vantage point than our own. It changes our value judgments, weakens the power that luxury and temptation have over us, reduces the seemingly insurmountable differences between people and races and turns the worries of daily life from anxiety attacks to absurdities.”
      
      Sympatheia reminds us that we are all one, and therefore helps us to treat others with respect and in a non-judgmental way. We must look out for one another and care about each other, and therefore we must be patient and accepting of others. This view also puts things in perspective — our problems are so tiny among the vastness of the cosmos.
      `
    },
  ]

  constructor(private route : Router) {}

  onClick(blogPost : BlogPost) {
    this.route.navigate(['viewBlog'], { queryParams : blogPost })
  }
  
  create() {
      this.route.navigate(['createBlog'])
  }

  ngOnInit(): void {
  }

}
