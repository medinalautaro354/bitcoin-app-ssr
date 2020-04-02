import Article from '../Article/Article';

const Articles = (props) =>{
    return(
    <div className='row'>
        {Object.keys(props.articles).map(index =>(
            <Article key={index} article={props.articles[index]}/>
        ))}
    </div>
        );
}

export default Articles;