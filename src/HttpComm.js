import React, { Component } from 'react';
import axios from 'axios'
import { Table, Card, Button } from "react-bootstrap"
class HttpComm extends Component {
  data
  constructor(props) {
    super(props)
    this.state = {
        courseData: []
    }
  }
  componentDidMount() {
    axios.get('https://dronaonlineadmin.herokuapp.com/courses/').then(response => {
      console.log("response", response.data)
      this.setState({ courseData: response.data.courseDetails })
      //    this.data=response.data.menuDetails
    })
  }
  render() {
    const { courseData } = this.state
    return (
      <div class="menu-item">

        {/* { Menu.map(menu=>{return(<h2>{menu.name}</h2>)})} */}
        <div className="card-name">
          {courseData.map(course => {
            return (<Card style={{ width: '18rem' }}>
              {/* <Card.Img className="img-menu" variant="top" src={menu.img} /> */}
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  {course.name}
                </Card.Text>
                <Button variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>)
          })}
        </div>
        {/* MenuItems
        {
          restaurentData.length ? restaurentData.map(data => <div >

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Item Name</th>
      <th>Price</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data.name}</td>
      <td>{data.price}</td>
 
    </tr>
 
  
  </tbody>
</Table>
          </div>) : null
          // {restaurentData.length}
        } */}
      </div>
    );
  }
}

export default HttpComm;
