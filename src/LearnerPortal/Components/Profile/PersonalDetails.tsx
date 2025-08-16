import { useState } from 'react';
import './Profile.scss';

import profile_lg from '../../../assets/learner_portal/profile/profile_lg.svg';
import verfied from '../../../assets/learner_portal/profile/verfied.svg';

import CircularProgressbarWithChildren from '../CircularProgressbarWithChildren';

export default function PersonalDetails() {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => setIsEditing(true);
    const handleCancelClick = () => setIsEditing(false);

    return (
        <div>
            <div className="profile-card">
                <div className="header">
                    <h3>Personal Details</h3>
                    {!isEditing && (
                        <button className='edit-btn' onClick={handleEditClick}>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.39662 15.0963C1.43491 14.7517 1.45405 14.5794 1.50618 14.4184C1.55243 14.2755 1.61778 14.1396 1.70045 14.0142C1.79363 13.8729 1.91621 13.7503 2.16136 13.5052L13.1666 2.49992C14.0871 1.57945 15.5795 1.57945 16.4999 2.49993C17.4204 3.4204 17.4204 4.91279 16.4999 5.83326L5.49469 16.8385C5.24954 17.0836 5.12696 17.2062 4.98566 17.2994C4.86029 17.3821 4.72433 17.4474 4.58146 17.4937C4.42042 17.5458 4.24813 17.5649 3.90356 17.6032L1.08325 17.9166L1.39662 15.0963Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Edit Profile
                        </button>
                    )}
                </div>

                <div className="body">
                    <div className="profile-banner">
                        <div className="first">
                            <div className="profile-wrap">
                                <img src={profile_lg} alt="" />
                            </div>
                            <div className="first-sub">
                                <div className="child">
                                    <h3>Noraiz Raja</h3>
                                    <p>noraiz@example.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mid">
                            <div className="child personal-info">
                                <h3>Noraiz Raja</h3>
                                <p>noraiz@example.com</p>
                            </div>
                            <div className="child">
                                <h3>Points</h3>
                                <p>510pts</p>
                            </div>
                            <div className="child">
                                <h3>Leaderboard Rank</h3>
                                <p>40</p>
                            </div>
                        </div>
                        <div className="last">
                            <CircularProgressbarWithChildren percentage={80} />
                        </div>
                    </div>

                    <form action="">
                        <div className="row">
                            {[
                                { label: 'First Name', value: 'Noraiz' },
                                { label: 'Last Name', value: 'Raja' },
                                { label: 'Display Name', value: 'Noraiz Raja' },
                            ].map(({ label, value }, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="ugrad-input-form-group">
                                        <label className='ugrad-label'>{label}</label>
                                        <input type="text" className='ugrad-input' placeholder={label} value={value} disabled={!isEditing} />
                                    </div>
                                </div>
                            ))}

                            <div className="col-md-4">
                                <div className="ugrad-input-form-group select">
                                    <label className='ugrad-label'>Pronunciation</label>
                                    <select className="ugrad-select" disabled={!isEditing}>
                                        <option value="" selected disabled>His / Her</option>
                                        <option value="">His</option>
                                        <option value="">Her</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="ugrad-input-form-group">
                                    <label className='ugrad-label'>Date of Birth</label>
                                    <input type="date" className='ugrad-input' value={'2025-01-12'} disabled={!isEditing} />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="ugrad-input-form-group">
                                    <label className='ugrad-label'>Email <img src={verfied} alt="" /></label>
                                    <input type="text" className='ugrad-input' value={'noraiz@example.com'} disabled={!isEditing} />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="ugrad-input-form-group">
                                    <label className='ugrad-label'>Phone Number <img src={verfied} alt="" /></label>
                                    <input type="text" className='ugrad-input' value={'+92-335-559-0062'} disabled={!isEditing} />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="ugrad-input-form-group select">
                                    <label className='ugrad-label'>Gender</label>
                                    <select className="ugrad-select" disabled={!isEditing}>
                                        <option value="" selected disabled>Select Gender</option>
                                        <option value="">Male</option>
                                        <option value="">Female</option>
                                        <option value="">Custom</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="ugrad-input-form-group">
                                    <label className='ugrad-label'>Location</label>
                                    <input type="text" className='ugrad-input' value={'775 Rolling Green Rd.'} disabled={!isEditing} />
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
    );
}
