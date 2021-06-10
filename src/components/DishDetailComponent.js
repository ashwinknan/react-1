import { render } from '@testing-library/react';
import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Media} from 'reactstrap';


    // render the comments of the array
    function RenderComments({array}){
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
    function RenderDish({dish}){
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

    const DishDetail = (props) => {
        var dishToRender;
        if(props.dish){
            dishToRender = (
                <div className = "row">
                    <RenderDish dish = {props.dish}/>
                    <RenderComments array = {props.dish.comments} />
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


export default DishDetail;