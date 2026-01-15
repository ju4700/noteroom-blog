interface BlogSection {
  index: string;
  title: string;
  contents: string[];
}

interface BlogContentProps {
  sections: BlogSection[];
}

export default function BlogContent({ sections }: BlogContentProps) {
  return (
    <div className="blog-content">
      {sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          id={section.index.toLowerCase().replace(/\s+/g, "-")}
        >
          <h2>{section.title}</h2>
          {section.contents.map((paragraph, pIndex) => (
            <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </section>
      ))}
    </div>
  );
}

interface TableOfContentsProps {
  sections: BlogSection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <nav className="sticky top-24 rounded-xl border border-gray-200 bg-gray-50 p-5">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
        On This Page
      </h3>
      <ul className="space-y-2">
        {sections.map((section, index) => (
          <li key={index}>
            <a
              href={`#${section.index.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-sm text-gray-600 transition-colors hover:text-indigo-600"
            >
              {section.index}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
