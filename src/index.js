import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const CourseCard = ({ course, courseId }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    if (!showDetails) {
      window.open(`show.html?id=${courseId}`, '_blank'); // Open show.html with course ID
    }
  };
  
  return (
    <div className="col-md-4 course-card d-flex flex-wrap">
      <div className="image-wrapper">
        <a href={course.link} target="_blank" rel="noopener noreferrer">
          <img src={course.image} alt={course.title} width="250" height="108" />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.author}</p>
        <p className="rating">
          <span className="star">&#9733;</span> {course.rating} | {course.learners} learners
        </p>
        {/* Button to toggle course details visibility */}
        <button className="btn btn-sm crs" onClick={toggleDetails} style={{backgroundColor: "#0056b3", color: "white"}}>
  Show Details
</button>

      </div>
    </div>
  );
};

// App component
const App = () => {
  const [filteredCourses, setFilteredCourses] = useState(courses);

  useEffect(() => {
    const searchInput = document.querySelector('input[type="search"]');
    const handleSearch = (event) => {
      const searchTerm = event.target.value.toLowerCase();
      const filtered = courses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm) ||
        course.author.toLowerCase().includes(searchTerm)
      );
      setFilteredCourses(filtered);
    };
    searchInput.addEventListener('input', handleSearch);
    return () => {
      searchInput.removeEventListener('input', handleSearch);
    };
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {filteredCourses.map((course) => <CourseCard key={course.id} course={course} courseId={course.id} />)}
      </div>
    </div>
  );
};

const courses = [
  {
      id: 1,
      title: "Accelerated Student Memory Mastery",
      author: "Dr. Rama Mehta",
      platform: "Udemy",
      description: "Memory Mastery, Memory Retention, Enhancing Self-Esteem & Confidence",
      image: "https://img-b.udemycdn.com/course/240x135/3695326_2d39_3.jpg",
      link: "https://www.udemy.com/course/accelerated-student-memory-mastery/learn/lecture/23763580?start=0#overview",
      rating: 4.5,
      price:"Free",
      learners: 1000
  },
  {
      id: 2,
      title: "Arduino",
      author: "Free Code Camp",
      platform: "Youtube",
      description: "Learn how to use Arduino hardware and software in this full course for beginners",
      image: "https://i.ytimg.com/vi/zJ-LqeX_fLU/hqdefault.jpg",
      link: "https://www.youtube.com/embed/rfscVS0vtbw",
      rating: 3.5,
      price:"Free",
      learners: 1654
  },
  {
      id: 3,
      title: "Machine Learning with Python",
      author: "Free Code Camp",
      platform: "Free Code Camp",
      description: "TensorFlow framework is used to build several neural networks and explore more advanced techniques like natural language processing and reinforcement learning.",
      image: "https://i.ytimg.com/vi/tPYj3fFJGjk/hqdefault.jpg",
      link: "https://www.freecodecamp.org/learn/machine-learning-with-python/",
      rating: 3.5,
      price:"Free",
      learners: 1654
  },

  {
      id: 4,
      title: "Introduction to Large Language Models",
      author: "Free Code Camp",
      platform: "Youtube",
      description: "Learn Python - Full Course for Beginners [Tutorial]",
      image: "https://cdn.qwiklabs.com/xObBJc2NLmPNIX735GDMYOeZvwM5Qps3cy%2F3%2Fr8no%2Bk%3D",
      link: "https://www.cloudskillsboost.google/paths/118/course_templates/539",
      rating: 2.5,
      price:"Free",
      learners: 1654
  },

  {
      id: 5,
      title: " NLP with Deep Learning",
      author: "Prof. Manning",
      platform: "YouTube",
      description: "Stanford CS224N: NLP with Deep Learning | Winter 2021",
      image: "https://i.ytimg.com/vi/rmVRLeJRkl4/hqdefault.jpg",
      link: "https://www.youtube.com/embed/rmVRLeJRkl4", 
      rating: 2.5,
      price:"Free",
      learners: 1654

  },

  {
      id: 6,
      title: "Python",
      author: "Free Code Camp",
      platform: "Youtube",
      image: "https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg",
      description: "Learn Python - Full Course for Beginners [Tutorial]",
      link: "https://www.youtube.com/embed/rfscVS0vtbw",
      rating: 5.0,
      price:"Free",
      learners: 200
  },
  {
      id: 7,
      title: "Building Recommender Systems with Machine Learning and AI",
      author: "Free Code Camp",
      platform: "Udemy",
      description: "How to create machine learning recommendation systems with deep learning, collaborative filtering, and Python.",
      image: "https://img-c.udemycdn.com/course/240x135/1726410_7b86.jpg",
      link: "https://www.udemy.com/course/building-recommender-systems-with-machine-learning-and-ai/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.INDIA&utm_content=deal4584&utm_term=_._ag_77882236463_._ad_533093955810_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_9062149_._pd__._&matchtype=&gad_source=1&gclid=CjwKCAiA0bWvBhBjEiwAtEsoW22eEztWmcaYXg4HMsrVXgT3WH1ZaAmD9H0ILZWVXH5UJyYgivQDkxoCX90QAvD_BwE&couponCode=IND21PM",
      rating: 4.7,
      price:499,
      learners: 45675
  },

  {
      id: 8,
      title: "Full Stack Web Development",
      author: "Simplilearn",
      platform: "Youtube",
      description: "Learn Full Stack Web Development - Full Course for Beginners [Tutorial]",
      image: "https://img.youtube.com/vi/R6RX2Zx96fE/hqdefault.jpg",
      link: "https://www.youtube.com/embed/R6RX2Zx96fE",
      rating: 3.5,
      price:"Free",
      learners: 236
  },
  {
      id: 9,
      title: "2D Animation",
      author: "Technical Dhuriya Analysis",
      platform: "Youtube",
      description: "Learn 2D Animation - Full Course for Beginners [Tutorial]",
      image: "https://img.youtube.com/vi/XmckF29tqGs/hqdefault.jpg",
      link: "https://www.youtube.com/embed/XmckF29tqGs",
      rating: 1.2,
      price:"Free",
      learners: 24
  },
  {
      id: 10,
      title: "Machine Learning Course",
      author: "Stanford Online",
      platform: "Youtube",
      description: "Learn ML - Full Course for Beginners [Tutorial]",
      image: "https://img.youtube.com/vi/jGwO_UgTS7I/hqdefault.jpg",
      link: "https://www.youtube.com/embed/jGwO_UgTS7I",
      rating: 4.5,
      price:"Free",
      learners: 4
  },
  {
      id:11,
      title: "Artificial Intelligence",
      author: "Edureka",
      platform: "Youtube",
      description: "Learn AI - Full Course for Beginners [Tutorial]",
      image: "https://img.youtube.com/vi/JMUxmLyrhSk/hqdefault.jpg",
      link: "https://www.youtube.com/embed/JMUxmLyrhSk",
      rating: 3.2,
      price:"Free",
      learners: 45
  },

]




ReactDOM.render(<App />, document.getElementById('root'));