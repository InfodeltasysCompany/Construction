import React from "react";
import "./PrivacyPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="policy-content">
      <h2>Refund Policy</h2>
      <p><strong>Last Updated: October 2024</strong></p>

      <div className="policy-intro">
        <p>
          At K.D. Constructions & Consultants, we are committed to providing exceptional construction and consultancy services. This Refund Policy outlines the terms and conditions governing refunds for our services. We strive to maintain transparency and fairness in all our financial transactions while ensuring the quality and integrity of our work.
        </p>
        <p>
          Please read this policy carefully before engaging our services. By proceeding with any payment, you acknowledge that you have read, understood, and agreed to be bound by the terms of this Refund Policy.
        </p>
      </div>

      <h3>1. Consultation Fees</h3>
      <p>
        Our consultation services include preliminary discussions, site evaluations, feasibility studies, and initial design concepts. These services require significant professional expertise, time, and resources from our qualified engineers and architects.
      </p>
      <p>
        <strong>Consultation fees are non-refundable once services have been rendered.</strong> This includes:
      </p>
      <ul>
        <li>Initial project assessment and feasibility studies</li>
        <li>Site visits and technical evaluations</li>
        <li>Preliminary design concepts and structural assessments</li>
        <li>Technical consultations and professional advice</li>
        <li>Project planning and budgeting services</li>
      </ul>
      <p>
        If you need to reschedule a consultation, we require at least 24 hours' notice. Rescheduling within 24 hours may incur additional charges, while cancellations with less than 24 hours' notice will result in forfeiture of the consultation fee.
      </p>

      <h3>2. Project Deposits and Advance Payments</h3>
      <p>
        Project deposits secure our commitment to your project and enable us to allocate resources, initiate planning, and commence preliminary work. Our deposit policy is designed to balance client protection with business sustainability.
      </p>

      <h4>2.1 Refundable Deposits</h4>
      <p>
        Project deposits are refundable under the following specific circumstances:
      </p>
      <ul>
        <li><strong>Company Inability:</strong> If we are unable to commence work due to circumstances within our control, including resource unavailability, licensing issues, or internal operational constraints</li>
        <li><strong>Pre-commencement Cancellation:</strong> If project cancellation occurs before any substantive work has begun, including mobilization, detailed planning, or resource allocation</li>
        <li><strong>Contractual Breach:</strong> If we fail to meet our contractual obligations as outlined in the service agreement</li>
        <li><strong>Force Majeure:</strong> In cases of natural disasters, government restrictions, or other force majeure events that prevent project execution</li>
      </ul>

      <h4>2.2 Non-Refundable Deposits</h4>
      <p>
        Deposits become non-refundable under these conditions:
      </p>
      <ul>
        <li>After commencement of any substantive work, including detailed design development</li>
        <li>When third-party costs have been incurred on your behalf (permits, materials, subcontractor commitments)</li>
        <li>If project delays are caused by client-side factors, including delayed approvals, site access issues, or design changes</li>
      </ul>

      <h4>2.3 Administrative Costs</h4>
      <p>
        For refundable deposits, we may deduct reasonable administrative costs incurred, typically ranging from 10% to 20% of the deposit amount, covering:
      </p>
      <ul>
        <li>Document preparation and contract administration</li>
        <li>Initial planning and resource allocation costs</li>
        <li>Banking and transaction fees</li>
        <li>Project management overheads</li>
      </ul>

      <h3>3. Progress Payments and Milestone Payments</h3>
      <p>
        Progress payments are tied to specific project milestones and completion of defined work stages. These payments compensate for work already performed, resources utilized, and materials procured.
      </p>

      <h4>3.1 Non-Refundable Nature</h4>
      <p>
        <strong>All progress payments are non-refundable once the corresponding work stage has been completed and certified.</strong> This includes:
      </p>
      <ul>
        <li>Foundation completion payments</li>
        <li>Structural framework milestones</li>
        <li>MEP (Mechanical, Electrical, Plumbing) installation stages</li>
        <li>Finishing and interior work completions</li>
        <li>Final project handover payments</li>
      </ul>

      <h4>3.2 Work Certification</h4>
      <p>
        Each work stage is formally certified through:
      </p>
      <ul>
        <li>Site inspection reports and quality checks</li>
        <li>Client approval and sign-off documents</li>
        <li>Photographic evidence of completed work</li>
        <li>Third-party verification where required by regulations</li>
      </ul>

      <h3>4. Client-Initiated Cancellation</h3>
      <p>
        We understand that circumstances may change, requiring project cancellation. Our policy aims to be fair to both parties while recognizing the costs and commitments already made.
      </p>

      <h4>4.1 Financial Settlement</h4>
      <p>
        Upon client-initiated cancellation:
      </p>
      <ul>
        <li><strong>Completed Work Compensation:</strong> Client is responsible for payment for all work completed to date, calculated at agreed contract rates</li>
        <li><strong>Material Costs:</strong> All materials procured specifically for your project become your responsibility and will be invoiced accordingly</li>
        <li><strong>Subcontractor Commitments:</strong> Costs incurred for subcontractor engagements and cancellations are chargeable</li>
        <li><strong>Unused Advances:</strong> Any unused portion of advance payments may be refunded, minus costs incurred and cancellation charges</li>
      </ul>

      <h4>4.2 Intellectual Property Rights</h4>
      <p>
        Upon cancellation, all intellectual property rights remain with K.D. Constructions & Consultants:
      </p>
      <ul>
        <li>Architectural designs, structural plans, and technical drawings remain our property</li>
        <li>Design concepts and engineering solutions cannot be used without our written permission</li>
        <li>Project documentation and technical specifications are not transferable</li>
        <li>Client may purchase completed designs at negotiated rates if they wish to continue with another contractor</li>
      </ul>

      <h4>4.3 Cancellation Timeline and Charges</h4>
      <div className="cancellation-table">
        <table>
          <thead>
            <tr>
              <th>Cancellation Stage</th>
              <th>Refund Eligibility</th>
              <th>Applicable Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Before work commencement</td>
              <td>Up to 80% of deposit</td>
              <td>20% administrative fee</td>
            </tr>
            <tr>
              <td>After design completion</td>
              <td>Up to 50% of unused funds</td>
              <td>Design fees + 15% cancellation fee</td>
            </tr>
            <tr>
              <td>During construction phase</td>
              <td>Case-by-case assessment</td>
              <td>All completed work + material costs + 10% fee</td>
            </tr>
            <tr>
              <td>After 75% completion</td>
              <td>No refund available</td>
              <td>Full project payment required</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>5. Company-Initiated Termination</h3>
      <p>
        In rare circumstances, we may need to terminate a project due to:
      </p>
      <ul>
        <li>Client non-payment or repeated payment delays</li>
        <li>Safety concerns or site conditions that pose unacceptable risks</li>
        <li>Client providing inaccurate information affecting project feasibility</li>
        <li>Regulatory or legal constraints beyond our control</li>
      </ul>
      <p>
        In such cases, we will provide written notice and refund any unutilized advance payments within 30 days of termination.
      </p>

      <h3>6. Dispute Resolution Process</h3>
      <p>
        We believe in resolving disputes amicably and efficiently. Our structured dispute resolution process includes:
      </p>

      <h4>6.1 Direct Negotiation</h4>
      <p>
        The first step in resolving any refund-related dispute is direct negotiation:
      </p>
      <ul>
        <li>Submit a formal written refund request detailing the basis for your claim</li>
        <li>Our project manager will review and respond within 7 business days</li>
        <li>We may request additional documentation or site verification</li>
        <li>Resolution typically occurs within 15-30 days</li>
      </ul>

      <h4>6.2 Mediation</h4>
      <p>
        If direct negotiation fails, we proceed to mediation:
      </p>
      <ul>
        <li>Engagement of an independent construction industry mediator</li>
        <li>Costs shared equally between both parties</li>
        <li>Non-binding resolution process</li>
        <li>Typically completed within 45-60 days</li>
      </ul>

      <h4>6.3 Arbitration and Legal Recourse</h4>
      <p>
        As a final resort, disputes may proceed to:
      </p>
      <ul>
        <li>Binding arbitration through recognized construction arbitration bodies</li>
        <li>Legal proceedings in courts of Varanasi, Uttar Pradesh</li>
        <li>Costs awarded as per arbitration or court decision</li>
      </ul>

      <h3>7. Special Circumstances</h3>

      <h4>7.1 Defective Workmanship</h4>
      <p>
        If work fails to meet agreed quality standards:
      </p>
      <ul>
        <li>We will rectify defects at our cost during the warranty period</li>
        <li>If rectification is not possible, proportional refunds may be considered</li>
        <li>All claims must be supported by independent technical assessment</li>
      </ul>

      <h4>7.2 Project Delays</h4>
      <p>
        Delay-related refund considerations:
      </p>
      <ul>
        <li>No refunds for delays caused by weather, regulatory approvals, or client-related factors</li>
        <li>Significant company-caused delays may warrant compensation as per contract terms</li>
        <li>Liquidated damages apply only if specified in the contract</li>
      </ul>

      <h4>7.3 Change Orders and Variations</h4>
      <p>
        Payments for change orders and variations are non-refundable once work has commenced, unless the variation is canceled before any work begins.
      </p>

      <h3>8. Refund Processing</h3>

      <h4>8.1 Refund Timeframe</h4>
      <p>
        Approved refunds are processed within:
      </p>
      <ul>
        <li><strong>Standard Processing:</strong> 15-30 business days from approval</li>
        <li><strong>Bank Transfer Refunds:</strong> Additional 3-5 business days for bank processing</li>
        <li><strong>International Refunds:</strong> 30-45 business days with applicable currency conversion</li>
      </ul>

      <h4>8.2 Refund Method</h4>
      <p>
        Refunds are typically issued through the original payment method:
      </p>
      <ul>
        <li>Bank transfers to the originating account</li>
        <li>Cheque payments for certain transaction types</li>
        <li>Credit card refunds for card payments</li>
      </ul>

      <h4>8.3 Deductions and Charges</h4>
      <p>
        Refunds may be subject to:
      </p>
      <ul>
        <li>Bank transfer fees and transaction charges</li>
        <li>Currency conversion costs for international payments</li>
        <li>Administrative processing fees as per policy</li>
        <li>Any outstanding amounts owed by the client</li>
      </ul>

      <h3>9. Contact Information and Procedures</h3>
      <p>
        To initiate a refund request or discuss refund-related matters:
      </p>

      <div className="contact-info">
        <p><strong>Refund Request Submission:</strong></p>
        <p>K.D. Constructions & Consultants</p>
        <p>B-30/2A-3, Prafful Nagar Colony, Lanka</p>
        <p>Varanasi, U.P. 221005, India</p>
        <p><strong>Email:</strong> divyenusingh72@gmail.com (Subject: Refund Request - [Project Name])</p>
        <p><strong>Phone:</strong> 9919100744, 9335047679</p>
        <p><strong>Processing Hours:</strong> Monday to Friday, 10:00 AM to 5:00 PM IST</p>
      </div>

      <h4>9.1 Required Documentation</h4>
      <p>
        All refund requests must include:
      </p>
      <ul>
        <li>Completed refund application form</li>
        <li>Copy of the original contract and payment receipts</li>
        <li>Detailed explanation of the refund basis</li>
        <li>Supporting documents and evidence</li>
        <li>Client identification and contact information</li>
      </ul>

      <h3>10. Policy Amendments</h3>
      <p>
        We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. For existing projects, the refund policy in effect at the time of contract signing will apply.
      </p>

      <div className="policy-footer">
        <p>
          This Refund Policy is effective as of October 2024 and forms an integral part of our service agreements. By engaging our services, you acknowledge acceptance of these terms.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;