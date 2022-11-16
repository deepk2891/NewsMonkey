import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Rubén Chicharro",
            "title": "Xiaomi 12T Pro, análisis: un smartphone excelente con un rival en su propia casa",
            "description": "Es complicado seguir el ritmo de lanzamientos de Xiaomi. Principalmente, porque la compañía anuncia smartphones prácticamente cada dos semanas –ya sea bajo la marca principal o mediante alguna submarca como Redmi o Poco–. No obstante, entre toda esa multitud …",
            "url": "https://hipertextual.com/2022/11/xiaomi-12t-pro-review-analisis-opinion-caracteristicas-precio",
            "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/11/xiaomi-12t-pro.jpg?fit=1920%2C1080&quality=60&strip=all&ssl=1",
            "publishedAt": "2022-11-15T04:20:00Z",
            "content": "Es complicado seguir el ritmo de lanzamientos de Xiaomi. Principalmente, porque la compañía anuncia smartphones prácticamente cada dos semanas ya sea bajo la marca principal o mediante alguna submarc… [+9413 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Abortretry.fail"
            },
            "author": "Bradford Morgan White",
            "title": "'Be' is nice. End of story",
            "description": "pick a name from the dictionary, it can work",
            "url": "https://www.abortretry.fail/p/be-is-nice-end-of-story",
            "urlToImage": "https://substackcdn.com/image/fetch/w_1200,h_600,c_limit,f_jpg,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3c02b3ac-0ef7-4316-8709-ae4f42c7a591_1024x1024.png",
            "publishedAt": "2022-11-15T02:27:28Z",
            "content": "Jean-Louis Gassée was born in Paris France in 1944. From 68 to 74, he worked for Hewlett Packard in Europe. He was in charge of a project to develop the first scientific desktop computer from HP, and… [+11358 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Andreas Knobloch",
            "title": "Dienstag: Google muss zahlen, Amazon entlässt",
            "description": "Google mit Millionenstrafe + Amazon plant Stellenabbau + Betrüger stehlen Kreditkarten-Infos + \r\nÄrger in Indien + 400-Millionen-Überweisung an falsche Wallet",
            "url": "https://www.heise.de/news/Dienstag-Google-muss-zahlen-Amazon-entlaesst-7340081.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/4/3/1/8/4/Wochentage-source-sans-8cd54b4b9c8ee776.png",
            "publishedAt": "2022-11-15T05:30:00Z",
            "content": "Jahrelang hat Google Aufenthaltsorte von Nutzern für Werbezwecke gespeichert, obwohl diese die Funktion abgeschaltet wähnten. Nun muss der Konzern zahlen aber es hätte weitaus teurer werden können. U… [+3481 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Malte Kirchner",
            "title": "Ostsee-Pipeline Nord Stream: Krimi, Kampfbegriff, Kehrtwende?",
            "description": "Vor über zehn Jahren wurde die Pipeline Nord Stream 1 als Abkürzung für Gastransporte gebaut. Doch jetzt führt diese womöglich in eine ganz andere Richtung.",
            "url": "https://www.heise.de/meinung/Ostsee-Pipeline-Nord-Stream-Krimi-Kampfbegriff-Kehrtwende-7339797.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/4/3/0/3/8/transport-nord-stream-new_0-e065d5aed617ba38.jpeg",
            "publishedAt": "2022-11-15T04:30:00Z",
            "content": "Inhaltsverzeichnis\r\nDie Frage, was mit den Ostsee-Gaspipelines Nord Stream 1 und 2 passiert ist, wer für die schwere Sabotage Ende September am Meeresgrund verantwortlich zeichnet, gleicht einem Krim… [+5903 chars]"
        }, ]

    constructor () {
        super()
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render () {
        return (
            <div className='container my-3' >
                <h2>
                    NewsMonkey - Top Headlines
                </h2>
                <div className="row">
                    { this.articles.map( ( element ) => {
                        return (
                            <div className="col-md-3">
                                <NewsItem title={ element.title } description={ element.description } imageUrl={ element.urlToImage } url={ element.url } />
                            </div>
                        )
                    } ) }
                </div>
            </div >
        )
    }
}

export default News
