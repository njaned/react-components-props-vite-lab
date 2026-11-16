import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header name={blogData.name} />
      <div className="mx-auto grid max-w-4xl gap-10 px-6 py-10 md:grid-cols-[220px_1fr]">
        <About image={blogData.image} about={blogData.about} />
        <ArticleList posts={blogData.posts} />
      </div>
    </div>
  );
}

export default App;
