const HeaderItems = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center group w-12 sm:w-20 hover:text-white">
      <Icon className="h-6 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest group-hover:opacity-100 opacity-0">
        {title}
      </p>
    </div>
  );
};

export default HeaderItems;
