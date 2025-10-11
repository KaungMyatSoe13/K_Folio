import React from "react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Globe, ExternalLink } from "lucide-react";

interface ProjectDetailsProps {
  shortDescription: string;
  platform: string;
  role: string;
  year: string;
  links?: {
    demo?: string;
    website?: string;
  };
}

export default function ProjectDetails({
  shortDescription,
  platform,
  role,
  year,
  links,
}: ProjectDetailsProps) {
  return (
    <AnimatedCard className="bg-gray-400/10 rounded-lg p-3 sm:p-4 md:col-span-2 lg:col-span-1 order-1">
      <h2 className="text-xl sm:text-2xl text-gray-200 mb-2 sm:mb-3 font-bold">
        /DESCRIPTION
      </h2>
      <div className="text-md sm:text-lg leading-relaxed space-y-2">
        <p className="uppercase">{shortDescription}</p>
        <p className="text-gray-400 text-md sm:text-lg">
          PLATFORM: <span className="text-gray-200">{platform}</span>
        </p>
        <p className="text-gray-400 text-md sm:text-lg">
          ROLE: <span className="text-gray-200">{role}</span>
        </p>
        <p className="text-gray-400 text-md sm:text-lg">
          Year: <span className="text-gray-200">{year}</span>
        </p>
      </div>

      {links && (links.demo || links.website) && (
        <div className="mt-4 pt-3 border-t border-gray-600">
          <div className="space-y-2">
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm"
              >
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                LIVE DEMO
              </a>
            )}

            {links.website && (
              <a
                href={links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm"
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                WEBSITE
              </a>
            )}
          </div>
        </div>
      )}
    </AnimatedCard>
  );
}
