import "../CSS/ResumeOne.css"
import html2pdf from 'html2pdf.js';
import Draggable from 'react-draggable';
import { AiOutlineDownload } from "react-icons/ai";
import React, { useEffect, useRef, useState } from 'react';
import { CiCamera, CiMail } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";


const ResumeOne = () => {
    const [selectedDiv, setSelectedDiv] = useState('');
    const fileInputRef = useRef(null);

    const handleDownloadPDF = () => {
        const element = document.getElementById('resume-content');

        const pdfOptions = {
            margin: 10,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };
    
        html2pdf(element, pdfOptions);
    };

    const getDivDetails = (a) => {
        setSelectedDiv(a.target.id);
        var HeightInput1 = document.getElementsByClassName('HeightInput1')[0];
        var WidthInput1 = document.getElementsByClassName('WidthInput1')[0];
        var TextColor1 = document.getElementsByClassName('TextColor1')[0];
        var BgColor1 = document.getElementsByClassName('BgColor1')[0];

        const computedStyles = window.getComputedStyle(a.target);

        HeightInput1.value = a.target.clientHeight;
        WidthInput1.value = a.target.clientWidth;
        TextColor1.value = rgbToHex(computedStyles.color);
        BgColor1.value = rgbToHex(computedStyles.backgroundColor);
    };

    const rgbToHex = (rgbString) => {
        const match = rgbString.match(/\d+/g);
    
        if (!match) {
            return rgbString; // Return original value if not in RGB format
        }
    
        const [r, g, b] = match.map((x) => parseInt(x, 10));
    
        const toHex = (c) => {
            const hex = c.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
    
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    const changeDivDetail = () =>{
        var HeightInput1 = document.getElementsByClassName('HeightInput1')[0];
        var WidthInput1 = document.getElementsByClassName('WidthInput1')[0];
        var TextColor1 = document.getElementsByClassName('TextColor1')[0];
        var BgColor1 = document.getElementsByClassName('BgColor1')[0];
        var selectedDivId = document.getElementById(selectedDiv);
        if (selectedDivId) {
            selectedDivId.style.height = HeightInput1.value + "px";
            selectedDivId.style.width = WidthInput1.value + "px";
            selectedDivId.style.color = TextColor1.value;
            selectedDivId.style.backgroundColor = BgColor1.value;
        }
    }

    const editDivContent = (a) =>{
        if(a.target.tagName != "DIV"){
            alert("Please Select Box Properly")
        }else{
            const innerElement = a.target.firstElementChild;
            if (innerElement) {
                if(innerElement.tagName == 'P'){
                    const computedStyles = window.getComputedStyle(a.target);
                    const divElement = a.target;
                    var inputElement = document.createElement('input');
                    inputElement.type = 'text';
                    inputElement.className = "editDivInput1";
                    inputElement.value = innerElement.innerText;
                    console.log("Editable Content Found")
                    a.target.replaceChild(inputElement, innerElement);
                    inputElement.focus(); 
                    inputElement.style.width = computedStyles.width;
                    inputElement.style.height = computedStyles.height;
                    inputElement.style.color = computedStyles.color;
                    inputElement.style.backgroundColor = computedStyles.backgroundColor;
                    inputElement.style.fontFamily = computedStyles.fontFamily;
                    inputElement.style.fontWeight = computedStyles.fontWeight;
                    inputElement.style.fontSize = computedStyles.fontSize;
                    inputElement.style.lineHeight = computedStyles.lineHeight;
                    inputElement.addEventListener('blur', () => {
                    const newParagraph = document.createElement('p');
                    newParagraph.innerText = inputElement.value;
                    a.target.replaceChild(newParagraph, inputElement);
                    });
                }else{
                    alert("No Editable Content Here");
                }
            } else {
                alert("No Editable Content Here");
            }
        }
    }

    const handleCiCameraClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        var rOneM1B1Box13Img1 = document.getElementsByClassName("rOneM1B1Box13Img1")[0];
        rOneM1B1Box13Img1.src = "Media/"+selectedFile.name;
    };
    

  return (
    <>
    <div className='rOneMainbox1'>
        <div className="ToolBox1">
            <label>HEIGHT: </label>
            <input type="number" className="HeightInput1" onChange={changeDivDetail}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>WIDTH: </label>
            <input type="number" className="WidthInput1" onChange={changeDivDetail}/><br></br><br></br>
            <label>TEXT COLOR</label><br></br>
            <input type="color" className="TextColor1" onChange={changeDivDetail}/><br></br><br></br>
            <label>BACKGROUND COLOR</label><br></br>
            <input type="color" className="BgColor1" onChange={changeDivDetail}/><br></br>
            <button onClick={handleDownloadPDF} className='FileDownload'><AiOutlineDownload className='FileDownloadIcon1'/>&nbsp;&nbsp;Download PDF</button>
        </div>
        <div className='rOneM1B1' id="resume-content">
            <div className="rOneM1B1Box1" id="rOneM1B1Box1" onMouseEnter={getDivDetails}>
                <div className="rOneM1B1Box11" id="rOneM1B1Box11" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>HOWARD ONG</p>
                </div>
                <div className="rOneM1B1Box12" id="rOneM1B1Box12" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>Financial Analyst</p>
                </div>
                <div className="rOneM1B1Box13" id="rOneM1B1Box12">
                    <img alt="Image" src="../Media/pic1.jpeg" className="rOneM1B1Box13Img1"/>
                    <label className="rOneM1B1Box13Icon1" onClick={handleCiCameraClick}>
                        <CiCamera />
                    </label>
                    <input
                        accept="image/*"
                        ref={fileInputRef}
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />    
                </div>
            </div>
            {/* Box2 */}
            <div className="rOneM1B1Box2" id="rOneM1B1Box2">
                <div className="rOneM1B1Box21" id="rOneM1B1Box21" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>My Contact</p>
                </div>
                <div className="rOneM1B1Box22" id="rOneM1B1Box22" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p><CiMail className="rOneM1B1Box22Icon1"/>&nbsp;hello@reallygreatsite.com</p>
                </div>
                <div className="rOneM1B1Box23" id="rOneM1B1Box23" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p><IoCall className="rOneM1B1Box23Icon1"/>&nbsp;+123-456-7890</p>
                </div>
                <div className="rOneM1B1Box24" id="rOneM1B1Box24" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p><FaLocationDot className="rOneM1B1Box24Icon1"/>&nbsp;123 Anywhere St., Any City</p>
                </div>
                <div className="rOneM1B1Box25" id="rOneM1B1Box25" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p><AiOutlineGlobal className="rOneM1B1Box25Icon1"/>&nbsp;www.reallygreatsite.com</p>
                </div>
            </div>
            <div className="rOneM1B1Box3" id="rOneM1B1Box3">
                <div className="rOneM1B1Box31" id="rOneM1B1Box31" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>About Me</p>
                </div>
                <div className="rOneM1B1Box32" id="rOneM1B1Box32" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>Dedicated and detail-oriented Financial Analyst with 10
                    years of experience. Eager to apply proven-budget
                    maximization skills for Bank of Brocelle in monitoring,
                    maintaining, and completing client billing and
                    reconciliations. Special interest in achieving the
                    millennial market and helping with retirement and
                    general financial planning.</p>
                </div>
            </div>
            <div className="rOneM1B1Box4" id="rOneM1B1Box4">
                <div className="rOneM1B1Box41" id="rOneM1B1Box41" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>Hard Skill</p>
                </div>
                <div className="rOneM1B1Box42" id="rOneM1B1Box42" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p><GoDotFill className="rOneM1B1Box42Icon1"/>Financial modeling and reporting</p>
                </div>
                <div className="rOneM1B1Box43" id="rOneM1B1Box43" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p><GoDotFill className="rOneM1B1Box43Icon1"/>Data mining and analysis</p>
                </div>
                <div className="rOneM1B1Box44" id="rOneM1B1Box44" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p><GoDotFill className="rOneM1B1Box44Icon1"/>Financial accounting</p>
                </div>
                <div className="rOneM1B1Box45" id="rOneM1B1Box45" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p><GoDotFill className="rOneM1B1Box45Icon1"/>Advanced SAS proficiency</p>
                </div>
            </div>
            <div className="rOneM1B1Box5" id="rOneM1B1Box5">
                <div className="rOneM1B1Box51" id="rOneM1B1Box51" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>Soft Skill</p>
                </div>
                <div className="rOneM1B1Box52" id="rOneM1B1Box52" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>2. Decision making</p>
                </div>
                <div className="rOneM1B1Box53" id="rOneM1B1Box53" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>3. Observation</p>
                </div>
                <div className="rOneM1B1Box54" id="rOneM1B1Box54" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>4. Communication</p>
                </div>
            </div>
            <div className="rOneM1B1Box6" id="rOneM1B1Box6">
                <div className="rOneM1B1Box61" id="rOneM1B1Box61" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>Education Background</p>
                </div>
                <div className="rOneM1B1Box62" id="rOneM1B1Box62" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>1. Borcelle Business School
                    Masters in Accounting
                    Completed in 2016</p>
                </div>
                <div className="rOneM1B1Box63" id="rOneM1B1Box63" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>2. Larana Business School
                    Financial Management,
                    Completed in 2014</p>
                </div>
            </div>
            <div className="rOneM1B1Box7" id="rOneM1B1Box7">
                <div className="rOneM1B1Box71" id="rOneM1B1Box71" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>About Me</p>
                </div>
                <div className="rOneM1B1Box72" id="rOneM1B1Box72" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>Ginyard International Co. | Financial Analyst &nbsp; 2020 - Present</p>
                </div>
                <div className="rOneM1B1Box73" id="rOneM1B1Box73" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>key responsibilities</p>
                </div>
                <div className="rOneM1B1Box74" id="rOneM1B1Box74" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>1. Analyze current and past financial data</p>
                </div>
                <div className="rOneM1B1Box75" id="rOneM1B1Box75" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>2. Look at recent financial performance and identify trends</p>
                </div>
                <div className="rOneM1B1Box76" id="rOneM1B1Box76" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>3. Prepare reports on the above information and communicate the
                    insights of these reports to the broader business</p>
                </div>
                <div className="rOneM1B1Box77" id="rOneM1B1Box77" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>4. Consult with the management team to develop long-term
                    commercial plans</p>
                </div>
                <div className="rOneM1B1Box78" id="rOneM1B1Box78" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>5. Suggest budgets and improvements based on the above
                    information</p>
                </div>
            </div>
            <div className="rOneM1B1Box8" id="rOneM1B1Box8">
                <div className="rOneM1B1Box81" id="rOneM1B1Box81">
                    <p>Achievements</p>
                </div>
                <div className="rOneM1B1Box82" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>2013 – 2015 Reduced the production cost by <br></br>20% in
                    the second year of internship</p>
                </div>
                <div className="rOneM1B1Box83" onMouseEnter={getDivDetails} onDoubleClick={editDivContent}>
                    <p>2015 – 2020 2015 – 2020 Managed five projects
                    worth over $100million.</p>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default ResumeOne
