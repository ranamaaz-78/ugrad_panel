// import React from 'react';
import { useState } from 'react';
import './Profile.scss';

export default function SocialLink() {
        const [isEditing, setIsEditing] = useState(false);
    
        const handleEditClick = () => setIsEditing(true);
        const handleCancelClick = () => setIsEditing(false);
  return (
      <div>
            <div className="profile-card">
                <div className="header">
                    <h3>Social Link</h3>
                    {!isEditing && (
                        <button className='edit-btn' onClick={handleEditClick}>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.39662 15.0963C1.43491 14.7517 1.45405 14.5794 1.50618 14.4184C1.55243 14.2755 1.61778 14.1396 1.70045 14.0142C1.79363 13.8729 1.91621 13.7503 2.16136 13.5052L13.1666 2.49992C14.0871 1.57945 15.5795 1.57945 16.4999 2.49993C17.4204 3.4204 17.4204 4.91279 16.4999 5.83326L5.49469 16.8385C5.24954 17.0836 5.12696 17.2062 4.98566 17.2994C4.86029 17.3821 4.72433 17.4474 4.58146 17.4937C4.42042 17.5458 4.24813 17.5649 3.90356 17.6032L1.08325 17.9166L1.39662 15.0963Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Edit Links
                        </button>
                    )}
                </div>

                <div className="body">
                    <form action="">
                        <div className="row">


                            <div className="col-md-4">
                                <div className="ugrad-input-form-group">
                                    <label className='ugrad-label'>Facebook</label>
                                    <input type="text" className='ugrad-input' placeholder='Facebook' value={'https://facebook.com/ayeshakhan'} disabled={!isEditing} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ugrad-input-form-group">
                                    <label className='ugrad-label'>LinkedIn</label>
                                    <input type="text" className='ugrad-input' placeholder='LinkedIn' value={'https://linkedin.com/in/ayeshak'} disabled={!isEditing} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ugrad-input-form-group">
                                    <label className='ugrad-label'>Twitter</label>
                                    <input type="text" className='ugrad-input' placeholder='Twitter' value={'https://twitter.com/ayesha_codes'} disabled={!isEditing} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ugrad-input-form-group">
                                    <label className='ugrad-label'>Instagram</label>
                                    <input type="text" className='ugrad-input' placeholder='Instagram' value={'https://facebook.com/ayeshakhan'} disabled={!isEditing} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ugrad-input-form-group">
                                    <label className='ugrad-label'>Dribbble</label>
                                    <input type="text" className='ugrad-input' placeholder='Dribbble' value={'https://dribbble.com/ayesha-ui'} disabled={!isEditing} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ugrad-input-form-group">
                                    <label className='ugrad-label'>GitHub</label>
                                    <input type="text" className='ugrad-input' placeholder='Facebook' value={'https://github.com/ayesha-k'} disabled={!isEditing} />
                                </div>
                            </div>

                           

                            {isEditing && (
                                <div className="col-md-12">
                                    <div className="d-flex align-items-center justify-content-end gap-2">
                                        <button type="button" className='cancel-btn' onClick={handleCancelClick}>Cancel</button>
                                        <button className='save-btn'>Save</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}
