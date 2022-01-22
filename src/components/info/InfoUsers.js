import React,{useEffect,useState} from 'react';
import './infoUsers.css'
import styled from 'styled-components';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';





const InfoUsers = () => { 
    const [users, setUsers] = useState([]);
    const [grid, setGrid]=useState(280);

const change=()=>{
    if(grid==280){
    setGrid(350)
    }
}

const changed=()=>{
    if(grid==350){
    setGrid(280)
    }
}

const Card=styled.div`
max-width: ${grid}px;
`;

    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const FinalData = await response.json();
        setUsers(FinalData)
    }



    useEffect(() => {
        getUsers();
    }, [])


    return (
      
            <div className='container'>
               <div className='buttons'>
                   <nav>
               <GridViewIcon onClick={changed}/>
               <ViewComfyIcon onClick={change}/>
               </nav>
               </div>
                {
                    users.map((eachUser) => {
                        return (

                            <Card key={eachUser.id} className='card'>
                               
                                    <a href={`${eachUser.html_url}`}>
                                        <img  src={eachUser.avatar_url}/>
                                    </a>

                                    <div className="box">
                                    <h3 className="userName">{eachUser.login}</h3>
                                   
                                    <p className="userUrl">{eachUser.url}</p>
                                    <div  className="Box">

                                        <div className="gitDetail"><span>Articles</span>23</div>
                                        <div className="gitDetail"><span>Following</span>45</div>
                                        <div className="gitDetail"><span>Followers</span>11</div>
                                        <nav>type: <h4>{eachUser.type}</h4></nav>
                                    <button >See More</button>
                                </div>
                                </div>
                                
                            </Card>
                        )
                    })
                }
                                 
            </div>              


    )
}

export default InfoUsers;
