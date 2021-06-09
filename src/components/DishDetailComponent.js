import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Media} from 'reactstrap';

class DishDetail extends Component{
    // render the comments of the array
    renderComments(array){
        if(array.length !== null){
                return(
                  <div className = "col-12 col-md-5 m-1">
                      <h4>Comments</h4>
                      {array.map( item =>
                        <Media list className = "list-unstyled">
                                <Media header>{item.comment}</Media>
                                <Media body>-- {item.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}</Media>
                            
                        </Media>        
                      )}
                  </div>      
                );
        }
        else{
            return(<div></div>)
        }
       
    }

    // render the dish
    renderDish(dish){
        if(dish != null){
            return(
                <Card className = "col-12 col-md-5 m-1">
                  <CardImg width ="90%" object src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle><strong>{dish.name}</strong></CardTitle>  
                    <CardText>{dish.description}</CardText>
                    </CardBody>  
                </Card>

            );
        }
        else{
            return(<div></div>);
        }
    }

    render(){
        var dishToRender;
        if(this.props.dish){
            dishToRender = (
                <div className = "row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            )
        }
        else{
            dishToRender = <div></div>
        }
        return(
            <div className = "container">
                {dishToRender}
            </div>
        );
    }
}

export default DishDetail;