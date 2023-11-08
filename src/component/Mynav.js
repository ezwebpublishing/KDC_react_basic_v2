import React, { Component } from 'react';


class Mynav extends Component{
  shouldComponentUpdate(newProps, newState){
    console.log(
      'shouldComponentUpdate 작동',
      newProps.data,
      this.props.data
      );
      if(this.props.data === newProps.data){
        return false;
      }
    return true;
  }



  render(){
    console.log('Mynav render');
    var lists = [];
    var data = this.props.data;

    data.forEach((item,idx)=>{
      lists.push(<li key={item.id}><a href="/" onClick={
        (e)=>{
          e.preventDefault();
          this.props.onChangePage(item.id);
        }
      }>{item.title}</a></li>);
     });

    return(
      <nav>
        <ul>
            {lists}
        </ul>
      </nav>
    );
  }
}
export default Mynav;