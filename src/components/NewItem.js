import React from 'react';



const NewItem=(props)=> {


    
        let { title, description, imageurl, url,author,publishedAt,name } = props;
        //De-structring concept

        return (

            <div>
                <div className="card mx-2"  >
                    <img className="card-img-top" src={!imageurl?"https://ichef.bbci.co.uk/news/1024/branded_news/159D4/production/_132523588_hnxtbub5-verify-nc.jpg":imageurl }
                     alt="hello" />
                    <div className="card-body">
                        <h5 className="card-title">{title}<span class="badge badge-success">{name}</span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-mutedbadge text-success "   >By {!author?'Unknow':author} On {new Date(publishedAt).toGMTString()}</small></p>
                        <a href={url}  className="btn btn-sm btn-dark">read more</a>
                    </div>
                    
                </div>
            
            </div>


        );
}
export default NewItem;
