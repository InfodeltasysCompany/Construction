import React from "react";
import "./ProjectsHandled.css";

const projects = [
  {
    id: 1,
    project: "RAJENDRA TOYOTA",
    client: "Mr. Rajendra Goenka",
    location: "Varanasi",
    amount: 250.0,
    year: "2000-01",
  },
  {
    id: 2,
    project: "Hospital Building (30 Bed Hospital, Manav Khidmat Foundation)",
    client: "Dr. R.K. Abul Saraya",
    location: "Chandauli",
    amount: 80.0,
    year: "2000-01",
  },
  {
    id: 3,
    project: "Residential Building",
    client: "Dr. R.K. Pandey",
    location: "Varanasi",
    amount: 70.0,
    year: "2001-02",
  },
  {
    id: 4,
    project: "Singh Complex (Commercial Complex)",
    client: "Mr. S.K. Singh",
    location: "Varanasi",
    amount: 90.0,
    year: "2001-02",
  },
  {
    id: 5,
    project: "Patodia Exports",
    client: "Mr. Patodia",
    location: "Bhadohi",
    amount: 80.0,
    year: "2002-03",
  },
  {
    id: 6,
    project: "U.W.D. BHU (University Work Department)",
    client: "M/s Sarkar Co.",
    location: "Varanasi",
    amount: 150.0,
    year: "2003-04",
  },
  {
    id: 7,
    project: "Titan Show Room",
    client: "Mr. Sanjay Singh",
    location: "Varanasi",
    amount: 75.0,
    year: "2003-04",
  },
  {
    id: 8,
    project: "Residential Building",
    client: "Mr. B.K. Mishra",
    location: "Kanpur",
    amount: 60.0,
    year: "2004-05",
  },
  {
    id: 9,
    project: "Residential Building",
    client: "Mr. C.L. Malhotra",
    location: "Kanpur",
    amount: 80.0,
    year: "2004-05",
  },
  {
    id: 10,
    project: "G.B.T. (Tata Tally Service Ltd.)",
    client: "Tata Tally Service Ltd.",
    location: "Farukhabad",
    amount: 4.0,
    year: "2005-06",
  },
  {
    id: 11,
    project: "G.B.T. (2 Nos., KV-5,6)",
    client: "Idea",
    location: "Fatehpur",
    amount: 9.0,
    year: "2005-06",
  },
  {
    id: 12,
    project: "G.B.T. (ALD-53)",
    client: "Idea",
    location: "Allahabad",
    amount: 5.0,
    year: "2006-07",
  },
  {
    id: 13,
    project: "R.T.T.",
    client: "Idea",
    location: "Kanpur",
    amount: 8.0,
    year: "2007-08",
  },
  {
    id: 14,
    project: "G.B.T. (4 Nos.)",
    client: "Reliance",
    location: "Ghazipur",
    amount: 18.0,
    year: "2007-08",
  },
  {
    id: 15,
    project: "U.W.D. BHU (University Work Department)",
    client: "M/s Sarkar Co.",
    location: "Varanasi",
    amount: 75.0,
    year: "2007-08",
  },
  {
    id: 16,
    project: "Construction of Boundary Wall",
    client: "U.P. Jal Sansthan",
    location: "Hamirpur",
    amount: 70.0,
    year: "2008-09",
  },
  {
    id: 17,
    project: "Construction of DSS Building (Brocha and Vivekananda Hostel)",
    client: "Areva T & D, Nehru Place, New Delhi",
    location: "Varanasi",
    amount: 25.0,
    year: "2009-10",
  },
  {
    id: 18,
    project: "Construction of New PSS Building (33/11 KVA at BHU Campus)",
    client: "Areva T & D, Nehru Place, New Delhi",
    location: "Varanasi",
    amount: 80.0,
    year: "2009-10",
  },
  {
    id: 19,
    project: "Construction of New PSS Switchyard",
    client: "Areva T & D, Nehru Place, New Delhi",
    location: "Varanasi",
    amount: 120.0,
    year: "2010-11",
  },
  {
    id: 20,
    project: "Gopal Kripa Apartment",
    client: "Parcheta Construction",
    location: "Varanasi",
    amount: 115.0,
    year: "2011-12",
  },
  {
    id: 21,
    project: "Tribhuwan Kripa Apartment",
    client: "Parcheta Construction",
    location: "Varanasi",
    amount: 175.0,
    year: "2012-15",
  },
  {
    id: 22,
    project: "Pantaloons Building",
    client: "Kapoor & Sons",
    location: "Varanasi",
    amount: 90.0,
    year: "2013-15",
  },
  {
    id: 23,
    project: "Aryan School Hostel",
    client: "Aryan International",
    location: "Varanasi",
    amount: 450.0,
    year: "2013-17",
  },
  {
    id: 24,
    project: "DAV School Hostel",
    client: "Dr. Satydev Singh",
    location: "Varanasi",
    amount: 80.0,
    year: "2014-15",
  },
  {
    id: 25,
    project: "Jagran Public School",
    client: "Dainik Jagran",
    location: "Varanasi",
    amount: 120.0,
    year: "2015-17",
  },
  {
    id: 26,
    project: "Hotel Ganges Grand",
    client: "Dr. S.D. Singh",
    location: "Varanasi",
    amount: 90.0,
    year: "2015-16",
  },
  {
    id: 27,
    project: "Aditya Residency",
    client: "Parcheta Construction",
    location: "Varanasi",
    amount: 120.0,
    year: "2016-18",
  },
  {
    id: 28,
    project: "Kamla Residency",
    client: "Parcheta Construction",
    location: "Varanasi",
    amount: 175.0,
    year: "2016-18",
  },
  {
    id: 29,
    project: "Banquet Hall of Taj Hotel",
    client: "Taj Group",
    location: "Varanasi",
    amount: 350.0,
    year: "2016-18",
  },
  {
    id: 30,
    project: "Chandra Residency",
    client: "Parcheta Construction",
    location: "Varanasi",
    amount: 75.0,
    year: "2017-18",
  },
  {
    id: 31,
    project: "Waiting Hall & Rest Room at Varanasi Cantt Station (Works in Hand)",
    client: "RITES (Indian Railway)",
    location: "Varanasi",
    amount: 150.0,
    year: "2017-18",
  },
  {
    id: 32,
    project: "Aryan School Academic Block",
    client: "Mr. Vineet Chopra",
    location: "Varanasi",
    amount: 500.0,
    year: "2019-20",
  },
  {
    id: 33,
    project: "Aryan School Campus",
    client: "Mr. Vineet Chopra",
    location: "Mughalsarai",
    amount: 1800.0,
    year: "2021-22",
  },
  {
    id: 34,
    project: "Heritage Institute of Medical Sciences",
    client: "Dr. Siddhartha Rai",
    location: "Bhadwar, Varanasi",
    amount: 1500.0,
    year: "2022-24",
  },
  {
    id: 35,
    project: "Heritage Hospital",
    client: "Dr. Anshuman Rai",
    location: "Lanka, Varanasi",
    amount: 65.0,
    year: "2023-24",
  },
  {
    id: 36,
    project: "Construction of Hotel Building",
    client: "Kahm Properties Pvt. Ltd.",
    location: "Kamchha, Varanasi",
    amount: 105.0,
    year: "2024-25",
  },
];


const ProjectsHandled = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects Handled</h2>
      <div className="table-wrapper">
        <table className="projects-table">
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Nature of Project</th>
              <th>Client</th>
              <th>Location</th>
              <th>Amount (Rs. in Lakhs)</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj) => (
              <tr key={proj.id}>
                <td>{proj.id}</td>
                <td>{proj.project}</td>
                <td>{proj.client}</td>
                <td>{proj.location}</td>
                <td>{proj.amount}</td>
                <td>{proj.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProjectsHandled;
