import { ExternalLink } from "lucide-react";

interface ResourceLinkProps {
  title: string;
  url: string;
  description?: string;
}

const ResourceLink = ({ title, url, description }: ResourceLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md hover:border-primary/30"
    >
      <ExternalLink className="h-5 w-5 text-primary mt-0.5 shrink-0" />
      <div>
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
      </div>
    </a>
  );
};

export default ResourceLink;
