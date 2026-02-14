import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TimelineItemProps = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: readonly string[];
};

export function TimelineItem({ role, company, location, period, points }: TimelineItemProps) {
  return (
    <Card className="border-border/80 bg-card/85 backdrop-blur-sm">
      <CardHeader className="space-y-2 pb-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle className="text-xl">{role}</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              {company} | {location}
            </p>
          </div>
          <p className="rounded-full border border-border/70 bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {period}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
