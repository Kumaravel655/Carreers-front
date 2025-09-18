import { useState } from "react";
import "./JobPosting.css";

export default function JobPosting() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "BASIC",
      price: 19,
      features: [
        "Post 1 Job",
        "Urgents & Featured Jobs",
        "Highlights Job with Colors",
        "Access & Saved 5 Candidates",
        "10 Days Resume Visibility",
        "24/7 Critical Support",
      ],
    },
    {
      name: "STANDARD",
      price: 39,
      recommended: true,
      features: [
        "3 Active Jobs",
        "Urgents & Featured Jobs",
        "Highlights Job with Colors",
        "Access & Saved 10 Candidates",
        "20 Days Resume Visibility",
        "24/7 Critical Support",
      ],
    },
    {
      name: "PREMIUM",
      price: 59,
      features: [
        "6 Active Jobs",
        "Urgents & Featured Jobs",
        "Highlights Job with Colors",
        "Access & Saved 20 Candidates",
        "30 Days Resume Visibility",
        "24/7 Critical Support",
      ],
    },
  ];

  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  return (
    <div className="job-posting">
      <h2>Buy Premium Subscription to Post a Job</h2>
      <p>
        Donec eu dui ut dolor commodo ornare. Sed arcu libero, malesuada quis
        justo sit amet, varius tempus neque.
      </p>

      <div className="plans-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${plan.recommended ? "recommended" : ""}`}
          >
            {plan.recommended && (
              <div className="recommended-badge">Recommendation</div>
            )}
            <h3>{plan.name}</h3>
            <p className="price">${plan.price} /Monthly</p>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
            <button
              className="choose-btn"
              onClick={() => handleChoosePlan(plan)}
            >
              Choose Plan →
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setShowModal(false)}>
              ✖
            </button>
            <h2>Checkout</h2>

            <div className="payment-section">
              <h4>Payment System</h4>
              <div className="payment-options">
                <label>
                  <input type="radio" name="payment" defaultChecked /> Debit/Credit Card
                </label>
                <label>
                  <input type="radio" name="payment" /> Paypal
                </label>
              </div>

              <div className="card-form">
                <input type="text" placeholder="Name on Card" />
                <input type="text" placeholder="Card number" />
                <div className="card-row">
                  <input type="text" placeholder="MM/YY" />
                  <input type="text" placeholder="CVC" />
                </div>
              </div>
            </div>

            <div className="summary">
              <h4>Summary</h4>
              <p>
                Pricing Plan: <b>{selectedPlan?.name}</b>
              </p>
              <p>Total: ${selectedPlan?.price} USD</p>
            </div>

            <button className="choose-btn">Choose Plan →</button>
          </div>
        </div>
      )}
    </div>
  );
}
