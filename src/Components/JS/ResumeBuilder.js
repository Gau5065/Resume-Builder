import html2pdf from 'html2pdf.js';
import Draggable from 'react-draggable';
import React, { useRef, useState } from 'react';
import "../CSS/ResumeBuilder.css"



const ResumeBuilder = () => {

    const handleDownloadPDF = () => {
        const element = document.getElementById('resume-content');
    
        // Configuration for html2pdf
        const pdfOptions = {
          margin: 10,
          filename: 'resume.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };
    
        // Generate PDF
        html2pdf(element, pdfOptions);
      };

      const DraggableDiv = () => {
        const draggableRef = useRef(null);
        const [isEditing, setIsEditing] = useState(false);
        const [content, setContent] = useState('Draggable Div');
      
        const handleDoubleClick = () => {
          setIsEditing(true);
        };
      
        const handleBlur = () => {
          setIsEditing(false);
        };
      
        const handleChange = (e) => {
          setContent(e.target.value);
        };

        return (
          <Draggable nodeRef={draggableRef}>
          <div
            className={`draggable-div ${isEditing ? 'editing' : ''}`}
            ref={draggableRef}
            onDoubleClick={handleDoubleClick}
            onBlur={handleBlur}
          >
            {isEditing ? (
              <input
                type="text"
                value={content}
                onChange={handleChange}
                autoFocus
                className="editable-input"
              />
            ) : (
              <>
                <h1>{content}</h1>
                <p>This div can be dragged around.</p>
              </>
            )}
          </div>
        </Draggable>
        );
      };

  return (
    <>
    <h1>Resume Builder</h1> 
    <div id="resume-content">
        <p>Name: John Doe</p>
        <p>Education: Example University</p>
        <DraggableDiv />
    </div>
      <button onClick={handleDownloadPDF}>Download PDF</button>

    
    </>
  )
}

export default ResumeBuilder
