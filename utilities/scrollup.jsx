import { FaLongArrowAltUp } from "react-icons/fa";

function ScrollButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (    
    <button className='text-white flex py-2 pl-4 bg-red-700 rounded-xl' onClick={scrollToTop}>&nbsp;&nbsp;Back to Top&nbsp;<FaLongArrowAltUp className='arrowup' />&nbsp;&nbsp;</button>  
  );
}

export default ScrollButton;