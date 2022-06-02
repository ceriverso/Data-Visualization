import Header from "../src/components/Header";
import style from "../src/css/index.module.css";

function Home() {
  
  return (
  <div className={style.indexContainer}>
    <Header />
      <p className={style.greeting}>I have always been the type of person who needs to see something working for me to fully understand how it works. Unfortunately I also have a hard time visualizing things.
        So I searched the internet high and low to find visualizations of sorting methods and found alot of good information but I was never able to find exactly what I was looking for. 
        All I had to show for my research was 50 open tabs and a headache.  I did find a tutorial on making a sorting visualizer. It was extremely vague, it didnt have any code snippets or 
        links to source code, just a 30 second video showing a brief example of what they made. This frustrated me at first but by the time I was done making my own project I was very thankful
        for that vague tutorial. I had to struggle through it, giving up and starting over 3 times before I made enough progress to be excited enough about it to see it through. 
        This site is not a tutorial, I am telling you all of this to say that if you are struggling with sorting methods I would highly suggest making a visualizer of your own. All I wanted was
        have one place to see how all of the methods work. In the end I got that and a lot more, the knowledge I gained on sorting and DOM manipulation has been invaluable.
      </p>
      </div> 
  )
}

export default Home;