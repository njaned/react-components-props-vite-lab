function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside className="flex flex-col items-center gap-4 text-center md:sticky md:top-10 md:self-start">
      <img
        src={image}
        alt="blog logo"
        className="h-36 w-36 rounded-full object-cover shadow-md ring-4 ring-white"
      />
      <p className="text-sm leading-relaxed text-gray-600">{about}</p>
    </aside>
  );
}

export default About;