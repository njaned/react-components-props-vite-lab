function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600">
        {title}
      </h3>
      <small className="mt-1 block text-sm text-gray-500">{date}</small>
      <p className="mt-3 leading-relaxed text-gray-700">{preview}</p>
    </article>
  );
}

export default Article;