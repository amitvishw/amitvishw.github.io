const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <div className="flex justify-center p-10">
        <div className="text-slate-100">
          © {date.getFullYear()} │ Amit Vishwakarma
        </div>
      </div>
    </footer>
  );
};

export default Footer;
