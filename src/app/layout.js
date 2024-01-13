import './globals.css';
import Layout from '@/Components/Layout';


export const metadata = {
  title: 'Naruto DB || Home',
  description: 'A Naruto Database for Fun',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nova+Square&display=swap" rel="stylesheet" />
      </head>

      <body
        className='gradient-bg text-white mx-[5vw] md:mx-[12vw] lg:mx-[15vw]'
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
