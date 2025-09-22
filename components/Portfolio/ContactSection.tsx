import React from "react";
import { contactData } from "../data/contact";

const ContactSection: React.FC = () => {
  return (
    <div className="bg-[#101828] text-blue-400 font-mono text-sm max-w-4xl mx-auto">
      {/* HTML-style comments and tags */}
      <div className="text-gray-500 ">{"<!-- start .scope-contact -->"}</div>
      <div>
        &lt;section class="
        <span className="text-orange-400">scope-contact</span>"&gt;
      </div>

      <div className="ml-4">
        <div className="text-blue-400 ">{"<h3>"}</div>
        <div className="ml-4 text-white font-bold ">{contactData.title}</div>
        <div className="text-blue-400 ">{"</h3>"}</div>

        <div className="text-blue-400 ">{"<p>"}</div>
        <div className="ml-4 text-gray-300 leading-relaxed ">
          I'm currently open to freelance collaborations
          <br />
          with agencies and designers. If you're looking for
          <br />
          a reliable developer to implement your digital
          <br />
          projects, let's connect.
        </div>
        <div className="text-blue-400 ">{"</p>"}</div>

        <div className="text-blue-400 ">{"<p>"}</div>
        <div className="ml-4 text-gray-300 leading-relaxed ">
          Please feel free to shoot me an email to organise
          <br />
          a meeting — I'd love to hear what you're working
          <br />
          on.
        </div>
        <div className="text-blue-400 ">{"</p>"}</div>

        <a
          href={`mailto:${contactData.email}`}
          className="inline-block px-3 py-1 rounded font-mono text-sm transition-colors"
        >
          {'<a href="'}
          <span className="text-orange-400">{`mailto:`}</span>
          <span className="text-orange-400">{contactData.email}</span>
          {'">'}
        </a>

        <div className="ml-4 underline hover:text-cyan-100 cursor-pointer underline-offset-2 ">
          <a href={`mailto:${contactData.email}`} className="text-white">
            Email me
          </a>
        </div>
        <div className="text-blue-400 ">{"</a>"}</div>
      </div>

      <div className="text-blue-400">{"</section>"}</div>
    </div>
  );
};

export default ContactSection;
