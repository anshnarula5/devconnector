import React from "react";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: { user, status, company, location, skills },
}) => {
  return (
    <>
      <div className="profile bg-light">
        <img src={user.avatar} alt="" className="round-img" />
        <div>
          <h2>{user.name}</h2>
          <p>
            {status} {company && <span>at {company}</span>}
          </p>
          <p className="my-1">{location && <span>{location}</span>}</p>
          <Link to={`/profile/${user._id}`}>View Profile </Link>
        </div>
        <ul>
          {skills.slice(0, 4).map((skill, key) => (
              <li key={key} className="text-primary">
                  <i className="fas fa-check"></i>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProfileItem;
