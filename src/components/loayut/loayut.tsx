import Header from './header';
import Footer from './footer';
type loayutProps = {
  children: JSX.Element;
}

const Loayut = ({ children }: loayutProps): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>);

export default Loayut;
