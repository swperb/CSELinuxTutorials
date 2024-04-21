// components/InstructorSelector.js
const InstructorSelector = ({ instructors, onSelect }) => (
    <select onChange={e => onSelect(e.target.value)}>
      {instructors.map(instructor => (
        <option key={instructor.id} value={instructor.id}>
          {instructor.name}
        </option>
      ))}
    </select>
  );
  
  export default InstructorSelector;
  