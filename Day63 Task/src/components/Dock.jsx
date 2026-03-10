import React from 'react';
import "./dock.scss";

const Dock = ({ first, setFirst }) => {
  return (
    <div className='parent'>
      <div
        onClick={() => setFirst({ ...first, github: !first.github })}
        className="icon github"
      >
        <img src="/doc-icons/github.svg" alt="" />
      </div>
      <div
        onClick={() => setFirst({ ...first, resume: !first.resume })}
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="" />
      </div>
      <div
        onClick={() => setFirst({ ...first, calendar: !first.calendar })}
        className="icon calender"
      >
        <img src="/doc-icons/calender.svg" alt="" />
      </div>
      <div
        onClick={() => setFirst({ ...first, mail: !first.mail })}
        className="icon mail"
      >
        <img src="/doc-icons/mail.svg" alt="" />
      </div>
      <div
        onClick={() => setFirst({ ...first, link: !first.link })}
        className="icon link"
      >
        <img src="/doc-icons/link.svg" alt="" />
      </div>
      <div
        onClick={() => setFirst({ ...first, note: !first.note })}
        className="icon note"
      >
        <img src="/doc-icons/note.svg" alt="" />
      </div>
      <div
        onClick={() => setFirst({ ...first, spotify: !first.spotify })}
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="" />
      </div>
      <div
        onClick={() => setFirst({ ...first, cli: !first.cli })}
        className="icon cli"
      >
        <img src="/doc-icons/cli.svg" alt="" />
      </div>
    </div>
  );
};

export default Dock;