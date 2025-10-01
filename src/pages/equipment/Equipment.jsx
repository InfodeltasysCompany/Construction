import React from "react";
import "./Equipment.css";

const employees = [
  { role: "Civil Engineers (Degree Holders)", count: 3 },
  { role: "Civil Engineers (Diploma Holders)", count: 3 },
  { role: "Architect Engineer (Degree Holder)", count: 1 },
  { role: "Chartered Accountant", count: 1 },
  { role: "Supervisions & Technical Staff", count: 8 },
];

const equipments = [
  { category: "Drawing & Design", items: ["AutoCAD – 2021", "Etabs", "Staad Pro", "Draftwin", "Safe"] },
  {
    category: "Working Equipment",
    items: [
      "Theodolite – 1",
      "Auto Level – 1",
      "Plane Table – 1",
      "Concrete Mixer Machine Driven with Engine – 2",
      "Power Vibrator with Needle and Code – 5",
      "Plate Vibrator driven with Oil Engine – 2",
      "Earth Compactor driven with Diesel Engine – 1",
      "Chain Pulley Block (5 M.T.) – 1, (3 M.T.) – 1",
      "Hanging Platform Machine – 2",
      "Monkey Crane – 3",
      "Bar Cutting & Binding Machine – 2",
      "Weigh Batcher – 1",
      "Water Pump – 2",
      "Gas Cutting Equipment – 1",
      "Gas Welding Equipment – 1",
      "Diesel Generator (12.5KVA) – 2",
      "Welding Machine – 2",
      "Grinders – 2",
      "Drill Machines – 2",
      "Winch (5/3 M.T.)",
      "Jacks (35MT x 2Nos.)",
      "L.P.G. Cylinders – 2",
      "Hand Grinding Machine – 1",
      "Flexible Grinding Machine – 1",
      "Angle Grinding Machine – 1",
      "Miscellaneous: Venire, Screw Gauge, Dial Gauge, Gloves, Safety Helmets",
      "Shuttering Material: Wooden Ply, Props, Bamboos for 10,000 sft.",
      "Cube Testing Machine, Slump Cone, Mould-24 Nos., Sieve"
    ]
  }
];

const Equipment = () => {
  return (
    <section className="ee-section">
      <div className="ee-container">
        {/* Employees */}
        <div className="ee-card">
          <h2>Our Team</h2>
          <p>Technically competent supervisory and managerial staff from Civil, Mechanical, Electrical disciplines, consultants, suppliers, and contractors.</p>
          <ul>
            {employees.map((emp, index) => (
              <li key={index}>
                <span className="ee-role">{emp.role}</span>
                <span className="ee-count">{emp.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Equipments */}
        <div className="ee-card">
          <h2>Our Equipment</h2>
          <p>Advanced machinery and tools for design, construction, and quality testing.</p>
          {equipments.map((eq, idx) => (
            <div className="equipment-category" key={idx}>
              <h3>{eq.category}</h3>
              <ul>
                {eq.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
