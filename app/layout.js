import Header from "./components/header";
import { Providers } from "./providers";
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
          <Providers>
            <Header/>
            {children}
          </Providers>

        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.54/build/spline-viewer.js" async></script>

      </body>
    </html>
  );
}
