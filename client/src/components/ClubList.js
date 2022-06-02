import {useState} from 'react';
import {useEffect} from 'react';


function ClubList() {

  const [clubList, setClubList] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
  async function fetchClubs(){
    let req = await fetch('/userclubs')
    if (req.ok){
      let res = await req.json();
      setClubList(res.memberships)
    }
  }
  fetchClubs();
}, []);

  let adminClubs = [];
  let memberClubs = [];

  clubList.forEach((club) => {
    if (club.admin){
      adminClubs.push(club)
    }
    else{
      memberClubs.push(club)
    }
  })

  return(
    <div className="club-list-container">
          {
            adminClubs.length > 0 && 
            <ul className='club-sublist'>
              <div className='club-list-title'>Admin</div>
              {adminClubs.map((club) => {
                return(
                  <li>
                    {club.club.name}
                  </li>
                )
              })}
            </ul>
          }
          {
            memberClubs.length > 0 && 
            <ul className='club-sublist member'>
              <div className='club-list-title'>Member</div>
              {memberClubs.map((club) => {
                return(
                  <li>
                    {club.club.name}
                  </li>
                )
              })}
            </ul>
          }
      </div>
  )
}

export default ClubList