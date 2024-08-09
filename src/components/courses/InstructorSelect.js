// components/InstructorSelector.js
export default function InstructorSelector({ instructors, onSelect }) {
    <select onChange={e => onSelect(e.target.value)}>
      {instructors.map(instructor => (
        <option key={instructor.id} value={instructor.id}>
          {instructor.name}
        </option>
      ))}
    </select>
  };
  