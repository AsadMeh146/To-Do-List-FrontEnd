import React from 'react';
import './about.css'; // Import your custom CSS file for styling
import profile from "../../assets/images/DP.jpg";
function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About the TaskTracker App</h1>
        <p>
          Welcome to the Task Tracker app, a powerful tool designed to help you manage your tasks efficiently and boost your productivity.
        </p>
        <p>
          As a Computer Science student at UET Lahore, I've had the opportunity to work on various projects and assignments. During my internship at Apex Space, I was tasked with managing complex projects with tight deadlines. This experience led me to realize the importance of effective task management.
        </p>
        <p>
          The Task Tracker app was born out of the need to organize tasks, set priorities, and collaborate seamlessly. With this app, you can easily create, update, and track your tasks in one centralized location. Whether you're a student juggling assignments or a professional handling work projects, this app is designed to streamline your workflow.
        </p>
        <p>
          My motivation to develop this app was to provide a solution that simplifies the task management process. I understand the challenges of staying organized, and I wanted to create a tool that helps users take control of their tasks and achieve their goals effectively.
        </p>
        <p>
          Thank you for using the Task Tracker app. I hope it becomes an essential part of your productivity toolkit. Feel free to provide feedback or get in touch if you have any suggestions or questions!
        </p>
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <div className="profile-card">
        <div className="profile-image">
            <img src={profile} alt="Profile" />
        </div>
        <div className="profile-info mx-3 ">
            <h3 className='flex-item'>Asad Mehmood</h3>
            <p className='flex-item'>Computer Science Student</p>
            <p className='flex-item'>Passionate Software Developer</p>
            <p className='flex-item'>Explorer of New Technologies</p>
        </div>
        </div>

        <p>
          I am a dedicated Computer Science student at UET Lahore with a strong academic background. My passion for software development drives me to create meaningful solutions that solve real-world problems. I thrive on challenges and strive to continuously improve my skills.
        </p>
        <p>
          When I'm not coding, you'll find me exploring virtual worlds in games, collaborating with fellow developers, and staying up-to-date with the latest trends in technology.
        </p>
        <p>
          Thank you for using the Task Tracker app. I hope it empowers you to manage your tasks efficiently and achieve your goals. Feel free to connect with me for feedback, collaboration, or just to discuss technology and gaming!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
