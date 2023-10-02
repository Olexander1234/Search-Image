import { Component } from "react";
import './Searchbar.css'
export class Searcgbar extends Component{
    state={
value:''
    }
handleChange=(e)=>{
this.setState({value: e.currentTarget.value.toLowerCase()})
}
handleSubmit=(e)=>{
    e.preventDefault()
    this.props.onSubmit(this.state.value)
}
    render(){
        return(
            <header className="Searchbar">
  <form className="  SearchForm " onSubmit={this.handleSubmit}>
    <button type="submit" className="SearchForm-button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
      value={this.state.value}
    />
  </form>
</header>
        )
    }
}