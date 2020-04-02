import Head from 'next/head';
import NavigationBar from '../NavigationBar/NavigationBar';

const MasterPage = (props) =>(
    <div>
        <Head>
            <title>Bitcoin App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel='stylesheet' href='https://bootswatch.com/4/darkly/bootstrap.min.css'/>
        </Head>
        <NavigationBar />
        <div className='container mt-4'>
            {props.children}
             
        </div>
    </div>
)

export default MasterPage;