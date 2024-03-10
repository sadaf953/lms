import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import courses from './courses.js';

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

ReactDOM.render(<App />, document.getElementById('root'));