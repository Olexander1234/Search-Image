import { Component } from "react"
import { Searcgbar } from "./Searchbar"
import {ImageGallery} from './ImageGallery'
import './App.css'
import { GlobalStyle } from "./GlobalStyle.styled"
import LoadMoreButton from "./LoadMoreButton"

export class App extends Component {
  state={
    imageName : null,
    page: 1,
    images: [], 
  }
  
  componentDidUpdate(prevProps , prevState) {

    if (prevState.imageName !== this.state.imageName) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.imageName}&page=1&key=39772829-b06ea6d2025ce0b1560a85913&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then((data) => {
          this.setState({ images: data.hits });
        });
      
    }
   
  }

  imageOnChange=(name)=>{
this.setState({imageName: name})
  }

  onLoadMore = ()=>{
this.setState((prevState)=>{return{page: prevState.page + 1 }})
fetch(
  `https://pixabay.com/api/?q=${this.state.imageName}&page=${this.state.page}&key=39772829-b06ea6d2025ce0b1560a85913&image_type=photo&orientation=horizontal&per_page=12`
)
  .then((response) => response.json())
  .then((data) => {
    this.setState((prevState)=>{ return{  images: [...prevState.images, ...data.hits] }});
  });
  }
 render(){
  return(
    <div className="App">
  <Searcgbar onSubmit={this.imageOnChange}/>

<ImageGallery images={this.state.images}/>
<LoadMoreButton onClick={this.onLoadMore}/>
<GlobalStyle />

    </div>
   
   
    

  )
 }
    }
