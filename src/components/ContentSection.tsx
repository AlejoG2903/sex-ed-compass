interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSection = ({ title, children, className = "" }: ContentSectionProps) => {
  return (
    <section className={`mb-10 ${className}`}>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
        {title}
      </h2>
      <div className="text-muted-foreground leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
