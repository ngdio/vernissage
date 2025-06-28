import { ViewProps } from "../props"
import { Header } from "../includes/header"
import { Footer } from "../includes/footer"
import meta from "../data/meta.json"

export function BaseLayout({ content, title, description, scripts, page }: ViewProps): JSX.Element {
    return (
        <html lang={meta.lang} class="scroll-smooth">
        <head>
            <meta charSet="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Sophia Williams - {meta.title}</title>
            <meta name="description" content={description || meta.description} />
            <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
            <link rel="stylesheet" href="/assets/css/styles.css" />
            {scripts}
        </head>

        <body class="dark:bg-black bg-white h-screen text-black dark:text-white px-5 md:px-20 opacity-0 animate-fade-in transition duration-500">
            <Header page={page} />
            <div class="container mx-auto">
            {content}
            </div>
            <Footer />
            <script type="module" src="/assets/js/main.js"></script>
        </body>
        </html>
    )
}

export const render = BaseLayout
