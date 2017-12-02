import Head from 'next/head'
import styles from '../../styles/index.scss';

export default () => (
    <div>
        <Head>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="description" content="Portfolio page showcasing my work as a Web Devleoper"/>
            <title>Andrico Karoulla Portfolio Page</title>
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css"/>
        </Head>
        <style jsx global>
            {styles}
        </style>
    </div>
)