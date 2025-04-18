import React, { useState, useEffect } from "react";
import "../App.css";

function CostCalculator() {
  const [guestCount, setGuestCount] = useState(30);
  const [packageType, setPackageType] = useState("premium");
  const [addOns, setAddOns] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [perPersonCost, setPerPersonCost] = useState(0);
  
  const packages = {
    basic: {
      name: "Basic Braai",
      basePrice: 150,
      minGuests: 20
    },
    premium: {
      name: "Premium Spit",
      basePrice: 250,
      minGuests: 30
    },
    luxury: {
      name: "Luxury Feast",
      basePrice: 350,
      minGuests: 40
    }
  };
  
  const availableAddOns = [
    { id: "dessert", name: "Dessert Platter", price: 40 },
    { id: "drinks", name: "Soft Drinks Package", price: 35 },
    { id: "starters", name: "Appetizer Selection", price: 50 },
    { id: "staff", name: "Additional Staff Member", price: 500 }
  ];

  const handleAddOnToggle = (addOnId) => {
    if (addOns.includes(addOnId)) {
      setAddOns(addOns.filter(id => id !== addOnId));
    } else {
      setAddOns([...addOns, addOnId]);
    }
  };
  
  useEffect(() => {
    const selectedPackage = packages[packageType];
    // Base cost calculation
    let base = selectedPackage.basePrice * guestCount;
    
    // Add-ons cost calculation
    let addOnsCost = 0;
    addOns.forEach(addOnId => {
      const addOn = availableAddOns.find(a => a.id === addOnId);
      if (addOn) {
        if (addOn.id === "staff") {
          // Fixed price add-ons
          addOnsCost += addOn.price;
        } else {
          // Per person add-ons
          addOnsCost += addOn.price * guestCount;
        }
      }
    });
    
    // Set the calculated costs
    const total = base + addOnsCost;
    setTotalCost(total);
    setPerPersonCost(Math.round(total / guestCount));
  }, [guestCount, packageType, addOns]);
  
  return (
    <div className="calculator-wrapper">
      <div className="calculator-form">
        <div className="calc-form-group">
          <label htmlFor="package-select">Select Package:</label>
          <div className="custom-select">
            <select 
              id="package-select" 
              value={packageType} 
              onChange={(e) => setPackageType(e.target.value)}
            >
              <option value="basic">Basic Braai (R150/person)</option>
              <option value="premium">Premium Spit (R250/person)</option>
              <option value="luxury">Luxury Feast (R350/person)</option>
            </select>
          </div>
          <small>Min {packages[packageType].minGuests} guests required</small>
        </div>
        
        <div className="calc-form-group">
          <label htmlFor="guest-count">Number of Guests:</label>
          <div className="number-input">
            <button 
              onClick={() => setGuestCount(Math.max(packages[packageType].minGuests, guestCount - 5))}
              type="button"
            >
              −
            </button>
            <input 
              type="number" 
              id="guest-count" 
              min={packages[packageType].minGuests} 
              value={guestCount} 
              onChange={(e) => setGuestCount(Math.max(packages[packageType].minGuests, parseInt(e.target.value) || 0))}
            />
            <button 
              onClick={() => setGuestCount(guestCount + 5)}
              type="button"
            >
              +
            </button>
          </div>
        </div>
        
        <div className="calc-form-group">
          <label>Add-ons:</label>
          <div className="add-ons-grid">
            {availableAddOns.map(addOn => (
              <div className="add-on-item" key={addOn.id}>
                <input 
                  type="checkbox" 
                  id={`addon-${addOn.id}`} 
                  checked={addOns.includes(addOn.id)} 
                  onChange={() => handleAddOnToggle(addOn.id)}
                />
                <label htmlFor={`addon-${addOn.id}`}>
                  {addOn.name}
                  <span className="addon-price">
                    {addOn.id === "staff" ? `R${addOn.price}` : `R${addOn.price}/person`}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="calculator-results">
        <div className="result-box">
          <div className="result-item">
            <span>Package:</span>
            <span>{packages[packageType].name}</span>
          </div>
          <div className="result-item">
            <span>Guests:</span>
            <span>{guestCount} people</span>
          </div>
          <div className="result-item">
            <span>Add-ons:</span>
            <span>
              {addOns.length > 0 
                ? addOns.map(id => availableAddOns.find(a => a.id === id)?.name).join(", ") 
                : "None"}
            </span>
          </div>
          <div className="result-divider"></div>
          <div className="result-item result-total">
            <span>Per Person:</span>
            <span>R{perPersonCost}</span>
          </div>
          <div className="result-item result-total">
            <span>Total Cost:</span>
            <span>R{totalCost.toLocaleString()}</span>
          </div>
        </div>
        <div className="result-note">
          <p>This is an estimate. Contact us for a personalized quote.</p>
          <a href="/contact" className="cta-btn cta-primary">Get Exact Quote</a>
        </div>
      </div>
    </div>
  );
}

export default CostCalculator;