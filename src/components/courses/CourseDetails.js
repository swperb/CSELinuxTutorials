// components/CourseDetails.js
const CourseDetails = ({id, title, description }) => (
    <div>
      <h1>CSE {id}: {title}</h1>
      <p>{description}</p>
    </div>
  );
  
  export default CourseDetails;
  