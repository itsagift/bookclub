import {useState} from 'react';
import {useEffect} from 'react';
import CreateClubForm from './CreateClubForm';

function ClubList({setSelectedClub, selectedClub}) {

  const [clubList, setClubList] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [newClub, setNewClub] = useState("");

  function handleFormVisible(){
    setFormVisible(true)
  }

  useEffect(() => {
  async function fetchClubs(){
    let req = await fetch('/userclubs')
    if (req.ok){
      let res = await req.json();
      setClubList(res.memberships)
      setSelectedClub(res.memberships[0].club)
    }
  }
  fetchClubs();
}, [newClub]);

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

  const listMap = (clubName) => {
    return (
    clubName.map((club) => {
      return(
        <li 
          className={selectedClub.name === club.club.name ? "club-name selected" : "club-name"}  
          onClick={()=> setSelectedClub(
            {"name": club.club.name, "id": club.club.id, "description": club.club.description})}>
          {club.club.name}
        </li>
      )
    })
    )
  }

  return(
    <div className="club-list-container">
    <h2 className='club-list-header'>Your Clubs</h2>
    {
      adminClubs.length > 0 && 
      <ul className='club-sublist admin'>
        <h4 className='club-list-title'>Admin</h4>
        {listMap(adminClubs)}
      </ul>
    }
          
    {
      memberClubs.length > 0 && 
      <ul className='club-sublist member'>
        <h4 className='club-list-title'>Member</h4>
        {listMap(memberClubs)}
      </ul>
    }
    <button className="create-club-button" onClick={handleFormVisible}>
      Create A Club
    </button>
    <CreateClubForm formVisible={formVisible} setFormVisible={setFormVisible} setNewClub={setNewClub}/>
    </div>
  )
}

export default ClubList