
<h1 style="color:white; font-size:30px;text-align:center;">JavaScript 30 Challenge✨</h1>

<h2 style="color:white;text-align:center;">Thank you for visiting my JavaScript 30 Challenge repository! 🚀</h2>
<h3 style="color:whitesmoke;text-align:center;font-family:Roboto">PROJECT1 : DRUM KIT </h3>
<p style="color:white; font-size:15px;text-align:justify;">I've finished the Drum Kit, the challenge's initial project. For this project, a virtual drum set was made, with a separate drum sound assigned to each note on the keyboard. It was an excellent practice in event handling and DOM manipulation.</p>
<p style="color:white; font-size:15px;text-align:justify;"><b>What you'll discover...</b></p>
<b>Here is my project <a target="_blank" href="https://babybhavani.github.io/Javascript-Keyboard-Player-1/">Click here</a></b>
<b>You can find files <a href="https://github.com/babybhavani/Javascript-Keyboard-Player-1.git" target="_blank">HERE</a></b>
<h3>HTML</h3>

<ul type="circle">
<li>I started by creating an HTML file, adding a container element, and assigning the class name container. Every key on the drum set is contained in this piece.</li>
<li>Within the element with the class name container, I now took another container element. A kbd tag that included an alphabet or key was inserted inside this container. To access the alphabet's keycode, I utilized a data- attribute as a data-key and provided the alphabet's ASCII value.</li>
<li>Applied the same structure to all 26 characters.</li>
  <li>I've added the audio file with the help of audio tag. Here if you observe, I used the same data-key attribute values as similar as container elements. So that when the user click on any alphabet the sound will play.</li>
</ul>
<h3>CSS</h3>
<ul type="circle">
<li>I used CSS class selectors to style the child container components. </li> 
  <li>Perhaps at this point, you're more curious in how I implemented the transition effects? <br>
  Thus, transitions let you to define how an element switches between states. Different states can be described using pseudo-classes like:hover and:active, or they can be changed dynamically with JavaScript.(br> Why then is it related? I used a class selector with name played in my project, and I included a 0.2-second transition to it. This class will thus be assigned to the child element when the key is tapped on the keyboard.It will be explained in the javascript section.</li>
</ul>



![JavaScript Music - Google Chrome 29-02-2024 23_24_53](https://github.com/babybhavani/Javascript-Keyboard-Player-1/assets/152834101/062fdf88-d0d1-4f34-a329-4bbb33740915)




<h3 >Most Important Phase ✨JAVASCRIPT✨</h3>
<ul type="circle">
<li>I made simply a function with name <q>PlaySound()</q> and implemented it. How??.. Let's look at it </li>
<li>function playSound(event){<br>
    const audio=document.querySelector(`audio[data-key="${event.keyCode}"]`);<br>
    if(!audio) return;<br>
    audio.currentTime=0;<br>
    audio.play();<br>
    const key=document.querySelector(`.key[data-key="${event.keyCode}"]`);<br>
    key.classList.add('played');<br>
    
}<br></li>
<li>In the first line of above code I accessed the element which have the audio file. Now we have audio files for all 26 alphabets. Which audio file we should access??  </li>
<li>Whuen the user press on any alphabet key the audio should play. That's why I added the data-key attributes for container as well as audio elements.</li>
<li>As the data-key attribute contains the keycode or ASCII value, when the user presses on any alphabetical key on keyboard, the event will be started. Now what are events??</li>
<li>Events are things that the system you are developing notifies you about so that your code can respond to them✨.</li>
<li>Events are things that take place in the system you are developing. When an event happens, the system generates a signal of some type, or "fires"), and it offers a way for code to execute automatically, triggering an action. Events are initiated within the browser window and are typically linked to a particular object within it. This might be the HTML page that is open in the tab that is now open, a group of components, or the whole window of the browser. Events can take place in a multitude of ways.</li>
<li>Coming to our code, when the user presses any alhabetical key the event will be raised.</li>
<li>Here I added an event listener of keyup and keydown.</li>
<li>The code representing the pressed key is provided by the keydown and keyup events, whereas the character input is shown by keypress. Keydown, keyup, and keypress will report a lowercase "a" as 65, but keypress will report 97. Every event reports a capital "A" as 65.</li>
<li>Here, the keyup and keydown are keyboard events. These events have some properties also. In the project I've used the keyCode prperty. Let's Learn about it. </li>
<li>A system- and implementation-dependent numerical code that indicates the unaltered value of the pressed key is represented by the deprecated KeyboardEvent.keyCode read-only property.</li>
<li>Since it has been out of support for a while, you should try to avoid using it. If KeyboardEvent.code is implemented, you should use it instead.</li>
<li>Now, when the user press on A key, the keyboard event will be raised. The keyCode will contain the 65 (ASCII value).</li>
<li>As audio file has data-key atrribute, the audio fill can be accessed. How?? When the user cliks on the key of the keyboard, the event will be raised and the function will be called.</li>
<li>In the fisrt line of the function, I've accessed the audio file which has the data-key as the ASCII value of the key that user presses.</li>
<li>Now,Why I used an if condition? If the user click the key that is other  than alphabetical key,the audio should not play. To evaluate ot to solve this problem I used the if condition. </li>

<li>Next line,is when you presses the same key for one or more times, It will not be played as many as you pressed. It will be played only once. So, If the audio current time is 0 and every time the user presses the same key the event raised and the function will be callled, everytime the function is called, the current time of the audio will be set to 0. </li>
<li>Moving Forward....Before Moving Forward, if you come this far, thanks for reading...</li>
<li>Now, the play() method will play the audio file.</li>
<li><p id="section">Here we come, the classList. The classes that the document holds,are stored in claslist. We can add or remove those classes dynamically using this classlist.
<br>Here I added the played class to the container's child element. So the when the user presses the alphabetical key the style will be applied. In this seletor, I've used the transform property, to scale up means increasing the size of an element.</p></li>
<li>Now,</li>
<li>function remove(event){<br>
    const key=document.querySelector(`.key[data-key="${event.keyCode}"]`);<br>
    key.classList.remove('played');<br>
}</li>
<li>This function will be called when the user release key.</li>
<li>When the user releases the key the keyup event will be raised. And the remove() function will be called. This function will removes the class played from the classlist of document.</li>
<LI>These are the things I've used so far.</LI>
<li>Thank you for reading, Hope it eould helped.</li>
</UL>
<h4>HAPPY CODING💻✨</h4>
