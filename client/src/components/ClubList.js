import {useState} from 'react';
import {useEffect} from 'react';


function ClubList({setSelectedClub, selectedClub}) {

  const [clubList, setClubList] = useState([]);

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
      <h2 className='club-list-header'>Your Clubs</h2>
          {
            adminClubs.length > 0 && 
            <ul className='club-sublist admin'>
              <h4 className='club-list-title'>Admin</h4>
              {adminClubs.map((club) => {
                return(
                  <li 
                    className={selectedClub === club.club.name ? "club-name selected" : "club-name"}  
                    onClick={()=> setSelectedClub(club.club.name)}>
                    {club.club.name}
                  </li>
                )
              })}
            </ul>
          }
          
          {
            memberClubs.length > 0 && 
            <ul className='club-sublist member'>
              <h4 className='club-list-title'>Member</h4>
              {memberClubs.map((club) => {
                return(
                  <li 
                    className={selectedClub === club.club.name ? "club-name selected" : "club-name"} 
                    onClick={()=> setSelectedClub(club.club.name)}>
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