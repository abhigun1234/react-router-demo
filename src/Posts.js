import React, { Component } from 'react';
import axios from 'axios'
import { Table, Card, Button } from "react-bootstrap"
class Posts extends Component {
  data
  constructor(props) {
    super(props)
    this.state = {
        posts: []
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      console.log("response", response.data)
      this.setState({ posts: response.data})
      //    this.data=response.data.menuDetails
    })
  }
  render() {
    const { posts } = this.state
    return (
      <div class="menu-item">

        {/* { Menu.map(menu=>{return(<h2>{menu.name}</h2>)})} */}
        <div className="card-name">
          {posts.map(post => {
            return (<Card style={{ width: '18rem' }}>
              {/* <Card.Img className="img-menu" variant="top" src={menu.img} /> */}
              <Card.Body>
                <Card.Title>posts</Card.Title>
                <Card.Text>
                  {post.title}
                </Card.Text>
                <Button variant="primary">Add New Post</Button>
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

export default Posts;
