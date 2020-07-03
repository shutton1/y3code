import React, { Component } from "react";
import db from "./firebase";
import './index.css';

class Upload extends Component {
    constructor(props) {
      super(props);
      this.state = {
        url: "",
        title:"",
        price:"",
        description:"",
      };
    }
 
    setDescription = e => {
        const value = e.target.value;
        const key = e.target.name;
        this.setState({
            [key]: value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        db.collection("posts").add({
            url: this.state.url,
            title: this.state.title,
            price: this.state.price,
            description: this.state.description,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        }); 
        this.setState({ title: '', description: '', price: '', url: '' });
        alert("Thanks for posting on Ebay!");
    };

    render() {
      return (
        <div className="center">
            <br/>
            <h2>Make a post on Ebay!</h2>
            <br/>
            <br/>
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody> 
                        <tr>
                        <td> <label> Title</label> </td>
                            <td>  
                                <textarea 
                                type="text"
                                name="title"
                                value={this.state.title} 
                                onChange={this.setDescription}/>
                            </td>
                        </tr>
                        <tr>
                            <td> <label> Description</label> </td>
                            <td>  
                                <textarea 
                                type="text"
                                name="description"
                                value={this.state.description} 
                                onChange={this.setDescription}/>
                            </td>
                        </tr>
                        <tr>
                            <td>  <label> Price ($) </label> </td>
                            <td>  
                                <input 
                                type="text"
                                name="price"
                                value={this.state.price} 
                                onChange={this.setDescription}/>
                            </td>
                        </tr>
                        <tr> 
                            <td> <label> Image file</label> </td>
                            <td>  
                            <input 
                                type="text"
                                name="url"
                                value={this.state.url} 
                                onChange={this.setDescription}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                type="submit"
                                value="Submit"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            <br/>
            </form>
        </div>
      );
    }
  }
  
  export default Upload;