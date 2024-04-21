// components/Syllabus.js
const SyllabusViewer = ({ syllabusLink }) => (
    <iframe 
      src={syllabusLink}
      width="100%" 
      height="1000px"
      style={{ border: 'none'}}
    >
      Your browser does not support PDFs. Please download the PDF to view it: <a href={syllabusLink}>Download PDF</a>.
    </iframe>
  );
  
  export default SyllabusViewer;
  