import { Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
import User from '../Component/User';

function Home()  {

let history = useNavigate();

    function setID(id,Name,Email,MobileNumber){
        localStorage.setItem("id",id);
        localStorage.setItem("Name",Name);
        localStorage.setItem("Email",Email);
        localStorage.setItem("MobileNumber",MobileNumber);
    }

    function deleted(id){
        let index = User.map(function (e) {
            return e.id;
        }).indexOf(id);
        User.splice(index,1);
        history("/")
    }

  return (
    <div style={{}}>
        <Table sthiped bordered hover size="sm">
            <thead>
             <tr>
                <th>Name</th>
                <th>Email</th>
                <th>MobileNumber</th>
             </tr>
            </thead>
            <tbody>
                {User.map((item)=>{
                    return (
                    <tr>
                        <td>{item.Name}</td>
                        <td>{item.Email}</td>
                        <td>{item.MobileNumber}</td>
                        <td>
                            <Link to={'/edit'}>
                                <Button onClick={(e) => setID(item.id,item.Name,item.Email,item.MobileNumber)} variant="primary">
                                    Update
                                </Button>
                            </Link>
                        </td>
                        <td>
                                <Button onClick={(e) => deleted(item.id)} variant="danger">
                                    Delete
                                </Button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </Table>
        <Link className='d-grid gap-2' style={{textDecoration:"none"}} to="/create">
            <Button variant='success' size='1g'>
                Create Account
            </Button>
        </Link>
    </div>
  )
  }

export default Home
