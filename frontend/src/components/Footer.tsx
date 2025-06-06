const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full p-6 text-center">
      <p className="text-gray-400">Copyright ⓒ {currentYear}</p>
    </footer>
  );
};

export default Footer;
