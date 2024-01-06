import './globals.css';
import Layout from '@/Components/Layout';


export const metadata = {
  title: 'Naruto DB || Home',
  description: 'A Naruto Database for Fun',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
