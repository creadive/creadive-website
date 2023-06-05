import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="preconnect"
                    // as="fetch"
                    href="https://fonts.googleapis.com"
                // crossOrigin="anonymous"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                // crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                // as="style"
                // crossOrigin="anonymous"
                ></link>
                <link rel="icon" href="/favicon.png" />
                <script async src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}