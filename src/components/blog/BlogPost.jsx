import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "./blogData";
import "./BlogPost.css";

/* ── Shared hero + strip used by all templates ── */
const PostHero = ({ post }) => (
  <div className="blogpost-hero">
    <div className="blogpost-hero-inner">
      <div className="blogpost-hero-left">
        <Link to="/blog" className="blogpost-back">← BACK TO BLOGS</Link>
      </div>
      <div className="blogpost-hero-right">
        <p className="blogpost-hero-label">
          <span className="blogpost-label-line" />
          {post.category}
        </p>
        <h1 className="blogpost-hero-title">{post.title}</h1>
        {post.tags && (
          <div className="blogpost-tags">
            {post.tags.map((tag, i) => (
              <span key={i} className="blogpost-tag">{tag}</span>
            ))}
          </div>
        )}
        <span className="blogpost-hero-date">{post.date}</span>
      </div>
    </div>
  </div>
);

const PostStrip = ({ strip }) =>
  strip ? (
    <div className="blogpost-strip">
      {strip.map((item, i) => (
        <React.Fragment key={i}>
          <div className="blogpost-strip-item">{item}</div>
          {i < strip.length - 1 && <div className="blogpost-strip-sep">·</div>}
        </React.Fragment>
      ))}
    </div>
  ) : null;

/* ── FAQ template ── */
const FaqTemplate = ({ post }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = useCallback((i) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  }, []);

  const introSection = post.sections.find((s) => !s.title && s.note);
  const ctaSection = post.sections.find((s) => !s.title && s.cta);
  const questions = post.sections.filter((s) => s.title);

  return (
    <div className="blogpost-body">
      <div className="blogpost-content">
        {introSection && (
          <div className="blogpost-entry blogpost-entry--intro bp-reveal">
            <div className="blogpost-entry-body">
              <p className="blogpost-service-note">{introSection.note}</p>
            </div>
          </div>
        )}

        <div className="blogpost-specs-container">
          <div className="blogpost-accordion">
            <dl>
              {questions.map((section, i) => (
                <React.Fragment key={i}>
                  <dt>
                    <button
                      className={`blogpost-accordionTitle${activeIndex === i ? " blogpost-accordionTitleActive" : ""}`}
                      onClick={() => toggleAccordion(i)}
                    >
                      {section.title}
                    </button>
                  </dt>
                  <dd
                    className={`blogpost-accordionItem${
                      activeIndex === i
                        ? " blogpost-animateIn"
                        : " blogpost-accordionItemCollapsed blogpost-animateOut"
                    }`}
                  >
                    <div className="blogpost-faq-answer">
                      {section.paragraphs && section.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                      {section.note && <p className="blogpost-service-note">{section.note}</p>}
                      {section.items && (
                        <ul className="blogpost-list">
                          {section.items.map((item, j) => <li key={j}>{item}</li>)}
                        </ul>
                      )}
                      {section.groups && section.groups.map((group, j) => (
                        <div key={j} className="blogpost-group">
                          {group.label && <p className="blogpost-group-label">{group.label}</p>}
                          <ul className="blogpost-list">
                            {group.items.map((item, k) => <li key={k}>{item}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
        </div>

        {ctaSection && (
          <div className="blogpost-cta blogpost-cta--standalone">
            {ctaSection.cta.map((link, j) => (
              <a key={j} href={link.href}>{link.label}</a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Default template ── */
const DefaultTemplate = ({ post }) => {
  let cnt = 0;
  const numberedSections = post.sections.map((s) => ({
    ...s,
    num: s.title ? String(++cnt).padStart(2, "0") : null,
  }));

  const tocItems = numberedSections.filter((s) => s.title);
  const showToc = tocItems.length >= 4;

  return (
    <>
      {showToc && (
        <div className="blogpost-toc bp-reveal">
          <div className="blogpost-toc-inner">
            <p className="blogpost-toc-eyebrow">
              <span className="blogpost-label-line" />
              JUMP TO A TOPIC
            </p>
            <div className="blogpost-toc-list">
              {tocItems.map((item, i) => (
                <a key={i} href={`#bp-section-${item.num}`} className="blogpost-toc-item">
                  <span className="blogpost-toc-num">{item.num}</span>
                  <span className="blogpost-toc-title">{item.title}</span>
                  <span className="blogpost-toc-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="blogpost-body">
        <div className="blogpost-content">
          <div className="blogpost-section">
            {numberedSections.map((section, i) => (
              <div
                key={i}
                id={section.num ? `bp-section-${section.num}` : undefined}
                className={`blogpost-entry bp-reveal${!section.title ? " blogpost-entry--intro" : ""}`}
              >
                {section.title && (
                  <div className="blogpost-entry-header">
                    <p className="blogpost-section-label">
                      <span className="blogpost-label-line" />
                      {section.num}
                    </p>
                    <h3 className="blogpost-entry-title">{section.title}</h3>
                  </div>
                )}
                <div className="blogpost-entry-body">
                  {section.note && <p className="blogpost-service-note">{section.note}</p>}
                  {section.paragraphs && section.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                  {section.items && (
                    <ul>
                      {section.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  )}
                  {section.groups && section.groups.map((group, j) => (
                    <div key={j} className="blogpost-group">
                      {group.label && <p className="blogpost-group-label">{group.label}</p>}
                      <ul>
                        {group.items.map((item, k) => <li key={k}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                  {section.table && (
                    <div className="blogpost-table-wrap">
                      <table className="blogpost-table">
                        <thead>
                          <tr>
                            {section.table.headers.map((h, j) => <th key={j}>{h}</th>)}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, j) => (
                            <tr key={j}>
                              {row.map((cell, k) => <td key={k}>{cell}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {section.table.footnote && (
                        <p className="blogpost-table-footnote">{section.table.footnote}</p>
                      )}
                    </div>
                  )}
                  {section.cta && (
                    <div className="blogpost-cta">
                      {section.cta.map((link, j) => (
                        <a key={j} href={link.href}>{link.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

/* ── Main component ── */
const BlogPost = () => {
  const { slug } = useParams();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("bp-visible");
        }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".bp-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [slug]);

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="blogpost-page">
      <Helmet>
        <title>{post.title} | Deluxe Caravans</title>
        {post.metaDescription && (
          <meta name="description" content={post.metaDescription} />
        )}
        <link rel="canonical" href={`https://deluxecaravans.com.au/blog/${post.slug}`} />
      </Helmet>

      <PostHero post={post} />
      <PostStrip strip={post.strip} />

      {post.template === "faq" ? (
        <FaqTemplate post={post} />
      ) : (
        <DefaultTemplate post={post} />
      )}
    </div>
  );
};

export default BlogPost;
