import { useState, useRef } from 'react';
import './Profile.scss';

import delete_icon from '../../../assets/learner_portal/profile/delete.svg';

import resume from '../../../assets/learner_portal/profile/resume.svg';
import empty_lg from '../../../assets/learner_portal/empty/document_empty_lg.svg';
import work_exp from '../../../assets/learner_portal/profile/work_exp.svg';


export default function WorkExperience() {
    const [isEditing, setIsEditing] = useState(false);
    const [showEmptySections, setShowEmptySections] = useState(true);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleEditClick = () => setIsEditing(true);

    const handleCancelClick = () => {
        setIsEditing(false);
        setSelectedFile(null);
    };

    const handleEmptyClick = () => setShowEmptySections(false);

    const handleUploadClick = () => {
        if (fileInputRef.current) fileInputRef.current.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        const file = e.dataTransfer.files && e.dataTransfer.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedFile) {
            const formData = new FormData();
            formData.append('resume', selectedFile);
            console.log("Uploading file:", selectedFile.name);
            // Handle the actual upload here
        }
    };

    return (
        <div>
            <div>
                <div className="profile-card">
                    {showEmptySections ? (
                        <div className="empty">
                            <img src={empty_lg} alt="" />
                            <span>Display your educational milestones to boost your credibility and career prospects</span>
                            <button onClick={handleEmptyClick}>Add Education</button>
                        </div>
                    ) : (
                        <>
                            <div className="header">
                                <h3>Work Experience</h3>
                                {!isEditing && (
                                    <button className='edit-btn' onClick={handleEditClick}>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.39662 15.0963C1.43491 14.7517 1.45405 14.5794 1.50618 14.4184C1.55243 14.2755 1.61778 14.1396 1.70045 14.0142C1.79363 13.8729 1.91621 13.7503 2.16136 13.5052L13.1666 2.49992C14.0871 1.57945 15.5795 1.57945 16.4999 2.49993C17.4204 3.4204 17.4204 4.91279 16.4999 5.83326L5.49469 16.8385C5.24954 17.0836 5.12696 17.2062 4.98566 17.2994C4.86029 17.3821 4.72433 17.4474 4.58146 17.4937C4.42042 17.5458 4.24813 17.5649 3.90356 17.6032L1.08325 17.9166L1.39662 15.0963Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Edit Experience
                                    </button>
                                )}
                            </div>

                            <div className="body">
                                {!isEditing && (
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="skill-card">
                                                <div className="left">
                                                    <div>
                                                        <div className="profile">
                                                            <img src={work_exp} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="wrap">
                                                        <h3>Frontend Developer</h3>
                                                        <p>TechBridge Solutions - Full time</p>
                                                        <p>January 2022 – March 2024</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="skill-card">
                                                <div className="left">
                                                    <div>
                                                        <div className="profile">
                                                            <img src={work_exp} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="wrap">
                                                        <h3>Frontend Developer</h3>
                                                        <p>TechBridge Solutions - Full time</p>
                                                        <p>January 2022 – March 2024</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {isEditing && (
                                    <form onSubmit={handleSave}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="ugrad-input-form-group">
                                                    <label className='ugrad-label'>Organization Name</label>
                                                    <input type="text" className='ugrad-input' placeholder='Organization Name' value={'TechBridge Solutions'} disabled={!isEditing} />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="ugrad-input-form-group select">
                                                    <label className='ugrad-label'>Designation</label>
                                                    <select className="ugrad-select" disabled={!isEditing}>
                                                        <option value="" selected disabled>Frontend Developer</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="ugrad-input-form-group select">
                                                    <label className='ugrad-label'>Employment Type</label>
                                                    <select className="ugrad-select" disabled={!isEditing}>
                                                        <option value="" selected disabled>Full-Time</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="ugrad-input-form-group">
                                                    <label className='ugrad-label'>Location</label>
                                                    <input type="text" className='ugrad-input' placeholder='Location' value={'Dhaka'} disabled={!isEditing} />
                                                </div>
                                            </div>


                                            <div className="col-md-4">
                                                <div className="ugrad-input-form-group">
                                                    <label className='ugrad-label'>Start Date</label>
                                                    <input type="date" className='ugrad-input' value={'2025-01-12'} disabled={!isEditing} />
                                                </div>
                                            </div>


                                            <div className="col-md-6">
                                                <div className="ugrad-input-form-group" >
                                                    <label className="ugrad-label">Description</label>
                                                    <textarea className="ugrad-textarea" placeholder="Description" rows={10} disabled={!isEditing} style={{ height: '225px' }} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="ugrad-input-form-group">
                                                    <label className="ugrad-label">Upload Resume</label>
                                                    <div
                                                        className={`upload-resume ${isDragging ? 'dragging' : ''}`}
                                                        onClick={handleUploadClick}
                                                        onDragOver={handleDragOver}
                                                        onDragLeave={handleDragLeave}
                                                        onDrop={handleDrop}
                                                        style={{ cursor: 'pointer', borderRadius: '8px' }}
                                                    >
                                                        <img src={resume} alt="" />
                                                        <p>Click to upload <span>or drag and drop</span></p>
                                                        <span>PDF, PNG, JPG (max. 800x400px)</span>
                                                        {selectedFile && (
                                                            <div className="selected-file">
                                                                <strong>Selected:</strong> {selectedFile.name}
                                                            </div>
                                                        )}
                                                        <input
                                                            type="file"
                                                            name="resume"
                                                            id="resume"
                                                            accept=".pdf, .png, .jpg"
                                                            ref={fileInputRef}
                                                            onChange={handleFileChange}
                                                            style={{ display: 'none' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-md-12">
                                                <div className="d-flex align-items-center justify-content-end gap-2 flex-column">
                                                    <button type="submit" className='save-btn w-100'>Save & Add  Experience</button>
                                                    <button type="button" className='cancel-btn w-100' onClick={handleCancelClick}>Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </>
                    )}
                </div>
                {isEditing && (
                    <div className="profile-card wrap">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="skill-card">
                                    <div className="left">
                                        <div>
                                            <div className="profile">
                                                <img src={work_exp} alt="" />
                                            </div>
                                        </div>
                                        <div className="wrap">
                                            <h3>Frontend Developer</h3>
                                            <p>TechBridge Solutions - Full time</p>
                                            <p>January 2022 – March 2024</p>
                                        </div>
                                    </div>
                                    <span className='delete-edu'><img src={delete_icon} alt="" /></span>

                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="skill-card">
                                    <div className="left">
                                        <div>
                                            <div className="profile">
                                                <img src={work_exp} alt="" />
                                            </div>
                                        </div>
                                        <div className="wrap">
                                            <h3>Frontend Developer</h3>
                                            <p>TechBridge Solutions - Full time</p>
                                            <p>January 2022 – March 2024</p>
                                        </div>
                                    </div>
                                    <span className='delete-edu'><img src={delete_icon} alt="" /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
