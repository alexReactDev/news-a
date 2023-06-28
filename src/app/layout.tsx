import { Metadata } from "next";
import "../styles/nullstyle.css";
import "../styles/fonts.css";
import "../styles/global.css";
import Logo from "../components/logo";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: 'A News',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <>
          <style>{`
            header {
              padding: 20px;
              background-color: #eeeeee;
            }
            .wrapper {
              min-height: 100%;
              display: flex;
              flex-direction: column;
            }
            main {
              flex: 1 1 auto;
              display: flex;
              flex-direction: column;
            }
          `}</style>
          <div className="wrapper">
            <header>
              <Logo />
            </header>
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </>
      </body>
    </html>
  )
}
