import './Profile.scss';
import { useState, useRef } from 'react';

import resume_empty from '../../../assets/learner_portal/empty/empty_resume.svg';
import resume from '../../../assets/learner_portal/profile/resume.svg';

export default function Resume() {
    const [isEditing, setIsEditing] = useState(true);
    const [showEmptySections, setShowEmptySections] = useState(true);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // const handleEditClick = () => setIsEditing(true); // unused
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
            // You can send formData via fetch or axios here
        }
    };

    return (
        <div>
            <div className="profile-card">
                {showEmptySections ? (
                    <div className="empty">
                        <img src={resume_empty} alt="" />
                        <span>No resume uploaded yet. Upload your resume to showcase your profile to employers</span>
                        <button onClick={handleEmptyClick}>Upload Resume</button>
                    </div>
                ) : (
                    <div>
                        <div className="header">
                            <h3>Resume</h3>
                        </div>
                        <div className="body">
                            <form onSubmit={handleSave}>
                                <div className="ugrad-input-form-group">
                                    <label className="ugrad-label">Upload Resume</label>
                                    <div
                                        className={`upload-resume ${isDragging ? 'dragging' : ''}`}
                                        onClick={handleUploadClick}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        style={{ cursor: 'pointer' }}
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
                                {isEditing && (
                                    <div className="d-flex align-items-center justify-content-end gap-2">
                                        <button type="button" className='cancel-btn' onClick={handleCancelClick}>Cancel</button>
                                        <button type="submit" className='save-btn'>Save</button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
