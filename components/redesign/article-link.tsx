"use client";
import { useEffect, useRef, useState, type ComponentProps } from "react";
import { articles } from "@/lib/site";

export default function ArticleLink({ children, ...props }: ComponentProps<"a">) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const isWsj = props.href === articles[0].url;
  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  return <>
    <a {...props} aria-haspopup={isWsj ? "dialog" : undefined} onClick={(event) => {
      if (!isWsj || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault(); setOpen(true);
    }}>{children}</a>
    {open && <dialog ref={dialog} className="article-modal" aria-labelledby="wsj-modal-title" onCancel={() => setOpen(false)} onClose={() => setOpen(false)} onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setOpen(false);
    }}>
      <div className="article-modal-header">
        <div><span className="eyebrow">THE WALL STREET JOURNAL</span><h2 id="wsj-modal-title">{articles[0].title}</h2></div>
        <button type="button" aria-label="Close article" onClick={() => setOpen(false)} autoFocus>×</button>
      </div>
      <div className="article-modal-notice"><p>WSJ may require a subscription or prevent this embedded view from loading.</p><a href={articles[0].url} target="_blank" rel="noopener noreferrer">Open on WSJ ↗</a></div>
      <iframe src={articles[0].url} title="The Wall Street Journal profile of David Chau" className="article-modal-frame" />
    </dialog>}
  </>;
}
