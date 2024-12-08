import React, { useEffect, useState } from 'react';
import NavBar from '../../components/Navbar/navBar'; // Import NavBar
import { fetchMembers } from '../../services/memberService'; // Import member service
import './Members.css';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMembers = async () => {
      try {
        const response = await fetchMembers();
        setMembers(response.data);
      } catch (err) {
        setError('Failed to fetch members.');
      }
    };

    getMembers();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <NavBar /> {/* Include NavBar */}
      <div className="members-container">
        <h1>Members List</h1>
        <table className="members-table">
          <thead>
            <tr>
              <th>Card Number</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member._id}>
                <td>{member.cardNumber}</td>
                <td>{member.name}</td>
                <td>{member.grade}</td>
                <td>{member.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
