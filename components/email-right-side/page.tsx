const EmailRightSide = () => {
  return (
    <div className="fixed bottom-0 right-8 hidden md:flex flex-col items-center">
      <a
        href="mailto:mariamaqbool35@gmail.com"
        className="font-mono text-xs tracking-widest text-gray-400 hover:text-emerald-400 transition-colors transform-rotate-90 mb-6"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        mariamaqbool35@gmail.com
      </a>
      <div className="h-24 w-px bg-gray-400"></div>
    </div>
  );
};

export default EmailRightSide;
