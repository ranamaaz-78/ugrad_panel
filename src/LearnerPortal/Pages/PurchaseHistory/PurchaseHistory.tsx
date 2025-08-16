import './PurchaseHistory.scss';
import { useState } from 'react';

import empty_lg from '../../../assets/learner_portal/empty/document_empty_lg.svg';
import download from '../../../assets/learner_portal/program/download.svg';

export default function PurchaseHistory() {
    const [showEmptySections, setShowEmptySections] = useState(false);

    const handleEmptyClick = () => setShowEmptySections(false);
    return (
        <div>
            <div>
                <h1 className="page-title">
                    Purchase History
                </h1>
            </div>

            {showEmptySections ? (
                <div className="empty">
                    <img src={empty_lg} alt="" />
                    <h2>No purchases found.</h2>
                    <span>You haven’t enrolled in any programs yet. Start exploring our programs to begin your learning journey.</span>
                    <button onClick={handleEmptyClick}>Explore Programs</button>
                </div>
            ) : (
                <div>
                    <div className="purchase-table-section">
                        <table className='purchase-table'>
                            <thead>
                                <tr>
                                    <th>Payment Details</th>
                                    <th>Program Name</th>
                                    <th>Purchase Date</th>
                                    <th>Payment Method</th>
                                    <th>Amount Paid </th>
                                    <th>Invoice Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Pay ID: #PAY1234</p>
                                        <p>Ord ID: #ORD5678</p>
                                    </td>
                                    <td>Mastering React for Web Development</td>
                                    <td>8/21/15</td>
                                    <td>Credit Card</td>
                                    <td>$180</td>
                                    <td><a href="" className='download'><img src={download} alt="" /> Download</a></td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Pay ID: #PAY1234</p>
                                        <p>Ord ID: #ORD5678</p>
                                    </td>
                                    <td>Mastering React for Web Development</td>
                                    <td>8/21/15</td>
                                    <td>Credit Card</td>
                                    <td>$180</td>
                                    <td><a href="" className='download'><img src={download} alt="" /> Download</a></td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Pay ID: #PAY1234</p>
                                        <p>Ord ID: #ORD5678</p>
                                    </td>
                                    <td>Mastering React for Web Development</td>
                                    <td>8/21/15</td>
                                    <td>Credit Card</td>
                                    <td>$180</td>
                                    <td><a href="" className='download'><img src={download} alt="" /> Download</a></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}
