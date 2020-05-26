import React, { Fragment } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/errorBoundry';

class  App extends React.Component {
 constructor(){
     super()
     this.state = {
         robots : [],
         searchfield: ''
     }
 }

 componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => 
        response.json())
  .then(users => this.setState({robots:users}));
 }
    onSearchChange = (event) =>{

        this.setState({searchfield:event.target.value})

 }
    render(){

        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter( robot => {
         
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
            
           });
           if(!robots.length){
               return <h1>Loading</h1>
           } else {
        return (
            <Fragment>
            <div className='tc'>
            <h1 className='f1'>RoboFriendsss</h1>
            <SearchBox  searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
            <CardList robots={filterRobots} />
            </ErrorBoundry>
            </Scroll>
            </div>
            </Fragment>
        );
           }
    }
    
};



export default App;