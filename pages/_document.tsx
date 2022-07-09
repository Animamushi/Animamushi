//este metodo statico applica a todas las pages
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }
    render() {

        const addJsonLd = {
            "@context": "http://schema.org",
            "@type": "WebSite",
            name: "animamushi"
        }
        return (
            <Html lang='en'>
                <Head>
                    <meta name="description" content="Animamushi - wifus and more" />
                    <meta name="robots" content="index, follow" />
                    <meta property="og:type" content="video" />
                    <meta property="og:title" content="animamushi" />
                    <meta property="og:description" content="anime video streaming" />
                    <meta property="og:site_name" content="animamushi" />
                    <link rel="icon" href="/favicon.ico" />
                    <script type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(addJsonLd) }}
                        key="item-jsonld" />
                    <meta name="abstract" content="animamushi waifus and more" />
                    <meta name="keywords" content="Anime,Video,Streaming,Waifus,Manga,Series,One Piece" />
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&family=Rubik:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
                </Head>
                <body className="body">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument