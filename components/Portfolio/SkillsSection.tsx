import { skills } from "../data/skills";
import AsciiLine from "../ui/AsciiLine";
import { vt323 } from "../../app/fonts/fonts";

export default function SkillsSection() {
  return (
    <div className="max-h-screen text-gray-400">
      <AsciiLine char="=" />
      <div className="text-gray-400 text-center flex flex-row">
        <div
          className={`text-white sm:text-xl lg:text-2xl font-bold py-2 ${vt323.className}`}
        >
          PROFESSIONAL SKILLS
        </div>
      </div>
      <AsciiLine char="=" />

      <div
        className={`grid grid-cols-2 gap-6 text-white mt-2 ${vt323.className}`}
      >
        {skills.map((skill, index) => (
          <div key={index} className="rounded">
            <div className="text-sm sm:text-md lg:text-xl">
              /{skill.category}
            </div>
            <AsciiLine char="=" className="text-gray-400" />
            <ul className="text-gray-300 text-xs sm:text-sm lg:text-base">
              {skill.items.map((item, idx) => (
                <li key={idx}>/{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
