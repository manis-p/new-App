import React,{useEffect} from 'react';
import NewItem from './NewItem';
//import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import {useState} from 'react';
const News=(props)=> {
  //this is the class based react component 
  //constructor(props) {
   // super(props)
    //document.tiltle= "gello"
    //console.log("hello")
    //this.state = {
     // articles: ,
      //loading: true,
      //page: 1,
      //totalResults: 0
    //}
    
    
    
  const [articles,setarticles]=useState([])
  const [loading,setloading]=useState(true)
  const [page,setpage]=useState(1)
  const [totalResults,settotalResults]=useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  document.title = `Newapp-${capitalizeFirstLetter(props.category)}`

  

 const newUpdate = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&apiKey=a9a91b1d8b534b1cbb778b9e2e2a5274&pageSize=${props.pageSize}`
    //this.setState({ loading: true })
    setloading(true)
    let data = await fetch(url)
    let parasData = await data.json()
    console.log(parasData)
    //this.setState({ loading: false })
    setloading(false)
    //this.setState({ articles: parasData.articles, totalResults: parasData.totalResults })
    setarticles(parasData.articles)
    settotalResults(parasData.totalResults)

  }
  
// effect show 
  useEffect(()=>{    
    newUpdate();
  },[])
 // const componentDidMount= async() =>{
  //  newUpdate()

 // }
    

  const handleNextClick = async () => {
    console.log("Next")
    if (page + 1 > Math.ceil(totalResults / props.pageSize)) {

    }
    else {
      //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9a91b1d8b534b1cbb778b9e2e2a5274&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      //this.setState({loading:true})
      //let data = await fetch(url)
      //let parsedData =  await data.json()
      //console.log(parsedData)
     // this.setState({
      //  page: this.state.page + 1
        // articles:parsedData.articles ,
        // loading:false 

    //  })
    setpage(page+1)
    newUpdate()
    }
  }

  const handlePreviousClick = async () => {
    console.log("previous")
    // let url = `1https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9a91b1d8b534b1cbb778b9e2e2a5274&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url)
    // let parasdata = await data.json()
    // console.log(parasdata)
    // this.setState({loading:false})
    //this.setState({
      //page: this.state.page - 1,
      //articles: parasdata.articles
    //})
    setpage(page-1)
    newUpdate()
  }
   const fetchMoreData =async () => {
    //this.setState({ page: this.state.page + 1 })
    setpage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&apiKey=a9a91b1d8b534b1cbb778b9e2e2a5274&pageSize=${props.pageSize}`
    //this.setState({ loading: true })
    setloading(true)
    let data = await fetch(url)
    let parasData = await data.json()
    console.log(parasData)
    
    //this.setState({ articles: this.state.articles.concat(parasData.articles), 
      //totalResults: parasData.totalResults,loading:false })
      setarticles(articles.concat(parasData.articles))
      settotalResults(parasData.totalResults)
      setloading(false)

  };

  
    console.log("ren")
    return (

      <div className="container my-3 text-center">
        <h2 style={{marginTop:'70px'}}>News-app:Top Headlines on {props.category}</h2>
        {/*{this.state.loading && <Spinner />}*/}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
         <div className="container">

        
          
          <div className="row">
            { articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <NewItem title={element.title} description={element.description}
                  imageurl={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} name={element.source.name} />
              </div>
            })}
          </div>
          </div>
          </InfiniteScroll>
          
      </div>
    )
    
}
   
export default News;

